<template>

    <div class="pickable__example" @click="setPicked(true)" :style="followMouse()">

    </div>

</template>

<script>
export default {
    
    props: {
        x: Number,
        y: Number
    },

    
    data: () => {
        return{
            isPicked : false,
            mousePos : {
                x:0,
                y:0
            },
            itemPos : {
                x: 0,
                y: 0
            },
            refresh: null
        }
    },
    methods:{
        
        setPicked(value) {
            this.isPicked = value
            console.log(this.isPicked)
            this.$emit("ItemPicked")
        },

        getMousePosition(e) {
            this.mousePos.x = e.pageX - 25
            this.mousePos.y = e.pageY + 35
        },

        followMouse () {
            
            return {
                top: (this.itemPos.y) + 'px',
                left: (this.itemPos.x) + 'px'
            }
            
        },

        update() {
            
            if (this.isPicked){
                console.log("bla")
                this.itemPos.x += (this.mousePos.x - this.itemPos.x) * 0.1;
                this.itemPos.y += (this.mousePos.y - this.itemPos.y) * 0.1;
            }

        }

    },

    mounted (){
        window.addEventListener("mousemove", this.getMousePosition)
        this.refresh = setInterval(this.update, 1)
        this.itemPos.x = this.x
        this.itemPos.y = this.y

    },

    destroyed (){
        //clearInterval(this.refresh)
    }



    

};
</script>

<style lang="scss">
.pickable {
    &__example {
        position: absolute;
        width: 9px;
        height: 9px;
        z-index: 10;
    }
}
</style>
