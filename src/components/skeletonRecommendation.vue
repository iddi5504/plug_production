<template>
    <div class="recommendationcontainer">
        <div class="recommendation-content">
            <div class="image"></div>
            <div class="recommendation-text">
                <div class="text-skeleton"></div>
                <div class="text-skeleton"></div>
                <div class="text-skeleton"></div>
                <div class="text-skeleton"></div>
            </div>
        </div>
        <div v-show="singlePost" class="comments">
            <div class="comment">
                <div class="profile-image"></div>
                <div class="comment-text"></div>
            </div>
            <div class="comment">
                <div class="profile-image"></div>
                <div class="comment-text"></div>
            </div>
            <div class="comment">
                <div class="profile-image"></div>
                <div class="comment-text"></div>
            </div>
            <div class="comment">
                <div class="profile-image"></div>
                <div class="comment-text"></div>
            </div>
            <div class="comment">
                <div class="profile-image"></div>
                <div class="comment-text"></div>
            </div>
            <div class="comment">
                <div class="profile-image"></div>
                <div class="comment-text"></div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    computed: {
        singlePost() {
            if (this.$route.params.id) {
                return true
            }
        }
    }
}
</script>

<style lang="scss" scoped>
.recommendationcontainer {
    position: relative;
    border-radius: 21px;
    background: var(--primary);
    float: none;
    margin: 7px 5px;
    color: var(--textcolorimportant);
    padding-right: var(--bs-gutter-x, 0.75rem);
    padding-left: var(--bs-gutter-x, 0.75rem);
    box-shadow: var(--boxshadow);
    animation: comein-data-v-0148dea0 0.5s;
    transition: 0.5s ease-out;
    max-width: 660px;
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    gap: 10px;

    .recommendation-content {
        display: flex;
        align-items: center;
        gap: 10px;
        justify-content: center;
        padding: 10px;

        .image {
            border-radius: 10px;
            background-color: var(--secondary);
            width: 130px;
            height: 116px;
            animation: glow 1.5s ease-in-out infinite;

        }

        .recommendation-text {
            flex: 1;
            display: flex;
            flex-direction: column;
            gap: 10px;

            .text-skeleton {
                border-radius: 5px;
                background-color: var(--secondary);
                width: 100%;
                height: 20px;
                animation: glow 1.5s ease-in-out infinite;
            }

        }

    }

    .comments {
        display: flex;
        flex-direction: column;
        gap: 10px;
        max-width: 605px;
        align-self: flex-end;
        width: 100%;

        .comment {
            display: flex;
            align-items: center;


            &:nth-child(1) {
                width: 50%;
            }

            &:nth-child(2) {
                width: 100%;
            }

            &:nth-child(3) {
                width: 60%;
            }

            &:nth-child(4) {
                width: 100%;
            }

            &:nth-child(5) {
                width: 50%;
            }

            &:nth-child(6) {
                width: 90%;
            }

            .profile-image {
                width: 36px;
                height: 30px;
                margin: 5px;
                background: var(--secondary);
                animation: glow 1.5s ease-in-out infinite;
                border-radius: 50%;
            }

            .comment-text {
                border-radius: 5px;
                background-color: var(--secondary);
                width: 100%;
                height: 25px;
                animation: glow 1.5s ease-in-out infinite;
            }
        }
    }
}

@keyframes glow {
    0% {
        background: var(--secondary)
    }

    100% {
        background: #5955554f;
    }
}
</style>