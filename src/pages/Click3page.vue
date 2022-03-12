<template>
<div class="content">
  <div class="navigation">
    <transition name="na" appear>
      <div v-show="navigatorIsShow" class="navigation_content">
        <ul class="navigation_content_ul">
          <li @click="jump1">个人资料</li>
          <li @click="jump2">新建仓库</li>
          <li @click="jump3">查看仓库</li>
          <li @click="jump4">修改密码</li>
          <li @click="jump5">注销用户</li>
        </ul>
      </div>
    </transition>
    <div  class="navigation_button">
      <div class="navigation_button_content" @click="navigatorShowFun">
        <i v-show="!navigatorIsShow" class="el-icon-arrow-right"></i>
        <i v-show="navigatorIsShow" class="el-icon-arrow-left"></i>
      </div>
    </div>
  </div>
  <div class="content_body">
    <keep-alive><router-view></router-view></keep-alive>
  </div>
</div>
</template>

<script>
import axios from "axios";

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Click3page",
  data(){
    return{
      navigatorIsShow:true
    }
  },
  methods:{
    navigatorShowFun(){
      this.navigatorIsShow=!this.navigatorIsShow
    },
    jump1(){
      axios.get('http://127.0.0.1/info',{
        headers:{
          token:window.localStorage.getItem('access-admin')
        }
      }).then((response)=>{
        this.$store.state.Page1.show=response.data
      })
      this.$router.push({
        name:'Page1'
      })
    },
    jump2(){
      axios.get('http://127.0.0.1/wareHouse',{
        headers:{
          token:window.localStorage.getItem('access-admin')
        }
      }).then((response)=>{
        this.$store.state.Page2.show=response.data
      })
      this.$router.push({
        name:'Page2'
      })
    },
    jump3(){
      axios.get('http://127.0.0.1/viewWareHouse',{
        headers:{
          token:window.localStorage.getItem('access-admin')
        }
      }).then((response)=>{
        this.$store.state.Page3.show=response.data
      })
      this.$router.push({
        name:'Page3'
      })
    },
    jump4(){
      this.$router.push({
        name:'Page4'
      })
    },
    jump5(){
      this.$confirm('您确定要注销吗?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        window.localStorage.removeItem("access-admin");
        location.reload();
        this.$message({
          type: 'success',
          message: '注销成功！'
        });
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '取消注销！'
        });
      });
    }
  }
}
</script>

<style scoped>
.content{
  height: 700px;
}
.navigation{
  position: fixed;
  /*background-color: #320949;*/
  width: 200px;
  height: 600px;
  left: 30px;
}
.navigation_content{
  float: left;
  width: 170px;
  height: 100%;
  border-radius: 60px;
  box-shadow: 1px 1px 5px #cecece;
}
.navigation_button{
  float: left;
  width: 30px;
  height: 100%;
  font-size: 28px;
  transition: all 0.15s;
  cursor: pointer;
}
.navigation_button_content:hover{
  transform: translateY(1px) translateX(1px);
}
.navigation_button_content:active{
  outline: 1px solid #40a9ff;
}
.navigation_button_content{
  width: 30px;
  height: 30px;
  box-sizing: border-box;
  border-radius: 50%;
  border: 1px solid #cecece;
  margin: 260px 0;
  box-shadow: 1px 1px 5px #cecece;
}
.navigation_content_ul{
  margin: 30px 10px;
  font-size: 22px;
  -webkit-user-select:none;
  -moz-user-select:none;
  -ms-user-select:none;
  user-select:none;
  font-weight: 350;
}
.navigation_content_ul li{
  text-align: center;
  margin: 60px 10px;
  cursor: pointer;
  transition: all 0.15s;
}
.navigation_content_ul li:hover {
  color: #9f05ad;
}
.navigation_content_ul li:hover {
  transform: translateY(1px) translateX(1px);
}
.content_body{
  width: 1920px;
  height: 700px;
}
.na-enter,.na-leave-to{
  transform: translateX(-100%);
}
.na-enter-to,.na-leave{
  transform: translateX(0);
}
.na-enter-active,.na-leave-active{
  transition: 0.5s;
}
</style>