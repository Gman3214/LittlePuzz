<template>
    <Pickable :x='44' :y='59' @itemPicked="addToInventory"/>    
</template>

<script>
import Pickable from "../Pickable"
export default {

    components: {
        Pickable
    },

    methods:{

        addToInventory(){
            console.log('trying to add');
            this.$store.commit('addToInventory',this);
        }
    },

    beforeDestroy(){
        document.getElementById("nob").remove()
    }
};
</script>

<style lang="scss">
#nob {
    width: 9px;
    height: 9px;
    z-index: 10;
    border: 1px solid #9d9d9d;
    border-radius: 4px;
    background: #4a4a4a;
}
</style>
