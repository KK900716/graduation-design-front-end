import Vue from "vue"
import Vuex from 'vuex'
Vue.use(Vuex)
export default new Vuex.Store({
    actions:{

    },
    mutations:{

    },
    state:{
        Page1:{
            show:{
                account:'',
                password:'',
                name:'',
                permission:'',
                balance:'',
                available:'',
            },
        }
    }
})