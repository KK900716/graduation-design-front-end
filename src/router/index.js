import VueRouter from 'vue-router'
import axios from "axios";
import IndexLogin from "../pages/IndexLogin";
import ContextIndex from "../pages/ContextIndex";
import home from "../pages/home";
import Click2page from "../pages/Click2page";
import Click4page from "../pages/Click4page";
import Click3page from "../pages/Click3page";
import Page1 from "../pages/Page1";
import Page2 from "../pages/Page2";
import Page3 from "../pages/Page3";
import Page3WareHouse from "../pages/Page3WareHouse";
import Page4 from "../pages/Page4";

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
            component: ContextIndex,
            children:[
                {
                    name:'home',
                    path:'home',
                    component:home
                },
                {
                    name:'click2',
                    path:'aboutUs',
                    component:Click2page
                },
                {
                    name:'click3',
                    path:'projectBusiness',
                    component:Click3page,
                    children:[
                        {
                            name:'Page1',
                            path:'data',
                            component:Page1
                        },
                        {
                            name:'Page2',
                            path:'newWareHouse',
                            component:Page2
                        },
                        {
                            name:'Page3',
                            path:'newWareHouse',
                            component:Page3
                        },
                        {
                            name:'Page3WareHouse',
                            path:'WareHouse/:name',
                            component:Page3WareHouse,
                            props:true
                        },
                        {
                            name:'Page4',
                            path:'updatePassword',
                            component:Page4
                        }
                    ]
                },
                {
                    name:'click4',
                    path:'contactUs',
                    component:Click4page
                }
            ]
        }
    ]
})
router.beforeEach((to,from,next)=>{
//    to???????????? from???????????? next??????
//    path??????
//    ????????????????????????????????????meta???????????????????????????isAuth:false???
    if (to.path.startsWith('/login')){
        window.localStorage.removeItem('access-admin')
        next()
    } else {
        if(window.localStorage.getItem('access-admin')==null){
            next({name:'indexLogin'})
        } else {
            axios({
                url:'http://127.0.0.1'+'/checkToken',
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