<template>
  <div class="home">
    <div class="about_header">
      <!-- <div style="height:20px;margin-bottom: 10px;">
                 <i class="iconfont icon-you" style="float:left;height:20px; "></i>
                 <i class="iconfont icon-you" style="float:right; height:20px;"></i>
      </div>-->
        <mt-header style="color: black;margin-bottom: -15px;">
            <router-link to="Mail" slot="left">
            <mt-button icon="back"></mt-button>
            </router-link>
            <mt-button icon="more" slot="right"></mt-button>
        </mt-header>
      <span class="about_header_content">
        <img
          src="../../public/imgs/touxiang.jpg"
          alt
          width="65px"
          height="65px"
          style="border-radius: 5px;"
        />
      </span>
      <span style="margin-left:15px;  font-size:20px; ">
        <b>Aaron</b>
      </span>
      <div class="about_span">
        <span style="margin-right:100px;margin-left:9px;color: rgba(23, 14, 14, 0.51);">微信号:342345</span>
      </div>
    </div>
    <div class="tongxunlu_top">
      <mt-cell-swipe>
        <div class="maildetails_span">
          <span style="color: black;">设置标签和备注</span>
          <i class="iconfont icon-you" style="margin-left: 163px;"></i>
        </div>
      </mt-cell-swipe>
    </div>
    <div class="tongxunlu_top">
      <mt-cell-swipe>
        <div class="maildetails_span">
          <span style="color: black;">朋友权限</span>
          <i class="iconfont icon-you" style="margin-left: 210px; "></i>
        </div>
      </mt-cell-swipe>
    </div>
    <div style=" background-color: #dcdcdc70; height: 5px;"></div>
    <div class="tongxunlu_top">
      <mt-cell-swipe style="height:20px;">
        <div class="maildetails_span">
          <span style="color: black;">朋友圈</span>
          <i class="iconfont icon-you" style="margin-left: 225px; "></i>
        </div>
      </mt-cell-swipe>
    </div>
    <div class="tongxunlu_top">
      <mt-cell-swipe>
        <div class="maildetails_span">
          <span style="color: black;">更多信息</span>
          <i class="iconfont icon-you" style="margin-left: 208px; "></i>
        </div>
      </mt-cell-swipe>
    </div>
    <div style=" background-color: #dcdcdc70; height: 5px;"></div>
    <div class="tongxunlu_top">
      <mt-cell-swipe>
        <div style="margin-left: 107px;" >
          <i class="iconfont icon-weixinxiaoxi" style=" "></i>
          <span style="color: rgba(14, 87, 164, 0.68);font-weight:bold;margin-left: 9px;">发消息</span>
        </div>
      </mt-cell-swipe>
      <mt-cell-swipe>
        <div style="margin-left: 85px;">
          <i class="iconfont icon-shipin" style></i>
          <span style="color: rgba(14, 87, 164, 0.68);font-weight:bold;margin-left: 9px;">音视频通话</span>
        </div>
      </mt-cell-swipe>
    </div>
  </div>
</template>

<script>
import { Toast } from "mint-ui";

export default {
  name: "Maildetails",
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
        }
      ]
    };
  },
  mehtods: {
    tongxunlu() {
      Toast("登录成功");
      this.$router.push("/mali");
    },
    jumpToNeed() {
      this.$router.push({ name: "Home" });
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
.about_header {
  height: 125px;
  line-height: 50px;
  position: sticky;
  top: 0;
}
.about_header_content {
  display: inline-block;
  margin-top: 17px;
  margin-left: 17px;
}
.about_span {
  height: 10px;
  margin-top: -38px;
  margin-left: 87px;
}
.mint-header{
    background-color: #f0f8ff00;
}
</style>