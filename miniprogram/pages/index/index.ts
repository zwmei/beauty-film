//index.js
//获取应用实例
import { IMyApp } from '../../app'

const imageUrl = 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1572415291852&di=47c3ee463a7e93815c1b0e6c9f993c2f&imgtype=0&src=http%3A%2F%2Fimg.mp.sohu.com%2Fupload%2F20170721%2F39d97272bc444db18b9b58ae793978aa_th.png';
const app = getApp<IMyApp>()

Page({
  data: {
    motto: new Date().getMonth() + '-' + new Date().getDate() + '-' +new Date().getDay(),
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    coverList: [
      imageUrl,
      'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1572416287354&di=dbd620a6449737e40a40db23257bc81f&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fforum%2Fw%3D580%2Fsign%3D4d5e01bdba389b5038ffe05ab534e5f1%2F8cca9b8fa0ec08fa2ab208045aee3d6d54fbda28.jpg',
      'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1572418396636&di=3b0ec109ce39249a5a4bb7aa1c434317&imgtype=0&src=http%3A%2F%2Fimg.zhichiwangluo.com%2Fzcimgdir%2Falbum%2Ffile_5aae72afb667a.jpg',
    ],
    movieList: [
      {
        src: imageUrl,
        score: 4.2,
        name: '血战湘江',
        labels: ['战争', '爱情']
      },
      {
        src: imageUrl,
        score: 4.2,
        name: '血战湘江',
        labels: ['战争', '爱情']
      }
    ]
  },
  //事件处理函数
  bindViewTap() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  clickMe() {
    this.setData!({motto: '哈哈哈哈'})
  },
  onLoad() {
    if (app.globalData.userInfo) {
      this.setData!({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true,
      })
    } else if (this.data.canIUse) {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = (res) => {
        this.setData!({
          userInfo: res,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData!({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  onClick(e: any) {
    console.log(e);
  }
})