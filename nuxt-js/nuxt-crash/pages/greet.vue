<template>
    <div>
        <h1>UserName - {{ name }}</h1>
        <Greet id = "person" name = "Abc" :age = 25 />
        <Greet name = "Def" :age = 30 />
        <Greet :name = "name" :age = "age" :isMarried = "isMarried"/>
        <ComponentA />
        <button @click = "showPopup = true">Show PopUp</button>
        <PopUp v-show = "showPopup" @close = "closePopup"/>
    </div>
</template>

<script>
import Greet from "../components/Greet.vue";
export default {
    components : {
        Greet,
    },

    data() {
        return {
            name : "Ghi",
            age : 35,
            isMarried : true,
            showPopup : false
        };
    },

    methods : {
        closePopup(name)
        {
            console.log("Name", name);
            this.showPopup = false;
        }
    },
     provide() {
         return {
             userName : this.name
         }
    }
}
</script>

<style>

</style>