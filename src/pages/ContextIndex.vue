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
<!--    TODO 底部信息-->
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
          message: '注销成功!'
        });
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '取消注销'
        });
      });
    }
  }
}
</script>

<style scoped>
.top{
  width: 100%;
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
  height: 700px;
}
.foot{

}
</style>