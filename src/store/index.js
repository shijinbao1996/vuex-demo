import Vue from 'vue'
import Vuex from 'vuex'

import ChangeColor from './modules/ChangeColor'
import Operation from './modules/Operation'

import createVuexPersisted from 'vuex-persistedstate'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  getters: {
  },
  mutations: {
  },
  actions: {

  },
  modules: {
    ChangeColor,
    Operation
  },
  plugins:[
    createVuexPersisted({
      reducer(val){
        // val 相当于state
        return{
         ChangeColor:val.ChangeColor,
         Operation:val.Operation
        }
      }
    })
  ]
})
