<template>
  <Layout>
    <div class="bg-indigo-900 text-center py-4 lg:px-4 mt-10">
      <div
        class="p-2 bg-indigo-800 items-center text-indigo-100 leading-none lg:rounded-full flex lg:inline-flex"
        role="alert"
      >
        <span
          class="flex rounded-full bg-indigo-500 uppercase px-2 py-1 text-xs font-bold mr-3"
          >New</span
        >
        <span class="font-semibold mr-2 text-left flex-auto"
          >Get the coolest t-shirts from our brand new store</span
        >
        <svg
          class="fill-current opacity-75 h-4 w-4"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path
            d="M12.95 10.707l.707-.707L8 4.343 6.586 5.757 10.828 10l-4.242 4.243L8 15.657l4.95-4.95z"
          />
        </svg>
      </div>
    </div>

    <div
      class="bg-blue-100 border-t border-b border-blue-500 text-blue-700 px-4 py-3 mt-10"
      role="alert"
    >
      <p class="font-bold">Informational message</p>
      <p class="text-sm">Some additional text to explain said message.</p>
    </div>

    <button
      class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-10"
    >
      Button
    </button>

    <button
      class="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow ml-3"
    >
      Button
    </button>
    <div class="articlePage">
      <div
        class="articlePage__img"
        :style="{ 'background-image': 'url(' + $page.producto.image + ')' }"
      ></div>
      <div class="container container--article">
        <g-link to="/" class="back"
          ><svg
            aria-hidden="true"
            focusable="false"
            data-prefix="fas"
            data-icon="arrow-left"
            class="svg-inline--fa fa-arrow-left fa-w-14"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
          >
            <path
              fill="currentColor"
              d="M257.5 445.1l-22.2 22.2c-9.4 9.4-24.6 9.4-33.9 0L7 273c-9.4-9.4-9.4-24.6 0-33.9L201.4 44.7c9.4-9.4 24.6-9.4 33.9 0l22.2 22.2c9.5 9.5 9.3 25-.4 34.3L136.6 216H424c13.3 0 24 10.7 24 24v32c0 13.3-10.7 24-24 24H136.6l120.5 114.8c9.8 9.3 10 24.8.4 34.3z"
            ></path></svg
          >Back</g-link
        >
        <h1 class="articlePage__title">{{ $page.producto.title }}</h1>
        <p>{{ $page.producto.description }}</p>
        <p>{{ $page.producto.cuerpo }}</p>
        <div v-html="$page.producto.cuerpo"></div>
      </div>
    </div>
  </Layout>
</template>
<page-query>
query ($path: String!) {
  producto: productos (path: $path) {
    title
    description
    cuerpo
    imagen
  }
}
</page-query>
<script>
export default {
  components: {},
  metaInfo() {
    return {
      title: this.$page.producto.title,
    };
  },
};
</script>
<style>
.container--article {
  margin-top: -140px;
  background-color: #fff;
  border-radius: 8px;
  padding: 30px 60px;
  margin-bottom: 100px;
}
@media screen and (max-width: 992px) {
  .container--article {
    padding: 15px 20px;
  }
}
.articlePage__img {
  width: 100%;
  height: 400px;
  background-size: cover;
  background-position: center;
}
.back {
  display: flex;
  align-items: center;
  color: #333;
  text-decoration: none;
}
.svg-inline--fa {
  width: 20px;
  margin-right: 15px;
  color: #333;
}
</style>
