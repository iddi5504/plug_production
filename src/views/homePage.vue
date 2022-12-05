<template>
  <div>
    <appNav></appNav>
    <div class="home-body">
      <router-view class="main-content">

      </router-view>
      <div ref="content" class="side-content">
        <topRecommendations></topRecommendations>
      </div>
    </div>
    <!-- Call to action components -->
    <appModal></appModal>
    <makePost></makePost>
    <askRecommendation></askRecommendation>
    <majorAlert></majorAlert>
  </div>
</template>

<script>

import appNav from '../components/appNav.vue'
import modal from '../components/modal.vue'
import makePost from '../components/makePost.vue'
import majorAlert from '../components/majorAlert.vue'
import mainContent from '../components/mainContent.vue'
import topRecommendations from '../components/topRecommendations.vue'
import askRecommendation from '../components/askRecommendation.vue'

export default {
  components: {
    appNav,
    appModal: modal,
    makePost,
    majorAlert,
    mainContent,
    topRecommendations,
    askRecommendation


  },
  data() {
    return {
      scrollHeight: null,
      offsetHeight: null,
      scrollTop: null,
      totalScroll: null
    }
  },


}
</script>

<style lang="scss">
.home-body {
  display: flex;
  justify-content: center;
  width: 100%;
  align-content: flex-start;
  margin-top: 58px;

  .main-content {
    width: 100%;
    justify-content: flex-start;
    align-items: stretch;
    display: flex;
    flex-direction: column;
    justify-items: center;
    max-width: 700px;
    min-width: 300px;

    .categoryBar {
      width: 100%;
    }
  }

  .side-content {
    /*padding: 0px;
    margin: 0px 16px;
    background-color: var(--primary);
    z-index: 0;
    display: none;
    flex-direction: column;
    height: 475px;
    font-family: sans-serif;
    border-radius: 10px;
    margin-top: 10px;
    color: var(--textcolorimportant);
    font-size: larger;
    box-shadow: var(--boxshadow);
    position: relative;

    @media all and (min-width: 900px){
      display: flex;

    }*/

    width: 100%;
    width: 287px;
    display: none;
    justify-content: flex-start;
    flex-direction: column;
    align-items: center;
    padding: 0 5px;

    @media all and (min-width: 900px) {
      display: flex;

    }
  }

  &::-webkit-scrollbar {
    background: var(--primary);
    width: 4px;
  }

  &::-webkit-scrollbar-corner {
    border-radius: 10px;
  }

  &::-webkit-scrollbar-thumb {
    background: #979595;
    border-radius: 10px;
    box-shadow: var(--boxshadow);
  }
}
</style>