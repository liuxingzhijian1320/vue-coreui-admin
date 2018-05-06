<template>
  <div class="wrapper">
    <div class="animated fadeIn">
      <b-row>
        <b-col cols="12">
          <b-card header="Bootstrap Modals">
            <b-button type="button" variant="secondary" @click="myModal = true">Launch demo modal</b-button>
            <b-button type="button" variant="secondary" @click="largeModal = true">Launch large modal</b-button>
            <b-button type="button" variant="secondary" @click="smallModal = true">Launch small modal</b-button>
            <hr>
            <b-button type="button" variant="primary" @click="primaryModal = true">Launch primary modal</b-button>
            <b-button type="button" variant="success" @click="successModal = true">Launch success modal</b-button>
            <b-button type="button" variant="warning" @click="warningModal = true">Launch warning modal</b-button>
            <b-button type="button" variant="danger" @click="dangerModal = true">Launch danger modal</b-button>
            <b-button type="button" variant="info" @click="infoModal = true">Launch info modal</b-button>
          </b-card>
        </b-col>
        <!--/.col-->
      </b-row>
      <!--/.row-->
    </div>

    <!-- Modal Component -->
    <b-modal title="Modal title" v-model="myModal" @ok="myModal = false">
      当前 做 新增 和 编辑
    </b-modal>

    <b-modal title="Modal title" size="lg" v-model="largeModal" @ok="largeModal = false">
      当前 做 新增 和 编辑
    </b-modal>

    <b-modal title="Modal title" size="sm" v-model="smallModal" @ok="smallModal = false">
      当前 做 新增 和 编辑
    </b-modal>

    <b-modal title="Modal title" class="modal-primary" v-model="primaryModal" @ok="primaryModal = false">
      当前 做 新增 和 编辑
    </b-modal>

    <b-modal title="Modal title" class="modal-success" v-model="successModal" @ok="successModal = false" ok-variant="success">
      当前 做 新增 和 编辑
    </b-modal>

    <b-modal title="Modal title" class="modal-warning" v-model="warningModal" @ok="warningModal = false" ok-variant="warning">
      当前 做 新增 和 编辑
    </b-modal>

    <b-modal title="Modal title" class="modal-danger" v-model="dangerModal" @ok="dangerModal = false" ok-variant="danger">
      当前 做 新增 和 编辑
    </b-modal>

    <b-modal title="Modal title" class="modal-info" v-model="infoModal" @ok="infoModal = false" ok-variant="info">
      当前 做 新增 和 编辑
    </b-modal>
  </div>

</template>

<script>
export default {
  name: 'modals',
  data() {
    return {
      myModal: false,
      largeModal: false,
      smallModal: false,
      primaryModal: false,
      successModal: false,
      warningModal: false,
      dangerModal: false,
      infoModal: false,
    };
  },
};
</script>
