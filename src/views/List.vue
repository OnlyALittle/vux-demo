<template>
    <div class="list-container">
        <x-address class="location-slect" :title="title" v-model="value" :list="locationData" :show.sync="showAddress"></x-address>
        <div class="title-logo"></div>
        <div></div>
        <div class="info-list-container">
            <scroll-data-list :locationIsid="value"></scroll-data-list>
        </div>

    </div>
</template>
<script>
    import { XAddress } from 'vux'
    import { getLocation } from '../api'
    import ScrollDataList from "./ScrollDataList"
    export default {
        components:{
            XAddress,ScrollDataList
        },
        data(){
            return {
                title:'',
                value:["331100","331102"],
                locationData:[],
                showAddress:false,
            }
        },
        computed:{

        },
        created(){
            this.getLocationList();
        },
        mounted(){
        },
        methods:{
            getLocationList(){
                getLocation().then(res=>{
                    this.locationData = res.data;
                }).catch(e=>{
                    console.log(e);
                })
            },
        },
        beforeDestroy(){

        },
    }
</script>
<style lang="less" scoped>
    .list-container{
        width: 100%;
        height: 100%;
        background-image: url("../assert/images/mini-layout.jpg");
        background-size: 100% 100%;
        .location-slect{
            background-color: #ececec;
            position: absolute;
            right: 0.8rem;
            top: 0.8rem;
            min-width: 8rem;
            height: 2.0rem;
            line-height: 0.7rem;
            box-sizing: border-box;
            color: #666;
            padding-right: 0.5rem;
            &::after{
               content: "";
                width: 0.5rem;
                height: 0.5rem;
                border: solid #828282;
                border-width: 0px 1px 1px 0px;
                -webkit-transform: translate(-50%, -50%) rotate(-45deg);
                transform: translate(-50%, -50%) rotate(45deg);
                position: absolute;
                right: 1%;
                top: 51%;
            }
        }
        // .title-logo{
        //     width: 100%;
        //     background-image: url("../assert/images/title.png");
        //     background-size: 100% 100%;
        // }
        .info-list-container{
            position: fixed;
            top: 35%;
            left: 5%;
            width:90%;
            height: 65%;
            background-image: url("../assert/images/list-layout.png");
            background-size: 100% 100%;
            padding: 1.5rem 1.5rem;
            box-sizing: border-box;
        }
    }
</style>
