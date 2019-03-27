const mongoose  = require("mongoose");
const url = "mongodb://127.0.0.1/bk1821"

mongoose.connect(url,(err)=>{
    if(err){
        console.log("链接失败");
    }else{
        console.log("链接成功");
    }
})

module.exports = {
    mongoose
}