import { collection, collectionGroup, doc, getDoc, getDocs, limit, orderBy, query, startAfter, where } from "firebase/firestore"
import { firestore } from "../../firebase/firebase"
export const profileStore = {
    namespaced: true,
    state: {
        selectFeed: 'userRecommendations',
        saves: [],
        userRecommendations: [],
        usersAskedRecommendations: [],
        saves: []
    },
    getters: {
        FEED(state) {
            const selectFeed = state.selectFeed
            if (selectFeed == 'userRecommendations') {
                return state.userRecommendations
            }
            if (selectFeed == 'usersAskedRecommendations') {
                return state.usersAskedRecommendations
            }
            if (selectFeed == 'saved') {
                return state.saves
            }
        }
    },
    mutations: {
        setUserRecommendations(state, userRecommendations) {
            state.userRecommendations = userRecommendations
        },
        setUsersAskedRecommendations(state, usersAskedRecommendations) {
            state.usersAskedRecommendations = usersAskedRecommendations
        },
        setSaves(state, saves) {
            state.saves = saves
        },
    },
    actions: {
        async selectFeed(context, payload) {
            context.state.selectFeed = payload
            if (payload == 'saved') {
                const savedRecommendationIds = context.rootState.authStore.savedRecommendations
                const savedAskedRecommendationIds = context.rootState.authStore.savedAskedRecommendations
                // check if saves already fetched if no fetch from firestore
                if (context.state.saves.length > 0) return
                // loop through saved recommendations
                let saves = []
                savedRecommendationIds.forEach(async (recommendationId) => {
                    const recommendationDoc = doc(firestore, 'recommendations', recommendationId)
                    const recommendation = await getDoc(recommendationDoc)
                    saves.push(recommendation.data())
                })
                savedAskedRecommendationIds.forEach(async (askedRecommendationId) => {
                    const askedRecommendationDoc = doc(firestore, 'AskedRecommendations', askedRecommendationId)
                    const askedRecommendation = await getDoc(askedRecommendationDoc)
                    saves.push(askedRecommendation.data())
                })
                _.shuffle(saves)
                context.commit('setSaves', saves)

            }
            const user_id = context.rootState.authStore.user_id
            if (payload == 'userRecommendations') {
                console.log(user_id)
                const userRecommendationsQuery = query(collection(firestore, 'recommendations'), where('recommender_id', '==', user_id), orderBy('date', 'desc'), limit(3))
                const userRecommendationsDocs = await getDocs(userRecommendationsQuery)
                const userRecommendations = []
                userRecommendationsDocs.forEach(userRecommendation => {
                    userRecommendations.push(userRecommendation.data())
                });
                context.commit('setUserRecommendations', userRecommendations)
            }

            if (payload == 'usersAskedRecommendations') {
                const usersAskedRecommendationsQuery = query(collection(firestore, 'AskedRecommendations'), where('user_id', '==', user_id), orderBy('date', 'desc'), limit(3))
                const usersAskedRecommendationsDocs = await getDocs(usersAskedRecommendationsQuery)
                const usersAskedRecommendations = []
                usersAskedRecommendationsDocs.forEach(userAskedRecommendation => {
                    usersAskedRecommendations.push(userAskedRecommendation.data())
                });
                context.commit('setUsersAskedRecommendations', usersAskedRecommendations)
            }
        },

    }
}