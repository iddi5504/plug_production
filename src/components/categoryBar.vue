<template>
    <div>
      <div ref="categorybar" id="categorybar">
         <div @click="currentcategory_=''" class="category"  >
             <div :class="{categoryactive:currentcategory_===''}">
                <i class="bi bi-emoji-smile-upside-down genreemoji categoryicon"> </i>
                <p>New</p>

             </div>
         </div>
         <div @click="currentcategory=games; currentcategory_='Game'" class="category" >
             <div :class="{categoryactive:currentcategory_==='Game'}">
                <i class="bi bi-controller genreemoji categoryicon"> </i>
                <p>Games</p> 

             </div>
         </div>
         <div @click="currentcategory=music; currentcategory_='Music'" class="category" >
             <div :class="{categoryactive:currentcategory_==='Music'}">
                <i class="bi bi-music-note-beamed genreemoji categoryicon"> </i>
                <p>Music</p>
             </div>
         </div>
         <div @click="currentcategory=movie; currentcategory_='Movie'" class="category"  >
            <div :class="{categoryactive:currentcategory_==='Movie'}">
                <i class="bi bi-film genreemoji categoryicon"> </i>
                <p>Movie</p>

            </div>
           
         </div>
         <div @click="currentcategory=books; currentcategory_='Book'" class="category"  >
             <div :class="{categoryactive:currentcategory_==='Book'}">
                <i class="bi bi-book genreemoji categoryicon"> </i>
                <p>Books</p>
             </div>
         </div>
     </div>
     <!-- genre -->
      <div class="genres">
         <div v-for="genre in currentcategory" :key="genre">
            <div class="genre" >{{genre}}</div>  
         </div>
      </div>


    </div>
</template>
<script>
export default {
      data() {
         return {
            
            movie:[ "Action", "Crime", "Drama" ,"Animation" ,"Fantasy","Anime", "Horror" , "Sci-Fi" ,"Comedy","Romans","Thriller","Western" ],
            music:["Hip Hop", "Jazz" , "Country" , "Electronic" ,"Rock" ,"R&B" ,"Classical","Reggae" ,"Dancehall" ,],
            games:["Action-Adventure" , "Survival Horror" , "Shooter", "RPG" ,"Puzzler" ,"Simulation" ,"Sports" ,"Open World"],
            books:["Action-Adventure" , "Crime", "Drama" ,"Manga" ,"Fantasy", "Horror" , "Sci-Fi" ,"Comedy","Paranormal Romance","Picture Book","Satire" ,"Cook Book", "Autobiography","Business","Memoir", "Science"],
            currentcategory:null,
            currentcategory_:"",
            lightmode:false
            
         }
      },
      watch: {
        //  currentcategory_(category){
        //     bus.$emit("category", category)
        //     console.log(category)
        //  },

      },

      created() {
        //   bus.$on("lightmode" , (lightmode)=>{
        //       this.lightmode=lightmode
        //   })
      },



}
</script>

<style scoped>
.categoryBar{
    width: 100%;
    padding: 2px 9px;
    box-sizing: border-box;
}
#categorybar{
    padding: 2px 4px;
    color: var(--textcolorimportant);
    display: flex;
    background-color:var(--primary);
    justify-content: space-around;
    align-content: center;
    justify-items: center;
    border-radius: 10px;
    box-shadow: var(--boxshadow);
    animation: comein ease 0.5s;
    
}

@keyframes comein {
    from{
        transform: translateY(-100px);
    }
    to{
        transform: translateY(0px);
    }
}
.genreemoji{
    font-size: 2em;
    line-height: 1;
}

.category{
    padding: 0px;
    margin: 0px;
    display: flex;
    flex-direction: column;
    text-align: center;
}

p{
   margin-top: 0;
    line-height: 1;
    margin-bottom: 0;
}

.genres{
   width: 100%;
   display: flex;
   justify-content: start;
   overflow-x: auto;
   word-break: normal;
}
.genres::-webkit-scrollbar{
   display: none;
}
.genre{
    border-radius: 8px;
    background: var(--primary);
    color: var(--textcolornotimportant);
    padding: 2px 10px;
    margin: 2px 7px;
    white-space: nowrap;
}
.categoryactive{
    color:var(--brandcolor)
 ;

}

</style>