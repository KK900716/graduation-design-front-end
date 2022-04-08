<template>
  <div>
    <!--    加载登录页信息，采用编程式路由在mounted生命周期钩子中加载-->
    <router-view :loginMsg="loginMsg" :warning="warning"></router-view>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: 'App',
  data(){
    return{
      //登录页警告信息
      warning:{
        isShow:false,
        content:''
      }
    }
  },
  methods:{
    //处理登录信息
    loginMsg(userdata){
      this.isShow=false;
      //发送ajax请求验证用户信息
      axios.post(this.$store.state.path+'/login',{...userdata}).then(value=>{
        if(value.data.state==="404"){
          this.warning.isShow=true
          this.warning.content='用户名、密码错误或验证码超时、错误'
          setTimeout(()=>this.warning.isShow=false,5000)
        }else if(value.data.state==="200"){
          //将token存入localStorage
          window.localStorage.setItem('access-admin',value.data.token)
          //验证成功跳转路由
          this.$router.replace({
            name:'context'
          });
        }
      })
    }
  },
  mounted() {
    //挂载登录页
    this.$router.push({
      name:'context'
    })
  }
}
</script>

<style>

</style>
