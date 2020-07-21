<template>
  <Layout>
    <div class="flex justify-center">
      <div class="flex w-10/12">
        <div
          class="flex mt-10 flex-wrap justify-around lg:justify-between md:justify-between"
        >
          <div
            style="min-width:250px"
            class="flex-1 flex-shrink-0 flex-grow-0"
            v-for="producto in $page.productos.edges"
            :key="producto.title"
          >
            <SfProductCard
              :image="producto.node.imagen.src"
              :title="producto.node.title"
              :link="producto.node.path"
              badge-label="-25%"
              regular-price="$50"
              special-price="$25"
              :showAddToCartButton="false"
              imageWidth="600"
              imageHeight="600"
              wishlistIcon=""
              class="min-w-full"
            />
            <!-- <g-image :src="producto.node.imagen" quality="100"></g-image> -->
          </div>
        </div>
      </div>
    </div>
  </Layout>
</template>
<page-query>
query ($page: Int){
  productos: allProductos (perPage: 10, page: $page)  @paginate {
    pageInfo {
      totalPages
      currentPage
    }
    edges {
      node {
        title
        description
        cuerpo
        imagen (width:600, height:600, quality: 50, blur:50)
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
