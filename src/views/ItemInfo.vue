<template>
    <div class="item-info-container">
        <div class="qrcode">
            <img :src="'/static/image/'+itemData.qrCodeImage"/>
        </div>
        <div class="content-info"> 
            {{itemData.content}}
        </div>
        <div class="info-page"  @click="getDetails">
            <img src="../assert/images/detailBtn.png"/>
        </div>
    </div>
</template>
<script>
    export default {
        components:{
        },
        data(){
            return {
            }
        },
        props:{
            itemData:{

            },
        },
        methods:{
            getDetails(){
                this.$router.push({ name: 'details', params: { infoIsid: this.itemData.infoIsid,itemData:this.itemData }})
                // this.$router.push("/details/"+this.infoIsid)
            },
        }
    }
</script>
<style lang="less" scoped>
    .item-info-container{
        display: flex;
        position: relative;
        align-items: center;
        align-content: center;
        height: 5.5rem;
        padding: 0 1rem;
        padding-top: 1rem;
        box-sizing: border-box;
        font-size: 12px;
        img{
            width:100%;
            max-width: 70px;
	        height:auto;
        }
        .qrcode{
            width: 20%;
            text-align: center;
        }
        .content-info{
            width: 60%;
            color: #222;
            padding: 0 .5rem;
            font-weight: bold;
        }
        .info-page{
            width: 20%;
            text-align: center;
        }
        &::after{
            content:'';
            position: absolute;
            bottom: 0;
            width: 90%;
            border-bottom:1px solid #222;
            transform: scaleY(0.5);
        }


        /* 2倍屏 */
        @media only screen and (-webkit-min-device-pixel-ratio: 2.0) {
            &::after {
                -webkit-transform: scaleY(0.5);
                transform: scaleY(0.5);
            }
        }
        /* 3倍屏 */
        @media only screen and (-webkit-min-device-pixel-ratio: 3.0) {
            &::after {
                -webkit-transform: scaleY(0.33);
                transform: scaleY(0.33);
            }
        }
    }
</style>
