<template>
    <div class="logo" @click="triggerDialog">
        <div class="text" v-if="isLoading">
            <slot name="loading-message">
                <div>Loading...</div>
            </slot>
        </div>
        <div v-else>
            <img :src="file" class="upload" :height="size" :width="size" alt="">
            <div class="text" v-if="!isDirty">
                <slot name="upload-message">
                    <div>Click to Upload</div>
                </slot>
            </div>
            <div class="clean" v-if="isDirty" @click.stop="cleanFile">
                <slot name="close-message">
                    x
                </slot>
            </div>
        </div>
        <div class="uploader">
            <input type="file" ref="file" :name="name" @change="previewFiles" hidden>
        </div>
    </div>
</template>
<style lang="scss">
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
<script>
export default {
	name: 'vue-thumb',
    props:['name','default','size'],
    data() {
        return {
            originalFile: this.default,
            file: this.default,
            isDirty: false,
            isLoading: false
        }
    },
    methods:{
        triggerDialog(){
            if(!this.isDirty){
                this.$refs.file.click();
            }
        },
        cleanFile(){
            this.file = this.originalFile;
            this.isDirty = false;
        },
        previewFiles(event) {
            var file = URL.createObjectURL(event.target.files[0]);
            this.isLoading = true;
            setTimeout(()=>{
                this.file = file;
                this.isLoading = false;
            },2000);
            this.isDirty = true;
        }
    }
}
</script>
