<template>
  <div>
    <header>
        <nav>
            <img src="@/assets/logo.png" alt="" class="logo">
            <ul class="navs">
                <li v-for="item in names" :key="item"><a href="javascript:void(0);">{{item}}</a></li>
            </ul>
        </nav>
    </header>
  </div>
</template>

<script>
export default {
    data() {
        return {
            names: ['首页', '我的动态', '关于我们', '共创合作', '招才纳士']
        }
    }
}
</script>

<style>
header{
    border-bottom: 1px solid rgb(216, 13, 13);
    height: 80px;
}
nav{
    display: flex;
    justify-content: space-around;
    align-items: center;
    font-family: "system-ui",-apple-system, 'Helvetica',Arial, sans-serif;
    background: #f8f8fd;
    height: 80px;
}
.navs{
    /* 黑点消失 */
    list-style: none;
    display: flex;
}
.navs li{
    float: left;
    width: 150px;
    /* letter-spacing: 3px; */
    margin:0px 32px;
}
.navs li a{
    color: #ddd;
}
</style>