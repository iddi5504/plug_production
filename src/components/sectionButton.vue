<template>
    <div class="select-button-body">
        <button @click="showSectionOptions = !showSectionOptions">
            <i class="bi bi-pen"></i>
            <div>{{ SELECTEDSECTION }}</div>
        </button>
        <transition name="show">
            <ul v-show="showSectionOptions" class="select-section">
                <li @click="section('Surf')">Surf recommendations</li>
                <li @click="section('irecommend')">Make recommendations</li>
            </ul>
        </transition>
    </div>
</template>

<script>
import { mapGetters, mapState } from 'vuex'
export default {
    data() {
        return {
            showSectionOptions: false
        }
    },
    methods: {
        section(selectedSection) {
            this.$store.commit('setSection', selectedSection, { root: true })
            this.showSectionOptions = false
        }
    },
    computed: {
        ...mapGetters(['SELECTEDSECTION'])
    }
}
</script>

<style lang="scss" scoped>
.select-button-body {
    position: relative;
    align-self: flex-start;
}

button {
    display: flex;
    align-items: center;
    width: 195px;
    justify-content: center;
    gap: 2px;
    background: var(--primary);
    box-shadow: var(--boxshadow);
    color: var(--textcolorimportant);
    border: none;
    margin: 5px 10px;
    font-size: 0.8rem;
    padding: 4px;
    border-radius: 5px;
}

.select-section {
    border-radius: 5px;
    box-shadow: var(--boxshadow);
    font-size: 0.9rem;
    color: var(--textcolornotimportant);
    background: var(--primary);
    position: absolute;
    top: 34px;
    left: 24px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    height: 73px;

    li {
        text-decoration: none;
        list-style: none;
        text-align: center;
        height: 100%;
        padding: 5px;
        display: flex;
        flex-direction: column;
        justify-content: center;

        &:last-of-type {
            border-radius: 0 0 5px 5px;
        }

        &:hover {
            background: #fffce8;
        }

    }
}

.show-enter-active,
.show-leave-active {
    opacity: 1;
    transition: 0.5s all ease
}

.show-enter,
.show-leave-to {
    opacity: 0;
}
</style>