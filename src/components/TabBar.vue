<template>
    <div class="Z_TabBar">
        <div class="Z_TabBar_logo">
            <a href="">Lhistory <span>中文网</SPan></a>
        </div>
        <n-tabs type="line" class="Z_TabBar_Tabs" :default-value="nowTab" tab-style="padding:10px 10px;"
            justify-content="end" animated :on-update:value="tabChange">
            <n-tab v-for="tab in TabBarConfig" :key="tab.name" :name="tab.path">
                {{ tab.text }}
            </n-tab>
        </n-tabs>
    </div>
</template>

<script lang="ts" setup>
import { useRoute, useRouter } from 'vue-router'
import { TabBarConfig } from '../config'


const UseRoute = useRoute()
const UseRouter = useRouter()
const tabChange = (e: string) => {
    UseRouter.push(e)
}

const GetDefaultValue = () => {
    const nowTab = TabBarConfig.filter((i) => i.path === UseRoute.matched[UseRoute.matched.length - 1].path)
    return nowTab[0].path
}
const nowTab = ref(GetDefaultValue())
</script>

<style lang="scss" scoped>
.Z_TabBar {
    padding: 0 8px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    height: 40px;
    border-bottom: solid 1px #ccc;

    &_logo {
        line-height: 40px;
        min-width: 200px;

        a {
            color: #8f8888;

            span {
                font-weight: 700;
            }
        }
    }
}
</style>