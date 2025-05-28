import express from "express";
import bodyParser from "body-parser";
import axios from "axios";


const app=express();
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));
const key='9bae96c99dddc563508fd102488efbeb'


app.get("/",(req,res)=>{
    res.render("index.ejs");
})


app.post("/",async(req,res)=>{
    const loca=req.body.loc;
    
    try{
    const response=await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${loca}&appid=${key}&units=metric`);
    console.log(response.data);
    const result=response.data;
    const city=result.name;
    const ico=`http://openweathermap.org/img/wn/${result.weather[0].icon}@2x.png`;
    const wea=result.weather[0]?.main;
    const desc=result.weather[0]?.description;
    const temp=result.main.temp;

    const min=result.main.temp_min;
    const max=result.main.temp_max;
    
    
    res.render("index.ejs",{exists:true,city:city,icon:ico,weather:wea,desc:desc,temp:temp,min:min,max:max})




    
    }catch(error){
        res.render("index.ejs",{exists:false,error:"city not found.."})
    }
})

app.listen(3000,()=>{console.log("listnening on port 3000")});