<template>
  <div>
    <el-menu :defalut-active="activeIndex" class="el-menu" mode="horizontal" @select="handleSelect">


        <el-menu-item v-for="item in array " :key="item">
            <a href="JavaScript:void(0);">{{item}}</a>
        </el-menu-item>

    </el-menu>
  </div>
</template>

<script>
export default {
    data() {
        return {
            activeIndex: '1',
            array: ['首页', '项目内容', '合作加盟', '招才纳士']
        }
    }
}
</script>

<style>

.el-menu{
    border-bottom: none !important;  
    float: right;
    
}
.el-menu-item a{
    text-decoration: none;
    color: #000 !important;
}
</style>