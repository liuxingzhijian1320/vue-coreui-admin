<template>
  <div class="modalsize" >

      <b-modal
        v-model="modalShow"
        :size="size"
        cancel-title="close"
        ok-title="open"
        @cancel="close"
        @ok="handleOk"
        >

          这是是弹窗的内容的

      </b-modal>


  </div>
</template>

<script>
export default {
  name: 'modalsize',
  data() {
    return {
      // modalShow: false,
    };
  },
  props: ['modalShow', 'size'],
  methods: {
    close() {
      this.$emit('close');
    },
    handleOk(evt) {
      evt.preventDefault();
      console.info('handleOk');
      this.close();
    },
  },
};
</script>
