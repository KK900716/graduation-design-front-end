<template>
<div class="content">
  <ul>
    <li>
      <div class="content_title">
        <span>查看仓库：</span>
        <input v-model.lazy.trim="screening" class="content_title_input" placeholder="请输入仓库名检索"/>
      </div>
      <div class="content_table">
        <table class="tableContent">
          <tr>
            <th>仓库名</th>
            <th>仓库容量</th>
            <th>已用容量</th>
            <th>剩余容量</th>
            <th>打开仓库</th>
            <th>删除仓库</th>
          </tr>
          <tr v-for="table in tables" :key="table.name">
            <td>{{table.name}}</td>
            <td>{{table.count}}</td>
            <td>{{table.available}}</td>
            <td>{{table.remaining}}</td>
            <td>
              <div class="content_one_button" @click="click1(table.name)">打开</div>
            </td>
            <td>
              <div class="content_one_button" @click="click2(table.name)">删除</div>
            </td>
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
      screening:'',
    }
  },
  methods:{
    click1(name){
      this.$router.push({
        name:'Page3WareHouse',
        params:{
          name:name
        }
      })
    },
    click2(name){
      axios.delete('http://127.0.0.1/delete?'+name,{
        headers:{
          token:window.localStorage.getItem('access-admin')
        }
      }).then((response)=>{
        if (response.data){

        }else {

        }
      })
    }
  },
  computed:{
    tables(){
      return this.$store.state.Page3.show.filter((item)=>{
        return !item.name.indexOf(this.screening)
      })
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
.content_title_input{
  height: 22px;
  line-height: 22px;
  font-size: 18px;
  width: 500px;
}
.content_one_button{
  -webkit-user-select:none;
  -moz-user-select:none;
  -ms-user-select:none;
  user-select:none;
  color: #ffffff;
  width: 100px;
  line-height: 30px;
  text-align: center;
  margin: 0 auto;
  background-color: #9f05ad;
  transition: all 0.15s;
  box-shadow: 1px 2px 2px #9f05ad;
}
.content_one_button:active{
  transform: translateX(1px) translateY(1px);
  box-shadow: 1px 1px 1px #9f05ad;
}

</style>