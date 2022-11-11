<template>
  <div class="loadingScreen">
    <div>
      <lottie-player src="https://assets1.lottiefiles.com/packages/lf20_kxsd2ytq.json"  background="rgba(255, 212, 212, 0)"  speed="1"  style="width: 200px; height: 200px;"  loop autoplay></lottie-player>

        <div class="message">{{loadScreenMessage}}</div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  computed:{
    ...mapState(['loadScreenMessage'])
  }

}
</script>

<style scoped lang="scss">
.loadingScreen{
  position: fixed;
  top: 0;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #0000005e;
  font-size: 1.5rem;
  >div{
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 1.6rem;
    color: var(--textcolorimportant);
  }
}
.loader{
  width: 50px;
  height: 50px;
  border:8px solid transparent;
  border-top-color:var(--brandcolor);
  border-bottom-color:var(--brandcolor);
  animation: spin 1s ease-in-out infinite;
  border-radius: 50%;
  display: block;
  padding: 10px;
}

@keyframes spin{
  to{
      transform: rotateZ(360deg);
  }
}
</style>