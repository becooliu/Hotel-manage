<template>
  <div class="wrapper">
    <div class="left" :class="[themeName, isCollapse ? '' : 'open']">
      <div class="logo">Bing</div>
      <el-menu
        default-active="2"
        class="el-menu-vertical-demo"
        :background-color="themeColor"
        text-color="#fff"
        active-text-color="#ffd04b"
        :collapse="isCollapse"
      >
        <el-submenu index="1">
          <template slot="title">
            <i class="el-icon-user"></i>
            <span>帐号管理</span>
          </template>

          <el-menu-item index="1-1">角色管理</el-menu-item>
          <el-menu-item index="1-2">帐号管理</el-menu-item>
        </el-submenu>

        <el-submenu index="2">
          <template slot="title">
            <i class="el-icon-house"></i>
            <span>客房管理</span>
          </template>

          <el-menu-item index="2-1">类型管理</el-menu-item>
          <el-menu-item index="2-2">客房管理</el-menu-item>
        </el-submenu>

        <el-submenu index="3">
          <template slot="title">
            <i class="el-icon-s-custom"></i>
            <span>客户管理</span>
          </template>

          <el-menu-item index="3-1">客户管理</el-menu-item>
        </el-submenu>

        <el-submenu index="4">
          <template slot="title">
            <i class="el-icon-s-check"></i>
            <span>权限管理</span>
          </template>

          <el-menu-item index="4-1">权限管理</el-menu-item>
        </el-submenu>
      </el-menu>
    </div>
    <div class="right">
      <div class="top" :class="themeName">
        <div class="menu-icon">
          <i
            class="el-icon-menu custom-menu"
            @click="isCollapse = !isCollapse"
          ></i>
        </div>
        <div class="nav">
          <el-menu
            :default-active="activeIndex2"
            class="el-menu-demo"
            mode="horizontal"
            :background-color="themeColor"
            text-color="#fff"
            active-text-color="#ffd04b"
          >
            <el-menu-item index="1"
              ><i class="el-icon-s-home"></i> Home</el-menu-item
            >
            <el-menu-item index="2"
              ><i class="el-icon-chat-dot-round"></i> Message</el-menu-item
            >
            <el-menu-item index="3"
              ><i class="el-icon-message"></i> Email</el-menu-item
            >
            <el-submenu index="4">
              <template slot="title"
                ><i class="el-icon-paperclip"></i> Theme</template
              >
              <el-menu-item
                index="{index}"
                v-for="(item, index) in theme"
                :key="index"
                @click="changeTheme(item.value, item.themeName)"
                >{{ item.name }}</el-menu-item
              >
            </el-submenu>
            <el-submenu index="5">
              <template slot="title"
                ><i class="el-icon-key"></i> 管理员</template
              >
              <el-menu-item index="5-1">个人中心</el-menu-item>
              <el-menu-item index="5-2">修改密码</el-menu-item>
              <el-menu-item index="5-3">退出系统</el-menu-item>
            </el-submenu>
          </el-menu>
        </div>
      </div>
      <div class="content">111</div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      activeIndex2: "1",
      themeColor: "#545c64",
      themeName: "",
      //展开/收起侧边栏
      isCollapse: false,
    };
  },
  computed: {
    ...mapState("theme", ["theme"]),
  },
  methods: {
    changeTheme(color, themeName) {
      this.themeColor = color;
      this.themeName = themeName;
    },
  },
};
</script>

<style scoped lang="scss">
$grey: rgb(84, 92, 100);
.wrapper {
  display: flex;
  width: 100%;
  .blueTheme {
    background-color: #3170a7 !important;
    [class*="el-icon"] {
      color: #fff;
    }
  }
  .greenTheme {
    background-color: #6e8b74 !important;
    [class*="el-icon"] {
      color: #fff;
    }
  }
  .left {
    &.open {
      width: 240px;
    }
    height: 100vh;
    background-color: $grey;

    .logo {
      width: 90%;
      margin: 10px auto;
      text-align: center;
      padding: 8px 0;
      color: #fff;
      border: 1px solid rgb(255, 255, 255, 0.7);
    }
    > .el-menu {
      border-right: none;
    }
  }
  .right {
    flex: 1;
    .top {
      display: flex;
      justify-content: space-between;
      background-color: $grey;
      .menu-icon {
        height: 60px;
        line-height: 60px;
        padding: 0 5px;
        .custom-menu {
          color: #fff;
          font-size: 18px;
          cursor: pointer;
        }
      }
    }
    .content {
      padding: 5px;
    }
  }
}
</style>
