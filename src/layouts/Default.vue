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

        <!-- lg:invisible xl:invisible -->
        <div class="visible ">
          <SfBottomNavigation>
            <SfBottomNavigationItem
              v-for="item in navigationItems"
              :key="item.icon"
              :icon="item.icon"
              :label="item.label"
              :is-floating="item.isFloating"
              :is-active="false"
              @click="item.onClick"
            />
          </SfBottomNavigation>
        </div>
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
  methods: {
    openMenu() {
      this.showMenu = true;
    },
    openInfo() {
      console.log('info');
    },
    openContacto() {
      console.log('contacto');
    },
    openCarrito() {
      console.log('carrito');
    },
  },
  data() {
    return {
      showMenu: false,
      navigationItems: [
        {
          icon: 'menu',
          iconActive: '',
          label: 'Productos',
          onClick: this.openMenu,
        },
        {
          icon: 'info_circle',
          iconActive: 'info_fill',
          label: 'Info',
          onClick: this.openInfo,
        },
        {
          icon: 'edit',
          iconActive: 'profile_fill',
          label: 'Contacto',
          onClick: this.openContacto,
        },
        {
          icon: 'add_to_cart',
          iconActive: 'add_to_cart',
          label: 'Carrito',
          onClick: this.openCarrito,
          isFloating: true,
        },
      ],
      currentIcon: 'heart_fill',
      label: 'Home',
      icon: 'home',
      iconActive: 'home_fill',
    };
  },
};
</script>
