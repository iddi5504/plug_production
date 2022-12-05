import { collection, collectionGroup, getDocs, limit, orderBy, query, startAfter, where } from "firebase/firestore"
import { firestore } from "../../firebase/firebase"
export const profileStore = {
    namespaced: true,
    state: {
        selectFeed: 'userRecommendations',
        saves: [],
        userRecommendations: []
    },
    getters: {
        FEED(state) {
            const selectFeed = state.selectFeed
            if (selectFeed == 'userRecommendations') {
                return state.userRecommendations
            }
        }
    },
    mutations: {
        setUserRecommendations(state, userRecommendations) {
            state.userRecommendations = userRecommendations
        }
    },
    actions: {
        async selectFeed(context, payload) {
            context.state.selectFeed = payload
            // if(payload == 'saved'){
            //     const savedRecommendationIds= context.rootState.authStore.savedRecommendations
            //     const savedAskedRecommendationIds= context.rootState.authStore.savedAskedRecommendations
            //     if(context.state.saves) return


            // }
            if (payload == 'userRecommendations') {
                const user_id = context.rootState.authStore.user_id
                console.log(user_id)
                const userRecommendationsQuery = query(collection(firestore, 'recommendations'), where('recommender_id', '==', user_id), orderBy('date', 'desc'), limit(3))
                const userRecommendationsDocs = await getDocs(userRecommendationsQuery)
                const userRecommendations = []
                userRecommendationsDocs.forEach(userRecommendation => {
                    userRecommendations.push(userRecommendation.data())
                });
                context.commit('setUserRecommendations', userRecommendations)
            }
        }
    }
}