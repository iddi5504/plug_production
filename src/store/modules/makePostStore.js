import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { storage, firestore, auth } from '../../firebase/firebase'


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
        },
        async makeRecommendation(context,data){
            const recommendData=data[0]
            const imageFile=data[1].imageFile
            const imageName=data[1].imageName
            const imageRef= ref(storage,'recommendationImages/'+imageName)
            await uploadBytes(imageRef,imageFile)
            getDownloadURL(imageRef)
            .then((url)=>{
                if(recommendData.category == 'Game'){
                    var recommendationCollection= collection(firestore, 'recommendations/FpdYC7uunSCoZ5BrjbDX/games')
                }else if(recommendData.category == 'Movie'){
                    var recommendationCollection= collection(firestore, 'recommendations/AbImXp8e3ZyMeNhFDamz/movies')
                }
                
                const userData= {
                    recommender_name:context.rootState.authStore.username,
                    recommender_id:auth.currentUser.uid,

                }

                const extraInfo= {
                    date:serverTimestamp(),
                    imageURL:url
                }

                const completeRecommendationData= {...recommendData, ...extraInfo, ...userData}
                addDoc(recommendationCollection,completeRecommendationData)
                .then(data =>{
                    console.log(data)
                })
                
            })

        }
    }
}

export {
    makePostStore
}