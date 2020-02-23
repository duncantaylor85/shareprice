<template>
  <div class="home">
    <amplify-authenticator></amplify-authenticator>
  </div>
</template>

<script>
import { AmplifyEventBus } from "aws-amplify-vue";
// @ is an alias to /src

export default {
  mounted() {
    AmplifyEventBus.$on("authState", info => {
      console.log("auth", info);
      if (info === "signedIn") {
        this.$router.push("about");
      }
    });
  },
  name: "Home",
  components: {}
};
</script>
