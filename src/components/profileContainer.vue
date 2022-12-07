<template>
    <div id="profilecontainer">
        <div id="profiletopsection">
            <div>
                <div class="top-section">
                    <img class="profile-picture" src="../assets/albumcover.png" alt="Image">

                    <div class="userinfo">
                        <h3 class="account-heading" style="font-weight: 100; color:var(--textcolorimportant);">
                            Iddi5504__</h3>
                        <small class="text-secondary" style="margin-left:3px ;">iddi5504@gmail.com</small>
                    </div>
                </div>
                <div>
                    <button id="editprofilebutton" type="button">Edit</button>
                </div>
            </div>

            <ul id="followers" class="following-details">
                <li style="display: inline-block;">
                    <p><span style="font-weight:500">12</span> Posts </p>
                </li>
                <li style="display: inline-block;">
                    <p><span style="font-weight:500">31</span> Followers </p>
                </li>
                <li style="display: inline-block;">
                    <p><span style="font-weight:500">31</span> Following</p>
                </li>
            </ul>
        </div>

        <div style="max-width: 460px;display: flex; flex-direction: column; align-content: center; align-self: center;">
            <span class="bio">
                <div style="font-weight:500">Bio</div>
                Lorem ip dolor sit amet consectetur adipisicing elit. Iure, nobis omnis quod tempore totam
                reprehenderit nulla lab
            </span>

            <!-- interest -->
            <div style="padding: 0px 8px 4px 8px;">
                <div style="color:var(--textcolorimportant); font-weight:500; font-size:var(--detailsfs);">
                    Interests</div>
                <div class="interests">
                    <div>
                        <img src="../assets/anime.png" style="width:26px;" alt="">
                        <div>Anime</div>
                    </div>
                    <div>
                        <img src="../assets/game.png" style="width:26px;" alt="">
                        <div>Games</div>
                    </div>
                    <div>
                        <img src="../assets/scifi.png" style="width:26px;" alt="">
                        <div>Sci-Fi</div>
                    </div>
                    <div>
                        <img src="../assets/comics.png" style="width:26px;" alt="">
                        <div>Manga</div>
                    </div>
                    <div>
                        <img src="../assets/novel.png" style="width:26px;" alt="">
                        <div>Novel</div>
                    </div>
                    <div>
                        <img src="../assets/rock.png" style="width:26px;" alt="">
                        <div>Rock</div>
                    </div>
                </div>

            </div>

            <div id="profilecontainermiddle" class="container">
                <div>
                    <h3 style="font-size: var(--bodytext); font-weight: 400; color: var(--textcolorimportant);">
                        Iddi5504__'s top Anime</h3>
                    <div class="collections">
                        <div class="collection">
                            <img class="usercollectionimage" src="../assets/book.jpg" alt="" srcset="">
                            <span>Demon Slayer</span>
                        </div>
                        <div class="collection">
                            <img class="usercollectionimage" src="../assets/albumcover.png" alt="" srcset="">
                            <span>Bleach</span>
                        </div>
                        <div class="collection">
                            <img class="usercollectionimage" src="../assets/EternalAtake.jpg" alt="" srcset="">
                            <span>Naruto</span>
                        </div>
                        <div class="collection">
                            <img class="usercollectionimage" src="../assets/game.jpg" alt="" srcset="">
                            <span>Noblese</span>
                        </div>

                    </div>

                </div>

                <div style="justify-content: center; align-items: center; display: flex; height: 100%;">
                    <button id="viewfullcatalogue">
                        View full catalogue
                    </button>
                </div>

            </div>
            <!-- bio -->
            <!--<div>
            <h3 style="font-size: 20px;">Iddi5504__'s top three Movie</h3>
            <div style="display: flex; justify-content: space-between;">
                <img class="usercollectionimage" src="assets/music.jpg" alt="" srcset="">
                <div style="display: flex; justify-content: center; align-items: center; width: 100px; height: 100px;"><i style="font-size: 54px;" class="bi bi-plus"></i></div>
                
            </div>
                    
        </div>-->

        </div>

        <!-- <div id="profilecontainerbottom">
            <ul style="padding-top: 17px;" class="nav nav-tabs" id="myTab" role="tablist">
                <li class="nav-item" role="presentation">
                    <button class="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true">Recommends</button>
                </li>
                <li class="nav-item" role="presentation">
                    <button class="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false">Rerecommend</button>
                </li>
                <li class="nav-item" role="presentation">
                    <button class="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact" type="button" role="tab" aria-controls="contact" aria-selected="false">Likes</button>
                </li>
                </ul>
                <div  style="color: white;" class="tab-content" id="myTabContent">
                <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">

                    <div class="row">
                        <div class="row"><h3>Total</h3></div>
                        <div class="col"><div>Likes</div><div>143</div></div>
                        <div class="col"><div>Comments</div><div>14</div></div>
                        <div class="col"><div>Rerecommends</div><div>533</div></div>
                    </div>
                </div>
                <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                    <div class="row">
                        <div class="row"><h3>Total</h3></div>
                        <div class="col"><div>Recommends</div><div>3633</div></div>
                        <div class="col"><div>Likes</div><div>83</div></div>
                        <div class="col"><div>Comments</div><div>32</div></div>
                    </div>
                </div>
                <div class="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">
                    <div class="row">
                        <div class="row"><h3>Total</h3></div>
                        <div class="col"><div>Likes</div><div>13</div></div>
                        
                    </div>
                </div>
            </div>
            
        </div> -->
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
#profilecontainer {
    background-color: rgb(26 26 27);
    display: flex;
    flex-direction: column;
    background-color: var(--primary);
    position: relative;
    gap: 5px;
    height: 100%;
    padding: 10px;
    width: 100%;
    box-sizing: border-box;
    box-shadow: 0px 9px 15px 12px var(--primary);

    @media only screen and (min-width:700px) {
        border-radius: 20px;
        margin: 10px;
        max-width: 400px;
        box-shadow: none;


    }


    .top-section {
        flex: 1;
        display: flex;
    }

    .following-details {
        text-decoration: none;
        color: var(--textcolorimportant);
        display: flex;
        justify-content: end;
        gap: 14px;
        flex: 1;
        padding: 0 7px;
    }

    #profilecontainerbottom {
        height: 166px;
        padding: 7px;
    }

    #profilecontainermiddle {
        overflow: auto;
        color: white;
        display: flex;
        flex-direction: column;
    }

    #editprofilebutton {
        position: absolute;
        width: 85px;
        top: 71px;
        right: 10px;
        background-color: var(--secondary);
        color: var(--textcolorimportant);
        border-radius: 4px;
        border: none;
        outline: none;
        padding: 4px;
    }

    .collections {
        display: flex;
        justify-content: space-between;
        font-size: var(--detailsfs);
        color: var(--textcolorimportant);
        text-align: center;
        padding: 5px;
        gap: 2px;


        .collection {
            display: flex;
            flex-direction: column;
            align-items: center;

            .usercollectionimage {
                width: 90px;
                height: 90px;
                border-radius: 10px;
                object-fit: cover;
            }

        }
    }

}

