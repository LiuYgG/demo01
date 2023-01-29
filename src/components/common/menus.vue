<template>
  <div>
    <div id="header">
        <div class="menus">
            <div class="logo"><img src="@/assets/logo.png"></div>
            <div class="navs">
                <ul class="nav-bar">
                    <li class="nav-bar-items" v-for="items in names" :key="items"><a href="javascript:void(0);">{{items}}</a></li>
                </ul>
            </div>
        </div>
    </div>
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
#header{
    /* background-color: blue; */
    width: 100%;
    height: 100px;
    /* margin: 0px 100px; */
    position: fixed;
    top: 0;
    left: 0;
    z-index: 10;
    border-bottom: 1px solid #ccc;
}
.logo, .navs{
    float: left;
    position: relative;
    top: 20px;
    text-align: center;
}
.logo{
    width: 134px;
    height: 70px;
    line-height: 70px;
    background-color: aqua;
    margin-left: 200px;
}
.navs{
    width: 900px;
    height: 70px;
    background-color: aqua;
}
.navs .nav-bar{
    float: right;
    list-style: none;
    background-color: aquamarine;
    line-height: 70px;
    position: relative;
    top: -16px;
}
.navs .nav-bar .nav-bar-items{
    /* color: #fff; */
    float: left;
    width: 80px;
    margin: 0px 25px;
    background-color: blanchedalmond;
}
.navs .nav-bar .nav-bar-items a{
    color: #ccc;
    text-decoration: none;
}
</style>