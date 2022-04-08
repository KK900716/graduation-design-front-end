<template>
<div class="content">
  <ul>
    <li>
      <div class="content_title">个人资料</div>
      <div class="content_one">
        <ul>
          <li>
            <div class="content_one_title">用户姓名：</div>
            <input maxlength="20" v-model="$store.state.Page1.show.name" class="content_one_input" placeholder="请输入姓名"/>
          </li>
          <li>
            <div class="content_one_title">用户邮箱（登录名）：</div>
            <input maxlength="50" v-model="$store.state.Page1.show.account" class="content_one_input" placeholder="请输入用户名"/>
          </li>
          <li>
            <div class="content_one_title password">用户密码：</div>
            <div @click="change" class="content_one_title password2" >显示\隐藏密码</div>
            <input :type="passwordType"  v-model="$store.state.Page1.show.password" disabled class="content_one_input password3" placeholder="密码"/>
          </li>
          <li>
            <div class="content_one_title">用户权限：</div>
            <input v-model="$store.state.Page1.show.permission" disabled class="content_one_input" placeholder="权限"/>
          </li>
          <li>
            <div class="content_one_title">用户余额：</div>
            <input v-model="$store.state.Page1.show.balance" disabled class="content_one_input" placeholder="余额"/>
          </li>
          <li>
            <div class="content_one_title">可建仓库数量</div>
            <input v-model="$store.state.Page1.show.available" disabled class="content_one_input" placeholder="可建仓库数量"/>
          </li>
        </ul>
        <div class="content_one_button" @click="click1">刷新</div>
        <div class="content_one_button" @click="click2">提交</div>
      </div>
    </li>
    <li>
      <div class="content_title">用户余额使用规则</div>
      <div class="content_two">
        <div class="paragraph">
          每个新创建的用户拥有1元的试用费用。
        </div>
        <div class="paragraph">
          每新建一个仓库则需要扣除1元费用，仓库上传的图片无法删除，故上传图像到仓库时要格外谨慎，待仓库容量满且仓库个数达到上限时，您可以选择将整个仓库删除，来增加空间，当然后续我们也会推出更多的付费项目来提高用户仓库的数量和使用体验。
        </div>
      </div>
    </li>
    <li>
      <div class="content_title">账户充值</div>
      <div class="content_three">
        <div class="paragraph">
          系统试运行期间，目前没有开通充值通道。
        </div>
      </div>
    </li>
  </ul>
</div>
</template>

<script>
import axios from "axios";

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Page1",
  data(){
    return{
      passwordType:'password'
    }
  },
  methods:{
    change(){
      if ('password'===this.passwordType){
        this.passwordType='text'
        setTimeout(()=>{
          this.passwordType='password'
        },5000)
      }else{
        this.passwordType='password'
      }
    },
    click1(){
      this.$message({
        type: 'info',
        message: '刷新中!'
      });
      axios.get(this.$store.state.path+'/info',{
        headers:{
          token:window.localStorage.getItem('access-admin')
        }
      }).then((response)=>{
        this.$store.state.Page1.show=response.data
      })
    },
    click2(){
      this.$confirm('您确定要更新个人信息吗?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        axios.put(this.$store.state.path+'/updateInfo',this.$store.state.Page1.show,{
          headers:{
            token:window.localStorage.getItem('access-admin')
          }
        }).then((response)=>{
            if (response.data.state===true){
              window.localStorage.removeItem('access-admin')
              window.localStorage.setItem('access-admin',response.data.token)
              this.$message({
                type: 'success',
                message: '提交成功!'
              });
            }else {
              this.$message({
                type: 'warning',
                message: '提交失败,用户名重复!'
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
.paragraph{
  word-break: break-all;
  line-height: 30px;
  font-size: 18px;
  text-indent: 2em;
  color: rgba(119, 119, 119, 0.72);
}
.content_two,.content_three{
  width: 1500px;
}
.password{
  float: left;
}
.password2{
  float: left;
  box-sizing: border-box;
  -webkit-user-select:none;
  -moz-user-select:none;
  -ms-user-select:none;
  user-select:none;
  color: #ffffff;
  background-color: #9f05ad;
  transition: all 0.15s;
  box-shadow: 1px 1px 1px #9f05ad;
}
.password2:active{
  transform: translateX(1px) translateY(1px);
}
.password3{
  display: block;
  clear: left;
}
</style>