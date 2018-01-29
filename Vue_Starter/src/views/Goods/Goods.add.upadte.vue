<template>
  <div class="animated fadeIn">

    <div v-text="show()"></div>

  </div>
</template>

<script>
export default {
  name: 'GoodsAddUpdate',
  methods: {
    show() {
      return this.$route.params.id ? '商品编辑' : '商品新增';
    },
  },
  mounted() {
    // console.info(this.$route.params.id);
  },
};
</script>
