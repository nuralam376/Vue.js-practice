<template>
    <div>
        <h1>Video Information</h1>
        <ul>
            <li v-for = "video in videos" :key = "video.id">
                <nuxt-link :to = "`/videos/${video.id}`">
                    {{video.title}}
                </nuxt-link>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        props : ["videos"],

        head: {
            title : "Video Post"
        }
    }
</script>
