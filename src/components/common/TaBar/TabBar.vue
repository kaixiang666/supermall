<template>
  <div id="tab-bar">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'TabBar',
}
</script>

<style scoped>
  #tab-bar{
   display: flex;
   background-color: #f6f6f6;
   position:fixed;
   left: 0;
   right: 0;
   bottom: 0;
   box-shadow: 0 -1px 1px rgba(100, 100, 100, 0.1)
 }
 .tab-bar-item{
   flex: 1;
   text-align: center;
   height: 49px;
 }
 .tab-bar-item img{
   width: 24px;
   height: 24px;
 }
</style>