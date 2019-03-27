import Vue from "vue";
import Vuex from "vuex";
import {login} from "../apis/user.js";
import {goodsList,modifyGoods,GoodsDel} from "../apis/goods";
import {getCookie, setCookie} from "../utils/auth";
Vue.use(Vuex);


let state = {
    username:"zhao",
    password:"12345",
    user:"",
    token:""||getCookie(),
    goodsList:[]
}

let actions = {
    async handleLogin({commit,state},params){
      let obj = {
          username:state.username,
          password:state.password
      }
      let data = await login(obj);
      if(data.state){
         params.push("/home");
        commit("handleLogin",data.userName)
      }
     
    },
    async handleData({commit},params){
        let data = await goodsList(params);
       commit("handleData",data)
    },
    async handleModifyGoods({commit},params){
        let data = await modifyGoods(params);
       commit("handleData",data);
    },
    async handleDel({commit},params){
        
        let data = await GoodsDel(params);
        commit("handleData",data);
    }
};

let mutations = {
    handleChange(state,params){
        console.log(params)
        if(params.type == 1){
            state.username = params.event;
        }else{
            state.password = params.event;
        }
    },
    handleLogin(state,parasm){
        state.token = getCookie();
        state.user = parasm;
        setCookie("user",parasm)
        console.log(state);
    },
    handleData(state,params){
        state.goodsList = params;
    }
};

const store = new Vuex.Store({
    state,
    actions,
    mutations
})

export default store;