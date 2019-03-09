<template>
    <div id="app">
        <img alt="Vue logo" src="./assets/logo.png">
        <VueThumb name="logo" default="http://jobs.bar/storage/uploads/default.svg" size="80" />
    </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import VueThumb from './components/VueThumb.vue'

export default {
    name: 'app',
    components: {
        HelloWorld,
        VueThumb
    }
}
</script>

<style lang="scss">
.logo{
    position: relative;
    cursor: pointer;
    width: 100px;
    height: 100px;
    margin:1rem auto;
    border-radius: 7px;
    .text{
        position: absolute;
        width: 100px;
        height: 50px;
        text-align: center;
        top: 25%;
        color: #FFF;
        z-index: 4;
    }
    &::before{
        position: absolute;
        display: block;
        content: "";
        width: 100px;
        height: 100px;
        background-color: rgba(0,0,0,0.3);
        z-index: 1;
        transition: all .4s;
        border-radius: 7px;
    }
    &:hover{
        &::before{
            background-color: rgba(0,0,0,0.8);
        }
    }
    .clean{
        position: absolute;
        top: -.3rem;
        right: -.3rem;
        color: rgba(62, 187, 130, .7);
        z-index: 10;
        background-color: #fff;
        border-size:5px;
        border-radius: 50%;
        &:hover{
            color: rgba(62, 187, 130, 1);
        }
    }
}
</style>
