<template>
  <div class="login">
    <div class="container">
      <div class="logo">
        <img src="https://cas.1000phone.net/cas/images/login/logo.png">
      </div>
      <el-form>
        <el-form-item label="用户名">
          <el-input 
            :value="username" 
            placeholder="请输入用户名"
            @input="handleChange({type:1,event:$event})"
            ></el-input>
        </el-form-item>

        <el-form-item label="密码">
          <el-input 
            :value="password" 
            placeholder="请输入密码"
             @input="handleChange({type:2,event:$event})"
            ></el-input>
        </el-form-item>

        <el-form-item>
          <el-button type="primary" size="medium" class="btn" @click="handleBtn()">立即登陆</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import Vuex from "vuex";
export default {
  computed:{
    ...Vuex.mapState({
      username:state=>state.username,
      password:state=>state.password
    })
  },
  methods:{
    ...Vuex.mapMutations({
      handleChange:"handleChange"
    }),
    ...Vuex.mapActions({
      handleLogin:"handleLogin"
    }),
    handleBtn(){
      this.handleLogin(this.$router);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.login {
  width: 100%;
  height: 100%;
  background-image: url("../../static/bg.png");
  display: flex;
  justify-content: center;
  align-items: center;
}

.container{
  width: 420px;
  background: #fff;
  padding: 20px;
  border-radius: 10px;
}
.logo{
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 30px 0;
}
.el-form-item__content>.btn{
  width: 100%;
}
</style>
