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
        <div class="server">
          <div class="server-title">
            <h3>告别传统养车 智慧养车</h3>
          </div>
          <div class="server-main">
            <div class="server-main-left">
              <div v-for="left in items" :key="left.id" class="left_title">{{ left.names }}</div>
            </div>
            <div class="server-main-right">
              <div v-for="content in lists" :key="content.id" class="right_content">
                <img v-bind:src="content.content" alt="">
              </div>
            </div>
          </div>
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
      items:[
        {id:0, names: '施工直播'},
        {id:1, names: '智能提醒'},
        {id:2, names: '精确匹配'}
      ],
      lists:[
        {id:0, content:require('@/assets/images/4.png')},
        {id:1, content:require('@/assets/images/5.png')},
        {id:2, content:require('@/assets/images/6.png')}
      ]
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
.server{
  width: 1200px;
  /* background: #99a9bf; */
  margin: 0px auto !important;
  display: block;
}
.server-title{
  width: 200px;
  padding: 10px !important;
  border: 1px solid #000;
}
.left_title{
  width: 300px;
  height: 150px;
  text-align: center;
  line-height: 150px;
  border: 1px solid #d3dce6;
}
.left_title:hover{
  background-color: red;
  cursor: pointer;
}
</style>