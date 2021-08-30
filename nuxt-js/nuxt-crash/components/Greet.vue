<template>
  <div>
      <h1 v-bind = "$attrs">Hello {{ name }} {{ age }} - {{ isMarried ? "Yes" : "No"}}</h1>
  </div>
</template>

<script>
export default {
    name : "Greet",
    props : {
        name : {
            type : String,
            required : true
        },
        age : {
            type : Number,
            required : true,
            default : 18
        },
        isMarried : {
            type : Boolean,
        },
    },
    inheritAttrs : false
}
</script>

<style>

</style>