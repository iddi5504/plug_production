const modalStore = {
    namespaced:'true',
    state: {
        showModal: false
    },
    mutations: {

        showModal(state, show) {
            console.log("🚀 ~ file: modalStore.js ~ line 8 ~ showModal ~ show", show)
            state.showModal = show;
        }
    },
    getters: {
        SHOWMODAL(state){
            return state.showModal;
        }
    },
    actions: {
        toggleModal(context, show) {
            context.commit('showModal', show);

        },
    }

}

export {
    modalStore
}