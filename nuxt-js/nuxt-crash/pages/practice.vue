<template>
  <div>
      <h1>Volume - {{ volume }}</h1>

      <button @click = "volume += 2">Increase</button>
      <button @click = "volume -= 2">Decrease</button>
  </div>
</template>

<script>
export default {
    data()
    {
        return {
            volume : 0
        };
    },

    watch : {
        volume(newValue, oldValue)
        {
            if(newValue > oldValue && newValue === 16)
            {
                alert("Volume is too high");
            }
        }
    }
}
</script>

<style>

</style>