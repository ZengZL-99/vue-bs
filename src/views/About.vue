<template>
  <div class="about">
    <el-row>
      <el-col :span="24">
        <div class="grid-content bg-purple">
          <el-container>
            <el-header>Header</el-header>
            <el-container>
              <el-aside width="200px">
                <el-menu
                  :default-active="this.$route.path"
                  router
                  class="el-menu-vertical-demo"
                  @open="handleOpen"
                  @close="handleClose"
                >
                  <el-menu-item v-for="(item, i) in menuList" :key="i" :index="item.name">
                    <i class="el-icon-setting"></i>
                    <span slot="title">{{ item.navItem }}</span>
                  </el-menu-item>
                </el-menu>
              </el-aside>
              <el-main>
                <router-view class="menu-right" />
              </el-main>
            </el-container>
          </el-container>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      menuList: [
        { name: "/about/edit", navItem: "Edit" },
        { name: "/about/list", navItem: "List" },
      ],
    };
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
  },
};
</script>

<style>
.el-row {
  margin-bottom: 20px;
}
.el-col {
  border-radius: 4px;
}
.bg-purple-dark {
  background-color: pink;
}
.bg-purple-light {
  background-color: sandybrown;
}
</style>
