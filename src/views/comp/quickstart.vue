<template>
  <div>
    <sun-markdown :mark="mark">
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