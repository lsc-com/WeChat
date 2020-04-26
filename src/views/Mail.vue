<template>
    <div class="home">
        <div class="header">
            <span class="head-content">通讯录</span>
            <span class="search_add">
                <i class="iconfont icon-sousuo"></i>
                <i class="iconfont icon-tianjia"></i>
            </span>
        </div>
        <!-- <div class="content"> -->
        <!-- v-model="" :强制绑定，绑定data中的数据-->
        <!-- for循环中的item才是当前组件取到的值 -->

        <!-- </div> -->
        <mt-index-list>
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
                    </div>
                </mt-cell-swipe>
            </div>
            <div class="tongxunlu_bottom">
                <mt-index-section :index="item.Letter" :key="item.id" v-for="item in section">
                    <mt-cell title>
                        <img :src="item.image" alt class="title_img" height="30" width="30" style="border-radius: 5px;"/>
                        <span>{{item.name}}</span>
                    </mt-cell>
                </mt-index-section>
            </div>
        </mt-index-list>

        <mt-tabbar>
            <mt-tab-item :id="item.id" :key="item.id" @click.native="jumpToNeed" v-for="item in list">
                <router-link :to="{name: item.link}">
                    <span style="display: block">
                      <svg aria-hidden="true" class="icon">
                        <use :xlink:href="item.icon"/>
                      </svg>
                    </span>
                </router-link>
                <span style="display:block;text-align:center">{{item.name}}</span>
            </mt-tab-item>
        </mt-tabbar>
    </div>
</template>

<script>
    export default {
        name: "Mail",
        data() {
            return {
                form: [
                    {
                        content: "新的朋友",
                        icon: "#icon-xinpengyou"
                    },
                    {
                        content: "群聊",
                        icon: "#icon-wo1"
                    },
                    {
                        content: "标签",
                        icon: "#icon-biaoqian"
                    },
                    {
                        content: "公众号",
                        icon: "#icon-gongzhonghao"
                    }
                ],
                list: [
                    {id: "tab1", icon: "#icon-weixinxiaoxi", name: "微信", link: 'Home'},
                    {id: "tab2", icon: "#icon-tongxunlu", name: "通讯录", link: ''},
                    {id: "tab3", icon: "#icon-faxian3", name: "发现", link: 'Find'},
                    {id: "tab4", icon: "#icon-wo1", name: "我",link:'About'}
                ],
                section: [
                    {
                        image: require("../../public/imgs/touxiang.jpg"),
                        name: "Aaron",
                        Letter: "A"
                    },
                    {
                        image: require("../../public/imgs/touxiang.jpg"),
                        name: "boyB",
                        Letter: "B"
                    },
                    {
                        image: require("../../public/imgs/touxiang.jpg"),
                        name: "陈世美",
                        Letter: "C"
                    },
                    {
                        image: require("../../public/imgs/touxiang.jpg"),
                        name: "滴滴打车",
                        Letter: "D"
                    },
                    {
                        image: require("../../public/imgs/touxiang.jpg"),
                        name: "饿了么",
                        Letter: "E"
                    },
                    {
                        image: require("../../public/imgs/touxiang.jpg"),
                        name: "法尔",
                        Letter: "F"
                    },
                    {
                      Letter: "G",
                        image: require("../../public/imgs/touxiang.jpg"),
                        name: "高老头",
                    },
                     {
                      Letter: "N",
                        image: require("../../public/imgs/touxiang.jpg"),
                        name: "牛蛋儿",
                    },
                     {
                      Letter: "S",
                        image: require("../../public/imgs/touxiang.jpg"),
                        name: "首席的",
                    },
                     {
                      Letter: "T",
                        image: require("../../public/imgs/touxiang.jpg"),
                        name: "他大爷的",
                    },
                     {
                      Letter: "W",
                        image: require("../../public/imgs/touxiang.jpg"),
                        name: "吴哥们",
                    },
                     {
                      Letter: "Y",
                        image: require("../../public/imgs/touxiang.jpg"),
                        name: "杨女士",
                    },
                     {
                      Letter: "Z",
                        image: require("../../public/imgs/touxiang.jpg"),
                        name: "张先生",
                    },
                ]
            };
        },
        mehtods: {
            jumpToNeed() {
                this.$router.push({path: '/home'});
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

    .title_img {
        float: left;
        margin-right: 10px;
    }

    .icon {
        border-radius: 5px;
    }
</style>