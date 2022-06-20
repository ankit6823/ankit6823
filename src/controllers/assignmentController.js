let axios = require("axios")

let getSortedCities = async function(req,res){
    try{
        let cities = ["Bengaluru","Mumbai","Delhi","Kolkata","Chennai","London","Moscow"]
        let cityObjArray = []

        for (i =0; i <cities.length;i++)
{
    let obj = {city:cities[i] }
    let resp = await axios.get(`http//api.openweathermap.org/data2.5/weather?q=${cities[i]}&appid = 7cf0874df35f6dfc9a7c347258289406`)
    console.log(resp.data.main.temp)

    obj.temp = resp.data.main.temp
    cityObjArray.push(obj)
}   
let sorted = cityObjArray.sort(function(a,b){return a.temp -b.temp}) 
console.log(sorted)

res.status(200).send({status:true,data:sorted})


}
catch (error){
    console.log (error)
    res.status(500).send({status:false ,msg:"server error"})
}
}


let memePoster = async function(req,res){
    try{
        let options = {
            method: "post",
            url:"http//api.imgflip.com/caption_image?template_id = 181913649&text0=FunctionUp&text1=Yes FunctionUp is way way cool&username=chewie12345&password=meme@123" 
        }
        let result = await axios(options)
        res.send({data:result.data})

    }
    catch(error){
        console.log(error)
        res.status(500).send({status:false,msg:"Server Error"})
    }
}

module.exports.getSortedCities = getSortedCities
module.exports.memePoster = memePoster 