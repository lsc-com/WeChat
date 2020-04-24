<template>
  <div class="home">
    <div class="header">
      <span>WeChat</span>
    </div>
    <div class="content" >
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
        v-for="item in form" :key="item"
        >
        <div class="content_item">
        <img :src="item.image" alt="" width="30" height="30">
        <div>
          {{item.title}}
          {{item.time}}
        </div>
        {{item.content}}
        </div>
      </mt-cell-swipe>
    </div>
    <mt-tabbar v-model="selected">
      <mt-tab-item id="tab1">
        <img slot="icon" src="../assets/logo.png">
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
    </mt-tabbar>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data(){
    return{
      form:[
        {title:'text',content:'content',image:'../assets/logo.png',time:'晚上7:00'},
        {title:'text1',content:'content1',image:'../assets/logo.png'}
      ]
    }
  },
  mehtods:{

  }
}
</script>

<style>
@import '../../public/css/home.css';

</style>