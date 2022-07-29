<template>
  <header class="header">
    <h1 :style="{color:$store.state.ChangeColor.color[0]}">todos</h1>
    <input id="toggle-all" class="toggle-all" type="checkbox" >
    <label for="toggle-all"></label>
    <input
      class="new-todo"
      placeholder="输入任务名称-回车确认"
      autofocus
      @keyup.enter="add"
      v-model="value"
    />
  </header>
</template>

<script>
export default {
  data(){
    return{
      value:''
    }
  },
   methods:{
    add(){
      if(this.value.trim() !==0){
         const id=  this.$store.state.Operation.todolist.length+1
         const obj = {name:this.value,done:false,id} 
         console.log(obj);
         this.$store.dispatch('asyncAddTodolist',obj )
      }
    }
   }
}
</script>
