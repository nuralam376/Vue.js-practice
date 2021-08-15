<template>
    <div>
     <h1>Videos</h1>
     <nuxt-child :videos = "videos"/>
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
        }
    }
</script>
