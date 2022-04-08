import Vue from "vue"
import Vuex from 'vuex'
Vue.use(Vuex)
export default new Vuex.Store({
    actions:{

    },
    mutations:{

    },
    state:{
        path:'http://127.0.0.1',
        Page1:{
            show:{
                account:'',
                password:'',
                name:'',
                permission:'',
                balance:'',
                available:'',
            },
        },
        Page2:{
            show:{
                available:'',
                capacity:'',
            },
            push:{
                name:'',
            }
        },
        Page3:{
            show:[]
        },
        Page3Context:{
            show:{
                name:'',
                count:'',
                available:'',
                remaining:''
            },
        }
    }
})