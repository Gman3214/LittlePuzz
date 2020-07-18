<template>
    <div class="cover__bounds" ref="bounds">
        <VueDraggable :w=500 :h=300 :x="startX" :parent="true" @dragging="onDrag" :draggable="nobInserted"  >
            <div class="cover__cover">
                <div class="cover__hole" @click="InsetNob" :class="{active: nobInserted}" />
            </div>
        </VueDraggable>
    </div>
</template>

<script>
import VueDraggable from "vue-draggable-resizable"
export default {

    data: () => {
        return{
            x: 0,
            y: 0,
            startX: 0,
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
        },

        findCenter(){
            if(!this.nobInserted){
                this.startX = this.$refs.bounds.clientWidth / 2 - 259;
            }
        },

        checkSide(){
            if(!this.$store.state.coverLeft && this.x < this.startX){
                this.$store.commit("changeCoverSide", true)
            }
            else if (this.$store.state.coverLeft && this.x > this.startX){
                this.$store.commit("changeCoverSide", false)
            }
        },

        InsetNob(){
            if (this.$store.state.inventory.s1){
                this.nobInserted = true
                this.$store.state.inventory.s1.$destroy()
            } 
        }
    },

    mounted(){
        setInterval(this.findCenter, 1)
        setInterval(this.checkSide, 100)
    }

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
        border: 2px solid var(--dark);
        border-radius: 7px;
        background: var(--foreground);
        display: flex;
        justify-content: center;
        align-items: center;
    }

    

    &__hole {
        width: 10px;
        height: 10px;
        margin-left: 418px;
        border: 1px solid #6d6a6a;
        border-radius: 4px;
        background: #EFF4F9;
        &.active {
            background: #4a4a4a;
        }
    }

    &__bounds {
            width: 100%;
            position: absolute;
            top: 0px;
            height: 300px;

        }
}
</style>
