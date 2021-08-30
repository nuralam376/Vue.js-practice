<template>
    <div>
        <Greet id = "person" name = "Abc" :age = 25 />
        <Greet name = "Def" :age = 30 />
        <Greet :name = "name" :age = "age" :isMarried = "isMarried"/>
    </div>
</template>

<script>
import Greet from "../components/Greet.vue";
export default {
    components : {
        Greet
    },

    data() {
        return {
            name : "Ghi",
            age : 35,
            isMarried : true
        };
    }
}
</script>

<style>

</style>