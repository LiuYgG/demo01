<template>
  <div>
        
    <!-- 导航 -->
    <menus></menus>
    <!-- 内容区域 -->
    <main>
      <el-carousel :interval="5000" arrow="never" height="550px">
        <el-carousel-item v-for="item in imagesbox" :key="item.id">
          <img v-bind:src="item.idView" class="image">
        </el-carousel-item>
      </el-carousel>

      <div class="main">
        <div class="summary">
          <img src="@/assets/images/summary.png" alt="" srcset="">
        </div>
      </div>
    </main>

    <footers>111</footers>
  </div>
</template>

<script>
import menus from '../common/menus.vue'
import footers from '../common/footers.vue'

export default {
  components: { menus, footers },
  data(){
    return{
      imagesbox:[
        {id:0, idView:require('@/assets/images/1.png')},
        {id:1, idView:require('@/assets/images/2.png')},
        {id:2, idView:require('@/assets/images/3.png')}
      ],
    }
  }
}
</script>

<style>

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n+1) {
  background-color: #d3dce6;
}
.main{
  width: 100%;
  min-width: 1200px;
}
.summary{
  width: 100%;
  min-width: 1200px;
}
.summary img{
  width: 100%;
  min-width: 1200px;
  position: relative;
  margin: 0px auto !important;
}
</style>