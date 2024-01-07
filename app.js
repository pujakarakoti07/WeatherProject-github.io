const express=require("express");
const app=express();
const bodyParser=require("body-parser")
app.use(bodyParser.urlencoded({extended: true}));


app.get("/",function(req, res){
    res.sendFile(__dirname+"/index.html")
})

app.post("/", function(req, res){
    const city=req.body.city;
        const https=require("https");
        const url="https://api.openweathermap.org/data/2.5/weather?q="+city+"&appid=89e87ad2a89444b9be9d97b8d9856f00&units=metric";
        https.get(url,function(response){
            console.log(response.statusCode);
            response.on("data",function(data){
            const weatherData=JSON.parse(data)
            const temp=weatherData.main.temp;
            const weatherDescription= weatherData.weather[0].description;
            console.log(weatherDescription);
            const iconn=weatherData.weather[0].icon;
            const imageUrl="https://openweathermap.org/img/wn/"+iconn+"@2x.png";
            res.write("<h1>The weather is currently "+weatherDescription+"</h1>");
            res.write("<h2>The Temperature in "+city+ " is "+temp+" degree celsius. "+"</h2>");
            res.write("<img src="+ imageUrl +">");
            res.send()
    
        })
      })
    })
    
const https=require("https");


// app.get("/", function(req, res){
//     res.send("server is up and running.");
// })


app.listen(3000, function(){
     console.log("server is running on port 3000");
 })
