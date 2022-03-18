<template>
  <div class="content">
    <div class="content_title">修改密码</div>
    <div class="content_one">
      <ul>
        <li>
          <div class="content_one_title">请输入旧密码：</div>
          <input maxlength="20" v-model.lazy.trim="oldPassword" class="content_one_input" placeholder="请输入密码"/>
        </li>
        <li>
          <div class="content_one_title">请输入新密码：</div>
          <input maxlength="20" v-model.lazy.trim="newPassword" class="content_one_input" placeholder="请输入新密码"/>
        </li>
        <li>
          <div class="content_one_title">请输入再次输入新密码：</div>
          <input maxlength="20" v-model.lazy.trim="repeatPassword" class="content_one_input" placeholder="请输入新密码"/>
        </li>
        <li></li>
      </ul>
      <div class="content_one_explain">您输入的密码请不要超过20位，密码长度至少为6位，初始密码为123456。</div>
      <div class="content_one_button" @click="click1">重置</div>
      <div class="content_one_button" @click="click2">提交</div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Page4",
  data(){
    return{
      oldPassword:'',
      newPassword:'',
      repeatPassword:'',
    }
  },
  methods:{
    click1(){
      this.oldPassword=''
      this.newPassword=''
      this.repeatPassword=''
    },
    click2(){
      if (this.newPassword!==this.repeatPassword){
        this.$message({
          type: 'warning',
          message: '您两次输入的密码不同，请重新输入！'
        });
      }else if (this.oldPassword.length<6||this.newPassword<6||this.repeatPassword<6){
        this.$message({
          type: 'warning',
          message: '密码长度不够6位，请重新输入！'
        });
      }else {
        this.$confirm('您确定要修改密码?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          axios.post('http://127.0.0.1/updatePassword',{
            oldPassword:this.oldPassword,
            newPassword:this.newPassword
          },{
            headers:{
              token:window.localStorage.getItem('access-admin')
            }
          }).then((response)=>{
            if (response.data===true){
              this.$message({
                type: 'success',
                message: '修改成功，5s后将跳转到登录页，请使用新密码重新登录!'
              });
              window.setTimeout(()=>{
                window.localStorage.removeItem('access-admin')
                location.reload();
              },5000)
            }else {
              this.$message({
                type: 'warning',
                message: '修改失败!'
              });
            }
          })
          this.$message({
            type: 'warning',
            message: '正在修改!'
          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '取消修改！'
          });
        });
      }
    }
  }
}
</script>

<style scoped>
.content{
  height: 650px;
  padding-left: 300px;
  overflow-y: auto;
  width: 1500px;
}
.content_title{
  font-size: 20px;
  width: 1500px;
  border-bottom: 2px  #9f05ad  solid;
  padding: 20px 0 5px;
  line-height: 20px;
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
.content_one_explain{
  word-break: break-all;
  line-height: 30px;
  font-size: 18px;
  text-indent: 2em;
  color: rgba(119, 119, 119, 0.72);
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