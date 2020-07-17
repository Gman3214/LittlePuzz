<template>
    <div class="cover__bounds" >
        <VueDraggable :w=500 :h=300 :x=395 :parent="true" @dragging="onDrag" class="__cover" :draggable="nobInserted"  >
            <div class="cover__cover">
                <div class="cover__hole"></div>
            </div>
        </VueDraggable>
    </div>
</template>

<script>
import VueDraggable from "vue-draggable-resizable"
export default {

    data: () => {
        return{
            x: 500,
            y: 500,
            nobInserted: false
        }
    },

    components:{
        VueDraggable
    },
    methods:{

        onDrag(x,y){
            this.x = x;
            this.y = y
        }
    },

};
</script>

<style lang="scss">
.cover {
    &__cover {
        margin: auto;
        margin-top: 300px;
        width: 500px;
        height: 300px;
        top: 1000px;
        border: 1px solid #707070;
        border-radius: 7px;
        background: #f9f9f8;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    &__bounds {
        //margin: auto;
      //  margin-top: 300px;
        width: 100%;
        height: 300px;

    }

    &__hole {
        width: 10px;
        height: 10px;
        margin-left: 418px;
        border: 1px solid #6d6a6a;
        border-radius: 4px;
        background: #fff;
    }
}
</style>
