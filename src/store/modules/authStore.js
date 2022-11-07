const authStore={
    namespaced:true,
    state:{
        username:null,
        userEmail:'',
        isAuthenticated:false
        
    },
    getters:{
        USERNAME(state){
            return state.username;
        },
        EMAIL(state){
            return state.userEmail;
        },
        ISAUTHENTICATED(state){
            return state.isAuthenticated;
        }
    },
    mutations:{
        setUser(state,user){
            state.userEmail=user.email;
            state.username=user.username;
            state.isAuthenticated=true;
        },
        cleanUp(state){
            state.userEmail=null;
            state.username=null;
            state.isAuthenticated=false;
        }
    },
    actions:{
        setUser(context,user){
            context.commit('setUser',user)
        },
        cleanUp(context){
            context.commit('cleanUp')
        }
    }
}
export {
    authStore
}