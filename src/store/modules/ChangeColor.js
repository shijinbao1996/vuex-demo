export default {
    namespaced: true,
    state: {
      color:[]
    },
    getters: {
    },
    mutations: {
        addColor(state,c){
          state.color.unshift(c)
        }
    },
    actions: {
        randomColorActions (context,str) {
          console.log(context);
          context.commit('addColor',str)
          console.log(context.state.color);
        }
    },
}