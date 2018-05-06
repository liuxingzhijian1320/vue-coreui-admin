<template>
  <ol class="breadcrumb">
    <li class="breadcrumb-item" v-for="(item, index) in list" :key="index">
      <span class="active" v-if="isLast(index)">{{ showName(item) }}</span>
      <router-link :to="item" v-else>{{ showName(item) }}</router-link>
    </li>
  </ol>
</template>

<script>
export default {
  props: {
    list: {
      type: Array,
      required: true,
      default: () => [],
    },
  },
  watch: {
    list(val) {
      // console.info(2, val);
    },
  },
  methods: {
    isLast(index) {
      return index === this.list.length - 1;
    },
    showName(item) {
      if (item.meta && item.meta.name && item.parent.name) {
        item = item.meta && item.meta.name;
      }
      if (item.meta && item.meta.title) {
        item = item.meta && item.meta.title;
      }
      if (item.name) {
        item = item.name;
      }
      return item;
    },
  },
};
</script>
