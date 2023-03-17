<template>
    <div class="Z_TabBar">
        <div class="Z_TabBar_logo">
            <a href="">Lhistory <span>中文网</SPan></a>
        </div>
        <n-tabs type="line" class="Z_TabBar_Tabs" tab-style="padding:10px 10px;" justify-content="end" animated
            :on-update:value="tabChange">
            <n-tab v-for="tab in TabBarConfig" :key="tab.name" :name="tab.path">
                {{ tab.text }}
            </n-tab>
        </n-tabs>
    </div>
</template>

<script lang="ts" setup>
import { useRoute } from 'vue-router'
const TabBarConfig = [{
    name: "1",
    path: "/",
    text: "首页"
}, {
    name: "2",
    path: "/1",
    text: "星球"
}, {
    name: "3",
    path: "/2",
    text: "动态"
}]

const tabChange = (e: string) => {
    console.log(e);
}
const UseRoute = useRoute()

const GetDefaultValue = () => {
    const nowTab = TabBarConfig.filter((i) => i.path === UseRoute.matched[0].path)
    return nowTab[0].name
}
GetDefaultValue()
</script>

<style lang="scss" scoped>
.Z_TabBar {
    padding: 0 8px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    height: 40px;

    &_logo {
        line-height: 40px;
        min-width: 200px;

        a {
            color: #ccc;

            span {
                font-weight: 700;
            }
        }
    }
}
</style>