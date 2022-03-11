import VueRouter from 'vue-router'
import axios from "axios";
import IndexLogin from "@/pages/IndexLogin";
import Context from "@/pages/Context";

const router =new VueRouter({
    routes:[
        {
            name:'indexLogin',
            path:'/login',
            component:IndexLogin
        },
        {
            name: 'context',
            path: '/context',
            component: Context,
        }
    ]
})
router.beforeEach((to,from,next)=>{
//    to目标路由 from从哪里来 next放行
//    path路径
//    可以为路由加一个标识放在meta中（路由源信息）｛isAuth:false｝
    if (to.path.startsWith('/login')){
        window.localStorage.removeItem('access-admin')
        next()
    } else {
        if(window.localStorage.getItem('access-admin')==null){
            next({name:'indexLogin'})
        } else {
            axios({
                url:'http://127.0.0.1:80/checkToken',
                method:'get',
                headers:{
                    token:window.localStorage.getItem('access-admin')
                }
            }).then((response)=>{
                if(response.data!==true){
                    next({name:'indexLogin'})
                }
            }).catch(()=>{
                next({name:'indexLogin'})
            })
        }
    }
    next()
})
export default router