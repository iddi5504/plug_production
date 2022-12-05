import { collection, collectionGroup, getDocs, limit, orderBy, query, startAfter, where } from "firebase/firestore"
import { firestore } from "../../firebase/firebase"
export const recommendationsStore = {
    namespaced: true,
    state: {
        BookRecommendations: [],
        MovieRecommendations: [],
        GameRecommendations: [],
        MusicRecommendations: [],
        BookPosts: [],
        GamePosts: [],
        MusicPosts: [],
        MoviePosts: [],
        selectedCategory: 'all',
        lazyLoadedMusicFeed: [],
        lazyLoadedMovieFeed: [],
        lazyLoadedGameFeed: [],
        lazyLoadedBookFeed: [],
        lazyLoadedBookRecommendations: [],
        lazyLoadedGameRecommendations: [],
        lazyLoadedMusicRecommendations: [],
        lazyLoadedMovieRecommendations: [],
        lazyLoadedBookPosts: [],
        lazyLoadedMoviePosts: [],
        lazyLoadedGamePosts: [],
        lazyLoadedMusicPosts: [],
        allFeed: [],
        allLazyLoadedFeed: [],
        musicFeed: [],
        bookFeed: [],
        gameFeed: [],
        movieFeed: [],
        allLazyLoadedPosts: [],
        allLazyLoadedRecommendations: [],
        newRequestMade: false,
        MusicRecommendationStartingDoc: {},
        MovieRecommendationStartingDoc: {},
        GameRecommendationStartingDoc: {},
        BookRecommendationStartingDoc: {},
        MusicPostStartingDoc: {},
        MoviePostStartingDoc: {},
        GamePostStartingDoc: {},
        BookPostStartingDoc: {},
        currentCategoryData: [],
        // ask rerecommenatio  state variables
        askedRecommendations: []


    },
    getters: {
        FEED(state) {
            // Combine all recommendations types into a single arrays
            if (state.selectedCategory == 'all') {
                return state.allFeed
            }
            if (state.selectedCategory == 'Books') {
                let lazyLoadedBookFeed = [...state.lazyLoadedBookFeed]
                lazyLoadedBookFeed.forEach(loadedData => {
                    state.bookFeed.push(loadedData)
                })
                state.lazyLoadedBookFeed = []
                state.lazyLoadedBookPosts = []
                console.log(state.bookFeed)
                return state.bookFeed
            }
            if (state.selectedCategory == 'Movies') {
                let lazyLoadedMovieFeed = [...state.lazyLoadedMovieFeed]
                lazyLoadedMovieFeed.forEach(loadedData => {
                    state.movieFeed.push(loadedData)
                })
                // state.lazyLoadedMovieFeed = []
                // state.lazyLoadedMoviePosts = []
                console.log(state.movieFeed)
                return state.movieFeed
            }
            if (state.selectedCategory == 'Musics') {
                let lazyLoadedMusicFeed = [...state.lazyLoadedMusicFeed]
                lazyLoadedMusicFeed.forEach(loadedData => {
                    state.musicFeed.push(loadedData)
                })
                state.lazyLoadedMusicFeed = []
                state.lazyLoadedMusicPosts = []
                return state.musicFeed
            }
            if (state.selectedCategory == 'Games') {
                return state.gameFeed
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
        deleteRecommendation(state, payload) {
            // later
        },
        newRequestMade(state, newRequestMade) {
            state.newRequestMade = newRequestMade
        },
        setlazyLoadedMusicFeed(state) {
            state.lazyLoadedMusicFeed = _.shuffle([...state.lazyLoadedMusicPosts, ...state.lazyLoadedMusicRecommendations])
        },
        setMusicFeed(state) {
            state.musicFeed = _.shuffle([...state.MusicRecommendations, ...state.MusicPosts])
        },
        setlazyLoadedMovieFeed(state) {
            state.lazyLoadedMovieFeed = _.shuffle([...state.lazyLoadedMoviePosts, ...state.lazyLoadedMovieRecommendations])
        },
        setMovieFeed(state) {
            state.movieFeed = _.shuffle([...state.MovieRecommendations, ...state.MoviePosts])
        },
        setlazyLoadedBookFeed(state) {
            state.lazyLoadedBookFeed = _.shuffle([...state.lazyLoadedBookPosts, ...state.lazyLoadedBookRecommendations])
        },
        setBookFeed(state) {
            state.bookFeed = _.shuffle([...state.BookRecommendations, ...state.BookPosts])
        },
        setlazyLoadedGameFeed(state) {
            const gameFeed = _.shuffle([...state.lazyLoadedGamePosts, ...state.lazyLoadedGameRecommendations])
            gameFeed.forEach(feed => {
                state.gameFeed.push(feed)
                console.log(feed)
            })
            console.log(state.gameFeed)
            state.lazyLoadedGamePosts = []
            state.lazyLoadedGameRecommendations = []
        },
        setGameFeed(state) {
            // state.gameFeed = _.shuffle([...state.GameRecommendations, ...state.GamePosts])
        },
        setallLazyLoadedFeed(state) {
            state.allLazyLoadedFeed = _.shuffle([...state.lazyLoadedBookRecommendations, ...state.lazyLoadedBookPosts, ...state.lazyLoadedMovieRecommendations, ...state.lazyLoadedMoviePosts, ...state.lazyLoadedGameRecommendations, ...state.lazyLoadedGamePosts, ...state.lazyLoadedMusicRecommendations, ...state.lazyLoadedMusicPosts])
        },
        setAllFeed(state) {
            state.allFeed = _.shuffle([...state.BookRecommendations, ...state.BookPosts, ...state.MovieRecommendations, ...state.MoviePosts, ...state.GameRecommendations, ...state.GamePosts, ...state.MusicRecommendations, ...state.MusicPosts])
        }
    },
    actions: {
        async getRecommendations(context) {
            const MusicsQuery = query(collection(firestore, 'recommendations'), where('category', '==', 'Music'), orderBy('upvotes', "desc"), startAfter(context.state.MusicRecommendationStartingDoc))
            const MoviesQuery = query(collection(firestore, 'recommendations'), where('category', '==', 'Movie'), orderBy('upvotes', "desc"), startAfter(context.state.MovieRecommendationStartingDoc))
            const GamesQuery = query(collection(firestore, 'recommendations'), where('category', '==', 'Game'), orderBy('upvotes', "desc"), startAfter(context.state.GameRecommendationStartingDoc))
            const BooksQuery = query(collection(firestore, 'recommendations'), where('category', '==', 'Book'), orderBy('upvotes', "desc"), startAfter(context.state.BookRecommendationStartingDoc))

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
                bookRecommendations.push({ ...snapshot.data() })
            })
            MoviesDocs.forEach(snapshot => {
                movieRecommendations.push({ ...snapshot.data() })
            })
            GamesDocs.forEach(snapshot => {
                gameRecommendations.push({ ...snapshot.data() })
            })
            MusicsDocs.forEach(snapshot => {
                musicRecommendations.push({ ...snapshot.data() })
            })


            context.state.MovieRecommendations = _.shuffle(movieRecommendations)
            context.state.GameRecommendations = _.shuffle(gameRecommendations)
            context.state.MusicRecommendations = _.shuffle(musicRecommendations)
            context.state.BookRecommendations = _.shuffle(bookRecommendations)
            context.commit('setMusicFeed')
            context.commit('setMovieFeed')
            context.commit('setBookFeed')
            context.commit('setGameFeed')
            context.commit('setAllFeed')


        },
        async getPosts(context) {
            const MusicsPostsQuery = query(collection(firestore, 'Posts'), where('postcategory', '==', 'Music'), orderBy('upvotes', "desc"), startAfter(context.state.MusicPostStartingDoc))
            const MoviesPostsQuery = query(collection(firestore, 'Posts'), where('postcategory', '==', 'Movie'), orderBy('upvotes', "desc"), startAfter(context.state.MoviePostStartingDoc))
            const GamesPostsQuery = query(collection(firestore, 'Posts'), where('postcategory', '==', 'Game'), orderBy('upvotes', "desc"), startAfter(context.state.GamePostStartingDoc))
            const BooksPostsQuery = query(collection(firestore, 'Posts'), where('postcategory', '==', 'Book'), orderBy('upvotes', "desc"), startAfter(context.state.BookPostStartingDoc))

            // retrieve posts from firestore
            const MusicsDocs = await getDocs(MusicsPostsQuery)
            const MoviesDocs = await getDocs(MoviesPostsQuery)
            const GamesDocs = await getDocs(GamesPostsQuery)
            const BooksDocs = await getDocs(BooksPostsQuery)
            // assign variables to actual recommendations

            // assign the starting doc to all recommendati   
            if (MusicsDocs.size > 0) {
                context.state.MusicPostStartingDoc = MusicsDocs.docs[MusicsDocs.docs.length - 1]
            }
            if (MoviesDocs.size > 0) {
                context.state.MoviePostStartingDoc = MoviesDocs.docs[MoviesDocs.docs.length - 1]
            }
            if (GamesDocs.size > 0) {
                context.state.GamePostStartingDoc = GamesDocs.docs[GamesDocs.docs.length - 1]
            }
            if (BooksDocs.size > 0) {
                context.state.BookPostStartingDoc = BooksDocs.docs[BooksDocs.docs.length - 1]
            }

            // loop through recommendations docs
            BooksDocs.forEach(snapshot => {
                context.state.BookPosts.push({ ...snapshot.data() })
            })
            MoviesDocs.forEach(snapshot => {
                context.state.MoviePosts.push({ ...snapshot.data() })
            })
            GamesDocs.forEach(snapshot => {
                context.state.GamePosts.push({ ...snapshot.data() })
            })
            MusicsDocs.forEach(snapshot => {
                context.state.MusicPosts.push({ ...snapshot.data() })
            })
            context.commit('setMusicFeed')
            context.commit('setMovieFeed')
            context.commit('setBookFeed')
            context.commit('setGameFeed')
            // context.commit('setAllFeed')



        },
        // async lazyLoadPosts(context) {
        //     const category = context.state.selectedCategory
        //     switch (category) {
        //         case 'all':
        //             const allMusicsQuery = query(collection(firestore, 'Posts'),  orderBy('upvotes', "desc"), startAfter(context.state.MusicRecommendationStartingDoc))
        //             const allMoviesQuery = query(collection(firestore, 'Posts'),  orderBy('upvotes', "desc"), startAfter(context.state.MovieRecommendationStartingDoc))
        //             const allGamesQuery = query(collection(firestore, 'Posts'),  orderBy('upvotes', "desc"), startAfter(context.state.GameRecommendationStartingDoc))
        //             const allBooksQuery = query(collection(firestore, 'Posts'),  orderBy('upvotes', "desc"), startAfter(context.state.BookRecommendationStartingDoc))

        //             // retallrieve recommendations from firestore
        //             const allMusicsDocs = await getDocs(allMusicsQuery)
        //             const allMoviesDocs = await getDocs(allMoviesQuery)
        //             const allGamesDocs = await getDocs(allGamesQuery)
        //             const allBooksDocs = await getDocs(allBooksQuery)
        //             const allLazyLoadedBookRecommendations = []
        //             const allLazyLoadedMusicRecommendations = []
        //             const allLazyLoadedGameRecommendations = []
        //             const allLazyLoadedMovieRecommendations = []

        //             // assign the starting doc to all recommendations   
        //             if (allMusicsDocs.size > 0) {
        //                 context.state.MusicRecommendationStartingDoc = allMusicsDocs.docs[allMusicsDocs.docs.length - 1]
        //             }
        //             else {
        //                 context.state.MusicRecommendationStartingDoc = null
        //                 console.log('this happened')
        //             }
        //             if (allMoviesDocs.size > 0) {
        //                 context.state.MovieRecommendationStartingDoc = allMoviesDocs.docs[allMoviesDocs.docs.length - 1]
        //             }
        //             // else{
        //             //     context.state.MovieRecommendationStartingDoc= null
        //             // }
        //             if (allGamesDocs.size > 0) {
        //                 context.state.GameRecommendationStartingDoc = allGamesDocs.docs[allGamesDocs.docs.length - 1]
        //             }
        //             // else{
        //             //     context.state.GameRecommendationStartingDoc = null
        //             // }
        //             if (allBooksDocs.size > 0) {
        //                 context.state.BookRecommendationStartingDoc = allBooksDocs.docs[allBooksDocs.docs.length - 1]
        //             }
        //             // else{
        //             //     context.state.BookRecommendationStartingDoc = null
        //             // }

        //             // loop through recommendations docs
        //             allBooksDocs.forEach(snapshot => {
        //                 allLazyLoadedBookRecommendations.push({ ...snapshot.data() })
        //             })
        //             allMoviesDocs.forEach(snapshot => {
        //                 allLazyLoadedMovieRecommendations.push({ ...snapshot.data() })
        //             })
        //             allGamesDocs.forEach(snapshot => {
        //                 allLazyLoadedGameRecommendations.push({ ...snapshot.data() })
        //             })
        //             allMusicsDocs.forEach(snapshot => {
        //                 allLazyLoadedMusicRecommendations.push({ ...snapshot.data() })
        //             })


        //             // lazy load posts
        //             const allLazyLoadedBookPosts = []
        //             const allLazyLoadedMusicPosts = []
        //             const allLazyLoadedGamePosts = []
        //             const allLazyLoadedMoviePosts = []

        //             const allMusicPostQuery = query(collectionGroup(firestore, 'MusicPosts'), orderBy('upvotes', "desc"), startAfter(context.state.MusicPostStartingDoc))
        //             const allMoviePostQuery = query(collectionGroup(firestore, 'MoviePosts'), orderBy('upvotes', "desc"), startAfter(context.state.MoviePostStartingDoc))
        //             const allGamePostQuery = query(collectionGroup(firestore, 'GamePosts'), orderBy('upvotes', "desc"), startAfter(context.state.GamePostStartingDoc))
        //             const allBookPostQuery = query(collectionGroup(firestore, 'BookPosts'), orderBy('upvotes', "desc"), startAfter(context.state.BookPostStartingDoc))

        //             // retrieve recommendations from firestore
        //             const allPostMusicsDocs = await getDocs(allMusicPostQuery)
        //             const allPostMoviesDocs = await getDocs(allMoviePostQuery)
        //             const allPostGamesDocs = await getDocs(allGamePostQuery)
        //             const allPostBooksDocs = await getDocs(allBookPostQuery)

        //             console.log(allPostMoviesDocs.docs)

        //             // assign the starting doc to all recommendations   
        //             console.log("🚀 ~ file: recommendationsStore.js ~ line 325 ~ lazyLoadPosts ~ allPostMusicsDocs.size > 0", allPostMusicsDocs.size > 0)
        //             if (allPostMusicsDocs.size > 0) {
        //                 context.state.MusicPostStartingDoc = allPostMusicsDocs.docs[allPostMusicsDocs.docs.length - 1]
        //             }
        //             // else{
        //             //     context.state.MusicPostStartingDoc = null
        //             // }
        //             if (allPostMoviesDocs.size > 0) {
        //                 context.state.MoviePostStartingDoc = allPostMoviesDocs.docs[allPostMoviesDocs.docs.length - 1]
        //             }
        //             // else{
        //             //     context.state.MoviePostStartingDoc = null
        //             // }
        //             if (allPostGamesDocs.size > 0) {
        //                 context.state.GamePostStartingDoc = allPostGamesDocs.docs[allPostGamesDocs.docs.length - 1]
        //             }
        //             // else{
        //             //     context.state.GamePostStartingDoc = null
        //             // }
        //             if (allPostBooksDocs.size > 0) {
        //                 context.state.BookPostStartingDoc = allPostBooksDocs.docs[allPostBooksDocs.docs.length - 1]
        //             }
        //             // else{
        //             //     context.state.BookPostStartingDoc = null
        //             // }

        //             // loop through recommendations docs
        //             allPostBooksDocs.forEach(snapshot => {
        //                 allLazyLoadedBookPosts.push({ ...snapshot.data(), type: 'post', uid: snapshot.id })
        //                 console.log(snapshot.data())
        //             })
        //             allPostMoviesDocs.forEach(snapshot => {
        //                 allLazyLoadedMoviePosts.push({ ...snapshot.data(), type: 'post', uid: snapshot.id })
        //             })
        //             allPostGamesDocs.forEach(snapshot => {
        //                 allLazyLoadedGamePosts.push({ ...snapshot.data(), type: 'post', uid: snapshot.id })
        //             })
        //             allPostMusicsDocs.forEach(snapshot => {
        //                 allLazyLoadedMusicPosts.push({ ...snapshot.data(), type: 'post', uid: snapshot.id })
        //             })

        //             // set the state for lazy loaded posts
        //             context.state.lazyLoadedMoviePosts = _.shuffle(allLazyLoadedMoviePosts)
        //             context.state.lazyLoadedGamePosts = _.shuffle(allLazyLoadedGamePosts)
        //             context.state.lazyLoadedMusicPosts = _.shuffle(allLazyLoadedMusicPosts)
        //             context.state.lazyLoadedBookPosts = _.shuffle(allLazyLoadedBookPosts)
        //             // set the state for lazy loaded recommendations
        //             context.state.lazyLoadedMovieRecommendations = _.shuffle(allLazyLoadedMovieRecommendations)
        //             context.state.lazyLoadedGameRecommendations = _.shuffle(allLazyLoadedGameRecommendations)
        //             context.state.lazyLoadedMusicRecommendations = _.shuffle(allLazyLoadedMusicRecommendations)
        //             context.state.lazyLoadedBookRecommendations = _.shuffle(allLazyLoadedBookRecommendations)
        //             context.commit('setallLazyLoadedFeed')
        //             context.commit('setlazyLoadedGameFeed')

        //             context.commit('setMusicFeed')
        //             context.commit('setMovieFeed')
        //             context.commit('setBookFeed')
        //             context.commit('setGameFeed')

        //             break;
        //         case 'Musics':
        //             //  lazy load music recommendations
        //             const MusicsQuery = query(collectionGroup(firestore, 'MusicRecommendations'), orderBy('upvotes', "desc"), startAfter(context.state.MusicRecommendationStartingDoc))
        //             const MusicsDocs = await getDocs(MusicsQuery)
        //             let lazyLoadedMusicRecommendations = []
        //             console.log(MusicsDocs.docs)
        //             console.log("🚀 ~ file: recommendationsStore.js ~ line 383 ~ lazyLoadPosts ~ MusicsDocs.size == 0", MusicsDocs.size == 0)
        //             if (MusicsDocs.size == 0) return
        //             context.state.MusicRecommendationStartingDoc = MusicsDocs.docs[MusicsDocs.docs.length - 1]
        //             MusicsDocs.forEach(snapshot => {
        //                 lazyLoadedMusicRecommendations.push({ ...snapshot.data() })
        //             })

        //             context.state.lazyLoadedMusicRecommendations = lazyLoadedMusicRecommendations

        //             // lazy load music posts
        //             let lazyLoadedMusicPosts = []
        //             const MusicPostQuery = query(collectionGroup(firestore, 'MusicPosts'), orderBy('upvotes', "desc"), startAfter(context.state.MusicPostStartingDoc))
        //             const postMusicsDocs = await getDocs(MusicPostQuery)
        //             if (postMusicsDocs.size == 0) return
        //             context.state.MusicPostStartingDoc = postMusicsDocs.docs[postMusicsDocs.docs.length - 1]
        //             postMusicsDocs.forEach(snapshot => {
        //                 lazyLoadedMusicPosts.push({ ...snapshot.data(), type: 'post', uid: snapshot.id })
        //             })
        //             context.state.lazyLoadedMusicPosts = lazyLoadedMusicPosts
        //             context.commit('setlazyLoadedMusicFeed')
        //             lazyLoadedMusicPosts = []
        //             break;

        //         case 'Movies':
        //             //  lazy load movie recommendations
        //             console.log('this happening')
        //             const MoviesQuery = query(collectionGroup(firestore, 'MovieRecommendations'), orderBy('upvotes', "desc"), startAfter(context.state.MovieRecommendationStartingDoc))
        //             const MoviesDocs = await getDocs(MoviesQuery)
        //             let lazyLoadedMovieRecommendations = []
        //             console.log(MoviesDocs.docs)
        //             if (MoviesDocs.size == 0) return
        //             context.state.MovieRecommendationStartingDoc = MoviesDocs.docs[MoviesDocs.docs.length - 1]
        //             MoviesDocs.forEach(snapshot => {
        //                 lazyLoadedMovieRecommendations.push({ ...snapshot.data() })
        //             })

        //             context.state.lazyLoadedMovieRecommendations = lazyLoadedMovieRecommendations

        //             // lazy load movie posts
        //             let lazyLoadedMoviePosts = []
        //             const MoviePostQuery = query(collectionGroup(firestore, 'MoviePosts'), orderBy('upvotes', "desc"), startAfter(context.state.MoviePostStartingDoc))
        //             const postMoviesDocs = await getDocs(MoviePostQuery)
        //             if (postMoviesDocs.size == 0) return
        //             context.state.MoviePostStartingDoc = postMoviesDocs.docs[postMoviesDocs.docs.length - 1]
        //             postMoviesDocs.forEach(snapshot => {
        //                 lazyLoadedMoviePosts.push({ ...snapshot.data(), type: 'post', uid: snapshot.id })
        //             })
        //             context.state.lazyLoadedMoviePosts = lazyLoadedMoviePosts
        //             context.commit('setlazyLoadedMovieFeed')
        //             lazyLoadedMoviePosts = []

        //         case 'Books':
        //             console.log('this happening')
        //             const BooksQuery = query(collectionGroup(firestore, 'BookRecommendations'), orderBy('upvotes', "desc"), startAfter(context.state.BookRecommendationStartingDoc))
        //             const BooksDocs = await getDocs(BooksQuery)
        //             let lazyLoadedBookRecommendations = []
        //             console.log(BooksDocs.docs)
        //             if (BooksDocs.size == 0) return
        //             context.state.BookRecommendationStartingDoc = BooksDocs.docs[BooksDocs.docs.length - 1]
        //             BooksDocs.forEach(snapshot => {
        //                 lazyLoadedBookRecommendations.push({ ...snapshot.data() })
        //             })

        //             context.state.lazyLoadedBookRecommendations = lazyLoadedBookRecommendations

        //             // lazy load movie posts
        //             let lazyLoadedBookPosts = []
        //             const BookPostQuery = query(collectionGroup(firestore, 'BookPosts'), orderBy('upvotes', "desc"), startAfter(context.state.BookPostStartingDoc))
        //             const postBooksDocs = await getDocs(BookPostQuery)
        //             if (postBooksDocs.size == 0) return
        //             context.state.BookPostStartingDoc = postBooksDocs.docs[postBooksDocs.docs.length - 1]
        //             postBooksDocs.forEach(snapshot => {
        //                 lazyLoadedBookPosts.push({ ...snapshot.data(), type: 'post', uid: snapshot.id })
        //             })
        //             context.state.lazyLoadedBookPosts = lazyLoadedBookPosts
        //             context.commit('setlazyLoadedBookFeed')
        //             lazyLoadedBookPosts = []

        //         case 'Games':
        //             console.log('this happening')
        //             const GamesQuery = query(collectionGroup(firestore, 'GameRecommendations'), orderBy('upvotes', "desc"), startAfter(context.state.GameRecommendationStartingDoc))
        //             const GamesDocs = await getDocs(GamesQuery)
        //             let lazyLoadedGameRecommendations = []
        //             console.log(GamesDocs.docs)
        //             if (GamesDocs.size == 0) return
        //             context.state.GameRecommendationStartingDoc = GamesDocs.docs[GamesDocs.docs.length - 1]
        //             GamesDocs.forEach(snapshot => {
        //                 lazyLoadedGameRecommendations.push({ ...snapshot.data() })
        //             })

        //             context.state.lazyLoadedGameRecommendations = lazyLoadedGameRecommendations

        //             // lazy load movie posts
        //             let lazyLoadedGamePosts = []
        //             const GamePostQuery = query(collectionGroup(firestore, 'GamePosts'), orderBy('upvotes', "desc"), startAfter(context.state.GamePostStartingDoc))
        //             const postGamesDocs = await getDocs(GamePostQuery)
        //             if (postGamesDocs.size == 0) return
        //             context.state.GamePostStartingDoc = postGamesDocs.docs[postGamesDocs.docs.length - 1]
        //             postGamesDocs.forEach(snapshot => {
        //                 lazyLoadedGamePosts.push({ ...snapshot.data(), type: 'post', uid: snapshot.id })
        //             })
        //             context.state.lazyLoadedGamePosts = lazyLoadedGamePosts
        //             context.commit('setlazyLoadedGameFeed')
        //             lazyLoadedGamePosts = []


        //         default:
        //             break;
        //     }

        //     // const MusicsQuery = query(collectionGroup(firestore, 'MusicRecommendations'), orderBy('upvotes', "desc"),  startAfter(context.state.MusicRecommendationStartingDoc))
        //     // const MoviesQuery = query(collectionGroup(firestore, 'MovieRecommendations'), orderBy('upvotes', "desc"),  startAfter(context.state.MovieRecommendationStartingDoc))
        //     // const GamesQuery = query(collectionGroup(firestore, 'GameRecommendations'), orderBy('upvotes', "desc"),  startAfter(context.state.GameRecommendationStartingDoc))
        //     // const BooksQuery = query(collectionGroup(firestore, 'BookRecommendations'), orderBy('upvotes', "desc"),  startAfter(context.state.BookRecommendationStartingDoc))

        //     // // retrieve recommendations from firestore
        //     // const MusicsDocs = await getDocs(MusicsQuery)
        //     // const MoviesDocs = await getDocs(MoviesQuery)
        //     // const GamesDocs = await getDocs(GamesQuery)
        //     // const BooksDocs = await getDocs(BooksQuery)

        //     // const lazyLoadedBookRecommendations = []
        //     // const lazyLoadedMusicRecommendations = []
        //     // const lazyLoadedGameRecommendations = []
        //     // const lazyLoadedMovieRecommendations = []

        //     // // loop through recommendations docs
        //     // BooksDocs.forEach(snapshot => {
        //     //     lazyLoadedBookRecommendations.push({ ...snapshot.data(),  uid:snapshot.id })
        //     // })
        //     // MoviesDocs.forEach(snapshot => {
        //     //     lazyLoadedMovieRecommendations.push({ ...snapshot.data(),  uid:snapshot.id })
        //     // })
        //     // GamesDocs.forEach(snapshot => {
        //     //     lazyLoadedGameRecommendations.push({ ...snapshot.data(),  uid:snapshot.id })
        //     // })
        //     // MusicsDocs.forEach(snapshot => {
        //     //     lazyLoadedMusicRecommendations.push({ ...snapshot.data(),  uid:snapshot.id })
        //     // })


        //     // // lazy load posts
        //     // const lazyLoadedBookPosts = []
        //     // const lazyLoadedMusicPosts = []
        //     // const lazyLoadedGamePosts = []
        //     // const lazyLoadedMoviePosts = []

        //     // const MusicPostQuery = query(collectionGroup(firestore, 'MusicPosts'), orderBy('upvotes', "desc"),  startAfter(context.state.MusicPostStartingDoc))
        //     // const MoviePostQuery = query(collectionGroup(firestore, 'MoviePosts'), orderBy('upvotes', "desc"),  startAfter(context.state.MoviePostStartingDoc))
        //     // const GamePostQuery = query(collectionGroup(firestore, 'GamePosts'), orderBy('upvotes', "desc"),  startAfter(context.state.GamePostStartingDoc))
        //     // const BookPostQuery = query(collectionGroup(firestore, 'BookPosts'), orderBy('upvotes', "desc"),  startAfter(context.state.BookPostStartingDoc))

        //     // // retrieve recommendations from firestore
        //     // const postMusicsDocs = await getDocs(MusicPostQuery)
        //     // const postMoviesDocs = await getDocs(MoviePostQuery)
        //     // const postGamesDocs = await getDocs(GamePostQuery)
        //     // const postBooksDocs = await getDocs(BookPostQuery)

        //     // // loop through recommendations docs
        //     // postBooksDocs.forEach(snapshot => {
        //     //     lazyLoadedBookPosts.push({ ...snapshot.data()})
        //     //     console.log(snapshot.data())
        //     // })
        //     // postMoviesDocs.forEach(snapshot => {
        //     //     lazyLoadedMoviePosts.push({ ...snapshot.data()})
        //     // })
        //     // postGamesDocs.forEach(snapshot => {
        //     //     lazyLoadedGamePosts.push({ ...snapshot.data()})
        //     // })
        //     // postMusicsDocs.forEach(snapshot => {
        //     //     lazyLoadedMusicPosts.push({ ...snapshot.data()})
        //     // })

        //     // const allLazyLoadedRecommendations = _.shuffle([...lazyLoadedBookRecommendations, ...lazyLoadedGameRecommendations, ...lazyLoadedMusicRecommendations, ...lazyLoadedMovieRecommendations])
        //     // const allLazyLoadedPosts = _.shuffle([...lazyLoadedBookPosts, ...lazyLoadedGamePosts, ...lazyLoadedMusicPosts, ...lazyLoadedMoviePosts])
        //     // // set the state for lazy loaded posts
        //     // context.state.allLazyLoadedPosts = allLazyLoadedPosts
        //     // context.state.allLazyLoadedRecommendations = allLazyLoadedRecommendations
        //     // context.state.lazyLoadedMoviePosts = _.shuffle(lazyLoadedMoviePosts)
        //     // context.state.lazyLoadedGamePosts = _.shuffle(lazyLoadedGamePosts)
        //     // context.state.lazyLoadedMusicPosts = _.shuffle(lazyLoadedMusicPosts)
        //     // context.state.lazyLoadedBookPosts = _.shuffle(lazyLoadedBookPosts)
        //     // // set the state for lazy loaded recommendations
        //     // context.state.lazyLoadedMovieRecommendations = _.shuffle(lazyLoadedMovieRecommendations)
        //     // context.state.lazyLoadedGameRecommendations = _.shuffle(lazyLoadedGameRecommendations)
        //     // context.state.lazyLoadedMusicRecommendations = _.shuffle(lazyLoadedMusicRecommendations)
        //     // context.state.lazyLoadedBookRecommendations = _.shuffle(lazyLoadedBookRecommendations)


        // },
        async getAskedRecommendations(context) {
            const askedRecommendationCollection = collection(firestore, 'AskedRecommendations')
            const queryAskedRecommendations = query(askedRecommendationCollection)
            const askedRecommendations = await getDocs(queryAskedRecommendations)
            console.log(askedRecommendations.docs)
            askedRecommendations.forEach((askedRecommendation) => {
                context.state.allFeed.push({ ...askedRecommendation.data() })
            })
        },

    }
}