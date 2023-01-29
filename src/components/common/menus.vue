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

</style>