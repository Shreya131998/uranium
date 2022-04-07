const printDate=function(){
    const adddate=new Date()
    console.log(adddate)
}
const printMonth=function(){
    const adddate=new Date()
    console.log(adddate.getMonth()+1)
}
const getBatchInfo=function(){
    console.log("Uranium,3rd Week,Wednesday,the topic being taught today is Nodejs module system")
}

module.exports.printDate=printDate
module.exports.printMonth=printMonth
module.exports.getBatchInfo=getBatchInfo
