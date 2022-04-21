const printDate=function(){
    let newdate=new Date()
    console.log(newdate)
}
const printMonth=function(){
    let newdate=new Date()
    console.log(newdate.getMonth()+1)
}
const getBatchInfo=function(){
    console.log("Uranium,3rd Week,Wednesday,the topic being taught today is Nodejs module system")
}

module.exports.printDate=printDate
module.exports.printMonth=printMonth
module.exports.getBatchInfo=getBatchInfo
