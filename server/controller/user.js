let modelUser = require("../model/user");
let jwt = require("jsonwebtoken");
const login = (req,res)=>{
    let {username,password} = req.body;
    console.log(username,password)
    modelUser.findUser({username,password},(data)=>{
        if(!data){
            res.json({
                state:false,
                info:"用户不存在"
            })
        }else{
            var key = "bk1821"
            var token = jwt.sign({ username}, key,{ expiresIn: '1h' });

            res.cookie("X-Token",token);

            res.json({
                state:true,
                info:"登陆成功",
                userName:username
            })
        }
    })

}

module.exports = {
    login
}