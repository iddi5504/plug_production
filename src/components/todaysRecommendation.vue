<template>
    <div class="todays-recommend-body">
        <div class="todaysrecommendcontainer" v-for="(todaysrecommend, index) in todaysrecommendation" :key="index">
            <span class="todaysrecommendtype">Todays {{ todaysrecommend.type }} recommnedation</span>
            <div class="todays-recommendation-content" style=" ">
                <div>
                    <h2 style="font-size:var(--titlesfs); color:var(--brandcolor);">
                        {{ todaysrecommend.recommendeditem }}</h2>
                </div>
                <div>
                    <h4 style="font-size:11px; ">Recommended by {{ todaysrecommend.recommender }}</h4>
                </div>
                <div>
                    <small class="todaysrecommendsnippet">{{ todaysrecommend.snippet }} </small>
                </div>
            </div>
        </div>

    </div>

</template>
    
<script>
export default {
    data() {
        return {
            todaysrecommendation: [
                {
                    type: 'Anime',
                    recommendeditem: 'God of War',
                    recommender: 'Iddi Yakubu',
                    snippet: 'THis sisf sdfisdjfsd sdfifs sdoifs sdoifs fsdoifsd sdiofsd fsodifnsdf sdfoifsdnsd '
                },
                {
                    type: 'Anime',
                    recommendeditem: 'God of War',
                    recommender: 'Iddi Yakubu',
                    snippet: 'THis sisf sdfisdjfsd sdfifs sdoifs sdoifs fsdoifsd sdiofsd fsodifnsdf sdfoifsdnsd '

                }
            ]
        }
    },
    methods: {
        test: function () {
            console.log(this.todaysrecommends)
        }
    },
    mounted() {
        // bus.$on("todaysrecommend", (todaysrecommends) => {
        //     this.todaysrecommends = todaysrecommends
        // })
        // console.log(this.todaysrecommends)
    }
}
</script>
    
<style scoped>
.todaysrecommendcontainer {
    margin: 0px 4px;
    position: relative;
    padding-top: 3px;
    background-image: url("../assets/blackpanther.jpg");
    height: 200px;
    background-repeat: no-repeat;
    background-position: center;
    width: 100%;
    background-size: cover;
    border-radius: 11px;
    filter: opacity(0.8);
    display: flex;
    flex-direction: column;
    justify-content: end;
}

.todays-recommendation-content {
    font-size: 29px;
    color: white;
    display: flex;
    padding: 8px;
    flex-direction: column;
    align-items: flex-start;
    text-align: left;
}

.todays-recommend-body {
    display: flex;
    width: 100%;
}

.todaysrecommendtype {
    font-size: var(--detailsfs);
    position: absolute;
    top: 10px;
    left: 10px;

}

.todaysrecommendsnippet {
    font-size: var(--bodytextfs);
}

@media only screen and (max-width:390px) {
    .todaysrecommendsnippet {
        font-size: var(--detailsfs);
    }
}
</style>