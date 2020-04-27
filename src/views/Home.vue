<template>
    <div class="home">
        <div class="header">
            <span class="head-content">微信</span>
            <span class="search_add">
                <i class="iconfont icon-sousuo"></i>
                <i class="iconfont icon-tianjia"></i>
            </span>
        </div>
        <div class="content">
            <!-- v-model="" :强制绑定，绑定data中的数据-->
            <!-- for循环中的item才是当前组件取到的值 -->
            <mt-cell-swipe
                    v-for="msg in form"
                    :key="msg.id"
                    :right="rightButtons">
                <div class="content_item">
                    <img :src="msg.image" alt height="30" style="border-radius: 5px;" width="30"/>
                    <div>
                        <span class="content_item_title">{{msg.title}}</span>
                        <span class="content_item_time">{{msg.time}}</span>
                    </div>
                    <span class="content_item_home">{{msg.content}}</span>
                </div>
            </mt-cell-swipe>
        </div>
        <mt-tabbar>
            <mt-tab-item :id="item.id" :key="item.id" @click.native="jumpToNeed(item.link)" v-for="item in list">
        <span style="display: block">
          <svg aria-hidden="true" class="icon">
            <use :xlink:href="item.icon"/>
          </svg>
        </span>
                <span style="display:block;text-align:center">{{item.name}}</span>
            </mt-tab-item>
        </mt-tabbar>
    </div>
</template>

<script>
    export default {
        name: "Home",
        data() {
            return {
                form: [
                    {
                        title: "text",
                        content: "content",
                        image: require("../../public/imgs/touxiang.jpg"),
                        time: "晚上7:00"
                    },
                    {
                        title: "text",
                        content: "content",
                        image: require("../../public/imgs/touxiang.jpg"),
                        time: "晚上7:00"
                    },
                    {
                        title: "text",
                        content: "content",
                        image: require("../../public/imgs/touxiang.jpg"),
                        time: "晚上7:00"
                    },
                    {
                        title: "text",
                        content: "content",
                        image: require("../../public/imgs/touxiang.jpg"),
                        time: "晚上7:00"
                    },
                    {
                        title: "text",
                        content: "content",
                        image: require("../../public/imgs/touxiang.jpg"),
                        time: "晚上7:00"
                    },
                    {
                        title: "text",
                        content: "content",
                        image: require("../../public/imgs/touxiang.jpg"),
                        time: "晚上7:00"
                    },
                    {
                        title: "text",
                        content: "content",
                        image: require("../../public/imgs/touxiang.jpg"),
                        time: "晚上7:00"
                    },
                    {
                        title: "text",
                        content: "content",
                        image: require("../../public/imgs/touxiang.jpg"),
                        time: "晚上7:00"
                    },
                    {
                        title: "text",
                        content: "content",
                        image: require("../../public/imgs/touxiang.jpg"),
                        time: "晚上7:00"
                    },
                    {
                        title: "text",
                        content: "content",
                        image: require("../../public/imgs/touxiang.jpg"),
                        time: "晚上7:00"
                    },
                    {
                        title: "text",
                        content: "content",
                        image: require("../../public/imgs/touxiang.jpg"),
                        time: "晚上7:00"
                    },
                    {
                        title: "text",
                        content: "content",
                        image: require("../../public/imgs/touxiang.jpg"),
                        time: "晚上7:00"
                    },
                    {
                        title: "text",
                        content: "content",
                        image: require("../../public/imgs/touxiang.jpg"),
                        time: "晚上7:00"
                    },
                    {
                        title: "text",
                        content: "content",
                        image: require("../../public/imgs/touxiang.jpg"),
                        time: "晚上7:00"
                    },
                    {
                        title: "text",
                        content: "content",
                        image: require("../../public/imgs/touxiang.jpg"),
                        time: "晚上7:00"
                    },
                ],
                list: [
                    {id: "tab1", icon: "#icon-xiaoxi", name: "微信", link: 'Home'},
                    {id: "tab2", icon: "#icon-tongxunlu-yigai", name: "通讯录", link: 'Mail'},
                    {id: "tab3", icon: "#icon-faxian3", name: "发现", link: 'Find'},
                    {id: "tab4", icon: "#icon-wo1", name: "我", link: 'About'}
                ]
            };
        },
        created() {
            this.rightButtons = [
                {
                    content: '删除该聊天',
                    style: { background: 'red', color: '#fff', },
                    handler: () => this.$messagebox('确认删除')
                }
            ];
        },
        methods: {
            jumpToNeed(link) {
                this.$router.push({name: link});
            }
        }
    };
</script>

<style>
    @import "../../public/css/home.css";

    .html {
        overflow-y: hidden;
    }
</style>