<template>
  <div class="auth">
    <div v-if="!signedIn">
      <amplify-authenticator></amplify-authenticator>
    </div>
    <div v-if="signedIn">
      <amplify-sign-out></amplify-sign-out>
    </div>
  </div>
</template>

<script>
import { Auth } from "aws-amplify";
import { AmplifyEventBus } from "aws-amplify-vue";
import VueRouter from "vue-router";

export default {
  name: "Authentication",
  data() {
    return {
      signedIn: false
    };
  },
  props: {
    msg: String
  },
  created() {
    this.findUser();

    AmplifyEventBus.$on("authState", info => {
      if (info === "signedIn") {
        this.findUser();
        this.$router.push({ path: "portfolio" });
      } else {
        this.signedIn = false;
      }
    });
  },
  methods: {
    async findUser() {
      try {
        const user = await Auth.currentAuthenticatedUser();
        this.signedIn = true;
      } catch (error) {
        this.signedIn = false;
      }
    }
  }
};
</script>