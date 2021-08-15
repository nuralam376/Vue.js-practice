<template>
    <div>

        <h1>Video id - {{$route.params.id}}</h1>
        <p>{{this.video.title}}</p>
        <nuxt-link :to = "`/videos/${video.id}/edit/`">
            <button>Edit</button>
        </nuxt-link>
        <nuxt-link to = "/videos/">Videos</nuxt-link>
       
    </div>
</template>

<script>
    export default {
        props : ["video"],

        

    }
</script>
