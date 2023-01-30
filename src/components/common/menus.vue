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
    border-bottom: 1px solid #ddd;
    height: 80px;
}
nav{
    display: flex;
    justify-content: space-around;
    align-items: center;
    font-family: "system-ui",-apple-system, 'Helvetica',Arial, sans-serif;
    background: #fff;
    height: 80px;
}
.navs{
    /* 黑点消失 */
    list-style: none;
    display: flex;
}
.navs li{
    float: left;
    /* width: 150px; */
    /* letter-spacing: 3px; */
    margin:0px 32px !important;
    height: 80px;
    line-height: 80px;
    display: inline-block;
    cursor: pointer;
}
.navs li:hover{
    color: #4788ec;
    height: 80px;
    border-bottom: 1px solid #4788ec;
}
.navs li:hover a{
    color: #4788ec;
    height: 80px;
    /* border-bottom: 1px solid #4788ec; */
}
.navs li a{
    color: #333;
}
</style>