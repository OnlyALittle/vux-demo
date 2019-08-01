<template>
    <div class="info-container">
        <div class="info-content">
            <div class="info-list">
                <div class="div-tr">
                    <div class="title">店铺名称：</div>
                    <div class="content">{{item.name}}</div>
                </div>
                <div class="div-tr">
                    <div class="title">优惠内容：</div>
                    <div class="content">{{item.content}}</div>
                </div>
                <div class="div-tr">
                    <div class="title">营业时间：</div>
                    <div class="content">{{item.time}}</div>
                </div>
                <div class="div-tr">
                    <div class="title">联系电话：</div>
                    <div class="content">{{item.phone}}</div>
                </div>
                <div class="div-tr">
                    <div class="title">门店地址：</div>
                    <div class="content">{{item.location}}</div>
                </div>
                <div class="div-tr">
                    <div class="title">活动描述：</div>
                    <div class="content">{{item.descr}}</div>
                </div>
                 <div class="div-tr img-cls"  v-viewer>
                    <!-- <viewer :images="['/static/image/'+ item.descrImage[0],'/static/image/'+ item.descrImage[1],'/static/image/'+ item.descrImage[2]]"> -->
                        <div >
                            <img :src="'/static/image/'+ item.descrImage[0]"  />
                            <img :src="'/static/image/'+ item.descrImage[1]" />
                        </div>
                        <div>
                            <img :src="'/static/image/'+ item.descrImage[2]" />
                        </div>
                    <!-- </viewer> -->
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import { Previewer,TransferDom  } from 'vux'
    export default {
        data(){
            return {
            }
        },
        computed:{
            item(){
                return this.$route.params.itemData === undefined? {descrImage:[]} : this.$route.params.itemData
            }
        },
        mounted(){
            setTimeout(() => {
                document.querySelector(".img-cls div:nth-child(2)").style.height = document.querySelector(".img-cls div:nth-child(1)").clientHeight +'px';
                document.querySelector(".img-cls div:nth-child(2)").style['line-height'] = document.querySelector(".img-cls div:nth-child(1)").clientHeight +'px';
            }, 200);
        },
        methods:{
        },
        beforeDestroy(){

        },
    }
</script>
<style lang="less" scoped>
    .info-container{
        width: 100%;
        min-height: 100%;
        background-image: url("../assert/images/info-layout.jpg");
        background-size: 100% 100%;
        .info-content{
            color: white;
            box-sizing: border-box;
            font-size: 1.1rem;
            width: 72%;
            position: absolute;
            top: 38%;
            left: 14%;
            right: 14%;
            bottom: 10%;
            overflow-y: scroll;
            .info-list{
                padding: 0 0.5rem;
                .div-tr{    
                    display: flex;
                    flex-flow: row;
                    .content{
                        flex-shrink: 1;
                    }
                    .title{
                        flex-shrink: 0;
                    }
                    
                }
                .img-cls{
                    div{
                        width: 50%;
                        text-align: center;
                        img{
                            width: 75%;
                            padding: 0.5rem 0;
                            vertical-align: middle;
                        }
                    }
                }
            }
        }
    }
</style>
