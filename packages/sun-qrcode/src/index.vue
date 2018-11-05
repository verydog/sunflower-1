<template>
  <div class="sun-qrcode">
    <canvas ref="myCanvas"></canvas>
  </div>
</template>

<script>
  import qrcode from 'qrcode'

  export default {
    name: "sun-qrcode",
    props: {
      width: {
        type: Number,
        default: 200
      },
      margin: {
        type: Number,
        default: 2
      },
      level: {
        type: String,
        default: 'M'
      },
      dark: {
        type: String,
        default: '#000000'
      },
      light: {
        type: String,
        default: '#ffffff'
      },
      text: {
        type: String,
        default: 'Hello world'
      }
    },
    mounted(){
      this.render()
    },
    methods: {
      render(){
        qrcode.toCanvas(this.$refs.myCanvas, this.text || 'Hello world', {
          width: this.width,
          margin: this.margin,
          errorCorrectionLevel: this.level,
          color: {
            dark: this.dark,
            light: this.light
          }
        }, function (error) {
          if (error) console.error(error)
        })
      }
    },

    watch: {
      text(){
        this.render()
      }
    }

  }
</script>

<style lang="scss">
  .sun-qrcode {
    display: inline-block;
  }
</style>