<template>
  <div id="app">
    <mt-header style="background:#FFF;color:#000;font-size:18px">
      <router-link to="/" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
    </mt-header>
    <div class="outer">
        <span class="login">登录</span>
        <form action="" class="form">
            <input type="text" placeholder="请输入用户名" v-model="name"><br>
            <input type="password" placeholder="请输入密码"><br>
            <input type="submit" value="登录" class="submit" @click="login">
        </form>
        <div class="footer">
            <p>帮助反馈</p>
            <p>登录即代表您同意<a href="#">用户协议</a>和<a href="">隐私政策</a></p>
        </div>
    </div>
  </div>
</template>

<script>
import { Toast } from 'mint-ui';
export default {
    name: 'login',
    data(){
        return{
            msg: "hello",
            name:'',
            
        }
    },
    methods: {
        login(){
            Toast('登录成功');
            this.$router.push("/home");
        }
        
    },
}
</script>

<style>
@import '../../public/css/login.css';
input{
    margin-bottom: .2em;
}
</style>
