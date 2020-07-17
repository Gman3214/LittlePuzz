<template>
    <div class="topbar">
        <div class="topbar__top-bar">
            <div class="topbar__Icon_rap">
                <Nob/>
                <img src="@/assets/icon.png" alt="fuck your disability" id="icon">
            </div>
            <div class="topbar__welcome">Welcome LittlePuzz</div>
            <div class="topbar__made_by">637265617465642062792072616d206d617267616c69740a</div>
        </div>
        
    </div>
</template>

<script>
import Nob from "./Nob"
export default {
    components:{
        Nob
    }
};
</script>

<style lang="scss">
.topbar {
    &__top-bar {
        position: absolute;
        z-index: 1;
        height: 100px;
        left: -1%;
        right: -1%;
        top: -1%;
        justify-content: center;
        align-items: center;

        background: #e3f3ff;
    }

    &__welcome {


        text-align: center;
        margin: auto;
        margin-top: 15px;
        font-family: Segoe UI;
        font-size: 48px;
        line-height: (52 / 48);
        font-weight: 300;
        letter-spacing: 0.105em;
        color: #707070;
    }

    &__made_by {
        margin: auto;
        text-align: center;
        font-family: Segoe UI;
        font-size: 10px;
        line-height: (52 / 20);
        font-weight: 300;
        letter-spacing: 0.928em;
        color: #707070;
    }

    &__Icon_rap{
        position: absolute;
        left: 20px;
    }

    #icon{
        width: 100px;
    }

}
</style>
