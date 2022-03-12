<template>
 <div class="body">
  <div class="top">
    <div class="top_left">
      <div class="top_left_context"><span class="top_left_context_first">水体</span>识别系统</div>
    </div>
    <div class="top_right">
      <ul class="top_right_ul">
        <li @click="click1">首页</li>
        <li @click="click2">关于我们</li>
        <li @click="click3">项目业务</li>
        <li @click="click4">联系我们</li>
        <li @click="click5">注销用户</li>
      </ul>
    </div>
  </div>
  <div class="content">
    <HomePage v-show="homeShow"></HomePage>
    <router-view></router-view>
  </div>
  <div class="foot">
    <div class="foot_content">
      <div class="foot_left">
        <ul class="foot_left_ul">
          <li @click="click1">首页</li>
          <li @click="click2">关于我们</li>
          <li @click="click3">项目业务</li>
          <li @click="click4">联系我们</li>
          <li @click="click5">注销用户</li>
        </ul>
      </div>
    </div>
    <div class="foot_explain">
      <ul class="foot_explain_ul">
        <li>邮箱：443808626@qq.com</li>
        <li>微信：q443808626</li>
        <li>电话：18094804869</li>
        <li>地址：石河子大学</li>
      </ul>
    </div>
  </div>
 </div>
</template>

<script>

import HomePage from "@/components/HomePage";

export default {
  name: 'ContextIndex',
  components:{
    HomePage
  },
  data(){
    return{
      homeShow:true
    }
  },
  methods:{
    click1(){
      this.$router.push({
        name:'home'
      })
      this.homeShow=true
    },
    click2(){
      this.homeShow=false

      this.$router.push({
        name:'click2'
      })
    },
    click3(){
      this.homeShow=false

      this.$router.push({
        name:'click3'
      })
    },
    click4(){
      this.homeShow=false
      this.$router.push({
        name:'click4'
      })
    },
    click5(){
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
.top{
  width: 1920px;
  height: 120px;
  position: relative;
  -webkit-user-select:none;
  -moz-user-select:none;
  -ms-user-select:none;
  user-select:none;
}
.top_left,.top_right{
  position: absolute;
}
.top_left{
  width: 760px;
  height: 100%;
}
.top_right{
  width: 1140px;
  height: 100%;
  left: 40%;
}
.top_right_ul>li:first-child {
  margin-left: 200px;
}
.top_right_ul>li{
  font-size: 24px;
  float: left;
  margin: 48px 50px;
  cursor: pointer;
  transition: all 0.15s;
}
.top_right_ul>li:hover{
  color: #9f05ad;
}
.top_right_ul>li:active{
  color: #9f05ad;
  transform: translateX(1px) translateY(1px);
}
.top_left_context{
  text-align: center;
  line-height: 40px;
  font-size: 20px;
  margin: 40px 0;
  font-weight: 700;
  letter-spacing: 8px;
}
.top_left_context_first{
  font-size: 40px;
  font-family: "MS UI Gothic",serif;
  color: #320949;
}
.content{
  width: 100%;
}
.foot{
  position: relative;
  top: -2px;
  height: 146px;
  background-color: #1b1b1b;
}
.foot_content{
  -webkit-user-select:none;
  -moz-user-select:none;
  -ms-user-select:none;
  user-select:none;
}
.foot_left{
  position: absolute;
  width: 1140px;
  height: 100%;
  left: 300px;
}
.foot_left_ul{
}
.foot_left_ul>li{
  font-size: 20px;
  float: left;
  margin: 48px 50px;
  cursor: pointer;
  transition: all 0.15s;
  color: #444444;
}
.foot_left_ul>li:hover{
  color: #9f05ad;
}
.foot_left_ul>li:active{
  color: #9f05ad;
  transform: translateX(1px) translateY(1px);
}
.foot_explain{
  position: absolute;
  left: 1200px;
  width: 650px;
  height: 100%;
  border-left: 1px solid #7c7c7c;
}
.foot_explain_ul{
  font-size: 18px;
  color: #320949;
}
.foot_explain_ul>li{
  text-align: left;
  float: right;
  width: 40%;
  line-height: 20px;
  padding: 20px 0;
}
.foot_explain_ul:hover li{
  color: #ffffff;
}
</style>