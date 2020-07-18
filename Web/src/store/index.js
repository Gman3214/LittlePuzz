import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    coverLeft: false,
    inventory: {
      s1: null,
      s2: null,
      s3: null
    }

  },
  mutations: {
    addToInventory(state, itemName){

      state.inventory.s1 = itemName;
      /*state.inventory.forEach(slot => {
        if(!slot){
          slot = itemName
          console.log('added')
          return;
        }

      });*/
    },

    changeCoverSide(state, coverleft){
      state.coverLeft = coverleft
    }

  },
  actions: {
  },
  modules: {
  }
})
