const authStore={
    namespaced:true,
    state:{
        username:null,
        userEmail:'',
        isAuthenticated:false,
        user_id:null,
        upvotes:[],
        downvotes:[],
        saves:[]
        
    },
    getters:{
        USERNAME(state){
            return state.username;
        },
        EMAIL(state){
            return state.userEmail;
        },
        USERNAMESNIPPET(state){
            let snippet= state.username.slice(0,10)
            return `${snippet}..`
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
            state.user_id=user.user_id;
            state.upvotes=user.upvotes;
            state.downvotes=user.downvotes;
            state.saves=user.saves
        },
        cleanUp(state){
            state.userEmail=null;
            state.username=null;
            state.isAuthenticated=false;
        },
        addUpvote(state, id){
            state.upvotes.push(id);
        },
        removeUpvote(state, id){
            state.upvotes.splice(state.upvotes.indexOf(id), 1)
        },
        addDownvote(state, id){
            state.downvotes.push(id);
        },
        removeDownvote(state, id){
            state.downvotes.splice(state.downvotes.indexOf(id), 1)
        },
        removeSave(state, id){
            state.saves.splice(state.saves.indexOf(id), 1)
        },
        addSave(state, id){
            state.saves.push(id);
        },
    },
    actions:{
        setUser(context,user){
            context.commit('setUser',user)
        },
        cleanUp(context){
            context.commit('cleanUp')
        },
        upvote(context, id){
            context.commit('addUpvote',id)
        },
        removeUpvote(context, id){
            context.commit('removeUpvote',id)
        },
        downvote(context, id){
            context.commit('addDownvote',id)
        },
        removeDownvote(context, id){
            context.commit('removeDownvote',id)
        },
        removeSave(context, id){
            context.commit('removeSave',id)
        },
        save(context, id){
            context.commit('addSave',id)
        },
    }
}
export {
    authStore
}