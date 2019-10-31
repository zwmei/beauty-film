Page({
    data: {
        userInfo: {}
    },
    onLoad() {
        console.log(wx);
        wx.getUserInfo({
            success: res => {
                console.log(res);
                this.setData!({ userInfo: res.userInfo })
            }
        })
    }
})