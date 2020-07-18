<template>
      <div>
        <Topbar/>
        
        <Gateway/>
      </div>
</template>

<script>

import Topbar from "../components/Nobpuzzle/Topbar"
//import Cover from "../components/Nobpuzzle/Cover"
import Gateway from "../components/Nobpuzzle/Gateway"

export default {
    name: 'NobPuzzlePage',
    components: {
      Topbar,
     // Cover,
      Gateway
    }
}
</script>

<style>

</style>