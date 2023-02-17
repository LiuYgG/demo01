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

      <div id="main_tabs">
          <div class="tab">
            <ul>
              <li 
                v-for="(tab, index) in tabs" 
                :key="index.id" 
                :class="{ active: activeTab === index }" 
                @click="activeTab = index"
              >
                <h5>{{ tab.name }}</h5>
                <p>{{ tab.desc }}</p>
              </li>
            </ul>
          </div>
          <div class="tab-content">
            <div v-for="(tab, index) in tabs" :key="index" :class="{ active: activeTab === index }">
              <img v-bind:src="tab.content" alt="">
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
      activeTab: 0,
      tabs: [
        { name: '施工直播', desc: '录像保持30天 如需维权不再难', content:require('@/assets/images/4.png') },
        { name: '智能提醒', desc: '不用死记硬背去养车', content:require('@/assets/images/5.png') },
        { name: '精准匹配', desc: '不用担心小病大修', content:require('@/assets/images/6.png') },
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

/* tabs */
#main_tabs{
  width: 100%;
  /* position: relative; */
  /* background-color: #333; */
  margin: 5px auto !important;
  /* color: aliceblue; */
}
.tab{
  float: left;
  width: 400px;
  height: auto;
  /* border:1px solid red; */
  margin-left: 350px !important;
  margin-right: 5px !important;
}
.tab{
  padding: 8px 16px !important;
  cursor: pointer;
}
.tab ul {
  /* display: flex; */
  list-style: none;
  padding: 0 !important;
  margin: 0 !important;
}
.tab li{
  padding: 10px;
  margin-right: 10px;
  /* height: 165px; */
  cursor: pointer;
  line-height: 165px;
  text-align: center;
}
.tab li:hover{
  background-color: #3acfe7;
  transition: backgroun-color 0.2s ease-in-out;
  border-top-right-radius: 127px;
  border-bottom-right-radius: 127px;
  /* display: inline-block; */
}
.tab li.active{
  background-color: #3acfe7;
  border-bottom: 1px solid #fff;
  border-top-right-radius: 127px;
  border-bottom-right-radius: 127px;
}
.tab li h5 {
  float: left;
  margin-left: 10px !important;
  font-size: 25px;
  width: 100px;
  height: 165px;
}
.tab li p{
  /* background-color: aqua; */
  /* float: right; */
  display: flex;
  height: 165px;
  position: relative;
  left: 40px;
}
.tab-content{
  /* border: 1px solid darkblue; */
  width: 800px;
  height: 300px;
  float: left;
}
.tab-content div {
  display: none;
  /* padding: 20px; */
  /* border: 1px solid #ccc; */
}

.tab-content div.active {
  display: block;
}
.tab-content img{
  width: 100%;
  height: auto;
}

</style>