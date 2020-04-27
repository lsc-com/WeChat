<template>
    <div class="home">
        <div class="about_header">

            <span class="about_header_content"><img src="../../public/imgs/touxiang.jpg" alt width="65px" height="65px" style="border-radius: 5px;"/></span>
            <span style="margin-left:15px;  font-size:20px;"><b>阿克汉</b></span>
            <div class="about_span">
                <span style="margin-right:100px;margin-left:10px;color: rgba(23, 14, 14, 0.51);font-size: 10px;">微信号</span>
                  <i class="iconfont icon-ico" style="margin-right: 10px;margin-left: 80px;"></i>
                  <i class="iconfont icon-you"></i>     
            </div>
           
        </div>
        <div style=" background-color: #dcdcdc70; height: 5px;"></div>

        <div class="tongxunlu_top">
            <mt-cell-swipe >
                <div class="content_item">
            <span class="content_item_tongxunlu" style="display:block">
              <svg aria-hidden="true" class="icon">
                <use xlink:href="#icon-weixinzhifu"/>
              </svg>
            </span>
                    <span class="content_item_content">支付</span>
                    <i class="iconfont icon-you" style="float:right; "></i>
                </div>
            </mt-cell-swipe>
        </div>
          <div style=" background-color: #dcdcdc70; height: 5px;"></div>

        <div class="tongxunlu_top">
            <mt-cell-swipe
                        v-for="item in form"
                        :key="item.id"
                >
                <div class="content_item">
            <span class="content_item_tongxunlu" style="display:block">
              <svg aria-hidden="true" class="icon">
                <use :xlink:href="item.icon"/>
              </svg>
            </span>
                    <span class="content_item_content">{{item.content}}</span>
                    <i class="iconfont icon-you" style="float:right; "></i>
                </div>
            </mt-cell-swipe>
        </div>
        <mt-tabbar>
            <mt-tab-item :id="item.id" :key="item.id" v-for="item in list" @click.native="jumpToNeed">
                <router-link :to="{name: item.link}">
                <span style="display:block">
                  <svg aria-hidden="true" class="icon">
                    <use :xlink:href="item.icon"/>
                  </svg>
                </span>
                </router-link>
                <span style="display:block;text-align:center">{{item.name}}</span>
            </mt-tab-item>
        </mt-tabbar>
         <div style=" background-color: #dcdcdc70; height: 5px;"></div>

        <div class="tongxunlu_top">
            <mt-cell-swipe >
                <div class="content_item">
            <span class="content_item_tongxunlu" style="display:block">
              <svg aria-hidden="true" class="icon">
                <use xlink:href="#icon-kejian"/>
              </svg>
            </span>
                    <span class="content_item_content">设置</span>
                    <i class="iconfont icon-you" style="float:right; "></i>
                </div>
            </mt-cell-swipe>
        </div>
    </div>
</template>

<script>
    import {Toast} from 'mint-ui';

    export default {
        name: "Home",
        data() {
            return {
                form: [
                    {
                        content: "收藏",
                        icon: "#icon-wei-"
                    },
                    {
                        content: "相册",
                        icon: "#icon-xiangce"
                    },
                    {
                        content: "卡包",
                        icon: "#icon-qianbao"
                    },
                    {
                        content: "表情",
                        icon: "#icon-biaoqing"
                    },
                ],
                list: [
                    {id: "tab1", icon: "#icon-weixinxiaoxi", name: "微信", link:'Home'},
                    {id: "tab2", icon: "#icon-tongxunlu-yigai", name: "通讯录",link:'Mail'},
                    {id: "tab3", icon: "#icon-faxian3", name: "发现", link:'Find'},
                    {id: "tab4", icon: "#icon-wo2", name: "我", link:'About'}
                ]
            };
        },
        mehtods: {
            tongxunlu() {
                Toast('登录成功');
                this.$router.push("/mali");
            },
            jumpToNeed(){
                this.$router.push({name:'Home'});
            }
        }
    };
</script>

<style>
    @import "../../public/css/home.css";

    .tongxunlu_top {
        position: sticky;
    }

    .content_item_tongxunlu {
        padding-top: 10px;
        height: 7px;
        width: 50px;
    }
    .about_header{
    height: 95px;
    line-height: 50px;
    position: sticky;
    top: 0;
    }
    .about_header_content{
      display: inline-block;
      margin-top: 17px;
      margin-left: 17px;
    }
    .about_span{
      height: 10px;
      margin-top: -38px;
      margin-left: 87px;
      
    }
</style>