<template>
  <div class="home">
    <Authentication />
  </div>
</template>

<script>
// import { AmplifyEventBus } from "aws-amplify-vue";
import Authentication from "@/components/Authentication.vue";

// @ is an alias to /src

export default {
  // mounted() {
  //   AmplifyEventBus.$on("authState", info => {
  //     console.log("auth", info);
  //     if (info === "signedIn") {
  //       this.authState = "signedIn";
  //       this.$router.push("portfolio");
  //     } else {
  //       this.$router.push("/");
  //     }
  //   });
  // },
  name: "Home",
  components: {
    Authentication
  }
};
</script>
