<template>
  <div>
   <button class="main oneButton--normal" v-if="type=='main'">主要按钮</button>
   <button class="info oneButton--normal" v-if="type=='info'">信息按钮</button>
   <button class="defaults oneButton--normal" v-if="type=='defaults'">默认按钮</button>
   <button class="danger oneButton--normal" v-if="type=='danger'">危险按钮</button>
   <button class="alert oneButton--normal" v-if="type=='alert'">警告按钮</button>
  </div>
</template>

<script>
export default {
  data () {
    return {
     
    }
  },

  created () {
    console.log(this.type);
  },

  methods: {

  },
  props:{
    type:{
        type:String,
    }
  }
}
</script>

<style scoped >
.oneButton--normal{
        padding: 0 15px;
        font-size: 14px;
        height: 44px;
        line-height: 1.2;
        border-radius: 2px;
        cursor: pointer;
}
.main{
    color: #fff;
    background: #07c160;
        border: 1px solid #07c160;
}
.info{
    color: #fff;
    background: #1989fa;
        border: 1px solid #1989fa;
}
.defaults{
    color: #333;
    background: #fff;
        border: 1px solid #fff;
}
.danger{
    color: #fff;
    background: #ee0a24;
        border: 1px solid #ee0a24;
}
.alert{
    color: #fff;
    background: #ff976a;
        border: 1px solid #ff976a;
}
</style>
