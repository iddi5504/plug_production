const makePostStore= {
    namespaced: true,
    state:{
        showMakePost:false,
        showMakePostBar:false
    },
    getters:{

    },
    mutations:{
        closeMakePost(state){
            state.showMakePost=false
        }
    },
    actions:{
        closeMakePost(context){
            context.commit('closeMakePost');
        }
    }
}

export {
    makePostStore
}