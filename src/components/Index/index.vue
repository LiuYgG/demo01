<template>
  <div>
        
    <!-- 导航 -->
    <menus></menus>
    <!-- 内容区域 -->
    <main>
      <el-carousel :interval="5000" arrow="never" height="500px">
        <el-carousel-item v-for="item in imagesbox" :key="item.id">
          <img v-bind:src="item.idView" class="image">
        </el-carousel-item>
      </el-carousel>
    </main>
  </div>
</template>

<script>
import menus from '../common/menus.vue'

export default {
  components: { menus },
  data(){
    return{
      imagesbox:[
        {id:0, idView:require('https://ncz-upload.oss-cn-shanghai.aliyuncs.com/2021/12/30/3bc00c8852924b19baf6aefc5a619467.png')},
        {id:1, idView:require('https://ncz-upload.oss-cn-shanghai.aliyuncs.com/2021/12/30/713065f92d024cd9825d5b4b48a34fa6.png')},
        {id:2, idView:require('https://ncz-upload.oss-cn-shanghai.aliyuncs.com/2021/12/30/6fd25cdfb3514b08936efb92252949f0.png')}
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
</style>