<template>
    <div class="alert-view" v-if="showAlertMessage">
        <div class="alert-container">
            <i class="bi bi-x" @click="closeAlert"></i>
            <img src="../assets/check.png" alt="">
            <h3>{{alertMessage}}</h3>
            <span>{{smallMessage}}</span>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
    computed:{
        ...mapState(['alertMessage','smallMessage','showAlertMessage'])
    },
    methods:{
        closeAlert(){
            this.$store.state.showAlertMessage= false
        }
    }
}
</script>

<style lang="scss">
.alert-view {
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    left: 0;
    bottom: 0;
    height: 100%;
    z-index: 7;
    @media only screen and (min-width:600px) {
        /*height: calc(100vh - 48px);*/

    }

    .alert-container{
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
        border-radius: 10px;
        background: var(--primary);
        color: var(--textcolorimportant);
        box-shadow: var(--boxshadow);
        width: 100%;
        max-width: 450px;
        margin: 11px;
        height: 100%;
        max-height: 300px;
        position: relative;
        gap: 12px;
        i{
            font-size: 1.4rem;
            position: absolute;
            top: 4px;
            right: 8px;
        }
        h3{
            color: greenyellow;
            font-size: 1.3rem;
        }
        span{
            max-width: 41ch;
        }
        img{
            width: 100px;
            height: 100px;
        }
    }
}
</style>