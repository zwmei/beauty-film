Component({
  options: {
    multipleSlots: true,
    styleIsolation: 'isolated'
  },
  properties: {
    /** 图片url*/
    propSrc: {
      type: String,
      value: ''
    },
    propB: {
      type: Number,
      value: 0
    }
  },
  data: {
    x: 10,
    y: 100
  },
  methods: {
    onClick() {
      wx.previewImage({
        current: this.data.propSrc,
        urls: [this.data.propSrc]
      })
    }
  },
  behaviors: [],
  externalClasses: [],
  lifetimes: {
    created() {
      console.log('created');
    },
    attached() {
      console.log('attached');
    },
    ready() {
      console.log('ready');
    },
    moved() {
      console.log('moved');
    },
    detached() {
      console.log('detached');
    },
    error() {
      console.log('error');
    }
  }
})
