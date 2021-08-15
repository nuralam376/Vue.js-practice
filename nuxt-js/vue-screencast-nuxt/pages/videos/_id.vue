<template>
    <nuxt-child :video = "video"></nuxt-child>
</template>

<script>

export default ({
    props : ['videos'],

    computed : 
        {
            video()
            {

                const res = this.videos.find(vd => vd.id == this.$route.params.id);
               
                return res;
            }
        },
})
</script>
