
<template>
  <exo-drawer
    ref="timeTrackingDrawer"
    :right="!$vuetify.rtl"
    @closed="close">
    <template slot="title">
      <span class="pb-2"> text </span>
    </template>
    <template slot="content">
      cc
    </template>
    <template slot="footer">
      cc
    </template>
  </exo-drawer>
</template>

<script>


export default {
    

  methods:{
    cancel() {
      this.$refs.timeTrackingDrawer.close();
    },
    open() {
      this.$refs.timeTrackingDrawer.open();
    },
  }
};
</script>


<style>
div#middle-topNavigation-container .UIIntermediateContainer >.UIRowContainer {
    display: flex;
}
.actList {
    width: 100%;
}
.actItem {
    background-color: #c3e4f6;
    margin-bottom: 5px;
}
.numberHr {
    font-size: 30px !important;
    font-weight: 900;
    width: 46px !important;
    border-radius: 250px;
    color: #3f51b5 !important;
    text-align: center;
    background: #fff;
}
h4 {
    text-align: center;
}
</style>