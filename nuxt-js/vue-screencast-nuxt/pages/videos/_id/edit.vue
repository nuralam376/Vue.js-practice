<template>
    <div>
        {{this.video.title}}

        <nuxt-link to = "/videos">Videos</nuxt-link>
    </div>
</template>

<script>
export default {
    layout : "theatre",
    props : ["video"],
    head : {
        titleTemplate : "Edit Post"
    }
}
</script>
