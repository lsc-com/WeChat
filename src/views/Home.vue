<template>
  <div class="home">
    <div class="header">
      <span class="head-content">微信1</span>
      <span class="search_add">
        <i class="iconfont icon-sousuo"></i>
        <i class="iconfont icon-tianjia"></i>
      </span>
    </div>
    <div class="content">
      <!-- v-model="" :强制绑定，绑定data中的数据-->
      <!-- for循环中的item才是当前组件取到的值 -->
      <mt-cell-swipe
        :right="[
          {
            content: 'Delete',
            style: { background: 'red', color: '#fff' },
            handler: () => this.$messagebox('delete')
          }
        ]"
        v-for="item in form"
        :key="item.id"
      >
        <div class="content_item">
          <img :src="item.image" alt width="30" height="30" />
          <div>
            <span class="content_item_title">{{item.title}}</span>
         <span class="content_item_time" >  {{item.time}}</span>
          </div>
          <span class="content_item_home">{{item.content}}</span>
        </div>
      </mt-cell-swipe>
    </div>

    <mt-tabbar>
      <mt-tab-item :id="item.id" v-for="item in list" :key="item.id">
        <span style="display:block">
          
          <svg class="icon" aria-hidden="true">
            <use :xlink:href="item.icon" />
          </svg>
        </span>
          <span style="display:block;text-align:center">{{item.name}}</span>
      </mt-tab-item>
    </mt-tabbar>
  </div>
</template>

<script>
import { Toast } from 'mint-ui';
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
        { id: "tab1", icon: "#icon-xiaoxi", name: "微信" },
        { id: "tab2", icon: "#icon-tongxunlu-yigai", name: "通讯录" ,tongxunlu:""},
        { id: "tab3", icon: "#icon-faxian3", name: "发现" },
        { id: "tab4", icon: "#icon-wo1", name: "我" }
      ]
    };
  },
  mehtods: {
    tongxunlu(){
           Toast('登录成功');
            this.$router.push("/Mali list");
        },
  }
};
</script>

<style>
@import "../../public/css/home.css";
</style>