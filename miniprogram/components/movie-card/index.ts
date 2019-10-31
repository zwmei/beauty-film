Component({
  "options": {
    styleIsolation: "isolated"
  },
  "properties": {
    propSrc: {
      type: String,
      value: ''
    },
    propScore: {
      type: Number,
      value: ''
    },
    propName: {
      type: String,
      value: ''
    },
    propLabels: {
      type: Array,
      value: []
    }
  },
  "data": {

  },
  "methods": {

  },
  "lifetimes": {
    ready() {
      console.log(this.properties.propSrc);
    }
  }
})