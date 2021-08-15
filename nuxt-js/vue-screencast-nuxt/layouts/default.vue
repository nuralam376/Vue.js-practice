<template>
    <div>
        <div id="navbar">
            <nuxt-link to = "/">Home</nuxt-link>
            <nuxt-link to = "/videos">Videos</nuxt-link>
        </div>
        <div class="default-body">
            <nuxt />
        </div>
    </div>
</template>

<style scoped>
*
{
    margin: 0;
    padding: 0;
}
    #navbar
    {
        background-color : #333;
        width : 100%;
        height : 40px;
    }
    #navbar a
    {
        color : white;
        text-decoration: none;
        margin-right : 20px;
    }

    .default-body
    {
        max-width : 800px;
        margin : auto;
    }
</style>