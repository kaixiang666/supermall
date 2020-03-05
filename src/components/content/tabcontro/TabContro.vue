<template>
  <div class="tabcontro">
    <div v-for="(item,index) in tabcontro" 
         class="tabcontro-item" 
         :class="{active: index === nowindex}">
      <span @click="btnClick(index)">{{item}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name:'TabContro',
  props:{
    tabcontro:{
      type:Array,
      default() {
        return []
      }
    }
  },
  data() {
    return {
      nowindex:0
    }
  },
  methods:{
    btnClick(index) {
      this.nowindex = index
    }
  }
     
  

}
</script>

<style scoped>
  .tabcontro{
    display: flex;
    text-align: center;
    height: 40px;
    line-height: 40px;
    z-index: 10;
  }
  .tabcontro-item{
    flex: 1;
  }
  .active{
    color: var(--color-high-text);
  }
  .active span{
    border-bottom: 2px solid var(--color-tint);
    padding: 5px;
  }
</style>