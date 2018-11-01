<template>
  <div>


    <div>123456</div>



    <sun-markdown>
      <script type="text/html">
        # aaa
        # bbb
        # ccc
        * 123456
          * 456
          * 456789
            * 456789
            * 123456





        ```js
        var a = 'asdasdasdsadsa';
        ```
      </script>
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