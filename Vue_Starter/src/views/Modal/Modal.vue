<template>
  <div class="wrapper">
    <div class="animated fadeIn">

       <b-button @click="openNornmal()">正常弹窗</b-button>
       <!-- <b-button @click="openNornmal('lg')">大弹窗</b-button> -->
       <!-- <b-button @click="openNornmal('sm')">小弹窗</b-button> -->

      <modalSize :modalShow.sync="modalShow" :size.sync="size" @close="closeHandler"></modalSize>

    </div>
  </div>
</template>

<script>
import modalSize from './Modal.size';
export default {
  name: 'modal',
  data() {
    return {
      modalShow: false,
      size: '',
    };
  },
  methods: {
    openNornmal(size) {
      this.modalShow = true;
      // this.size = size;
    },
    closeHandler(val) {
      // alert(1);
      this.modalShow = val;
      this.size = '';
    },
  },
  components: {
    modalSize,
  },
};
</script>
