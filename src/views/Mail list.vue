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
            <span class="content_item_tongxunlu" style="display:block">
              <svg class="icon" aria-hidden="true">
                <use :xlink:href="item.icon" />
              </svg>
            </span>
            <span class="content_item_content">{{item.content}}</span>
          </div>
        </mt-cell-swipe>
      </div>
      <div>
        <mt-index-section :index="item.Letter" v-for="item in section" :key="item.id">
          <mt-cell title>
            <img :src="item.image" alt width="30" height="30" class="title_img" />
            <span>{{item.name}}</span>
          </mt-cell>
        </mt-index-section>
      </div>
    </mt-index-list>

    <mt-tabbar>
      <mt-tab-item :id="item.id" v-for="item in list" :key="item.id">
        <span>
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
export default {
  name: "Mail list",
  data() {
    return {
      form: [
        {
          content: "新的朋友",
          icon: "#icon-tianjiapengyou"
        },
        {
          content: "群聊",
          icon: "#icon-qunliao"
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
        { id: "tab1", icon: "#icon-xiaoxi", name: "微信" },
        { id: "tab2", icon: "#icon-tongxunlu-yigai", name: "通讯录" },
        { id: "tab3", icon: "#icon-faxian3", name: "发现" },
        { id: "tab4", icon: "#icon-wo1", name: "我" }
      ],
      section: [
        {
          image: require("../../public/imgs/touxiang.jpg"),
          name: "Aaron",
          Letter: "A"
        },
        {
          image: require("../../public/imgs/touxiang.jpg"),
          name: "BBBB",
          Letter: "B"
        },
        {
          image: require("../../public/imgs/touxiang.jpg"),
          name: "CCCC",
          Letter: "C"
        },
        {
          image: require("../../public/imgs/touxiang.jpg"),
          name: "DDDD",
          Letter: "D"
        },
        {
          image: require("../../public/imgs/touxiang.jpg"),
          name: "EEEE",
          Letter: "E"
        },
        {
          image: require("../../public/imgs/touxiang.jpg"),
          name: "FFFF",
          Letter: "F"
        },
        {
        //   Letter: "G",
          image: require("../../public/imgs/touxiang.jpg"),
          name: "GGGG",
          
        }
      ]
    };
  },
  mehtods: {}
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
</style>