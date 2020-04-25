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
<<<<<<< HEAD

=======
>>>>>>> 522b674fde4f2f437f8a8ea66cfe3b670bd4b690
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
<<<<<<< HEAD
         <span class="content_item_time" >  {{item.time}}</span>
          </div>
          <span class="content_item_home">{{item.content}}</span>
=======
            <span class="content_item_time">{{item.time}}</span>
          </div>
          <span class="content_item_content">{{item.content}}</span>
>>>>>>> 522b674fde4f2f437f8a8ea66cfe3b670bd4b690
        </div>
      </mt-cell-swipe>
    </div>

    <mt-tabbar>
      <mt-tab-item :id="item.id" v-for="item in list" :key="item.id">
        <span style="display:block">
<<<<<<< HEAD
          
=======
>>>>>>> 522b674fde4f2f437f8a8ea66cfe3b670bd4b690
          <svg class="icon" aria-hidden="true">
            <use :xlink:href="item.icon" />
          </svg>
        </span>
<<<<<<< HEAD
          <span style="display:block;text-align:center">{{item.name}}</span>
      </mt-tab-item>
    </mt-tabbar>
=======
        <span style="display:block;text-align:center">{{item.name}}</span>
      </mt-tab-item>
    </mt-tabbar>

    <!-- <mt-tabbar>
  <mt-tab-item id="tab1">
    <img slot="icon" src="">
    tab1
  </mt-tab-item>
  <mt-tab-item id="tab2">
    <img slot="icon" src="">
    tab2
  </mt-tab-item>
  <mt-tab-item id="tab3">
    <img slot="icon" src="">
    tab3
  </mt-tab-item>
  <mt-tab-item id="tab4">
    <img slot="icon" src="">
    tab4
  </mt-tab-item>
    </mt-tabbar>-->
>>>>>>> 522b674fde4f2f437f8a8ea66cfe3b670bd4b690
  </div>
</template>

<script>
<<<<<<< HEAD
import { Toast } from 'mint-ui';
=======
>>>>>>> 522b674fde4f2f437f8a8ea66cfe3b670bd4b690
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
<<<<<<< HEAD
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
=======
        }
      ],
      list: [
        { id: "tab1", icon: "#icon-xiaoxi", name: "微信" },
        { id: "tab2", icon: "#icon-tongxunlu-yigai", name: "通讯录" },
>>>>>>> 522b674fde4f2f437f8a8ea66cfe3b670bd4b690
        { id: "tab3", icon: "#icon-faxian3", name: "发现" },
        { id: "tab4", icon: "#icon-wo1", name: "我" }
      ]
    };
  },
<<<<<<< HEAD
  mehtods: {
    tongxunlu(){
           Toast('登录成功');
            this.$router.push("/Mali list");
        },
  }
=======
  mehtods: {}
>>>>>>> 522b674fde4f2f437f8a8ea66cfe3b670bd4b690
};
</script>

<style>
@import "../../public/css/home.css";
<<<<<<< HEAD
=======
.icon {
  width: 2em;
  height: 2em;
  vertical-align: 0.5em;
  fill: currentColor;
  overflow: hidden;
}
>>>>>>> 522b674fde4f2f437f8a8ea66cfe3b670bd4b690
</style>