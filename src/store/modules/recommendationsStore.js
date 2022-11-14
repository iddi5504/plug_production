import { collectionGroup, getDocs, limit, orderBy, query } from "firebase/firestore"
import { firestore } from "../../firebase/firebase"
export const recommendationsStore = {
    namespaced: true,
    state: {
        allRecommendations:[],
        Books: [],
        Movies: [],
        Games: [],
        Musics: [],
        BooksPosts: [],
        GamesPosts: [],
        MusicsPosts: [],
        MoviesPosts: [],
        selectedCategory:'all'
    },
    getters: {
        FEED(state){
             // Combine all recommendations types into a single arrays
             if(state.selectedCategory == 'all'){
                 return [...state.Books,...state.BooksPosts, ...state.Movies,...state.MoviesPosts, ...state.Games, ...state.GamesPosts, ...state.Musics,  ...state.MusicsPosts]
             }
             if(state.selectedCategory == 'Books'){
                return {...state.Books,...state.BooksPosts}
             }
             if(state.selectedCategory == 'Movies'){
                return {...state.Movies,...state.MoviesPosts}
             }
             if(state.selectedCategory == 'Musics'){
                return {...state.Musics,...state.MusicsPosts}
             }
             if(state.selectedCategory == 'Games'){
                return {...state.Games,...state.GamesPosts}
             }
        }
    },
    mutations: {
        setCategory(state, category){
            state.selectedCategory= category
        }
    },
    actions: {
        async getRecommendations(context) {
            const MusicsQuery = query(collectionGroup(firestore, 'MusicRecommendations'),  )
            const MoviesQuery = query(collectionGroup(firestore, 'MovieRecommendations'),  )
            const GamesQuery = query(collectionGroup(firestore, 'GameRecommendations'),  )
            const BooksQuery = query(collectionGroup(firestore, 'BookRecommendations'),  )

            // retrieve recommendations from firestore
            const MusicsDocs = await getDocs(MusicsQuery)
            const MoviesDocs = await getDocs(MoviesQuery)
            const GamesDocs = await getDocs(GamesQuery)
            const BooksDocs = await getDocs(BooksQuery)
            // assign variables to actual recommendations

            // loop through recommendations docs
            
            BooksDocs.forEach(snapshot => {
                context.state.Books.push({...snapshot.data(),type:'recommendation'})
                console.log(snapshot)
            })
            MoviesDocs.forEach(snapshot => {
                console.log({...snapshot.data(),type:'recommendation'})
                context.state.Movies.push({...snapshot.data(),type:'recommendation'})
            })
            GamesDocs.forEach(snapshot => {
                context.state.Games.push({...snapshot.data(),type:'recommendation'})
            })
            MusicsDocs.forEach(snapshot => {
                context.state.Musics.push({...snapshot.data(),type:'recommendation'})
            })
           
        },
        async getPosts(context){
            const MusicsPostsQuery = query(collectionGroup(firestore, 'MusicPosts'), limit(3) )
            const MoviesPostsQuery = query(collectionGroup(firestore, 'MoviePosts'), limit(3) )
            const GamesPostsQuery = query(collectionGroup(firestore, 'GamePosts'), limit(3) )
            const BooksPostsQuery = query(collectionGroup(firestore, 'BookPosts'), limit(3) )

            // retrieve recommendations from firestore
            const MusicsDocs = await getDocs(MusicsPostsQuery)
            const MoviesDocs = await getDocs(MoviesPostsQuery)
            const GamesDocs = await getDocs(GamesPostsQuery)
            const BooksDocs = await getDocs(BooksPostsQuery)
            // assign variables to actual recommendations

            // loop through recommendations docs
            
            BooksDocs.forEach(snapshot => {
                context.state.BooksPosts.push({...snapshot.data(),type:'post'})
                console.log(snapshot)
            })
            MoviesDocs.forEach(snapshot => {
                console.log(snapshot.data())
                context.state.MoviesPosts.push({...snapshot.data(),type:'post'})
            })
            GamesDocs.forEach(snapshot => {
                context.state.GamesPosts.push({...snapshot.data(),type:'post'})
            })
            MusicsDocs.forEach(snapshot => {
                context.state.MusicsPosts.push({...snapshot.data(),type:'post'})
            })

        }
    }
}