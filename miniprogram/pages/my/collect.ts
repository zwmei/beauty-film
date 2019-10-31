var app = getApp()
Page({
    data: {
        currentTab: 0
    },
    // onLoad: function (options) {
    //     // 页面初始化 options为页面跳转所带来的参数

    // },
    //滑动切换
    swiperTab(e: { detail: { current: number } }) {
        this.setData!({
            currentTab: e.detail.current
        });
    },
    //点击切换
    clickTab(e: { target: { dataset: { current: number } } }) {
        if (this.data.currentTab === e.target.dataset.current) {
            return false;
        } else {
            this.setData!({
                currentTab: e.target.dataset.current
            })
        }
        return false
    }
})