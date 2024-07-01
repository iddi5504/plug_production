<template>
    <div class="todays-recommend-body">
        <div class="todaysrecommendcontainer" v-for="(todaysrecommend, index) in todaysrecommendation" :key="index">
            <span class="todaysrecommendtype">Todays {{ todaysrecommend.type }} rec</span>
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
                    recommendeditem: 'Demon slayer',
                    recommender: 'Jeffery Dahmer',
                    snippet: 'Best anime I have seen in a while. Totally recommended '
                },
                {
                    type: 'Anime',
                    recommendeditem: 'One Peach',
                    recommender: 'Iddi',
                    snippet: 'If you are looking for a long interesting anime this your pic. It is amazing'

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
    
<style lang="scss" scoped>
.todaysrecommendcontainer {
    margin: 0px 4px;
    position: relative;
    padding-top: 3px;
    background-image: url("../assets/pngwing.com (6).png");
    height: 200px;
    background-repeat: no-repeat;
    background-position: center;
    width: 100%;
    background-size: cover;
    border-radius: 11px;
    filter: opacity(0.8);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;

    &::after {
        content: "";
        height: 100%;
        width: 100%;
        position: absolute;
        top: 0;
        left: 0;
        border-radius: 11px;
        background: linear-gradient(183deg, transparent, #000000cf);
    }

}

.todays-recommendation-content {
    font-size: 1rem;
    color: white;
    display: flex;
    padding: 8px;
    flex-direction: column;
    align-items: flex-start;
    text-align: left;
    z-index: 1;
}

.todays-recommend-body {
    display: flex;
    width: 100%;
}

.todaysrecommendtype {
    color: white;
    font-size: var(--detailsfs);
    padding: 4px;
    display: flex;
    justify-content: flex-start;

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
