<template>
  <div class="home">
    <v-row class="d-flex justify-center">
      <v-col>
        <div class="text-center">
          <Authentication />
        </div>
      </v-col>
    </v-row>
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
