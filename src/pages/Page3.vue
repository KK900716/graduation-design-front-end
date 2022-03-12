<template>
<div class="content">
  <ul>
    <li>
      <div class="content_title">查看仓库</div>
      <div class="content_table">
        <table class="tableContent">
          <tr>
            <th>学号</th>
            <th>班级</th>
            <th>姓名</th>
            <th>学年</th>
            <th>学期</th>
            <th>审核状态</th>
            <th>德育素质</th>
            <th>智育素质</th>
            <th>体育素质</th>
            <th>美育素质</th>
            <th>总成绩</th>
            <th>排名</th>
          </tr>
          <tr v-for="table in data" :key="table.userStudentId+table.schoolYear+table.semester">
            <td>{{table.userStudentId}}</td>
            <td>{{table.className}}</td>
            <td>{{table.schoolYear}}</td>
            <td>{{table.semester}}</td>
            <td>{{table.userName}}</td>
            <td>{{table.approved}}</td>
            <td>{{table.moralityGrade}}</td>
            <td>{{table.intellectionGrade}}</td>
            <td>{{table.sportGrade}}</td>
            <td>{{table.artGrade}}</td>
            <td>{{table.totalScore}}</td>
            <td>{{table.classRank}}</td>
          </tr>
        </table>
      </div>
    </li>
  </ul>
</div>
</template>

<script>
import axios from "axios";

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Page3",
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
        axios.put('http://127.0.0.1/newWareHouse',{
          data:this.$store.state.Page2.push
        },{
          headers:{
            token:window.localStorage.getItem('access-admin')
          }
        }).then((response)=>{
          if (response.data===true){
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
.content_table{
  width: 1500px;
  height: 600px;
}
.tableContent th,td{
  border-bottom: 1px solid #ddd;
  height: 40px;
  line-height: 40px;
}
.tableContent tr:hover{
  background-color: #f5f5f5
}
.tableContent{
  border: 1px solid #ddd;
  text-align: center;
  width: 100%;
}
.table{
  height: 380px;
  margin-bottom: 20px;
  overflow-y: auto;
}
</style>