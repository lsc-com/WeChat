<template>
    <div class="home">
        <div class="header">

            <button @click.native="jumpToNeed">test</button>
            <span class="head-content">发现</span>
            <span class="search_add">
        <i class="iconfont icon-sousuo" @click="jumpToNeed"></i>
        <i class="iconfont icon-tianjia"></i>
      </span>
        </div>
        <div class="tongxunlu_top">
            <mt-cell-swipe
                    :key="item.id"
                    :right="[
          {
            content: 'Delete',
            style: { background: 'red', color: '#fff' },
            handler: () => this.$messagebox('delete')
          }
        ]"
                    v-for="item in form"
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
<!--            <mt-tab-item id="tab1" @click.native="jumpToNeed">-->
<!--                <router-link :to="{name:'Home'}">-->
<!--                    <div>-->
<!--                        <img src="../../public/imgs/logo.png">-->
<!--                        hello-->
<!--                    </div>-->
<!--                </router-link>-->
<!--                tab1-->
<!--            </mt-tab-item>-->
<!--            <mt-tab-item id="tab2">-->
<!--                <img slot="icon" src="">-->
<!--                tab2-->
<!--            </mt-tab-item>-->
<!--            <mt-tab-item id="tab3">-->
<!--                <img slot="icon" src="">-->
<!--                tab3-->
<!--            </mt-tab-item>-->
<!--            <mt-tab-item id="tab4">-->
<!--                <img slot="icon" src="">-->
<!--                tab4-->
<!--            </mt-tab-item>-->
        </mt-tabbar>
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
                        content: "朋友圈",
                        icon: "#icon-pengyouquan"
                    },
                    {
                        content: "扫一扫",
                        icon: "#icon-saoyisao"
                    },
                    {
                        content: "摇一摇",
                        icon: "#icon-yaoyiyao"
                    },
                    {
                        content: "游戏",
                        icon: "#icon-youxi"
                    },
                    {
                        content: "搜一搜",
                        icon: "#icon-souyisou"
                    },
                    {
                        content: "附近的人",
                        icon: "#icon-fujinderen"
                    },
                    {
                        content: "购物",
                        icon: "#icon-gouwu-"
                    },
                ],
                list: [
                    {id: "tab1", icon: "#icon-weixinxiaoxi", name: "微信", link:'Home'},
                    {id: "tab2", icon: "#icon-tongxunlu-yigai", name: "通讯录",link:'Mail'},
                    {id: "tab3", icon: "#icon-faxian1", name: "发现", link:'Find'},
                    {id: "tab4", icon: "#icon-wo1", name: "我", link:'About'}
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
</style>