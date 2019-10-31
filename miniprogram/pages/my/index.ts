Page({
    data: {
        userInfo: {}
    },
    onLoad() {
        wx.getUserInfo({
            success: res => {
                this.setData!({ userInfo: res.userInfo })
            }
        })
    },
    goTo(e: { currentTarget: { dataset: { address: string } } }) {
        const targetPage = e.currentTarget.dataset.address;
        wx.navigateTo({ url: targetPage })
    }
})