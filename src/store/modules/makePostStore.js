import { addDoc, collection, doc, increment, serverTimestamp, setDoc, updateDoc } from "firebase/firestore";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { storage, firestore, auth } from '../../firebase/firebase'


const makePostStore = {
    namespaced: true,
    state: {
        showMakePost: false,
        showMakePostBar: false,
        showNav: true
    },
    getters: {

    },
    mutations: {
        closeMakePost(state) {
            state.showMakePost = false
            state.showNav = true
        },
        showMakePost(state) {
            state.showMakePost = !state.showMakePost
            state.showMakePostBar = false;
            if (window.innerWidth < 600) {
                if (state.showMakePost) {
                    state.showNav = false
                }
            }
        }

    },
    actions: {
        closeMakePost(context) {
            context.commit('closeMakePost');
        },
        async makeRecommendation(context, data) {
            context.commit('showLoadScreen', 'Making recommendation', { root: true })
            const recommendData = data[0]
            const imageFile = data[1].imageFile
            const imageName = data[1].imageName
            const imageRef = ref(storage, 'recommendationImages/' + imageName)
            const category = recommendData.category
            await uploadBytes(imageRef, imageFile)
            getDownloadURL(imageRef)
                .then(async (url) => {
                    const recommendationCollection = collection(firestore, 'recommendations')
                    const userData = {
                        recommender_name: context.rootState.authStore.username,
                        recommender_id: auth.currentUser.uid,
                    }
                    if (imageFile) {
                        var extraInfo = {
                            date: serverTimestamp(),
                            imageURL: url
                        }
                    } else {
                        var extraInfo = {
                            date: serverTimestamp(),
                            imageURL: null
                        }
                    }
                    const recommendationDoc = doc(recommendationCollection)
                    const recommendationId = recommendationDoc.id
                    const completeRecommendationData = { ...recommendData, ...extraInfo, ...userData, id: recommendationId }
                    await setDoc(recommendationDoc, completeRecommendationData)
                    // update the recommendation count
                    const user_id = context.rootState.authStore.user_id
                    console.log(user_id)
                    const userDoc = doc(firestore, `/users/${user_id}`)
                    updateDoc(userDoc, {
                        number_of_recommendations: increment(1)
                    })
                    context.commit('closeMakePost')
                    context.commit('stopLoading', null, { root: true })
                    context.commit('alert', ['You have successfully made a recommendation.', 'Continue recommending to others, spread the word'], { root: true })

                })
                .catch(() => {
                    context.commit('stopLoading', null, { root: true })

                })

        },
        async post(context, postData) {
            context.commit('showLoadScreen', 'Making your post', { root: true })
            const postUnrefinedData = postData[0]
            const postFile = postData[1].postFile
            const postFileName = postData[1].postFileName
            const postMediaRef = ref(storage, 'postMedia/' + postFileName)
            const category = postUnrefinedData.postcategory
            await uploadBytes(postMediaRef, postFile)
            getDownloadURL(postMediaRef)
                .then(async (url) => {
                    var postCollection = collection(firestore, `Posts`)
                    const userData = {
                        username: context.rootState.authStore.username,
                        user_id: auth.currentUser.uid,
                    }
                    const extraInfo = {
                        date: serverTimestamp(),
                        postMediaUrl: url
                    }
                    const post = doc(postCollection)
                    const completePostData = { ...postUnrefinedData, ...extraInfo, ...userData, post_id: post.id }
                    await setDoc(
                        post,
                        completePostData
                    )

                    // update the posts count
                    const user_id = context.rootState.authStore.user_id
                    const userDoc = doc(firestore, `/users/${user_id}`)
                    updateDoc(userDoc, {
                        number_of_posts: increment(1)
                    })
                    context.commit('closeMakePost')
                    context.commit('alert', ['You have successfully made a post.', 'Check your notifications for activities on your post'], { root: true })
                    context.commit('stopLoading', null, { root: true })

                })
                .catch(() => {
                    context.commit('stopLoading', null, { root: true })

                })

        },

        async askRecommendation(context, askedRecommendationData) {
            const askedRecommendationCollection = collection(firestore, 'AskedRecommendations')
            const askedRecommendation = doc(askedRecommendationCollection)
            askedRecommendationData.Id = askedRecommendation.id
            await setDoc(
                askedRecommendation, askedRecommendationData
            )
            // update the recommendations asked count
            const user_id = context.rootState.authStore.user_id
            const userDoc = doc(firestore, `/users/${user_id}`)
            updateDoc(userDoc, {
                number_of_recommendationsAsked: increment(1)
            })


        }
    }
}

export {
    makePostStore
}