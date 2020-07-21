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
            v-for="producto in productosInicio"
            :key="producto.title"
          >
            <SfProductCard
              :image="producto.imagen.src"
              :title="producto.title"
              :link="producto.path"
              :badge-label="producto.descuento"
              :regular-price="producto.precio"
              :special-price="producto.oferta"
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
        precio
        descuento
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
  data() {
    return {};
  },
  computed: {
    productosInicio: function() {
      console.log(this.$page.productos.edges);
      return this.$page.productos.edges.map(function(el) {
        return {
          title: el.node.title,
          imagen: el.node.imagen,
          path: el.node.path,
          precio: `$${el.node.precio}`,
          descuento: el.node.descuento ? `${el.node.descuento}%` : '',
          oferta: el.node.descuento
            ? `$${el.node.precio - (el.node.precio * el.node.descuento) / 100}`
            : '',
        };
      });
    },
  },
};
</script>
