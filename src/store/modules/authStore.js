const authStore={
    namespaced:true,
    state:{
        username:null,
        userEmail:''
        
    },
    getters:{
        USERNAME(state){
            return state.username;
        },
        EMAIL(state){
            return state.userEmail;
        }
    },
    mutations:{
        setUser(state,user){
            state.userEmail=user.email;
            state.username=user.username;
        }
    },
    actions:{
        setUser(context,user){
            context.commit('setUser',user)
        }
    }
}
export {
    authStore
}