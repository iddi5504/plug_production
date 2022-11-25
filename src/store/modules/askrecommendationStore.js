export const askRecommendationStore = {
    namespaced: true,
    state: {
        showAskRecommendationContainer: false
    },
    mutations: {
        setShowAskRecommendationContainer(state, show) {
            console.log(state)
            state.showAskRecommendationContainer = show;
        }
    }
}
