<template>
  <div class="alert-container">
    <div class="alert">{{ minorAlertMessage }}</div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  computed: {
    ...mapState(['minorAlertMessage'])
  }
}
</script>

<style lang="scss">
.alert-container {
  width: 100%;
  position: fixed;
  top: 66px;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 15;

  .alert {
    max-width: 60ch;
    padding: 11px;
    font-size: 1rem;
    color: var(--textcolorimportant);
    background: var(--primary);
    box-shadow: var(--boxshadow);
    box-sizing: border-box;
    border-left: 7px solid var(--brandcolor);
    border-radius: 2px;
    margin: 3px 18px;
    min-width: 350px;

  }

}
</style>