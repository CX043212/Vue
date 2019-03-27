const mongoose = require("../utils/database").mongoose;

   const Bms = mongoose.model("bmClient",{
        username:String,
        password:String
    })



const findUser = (userInfo,cb)=>{
    Bms.findOne(userInfo).then((res)=>{
        cb(res)
    })
}

module.exports = {
    findUser,
    
}


