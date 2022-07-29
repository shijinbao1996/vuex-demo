<template>
  <div>
    <button @click="changeColor">换肤</button>
    <div class="todoapp">
      <todo-header></todo-header>
      <todo-main></todo-main>
      <todo-footer></todo-footer>
    </div>
    <oneButton :type='"defaults"'></oneButton>
  </div>
</template>

<script>
import TodoFooter from './components/TodoFooter.vue' // shift + alt + 下
import TodoHeader from './components/TodoHeader.vue' // shift + alt + 下
import TodoMain from './components/TodoMain.vue' // shift + alt + 下
import {mapActions} from 'vuex'
import oneButton from '@/Button'
export default {
  data() {
    return {
         arr :
         [
        "0",
        "1",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9",
        "A",
        "B",
        "C",
        "D",
        "E",
        "F",
      ] 
    }
  },

  components: {
    TodoFooter,
    TodoHeader,
    TodoMain,
    oneButton
  },

  created() {},

  methods: { 
    changeColor(){
      function getRandom(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
      }
   
      let str = "#";
      for (let i = 0; i < 6; i++) {
        str += this.arr[getRandom(0, this.arr.length - 1)];
      }
      // console.log(str); 
      // this.$store.dispatch('ChangeColor/randomColorActions',str)
      this.randomColorActions(str)
    },
    ...mapActions('ChangeColor',['randomColorActions'])
  }
}
</script>

<style scoped></style>
