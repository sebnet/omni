<template>
  <Layout>
    <h1>List articles</h1>
    <div class="flex">
      <div
        class="flex-1"
        v-for="producto in $page.productos.edges"
        :key="producto.title"
      >
        <SfProductCard
          :image="producto.node.imagen.src"
          width="500"
          :title="producto.node.title"
          :link="producto.node.path"
          regular-price="50"
          special-price="25"
          class="flex-1"
        />
        <!-- <g-image :src="producto.node.imagen" quality="100"></g-image> -->
      </div>
    </div>
  </Layout>
</template>
<page-query>
query {
  productos: allProductos {
    edges {
      node {
        title
        description
        cuerpo
        imagen (width:300, quality: 100, blur:30, fit:cover)
        path
      }
    }
  }
}
</page-query>
<script>
import { SfProductCard } from '@storefront-ui/vue';
import '@storefront-ui/vue/styles.scss';

export default {
  components: {
    SfProductCard,
  },
  metaInfo: {
    title: 'My blog',
  },
};
</script>
<style>
.article {
  display: flex;
  align-items: center;
  box-shadow: 5px 5px 11px rgba(0, 0, 0, 0.15);
  border-radius: 8px;
  position: relative;
  margin-top: 50px;
  background-color: #fff;
}
@media screen and (max-width: 992px) {
  .article {
    display: block;
  }
}
.article__title {
  margin-top: 0;
}
.article__body {
  padding: 15px 30px;
}
.article__link {
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
}
.article__img {
  width: 250px;
  height: 140px;
  background-size: cover;
  background-position: center;
  border-radius: 8px;
  margin-right: 15px;
}
@media screen and (max-width: 992px) {
  .article__img {
    width: 100%;
    height: 180px;
  }
}
</style>
