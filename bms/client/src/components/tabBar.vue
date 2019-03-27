<template>
  <div class="tabBar">
    <el-row class="tac">
      <el-col :span="24">
        <el-menu default-active="1" class="el-menu-vertical-demo">
          <!-- <el-submenu index="1">
            父级标签
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>商家列表</span>
            </template>
            二级标签
            <el-menu-item-group>
              <template slot="title">分组一</template>
              <el-menu-item index="1-1">选项1</el-menu-item>
              <el-menu-item index="1-2">选项2</el-menu-item>
            </el-menu-item-group>
          </el-submenu>-->
          <router-link :to="{name:'goodsList'}">
            <el-menu-item index="1">
              <i class="el-icon-menu"></i>
              <span slot="title">商家列表</span>
            </el-menu-item>
          </router-link>
          <router-link :to="{name:'addGoods'}">
            <el-menu-item index="2">
              <i class="el-icon-star-on"></i>
              <span slot="title">添加商家</span>
            </el-menu-item>
          </router-link>
          <router-link :to="{name:'activity'}">
            <el-menu-item index="3">
              <i class="el-icon-menu"></i>
              <span slot="title">限时活动</span>
            </el-menu-item>
          </router-link>
          <router-link :to="{name:'bigb'}">
            <el-menu-item index="4">
              <i class="el-icon-menu"></i>
              <span slot="title">年度大礼包</span>
            </el-menu-item>
          </router-link>
        </el-menu>
      </el-col>
    </el-row>
  </div>
</template>
<script>
export default {
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  }
};
</script>

<style lang="">
    .tabBar{
        flex-shrink: 0;
    }
</style>