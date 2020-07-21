<template>
  <div>
    <main>
      <Header></Header>
      <div class="container">
        <!-- <a
        href="https://wa.me/541169393641?text=I'm%20interested%20in%20your%20car%20for%20sale"
        >ksksk</a
      > -->
        <BannerLeft />

        <slot />
      </div>
    </main>
  </div>
</template>
<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>
<script>
import Header from '~/layouts/Header.vue';
import BannerLeft from '~/layouts/BannerLeft.vue';
export default {
  components: {
    Header,
    BannerLeft,
  },
};
</script>
