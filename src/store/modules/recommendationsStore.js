import { collectionGroup, getDocs, limit, orderBy, query, startAfter } from "firebase/firestore"
import { firestore } from "../../firebase/firebase"
export const recommendationsStore = {
    namespaced: true,
    state: {
        allRecommendations: [],
        BookRecommendations: [],
        MovieRecommendations: [],
        GameRecommendations: [],
        MusicRecommendations: [],
        BookPosts: [],
        GamePosts: [],
        MusicPosts: [],
        MoviePosts: [],
        selectedCategory: 'all',
        MusicRecommendationStartingDoc: {},
        MovieRecommendationStartingDoc: {},
        GameRecommendationStartingDoc: {},
        BookRecommendationStartingDoc: {},
        MusicPostStartingDoc: {},
        MoviePostStartingDoc: {},
        GamePostStartingDoc: {},
        BookPostStartingDoc: {},
        lazyLoadedMusicFeed:[],
        lazyLoadedBookRecommendations: [],
        lazyLoadedGameRecommendations: [],
        lazyLoadedMusicRecommendations: [],
        lazyLoadedMovieRecommendations: [],
        lazyLoadedBookPosts: [],
        lazyLoadedMoviePosts: [],
        lazyLoadedGamePosts: [],
        lazyLoadedMusicPosts: [],
        musicFeed:[],
        allLazyLoadedPosts: [],
        allLazyLoadedRecommendations: [],
        newRequestMade: false,
        currentCategoryData:[]
    },
    getters: {
        FEED(state) {
            // Combine all recommendations types into a single arrays
            if (state.selectedCategory == 'all') {
                const allLazyLoadedData = _.shuffle([...state.allLazyLoadedRecommendations, ...state.allLazyLoadedPosts])
                const randomizedfeed = [...state.BookRecommendations, ...state.BookPosts, ...state.MovieRecommendations, ...state.MoviePosts, ...state.GameRecommendations, ...state.GamePosts, ...state.MusicRecommendations, ...state.MusicPosts]
                allLazyLoadedData.forEach(loadedData => {
                    randomizedfeed.push(loadedData)
                })
                return randomizedfeed
            }
            if (state.selectedCategory == 'Books') {
                
                const bookFeed = [...state.BookRecommendations, ...state.BookPosts]
                const lazyLoadedBookData= _.shuffle([...state.lazyLoadedBookRecommendations, ...state.lazyLoadedBookPosts])
                lazyLoadedBookData.forEach(loadedData => {
                    bookFeed.push(loadedData)
                })
                console.log(lazyLoadedBookData)
                return bookFeed
            }
            if (state.selectedCategory == 'Movies') {
                const shuffledFeed = _.shuffle([...state.MovieRecommendations, ...state.MoviePosts])
                return shuffledFeed
            }
            if (state.selectedCategory == 'Musics') {
                let lazyLoadedMusicFeed= [...state.lazyLoadedMusicFeed]
                lazyLoadedMusicFeed.forEach(loadedData => {
                    state.musicFeed.push(loadedData)
                })
                state.lazyLoadedMusicFeed=[]
                state.lazyLoadedMusicPosts=[]
                return state.musicFeed
            }
            if (state.selectedCategory == 'Games') {
                const shuffledFeed = _.shuffle([...state.GameRecommendations, ...state.GamePosts])
                return shuffledFeed
            }
        },
        NEWREQUESTMADE(state) {
            return state.newRequestMade
        }
    },
    mutations: {
        setCategory(state, category) {
            state.selectedCategory = category
        },
        // setLazyLoadedData(state, lazyLoadedData){
        //     state.fee
        // },
        newRequestMade(state, newRequestMade) {
            state.newRequestMade = newRequestMade
        },
        setlazyLoadedMusicFeed(state){
            state.lazyLoadedMusicFeed= _.shuffle([...state.lazyLoadedMusicPosts, ...state.lazyLoadedMusicRecommendations])
        },
        setMusicFeed(state){
            state.musicFeed= _.shuffle([...state.MusicRecommendations, ...state.MusicPosts])
        }
    },
    actions: {
        async getRecommendations(context) {
            const MusicsQuery = query(collectionGroup(firestore, 'MusicRecommendations'), orderBy('upvotes', "desc"), limit(1), startAfter(context.state.MusicRecommendationStartingDoc))
            const MoviesQuery = query(collectionGroup(firestore, 'MovieRecommendations'), orderBy('upvotes', "desc"), limit(1), startAfter(context.state.MovieRecommendationStartingDoc))
            const GamesQuery = query(collectionGroup(firestore, 'GameRecommendations'), orderBy('upvotes', "desc"), limit(1), startAfter(context.state.GameRecommendationStartingDoc))
            const BooksQuery = query(collectionGroup(firestore, 'BookRecommendations'), orderBy('upvotes', "desc"), limit(1), startAfter(context.state.BookRecommendationStartingDoc))

            // retrieve recommendations from firestore
            const MusicsDocs = await getDocs(MusicsQuery)
            const MoviesDocs = await getDocs(MoviesQuery)
            const GamesDocs = await getDocs(GamesQuery)
            const BooksDocs = await getDocs(BooksQuery)

            const bookRecommendations = []
            const musicRecommendations = []
            const gameRecommendations = []
            const movieRecommendations = []

            // assign the starting doc to all recommendations          
            context.state.MusicRecommendationStartingDoc = MusicsDocs.docs[MusicsDocs.docs.length - 1]
            context.state.MovieRecommendationStartingDoc = MoviesDocs.docs[MoviesDocs.docs.length - 1]
            context.state.GameRecommendationStartingDoc = GamesDocs.docs[GamesDocs.docs.length - 1]
            context.state.BookRecommendationStartingDoc = BooksDocs.docs[BooksDocs.docs.length - 1]

            // loop through recommendations docs
            BooksDocs.forEach(snapshot => {
                bookRecommendations.push({ ...snapshot.data(), type: 'recommendation' })
            })
            MoviesDocs.forEach(snapshot => {
                movieRecommendations.push({ ...snapshot.data(), type: 'recommendation' })
            })
            GamesDocs.forEach(snapshot => {
                gameRecommendations.push({ ...snapshot.data(), type: 'recommendation' })
            })
            MusicsDocs.forEach(snapshot => {
                musicRecommendations.push({ ...snapshot.data(), type: 'recommendation' })
            })

            const allRecommendations = _.shuffle([...bookRecommendations, ...gameRecommendations, ...musicRecommendations, ...movieRecommendations])
            context.state.allRecommendations = allRecommendations

            context.state.MovieRecommendations = _.shuffle(movieRecommendations)
            context.state.GameRecommendations = _.shuffle(gameRecommendations)
            context.state.MusicRecommendations = _.shuffle(musicRecommendations)
            context.state.BookRecommendations = _.shuffle(bookRecommendations)
            context.commit('setMusicFeed')

        },
        async getPosts(context) {
            const MusicsPostsQuery = query(collectionGroup(firestore, 'MusicPosts'), orderBy('upvotes', "desc"), limit(1), startAfter(context.state.MusicPostStartingDoc))
            const MoviesPostsQuery = query(collectionGroup(firestore, 'MoviePosts'), orderBy('upvotes', "desc"), limit(1), startAfter(context.state.MoviePostStartingDoc))
            const GamesPostsQuery = query(collectionGroup(firestore, 'GamePosts'), orderBy('upvotes', "desc"), limit(1), startAfter(context.state.GamePostStartingDoc))
            const BooksPostsQuery = query(collectionGroup(firestore, 'BookPosts'), orderBy('upvotes', "desc"), limit(1), startAfter(context.state.BookPostStartingDoc))

            // retrieve posts from firestore
            const MusicsDocs = await getDocs(MusicsPostsQuery)
            const MoviesDocs = await getDocs(MoviesPostsQuery)
            const GamesDocs = await getDocs(GamesPostsQuery)
            const BooksDocs = await getDocs(BooksPostsQuery)
            // assign variables to actual recommendations

            // assign the starting doc to all recommendati           
            context.state.MusicPostStartingDoc = MusicsDocs.docs[MusicsDocs.docs.length - 1]
            context.state.MoviePostStartingDoc = MoviesDocs.docs[MoviesDocs.docs.length - 1]
            context.state.GamePostStartingDoc = GamesDocs.docs[GamesDocs.docs.length - 1]
            context.state.BookPostStartingDoc = BooksDocs.docs[BooksDocs.docs.length - 1]

            // loop through recommendations docs
            BooksDocs.forEach(snapshot => {
                context.state.BookPosts.push({ ...snapshot.data(), type: 'post' })
            })
            MoviesDocs.forEach(snapshot => {
                context.state.MoviePosts.push({ ...snapshot.data(), type: 'post' })
            })
            GamesDocs.forEach(snapshot => {
                context.state.GamePosts.push({ ...snapshot.data(), type: 'post' })
            })
            MusicsDocs.forEach(snapshot => {
                context.state.MusicPosts.push({ ...snapshot.data(), type: 'post' })
            })
            context.commit('setMusicFeed')


        },
        async lazyLoadPosts(context) {
            const category = context.state.selectedCategory


            switch (category) {
                case 'Musics':
                    //  lazy load music recommendations
                        const MusicsQuery = query(collectionGroup(firestore, 'MusicRecommendations'), orderBy('upvotes', "desc"), startAfter(context.state.MusicRecommendationStartingDoc || 0), limit(1))
                        const MusicsDocs = await getDocs(MusicsQuery)
                        context.state.MusicRecommendationStartingDoc = MusicsDocs.docs[MusicsDocs.docs.length - 1]
                        let lazyLoadedMusicRecommendations=[]

                        if(MusicsDocs.size == 0) return
                        MusicsDocs.forEach(snapshot => {
                            lazyLoadedMusicRecommendations.push({ ...snapshot.data(), type: 'recommendation' })
                        })
                        
                        context.state.lazyLoadedMusicRecommendations= lazyLoadedMusicRecommendations
                        
                        // lazy load music posts
                        let lazyLoadedMusicPosts = []
                        const MusicPostQuery = query(collectionGroup(firestore, 'MusicPosts'), orderBy('upvotes', "desc"), startAfter(context.state.MusicPostStartingDoc || 0),  limit(1))
                        const postMusicsDocs = await getDocs(MusicPostQuery)
                        if(postMusicsDocs.size == 0) return
                        context.state.MusicPostStartingDoc = postMusicsDocs.docs[postMusicsDocs.docs.length - 1]
                        postMusicsDocs.forEach(snapshot => {
                            lazyLoadedMusicPosts.push({ ...snapshot.data(), type: 'post' })
                        })
                        context.state.lazyLoadedMusicPosts = lazyLoadedMusicPosts
                        context.commit('setlazyLoadedMusicFeed')
                        lazyLoadedMusicPosts=[]


                    break;

                default:
                    break;
            }

            // const MusicsQuery = query(collectionGroup(firestore, 'MusicRecommendations'), orderBy('upvotes', "desc"), limit(1), startAfter(context.state.MusicRecommendationStartingDoc))
            // const MoviesQuery = query(collectionGroup(firestore, 'MovieRecommendations'), orderBy('upvotes', "desc"), limit(1), startAfter(context.state.MovieRecommendationStartingDoc))
            // const GamesQuery = query(collectionGroup(firestore, 'GameRecommendations'), orderBy('upvotes', "desc"), limit(1), startAfter(context.state.GameRecommendationStartingDoc))
            // const BooksQuery = query(collectionGroup(firestore, 'BookRecommendations'), orderBy('upvotes', "desc"), limit(1), startAfter(context.state.BookRecommendationStartingDoc))

            // // retrieve recommendations from firestore
            // const MusicsDocs = await getDocs(MusicsQuery)
            // const MoviesDocs = await getDocs(MoviesQuery)
            // const GamesDocs = await getDocs(GamesQuery)
            // const BooksDocs = await getDocs(BooksQuery)

            // const lazyLoadedBookRecommendations = []
            // const lazyLoadedMusicRecommendations = []
            // const lazyLoadedGameRecommendations = []
            // const lazyLoadedMovieRecommendations = []

            // // loop through recommendations docs
            // BooksDocs.forEach(snapshot => {
            //     lazyLoadedBookRecommendations.push({ ...snapshot.data(), type: 'recommendation' })
            // })
            // MoviesDocs.forEach(snapshot => {
            //     lazyLoadedMovieRecommendations.push({ ...snapshot.data(), type: 'recommendation' })
            // })
            // GamesDocs.forEach(snapshot => {
            //     lazyLoadedGameRecommendations.push({ ...snapshot.data(), type: 'recommendation' })
            // })
            // MusicsDocs.forEach(snapshot => {
            //     lazyLoadedMusicRecommendations.push({ ...snapshot.data(), type: 'recommendation' })
            // })


            // // lazy load posts
            // const lazyLoadedBookPosts = []
            // const lazyLoadedMusicPosts = []
            // const lazyLoadedGamePosts = []
            // const lazyLoadedMoviePosts = []

            // const MusicPostQuery = query(collectionGroup(firestore, 'MusicPosts'), orderBy('upvotes', "desc"), limit(1), startAfter(context.state.MusicPostStartingDoc))
            // const MoviePostQuery = query(collectionGroup(firestore, 'MoviePosts'), orderBy('upvotes', "desc"), limit(1), startAfter(context.state.MoviePostStartingDoc))
            // const GamePostQuery = query(collectionGroup(firestore, 'GamePosts'), orderBy('upvotes', "desc"), limit(1), startAfter(context.state.GamePostStartingDoc))
            // const BookPostQuery = query(collectionGroup(firestore, 'BookPosts'), orderBy('upvotes', "desc"), limit(1), startAfter(context.state.BookPostStartingDoc))

            // // retrieve recommendations from firestore
            // const postMusicsDocs = await getDocs(MusicPostQuery)
            // const postMoviesDocs = await getDocs(MoviePostQuery)
            // const postGamesDocs = await getDocs(GamePostQuery)
            // const postBooksDocs = await getDocs(BookPostQuery)

            // // loop through recommendations docs
            // postBooksDocs.forEach(snapshot => {
            //     lazyLoadedBookPosts.push({ ...snapshot.data(), type: 'post' })
            //     console.log(snapshot.data())
            // })
            // postMoviesDocs.forEach(snapshot => {
            //     lazyLoadedMoviePosts.push({ ...snapshot.data(), type: 'post' })
            // })
            // postGamesDocs.forEach(snapshot => {
            //     lazyLoadedGamePosts.push({ ...snapshot.data(), type: 'post' })
            // })
            // postMusicsDocs.forEach(snapshot => {
            //     lazyLoadedMusicPosts.push({ ...snapshot.data(), type: 'post' })
            // })

            // const allLazyLoadedRecommendations = _.shuffle([...lazyLoadedBookRecommendations, ...lazyLoadedGameRecommendations, ...lazyLoadedMusicRecommendations, ...lazyLoadedMovieRecommendations])
            // const allLazyLoadedPosts = _.shuffle([...lazyLoadedBookPosts, ...lazyLoadedGamePosts, ...lazyLoadedMusicPosts, ...lazyLoadedMoviePosts])
            // // set the state for lazy loaded posts
            // context.state.allLazyLoadedPosts = allLazyLoadedPosts
            // context.state.allLazyLoadedRecommendations = allLazyLoadedRecommendations
            // context.state.lazyLoadedMoviePosts = _.shuffle(lazyLoadedMoviePosts)
            // context.state.lazyLoadedGamePosts = _.shuffle(lazyLoadedGamePosts)
            // context.state.lazyLoadedMusicPosts = _.shuffle(lazyLoadedMusicPosts)
            // context.state.lazyLoadedBookPosts = _.shuffle(lazyLoadedBookPosts)
            // // set the state for lazy loaded recommendations
            // context.state.lazyLoadedMovieRecommendations = _.shuffle(lazyLoadedMovieRecommendations)
            // context.state.lazyLoadedGameRecommendations = _.shuffle(lazyLoadedGameRecommendations)
            // context.state.lazyLoadedMusicRecommendations = _.shuffle(lazyLoadedMusicRecommendations)
            // context.state.lazyLoadedBookRecommendations = _.shuffle(lazyLoadedBookRecommendations)


        }
    }
}