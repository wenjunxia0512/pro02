<template>
  <el-container>
    <el-header>
      <div id="logo-box">
        <img src="../assets/heima.png" alt />
        <span>电商管理后台系统</span>
      </div>
      <el-button type="info" @click="logout">退出</el-button>
    </el-header>
    <el-container>
      <el-aside :width="menushow? '65px' : '200px'">
        <div
          style="background-color:pink;height:25px;color:#fff;font-size:12px;line-height:25px;
        
        text-align:center;letter-spacing:0.1em;user-select:none;cursor:pointer"
          @click="menushow = !menushow"
        >|||</div>
        <el-menu
          background-color="#333744"
          text-color="#fff"
          active-text-color="pink"
          :unique-opened="true"
          :style="menushow? 'width:65px':'width:200px'"
          :collapse="menushow "
          :collapse-transition="false"
        >
          <el-submenu :index="''+item.id" v-for="(item,k) in menuList" :key="''+item.id">
            <template slot="title">
             
              <i :class="'iconfont icon-'+menuicon[k]"></i>
              <span>{{ item.authName }}</span>
            </template>
            <el-menu-item
              :index="item.id + '-' +item2.id"
              v-for="item2 in item.children"
              :key="item2.id"
            >
            <i class="el-icon-menu"></i>
            <span> {{ item2.authName}} </span>
            </el-menu-item>
            
          </el-submenu>
        </el-menu>
      </el-aside>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {
  // 生命周期函数
  created() {
    this.getMenuList();
  },
  data() {
    return {
      menushow: false,
      // 接收后端返回的左侧显示的权限信息
      menuList: [],
      menuicon:['users','tijikongjian','shangpin','danju','baobiao']
    };
  },
  methods: {
    // 获得用于显示在左侧导航信息的权限
    async getMenuList() {
      const { data: res } = await this.$http.get("/menus");
      //  获取失败处理
      if (res.meta.status !== 200) {
        return this.$message.error(res.meta.msg);
      }

      // 把权限数据赋予给menuList
      this.menuList = res.data;
    },
    logout() {
      // 清楚token
      this.$confirm("确定要退出吗", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          window.sessionStorage.removeItem("token");
          this.$router.push("./login");
        })
        .catch(() => {});
    }
  }
};
</script>
<style lang="less" scoped>
.el-container {
  height: 100%;
  .el-header {
    background-color: gray;
    padding: 0;
    padding-right: 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    #logo-box {
      color: #fff;
      font-size: 22px;
      display: flex;
      align-items: center;
      img {
        width: 50px;
        height: 50px;
        margin-right: 10px;
      }
    }
  }
  .el-aside {
    background-color: #333744;
  }
  .el-main {
    background-color: #eaedf1;
  }
}
</style>