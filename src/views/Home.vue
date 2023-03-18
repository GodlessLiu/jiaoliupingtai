<template>
    <div class="app">
        <TabBar></TabBar>
        <RouterView class="main"></RouterView>
        <Footer>
        </Footer>
    </div>
</template>

<script lang="ts" setup>
import TabBar from '../components/TabBar.vue';
import Footer from '../components/Footer.vue'

</script>

<style lang="scss" scoped>
.app {
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;

    .main {
        flex: 1;
    }
}
</style>