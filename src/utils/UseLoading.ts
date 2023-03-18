import { useLoadingBar } from 'naive-ui'


/*
Usage:
    const loading = new useLoadingBar()
    const start = () => {
        loading.start()
    }
*/
export default class LoadingBar {
    LoadingBar: any;
    constructor() {
        this.LoadingBar = useLoadingBar()
    }
    start() {
        this.LoadingBar.start()
    }
    stop() {
        this.LoadingBar.stop()
    }
}