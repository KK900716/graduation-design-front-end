<template>
<div class="content">
  <ul>
    <li>
      <div class="content_title">新建仓库</div>
      <div class="content_one">
        <ul>
          <li>
            <div class="content_one_title">可建仓库数量：</div>
            <input  disabled v-model="$store.state.Page2.show.available" class="content_one_input" placeholder="可建仓库数量"/>
          </li>
          <li>
            <div class="content_one_title">新建仓库名：</div>
            <input maxlength="50" v-model.lazy.trim="$store.state.Page2.push.name" class="content_one_input" placeholder="请输入仓库名"/>
          </li>
          <li>
            <div class="content_one_title">仓库总量（已创建+未创建）：</div>
            <input disabled  v-model="$store.state.Page2.show.capacity" class="content_one_input" placeholder="仓库容量"/>
          </li>
          <li></li>
        </ul>
        <div class="content_one_button" @click="click1">重置</div>
        <div class="content_one_button" @click="click2">新建</div>
      </div>
    </li>
  </ul>
</div>
</template>

<script>
import axios from "axios";

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Page2",
  data(){
    return{

    }
  },
  methods:{
    click1(){
      this.$confirm('您确定重置信息?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.$store.state.Page2.push.name=''
        this.$message({
          type: 'success',
          message: '重置成功!'
        });
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '取消重置！'
        });
      });
    },
    click2(){
      this.$confirm('您确定要新建仓库吗?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        axios.post(this.$store.state.path+'/newWareHouse',this.$store.state.Page2.push,{
          headers:{
            token:window.localStorage.getItem('access-admin')
          }
        }).then((response)=>{
          if (response.data===true){
            this.$store.state.Page2.show.available--
            this.$message({
              type: 'success',
              message: '新建成功!'
            });
          }else {
            this.$message({
              type: 'warning',
              message: '新建失败!'
            });
          }
        })
        this.$message({
          type: 'success',
          message: '正在提交!'
        });
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '取消提交！'
        });
      });
    }
  }
}
</script>

<style scoped>
.content{
  height: 650px;
  padding-left: 300px;
  overflow-y: auto;
}
.content{
  height: 650px;
  padding-left: 300px;
  overflow-y: auto;
}
.content_title{
  font-size: 20px;
  width: 1500px;
  border-bottom: 2px  #9f05ad  solid;
  padding: 20px 0 5px;
  line-height: 20px;
}
.content_one{
  height: 300px;
}
.content_one li{
  font-size: 18px;
  float: left;
  width: 50%;
  height: 50px;
  margin: 15px 0;

}
.content_one_title{
  margin: 0 0 5px 0;
}
.content_one_input{
  height: 25px;
  width: 500px;
  font-size: 18px;
}
.content_one_button{
  -webkit-user-select:none;
  -moz-user-select:none;
  -ms-user-select:none;
  user-select:none;
  float: left;
  color: #ffffff;
  width: 200px;
  height: 30px;
  line-height: 30px;
  text-align: center;
  margin: 10px 250px 0;
  background-color: #9f05ad;
  transition: all 0.15s;
  box-shadow: 1px 2px 2px #9f05ad;
}
.content_one_button:active{
  transform: translateX(1px) translateY(1px);
  box-shadow: 1px 1px 1px #9f05ad;
}
</style>