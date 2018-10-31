<template>
  <div>


    <sun-markdown
    :mark="`
    # 快速上手

    # 3000

    \`\`\`js
    var a = 10
    \`\`\`
    `">
    </sun-markdown>

    <textarea name="" id="" cols="30" rows="10" v-model="mark">

    </textarea>
  </div>
</template>

<script>

  export default {
    name: "quickstart",
    data(){
      return {
        mark: ''
      }
    },
    computed: {

    },

    mounted(){

    }
  }
</script>

<style scoped>

</style>