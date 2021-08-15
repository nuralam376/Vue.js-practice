<template>
    <div>
     <nuxt-child :videos = "$store.state.videos"/>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                videos: [
                    {
                        id : 1,
                        name : "JavaScript"
                    },
                    {
                        id : 2,
                        name : "Vue.js"
                    },
                    {
                        id : 3,
                        name : 'Nuxt.js'
                    }
                ]
            };
        },

        async fetch(context)
        {
           const res = await context.$axios.get('/posts');

            context.store.commit("SET_VIDEOS",res.data);
        }

        
    }
</script>
