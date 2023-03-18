<template>
    <n-config-provider :theme="Theme">
        <n-layout style="height: 100vh;">
            <span class="changeTheme" @click="changeColor">
                {{ text }}
            </sPan>
            <router-view></router-view>
        </n-layout>
    </n-config-provider>
</template>

<script lang="ts" setup>
import { darkTheme, lightTheme, type GlobalTheme } from 'naive-ui'

const Theme = ref<GlobalTheme>(lightTheme)
const text = ref<string>("ye")
const changeColor = () => {
    if (Theme.value.name === "light") {
        Theme.value = darkTheme
        text.value = "ri"
    } else if (Theme.value.name === "dark") {
        Theme.value = lightTheme
        text.value = "ye"
    }

}

</script>

<style lang="scss">
@import "./styles/reset.scss";
@import './styles/hideui.scss';

.changeTheme {
    position: absolute;
    right: 4vw;
    bottom: 8vh;
    box-shadow: rgba(131, 125, 125, 0.8) 0px 2px 8px 0px;
    border-radius: 50%;
    cursor: pointer;
    width: 44px;
    height: 44px;
    line-height: 44px;
    text-align: center;
}
</style>