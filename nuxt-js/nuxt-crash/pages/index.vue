<template>
  <div class="container">
    <button @click = "activeTab = 'TabA'">TabA</button>
    <button @click = "activeTab = 'TabB'">TabB</button>
    <button @click = "activeTab = 'TabC'">TabC</button>

    <!-- <TabA v-if = "activeTab === 'TabA'"/>
    <TabB v-if = "activeTab === 'TabB'"/>
    <TabC v-if = "activeTab === 'TabC'"/>
    {{activeTab}} -->
    <Component :is = "activeTab"/>
  </div>
</template>

<script>
import TabA from "../components/TabA.vue";
import TabB from "../components/TabB.vue";
import TabC from "../components/TabC.vue";

// eslint-disable-next-line semi
export default {
  components : {
    TabA,
    TabB,
    TabC
  },

  data () {
    return {
      activeTab : "TabA"
    }
  }
};
</script>
