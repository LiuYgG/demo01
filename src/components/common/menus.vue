<template>
  <div>
    <header>
        <nav>
            <img src="@/assets/logo.png" alt="" class="logo">
            <ul class="navs">
                <a :href="item.url" v-for="item in subjects" :key="item.id"><li>{{item.names}}</li></a>
            </ul>
        </nav>
    </header>
  </div>
</template>

<script>
export default {
    data() {
        return {
            subjects: [
                {id: 0, names:'首页', url:'/'},
                {id: 1, names:'全部门店', url:'/store'},
                {id: 2, names:'我的动态', url:'/renews'},
                {id: 3, names:'关于我们', url:'/about'},
                {id: 4, names:'加盟合作', url:'/join'},
            ]
        }
    }
}
</script>

<style>
header{
    border-bottom: 1px solid #ddd;
    height: 80px;
    width: 100%;
    min-width: 1200px;
    z-index: 10;
    top: 0;
    right: 0;
    position: fixed;
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
    float: none;
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
.navs a{
    color: #333;
}
</style>