export default {
    state: {
        todolist:[
            {
              name: '吃饭', 
              done: false,
              id: 1,
            },
            {
              name: '睡觉',
              done: false,
              id: 2,
            },
            {
              name: '打豆豆',
              done: false,
              id: 3,
            },
          ]
    },
    getters: {
    },
    mutations: {
       add(state,obj){
         state.todolist.push(obj)
       },
       delete(state,item){
        const index = state.todolist.indexOf(item)
        state.todolist.splice(index,1)
       }
    },
    actions: {
        asyncAddTodolist(context,obj){
            context.commit('add',obj)
        },
        asyncDeleteTodolist(context,item){
            context.commit('delete',item)
        }
    },
}