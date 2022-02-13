<template>
  <div class="Dashboard">
    Dashboard
    <component :is="component" />
  </div>
</template>

<script>
import Partner from "@/components/dashboard/Partner.vue";
import Admin from "@/components/dashboard/Admin.vue";
import Sadmin from "@/components/dashboard/Sadmin.vue";

export default {
  components: {
    Partner,
    Admin,
    Sadmin,
  },
  created() {
    if (this.$route.name == "Partner") {
      this.component = Partner;
    } else if (this.$route.name == "Admin") {
      this.component = Admin;
    } else if (this.$route.name == "Sadmin") {
      this.component = Sadmin;
    }
  },
  data() {
    return {
      component: null,
    };
  },
};
</script>

<style>
</style>