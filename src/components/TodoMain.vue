<template>
  <ul class="todo-list">
    <!-- completed: 完成的类名 -->
    <li class="completed" v-for="item in $store.state.Operation.todolist " :key='item.id' >
      <div class="view" >
        <input class="toggle" type="checkbox" />
        <label >{{item.name}}</label>
        <button class="destroy" @click="deletes(item)"></button>
      </div>
    </li>
  </ul>
  
</template>

<script>
export default {
  data(){
    return{
    }
  },
  computed:{
  
  },
  methods:{
    deletes(item){
      this.$store.dispatch('asyncDeleteTodolist',item)
    }

  }
}
</script>
