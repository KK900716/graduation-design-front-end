<template>
<div class="content">
  <div class="left_fix_button">
    <div @click="fallback" class="left_fix_button_context">
      <i class="el-icon-refresh-left" />
      退出该仓库
    </div>
  </div>
  <div class="content_title">仓库：{{name}}</div>
  <div class="content_one">
    <ul class="content_one_ul">
      <li>
        <div class="content_one_title">仓库名称：</div>
        <input maxlength="50" v-model.lazy.trim="$store.state.Page3Context.show.name" class="content_one_input" placeholder="请输入仓库名称"/>
      </li>
      <li>
        <div class="content_one_title">仓库容量：</div>
        <input disabled maxlength="20" v-model="$store.state.Page3Context.show.count" class="content_one_input" placeholder="仓库容量"/>
      </li>
      <li>
        <div class="content_one_title">已用容量：</div>
        <input disabled maxlength="20" v-model="$store.state.Page3Context.show.available" class="content_one_input" placeholder="已用容量"/>
      </li>
      <li>
        <div class="content_one_title">剩余容量：</div>
        <input disabled maxlength="20" v-model="$store.state.Page3Context.show.remaining" class="content_one_input" placeholder="剩余容量"/>
      </li>
    </ul>
    <div class="content_one_button" @click="click1">重置</div>
    <div class="content_one_button" @click="click2">提交</div>
  </div>
  <div class="content_title">上传文件</div>
  <div class="content_two">
    <div class="content_two_upload">
      <el-upload
          :headers="headerMessage"
          :limit="listNumber"
          class="upload-demo"
          ref="upload"
          action="http://127.0.0.1/upload"
          :on-success="handlerSuccess"
          :on-error="handlerError"
          :on-exceed="handlerExceed"
          :file-list="fileList"
          :auto-upload="false">
        <el-button slot="trigger" size="small" type="primary">选取文件</el-button>
        <el-button style="margin-left: 10px;" size="small" type="success" @click="submitUpload">上传到服务器</el-button>
        <div slot="tip" class="el-upload__tip">请上传要处理的图片</div>
      </el-upload>
    </div>
  <div class="content_title">处理结果预览</div>
  </div>
</div>
</template>

<script>
import axios from "axios";

export default {
  name: "Page3WareHouse",
  props: ['name'],
  data() {
    return {
      headerMessage:{
        token:window.localStorage.getItem('access-admin')
      },
      fileList: [],
      listNumber:parseInt(this.$store.state.Page3Context.show.available)
    };
  },
  methods: {
    fallback(){
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
    click1(){
      this.$store.state.Page3Context.show.name=this.name
    },
    click2(){
      this.$confirm('您确定要更新仓库信息吗?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.flushName=this.$store.state.Page3Context.show.name
        axios.put('http://127.0.0.1/updateWHMessage',{
          oldWHName:this.name,
          newWHName:this.$store.state.Page3Context.show.name
        },{
          headers:{
            token:window.localStorage.getItem('access-admin')
          }
        }).then((response)=>{
          if (response.data){
            this.fallback()
            this.$message({
              type: 'success',
              message: '提交成功!'
            });
          }else {
            this.$message({
              type: 'warning',
              message: '提交失败,仓库名重复!'
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
    },
    submitUpload() {
      this.$message({
        type: 'info',
        message: '正在上传!'
      });
      this.$refs.upload.submit();
    },
    handlerSuccess(response, file, fileList){
      if (response){
        this.$message({
          type: 'success',
          message: '上传成功!'
        });
        axios.get('http://127.0.0.1/getWareHouse?name='+this.name,{
          headers:{
            token:window.localStorage.getItem('access-admin')
          }
        }).then((response)=>{
          this.$store.state.Page3Context.show=response.data
        })
      }else{
        this.$message({
          type: 'warning',
          message: '上传失败!'
        });
      }
    },
    handlerError(err, file, fileList){
      this.$message({
        type: 'warning',
        message: '上传失败!'
      });
    },
    handlerExceed(){
      this.$message({
        type: 'warning',
        message: '超出上传个数！'
      });
    }
  }
}
</script>

<style scoped>
.left_fix_button{
  position: fixed;
  right: 50px;
  top: 300px;
}
.left_fix_button_context{
  -webkit-user-select:none;
  -moz-user-select:none;
  -ms-user-select:none;
  user-select:none;
  color: #ffffff;
  width: 150px;
  height: 40px;
  line-height: 40px;
  text-align: center;
  background-color: #9f05ad;
  transition: all 0.15s;
  box-shadow: 1px 2px 2px #9f05ad;
  border-radius: 20px;
}
.left_fix_button_context:active{
  transform: translateX(1px) translateY(1px);
  box-shadow: 1px 1px 1px #9f05ad;
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
  height: 200px;
  width: 1500px;
}
.content_two{
  width: 1500px;
  padding: 30px 0;
}
.content_two_upload{
  border: #1b1b1b 1px solid;
  padding: 15px;
  width: 750px;
  margin: 0 auto;
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
.content_one li{
  font-size: 18px;
  float: left;
  width: 50%;
  height: 50px;
  margin: 15px 0;
}
</style>