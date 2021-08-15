<template>
    <div>
        {{this.video.name}}

        <nuxt-link to = "/videos">Videos</nuxt-link>
    </div>
</template>

<script>
export default {
    props : ["video"],
}
</script>
