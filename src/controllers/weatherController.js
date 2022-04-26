const axios=require("axios")
const getWeatherOfLondon=async function(req,res){
    try{
    let country=req.query.q 
    let appid=req.query.appid
    let options={
        method:"get",
        url:`http://api.openweathermap.org/data/2.5/weather?q=${country}&appid=${appid}`
    }
    const result=await axios(options)
    let data=result.data 
    let {temp}=data.main
    
    res.status(200).send({msg:temp})
}
catch(err){
    res.status(500).send({msg:err.message})
}

}

const getTemp=async function(req,res){
    let arr=["Bengaluru","Mumbai", "Delhi", "Kolkata", "Chennai", "London", "Moscow"]
    let newArr=[]
    let appid=req.query.appid
    for(let i=0; i<arr.length;i++){
        let options={
            method:"get",
            url:`http://api.openweathermap.org/data/2.5/weather?q=${arr[i]}&appid=${appid}`
        
        }
        let result=await axios(options)
        let {temp}=result.data.main
        let result1={city:arr[i],temp:temp}
        
        newArr.push(result1)

    }
    newArr.sort(function(a,b){
        return a.temp-b.temp
    })
    res.send(newArr)
}
module.exports.getWeatherOfLondon=getWeatherOfLondon
module.exports.getTemp=getTemp