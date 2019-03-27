<template>
    <div class="header">
        <div class="logo">
            <img src="http://jx.1000phone.net/Public/assets/css/images/logo.png?1551405965"/>
        </div>
        <div class="username">
            <span>{{username}}</span>
            <span @click="handleLogout()">退出</span>
        </div>
    </div>
</template>

<script>
import {getCookie,removeCookie} from "../utils/auth";
export default {
    data(){
        return {
            username:getCookie("user")
        }
    },
    methods: {
        handleLogout(){
            removeCookie();
        }
    }
}
</script>

<style lang="">
    .header{
        height: 50px;
        width: 100%;
        background: #428bca;
        display: flex;
        justify-content: space-between;
        color: #fff;
    }
    .header>.username{
        font-size: 18px;
        margin-right: 20px;
        line-height: 50px;
    }
</style>