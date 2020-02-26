<template>
  <div class="home">
    <Authentication />
  </div>
</template>

<script>
import Authentication from "@/components/Authentication.vue";

export default {
  name: "Home",
  components: {
    Authentication
  }
};
</script>