.interests {
    display: flex;
    color: var(--textcolorimportant);
    justify-content: space-around;
    font-size: var(--detailsfs);
    text-align: center;
}

.bio {
    font-size: var(--detailsfs);
    color: var(--textcolorimportant);
    padding: 0px 8px 12px 8px;
}

#viewfullcatalogue {
    width: 223px;
    border-radius: 10px;
    background: var(--brandcolor);
    color: var(--textcolorimportant);
    padding: 3px;
}

.userinfo {
    padding: 10px 3px;
    display: flex;
    flex-direction: column;
    align-items: self-start;
}

.numberoffollowers {
    display: flex;
    width: max-content;
    color: var(--textcolorimportant);
}

.numberoffollowers li p {
    padding: 0px 6px;

}

.profile-picture {
    height: 111px;
    width: 111px;
    border: 2px var(--brandcolor) solid;
    border-radius: 50%;
    object-fit: cover;

}

#profilepagecontent {
    display: flex;
    flex-direction: column;
    background-color: var(--primary);

}








@media only screen and (min-width:700px) {

    /* #profilecontainer {
        display: flex;
        flex-direction: column;
        border-radius: 20px;
        flex: 0.9;
        max-width: 410px;
        box-shadow: none;
        margin: 10px;
        padding: 8px;
        background-color: var(--primary);

    }*/

    .profilefirstsection {
        width: 424px;
    }

    #topimage {
        background-image: url("../assets/435.jpg");
        width: 100%;
        height: 231px;
        z-index: 0;
        position: fixed;
        background-position: center;
        background-size: cover;
    }

    #profiletopbuttons {
        display: flex;
        flex-direction: row;
        justify-content: space-around;
    }

    .topbar {
        height: 37px;
        position: fixed;
        top: 0px;
        z-index: 1;
        display: flex;
        width: 100%;
        background-color: transparent;
        justify-content: space-around;

    }

    #profilepagecontent {
        display: flex;
        flex-direction: column;
        background-color: var(--secondary);

    }

}
</style>