<template>
  <div class="home">
    <div class="header">
      <span class="head-content">微信</span>
       <i class="iconfont icon-sousuo"></i>
          <i class="iconfont icon-tianjia"></i>
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
        :key="item"
      >
        <div class="content_item">
          <img :src="item.image" alt width="30" height="30" />
          <div>
           <span class="content_item_title"> {{item.title}}</span> 
           <span class="content_item_time">{{item.time}}</span> 
          </div>
           <span class="content_item_content">{{item.content}}</span> 
        </div>
      </mt-cell-swipe>
    </div>
    
    <mt-tabbar v-model="selected" v-for="item in list" :key="item">
         <svg class="icon" aria-hidden="true">
        <use xlink :href="item.id" />
      </svg>
      {{item.name}}
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
          image: "../../public/imgs/touxiang.jpg",
          time: "晚上7:00"
        },
         {
          title: "text",
          content: "content",
          image: "../../public/imgs/touxiang.jpg",
          time: "晚上7:00"
        },
         {
          title: "text",
          content: "content",
          image: "../../public/imgs/touxiang.jpg",
          time: "晚上7:00"
        },
         {
          title: "text",
          content: "content",
          image: "../../public/imgs/touxiang.jpg",
          time: "晚上7:00"
        },
         {
          title: "text",
          content: "content",
          image: "../../public/imgs/touxiang.jpg",
          time: "晚上7:00"
        },
         {
          title: "text",
          content: "content",
          image: "../../public/imgs/touxiang.jpg",
          time: "晚上7:00"
        },
         {
          title: "text",
          content: "content",
          image: "../../public/imgs/touxiang.jpg",
          time: "晚上7:00"
        },
         {
          title: "text",
          content: "content",
          image: "../../public/imgs/touxiang.jpg",
          time: "晚上7:00"
        },
         {
          title: "text",
          content: "content",
          image: "../../public/imgs/touxiang.jpg",
          time: "晚上7:00"
        },
         {
          title: "text",
          content: "content",
          image: "../../public/imgs/touxiang.jpg",
          time: "晚上7:00"
        },
        
      ],
      list: [
        { id: "#icon-icon-weixinxiaoxi-copy", name: "微信" },
        // { id: "#icon-icon-tongxunlu", name: "通讯录" },
        // { id: "#icon-icon-faxian", name: "发现" },
        // { id: "#icon-icon-wo", name: "我" },
      ]
    };
  },
  mehtods: {}
};
</script>

<style>
@import "../../public/css/home.css";
</style>