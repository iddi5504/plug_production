<template>
         <div id="discoversection" class="container">
            <div id="toprecommends" class="container">
                <h5>Top Recommends</h5>
                <div id="toprecommendimages"  class="container">
                    <img  class="toprecommendimage" src="../assets/spiderman.jpg" alt="">
                    <img  class="toprecommendimage" src="../assets/godofwar4.jpg" alt="">
                    <img  class="toprecommendimage" src="../assets/EternalAtake.jpg" alt="">
                </div>
            </div>
            <div class="hottest ">
                <h5>Top Discussions</h5>
                <div class="hotdiscussionsimages" >
                    <img  class="hostdiscussionsimage" src="../assets/EternalAtake.jpg" alt="">
                    <img  class="hostdiscussionsimage" src="../assets/EternalAtake.jpg" alt="">
                    
                </div>
            </div>
    
        <!--buttons-->
            <span>
                <button style="border: 0px; background-color: inherit;"  id="leftbutton">
                    <img src="../assets/back.png" alt="" class="button" type>
    
                </button>
            </span>
            <span id="rightbutton" >
                <img src="../assets/next.png" alt="" class="button">
            </span>
    
        </div>
</template>

<script>
export default {

    data() {
        return {
            lightmode:false
        }
    },
    created() {
        
    },

    watch: {
       
    },
}
</script>

<style scoped>
    #discoversection{
    padding: 0px;
    margin: 0px 16px;
    background-color: var(--primary);
    z-index: 0;
    display: flex;
    flex-direction: column;
    height: 475px;
    font-family: sans-serif;
    border-radius: 10px;
    margin-top: 10px;
    width: 287px;
    color: var(--textcolorimportant);
    font-size: larger;
    box-shadow: var(--boxshadow);
    position: relative;
}

#discoversection h3{
    padding: 0;
    margin: 0;
}

#toprecommends{
    flex: 1;
    padding: 5px 5px;
    margin: 0px;
}

#toprecommendimages{
    padding: 0;
    margin: 0;
    max-width: 100%;
    overflow-x: auto;
    height: 185px;
    display: flex;
}

#toprecommendimages::-webkit-scrollbar{
    display: none;
}

.toprecommendimage{
    height: 184px;
    width: 142px;
    padding: 2px 5px;
}

.hottest{    
    flex: 1;
    padding: 5px 5px;
    margin: 0px;
}

.hotdiscussionsimages{
    padding: 0;
    margin: 0;
    overflow-x: hidden;
    height: 185px;
    display: flex;
}

.hotdiscussionsimages::-webkit-scrollbar{
    display: none;
}

.hostdiscussionsimage{
    height: 184px;
    width: 142px;
    padding: 2px 5px;
    border-radius: 10px;
}

.button{
    height: 30px;
    width: 30px;    
    filter: invert();

}

#leftbutton{
    position: absolute;
    top: 119px;
    left: -10px;
    z-index: 0;
    border: 0px;
    background-color: inherit;
    cursor: pointer;
}

#rightbutton{
    position: absolute;
    top: 119px;
    right: -6px;
    z-index: 0;
    cursor: pointer;
}


</style>