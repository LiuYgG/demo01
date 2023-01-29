<template>
  <div>
    <!-- 顶部 -->
    <el-header>
        
        <!-- 导航 -->
        <menus></menus>

    </el-header>

    <!-- 中间内容 -->
    <el-container>
        <el-main>
            <!-- banner图 -->
            <el-carousel indicator-position="outside">
                <el-carousel-item v-for="item in 4" :key="item">
                <h3>{{ item }}</h3>
                </el-carousel-item>
            </el-carousel>
        </el-main>
    </el-container>

  </div>
</template>

<script>
import menus from '../common/menus.vue'

export default {
  components: { menus },
}
</script>

<style>

/* banner */
 .el-carousel__item h3 {
    color: #475669;
    font-size: 18px;
    opacity: 0.75;
    line-height: 300px;
    margin: 0;
  }
  
  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }

</style>