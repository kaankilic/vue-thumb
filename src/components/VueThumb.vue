<template>
    <div class="logo" @click="triggerDialog">
        <v-wait for="WAIT_BUILDING_PREVIEW">
            <template slot="waiting">
                <div class="text">
                    <div>Loading...</div>
                </div>
            </template>
            <img :src="file" class="upload" :height="size" :width="size" alt="">
            <div class="text" v-if="!isDirty">
                <b-icon icon="cloud-upload"></b-icon>
                <div>Click to Upload</div>
            </div>
            <div class="clean" v-if="isDirty" @click.stop="cleanFile">
                <b-icon icon="close-circle"></b-icon>
            </div>
        </v-wait>
        <div class="uploader">
            <input type="file" ref="file" :name="name" @change="previewFiles" hidden>
        </div>
    </div>
</template>
<style>
.clean{
    position: absolute;
    top: -.3rem;
    right: -.3rem;
    color: rgba(62, 187, 130, .7);
    z-index: 10;
    background-color: #fff;
    border-size:5px;
    border-radius: 50%;
}
.clean:hover{
    color: rgba(62, 187, 130, 1);
}
</style>
<script>
export default {
    props: ['name','default','size'],
    data() {
        return {
            originalFile: this.default,
            file: this.default,
            isDirty: false
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
            var file = URL.createObjectURL(event.target.files[0])
            this.$wait.start('WAIT_BUILDING_PREVIEW');
            setTimeout(()=>{
                this.file = file;

                this.$wait.end('WAIT_BUILDING_PREVIEW');
            },2000);
            this.isDirty = true;
        }
    }
}
</script>
