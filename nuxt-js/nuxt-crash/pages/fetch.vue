<template>
    <div>
        <div v-for = "post in posts" :key = "post.id">{{post.title}}</div>
    </div>
</template>

<script>
import {mapState} from "vuex";
export default {
    // data()
    // {
    //     return {
    //         posts : ["Post 1", "Post 2", "Post 3"]
    //     };
    // },

    async fetch({store}) {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts");
        const postsA = await response.json();
        console.log("fetch",process.server);
        store.commit("SET_POSTS",postsA);
        // return {posts : posts};
    },

    created()
    {
        console.log("Server",process.server);
    },

    mounted()
    {
        console.log("Client", process.client);
        // console.log("posts",posts);
    },

    computed : {
        ...mapState(['posts'])
    }
}
</script>

<style>

</style>