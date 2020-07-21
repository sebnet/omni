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
        <SfBottomNavigation>
          <SfBottomNavigationItem
            :icon="icon"
            :label="label"
            :icon-active="iconActive"
            :is-active="currentIcon === iconActive"
            @click="currentIcon = iconActive"
          />
          <SfBottomNavigationItem
            v-for="(item, key) in items"
            :key="key"
            :icon="item.icon"
            :icon-active="item.iconActive"
            :label="item.label"
            icon-size="20px"
            :is-active="currentIcon === item.iconActive"
            @click="currentIcon = item.iconActive"
          />
          <SfBottomNavigationItem
            label="Carrito"
            icon="add_to_cart"
            is-floating
          />
        </SfBottomNavigation>
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
import { SfBottomNavigation } from '@storefront-ui/vue';
import { SfCircleIcon } from '@storefront-ui/vue';
import { SfIcon } from '@storefront-ui/vue';
export default {
  components: {
    Header,
    BannerLeft,
    SfBottomNavigation,
    SfCircleIcon,
    SfIcon,
  },
  data() {
    return {
      items: [
        { icon: 'menu', iconActive: '', label: 'Productos' },
        { icon: 'info_circle', iconActive: 'info_fill', label: 'Info' },
        { icon: 'edit', iconActive: 'profile_fill', label: 'Contacto' },
      ],
      currentIcon: 'heart_fill',
      label: 'Home',
      icon: 'home',
      iconActive: 'home_fill',
    };
  },
};
</script>
