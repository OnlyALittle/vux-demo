<template>
        <virtual-list v-if="listData.length>0" :size="itemHeight" :remain="remain" 
            :item="item"
            :itemcount="listData.length"
            :itemprops="getItemprops"
            class="virtual-cls"
        />
        <div v-else class="no-data">
            暂无可用优惠券。。
        </div>
</template>
<script>
    import virtualList from 'vue-virtual-scroll-list'
    import ItemInfo from './ItemInfo'
    import { getListInfo } from '../api'

    export default {
        components:{
            virtualList
        },
        data(){
            return {
                item:ItemInfo,
                listAllData:[],
                itemHeight:84,
            }
        },
        props:{
            locationIsid:{
                default:[],
            },
        },
        computed:{
            listData (){
                let tempList = this.listAllData.filter(item=>{
                    return this.locationIsid.includes(item.locationIsid)
                })
                return tempList
            },
            remain(){
                let dom = document.querySelector('.info-list-container')
                let h = 0
                if(dom!=null){
                    h = dom.clientHeight;
                }
                if(this.itemHeight*this.listData.length>h){
                    return h/this.itemHeight
                }else{
                    return 4;
                }
            }
        },
        created(){
            this.getList();
        },
        methods:{
            getList(){
                getListInfo().then(res=>{
                    this.listAllData=res.data;
                }).catch(e=>{
                    console.log(e)

                })
            },
            getItemprops (itemIndex) {
                let itemData = this.listData[itemIndex]
                return {
                    key: itemIndex,
                    props: {
                        itemData:itemData
                    }
                }
            }
        },
    }
</script>
<style lang="less" scoped>
    .no-data{
        color: #222;
        font-size: 1.2rem;
        text-align: center;
        padding: 1rem;
        padding-top: 2rem;
    }
    .virtual-cls{
        height:100%!important;
        &::-webkit-scrollbar {
            display:none
        }
    }
</style>
