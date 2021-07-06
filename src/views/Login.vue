<template>
  <div class="wrapper">
    <div class="login">
      <el-form
        size="mini"
        :model="ruleForm"
        status-icon
        :rules="rules"
        ref="ruleForm"
        label-width="100px"
        class="demo-ruleForm"
      >
        <el-form-item label="帐号" prop="loginId">
          <el-input
            type="text"
            v-model="ruleForm.loginId"
            autocomplete="off"
          ></el-input>
        </el-form-item>

        <el-form-item label="密码" prop="loginPwd">
          <el-input
            type="password"
            v-model="ruleForm.loginPwd"
            autocomplete="off"
          ></el-input>
        </el-form-item>

        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm')"
            >提交</el-button
          >
          <el-button @click="resetForm('ruleForm')">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
    <canvas id="canvas" ref="canvas"> </canvas>
  </div>
</template>
<script>
//md5 字符串加密方法
import { strToMd5 } from "../utils/md5";

export default {
  data() {
    var validateLoginId = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入用户名"));
      }
      callback();
    };
    var validateLoginPwd = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      }
      callback();
    };
    return {
      ruleForm: {
        loginId: "",
        loginPwd: "",
      },
      rules: {
        loginId: [{ validator: validateLoginId, trigger: "blur" }],
        loginPwd: [{ validator: validateLoginPwd, trigger: "blur" }],
      },
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(async (valid) => {
        //判断表单是否验证成功
        if (valid) {
          this.ruleForm.loginPwd = strToMd5(this.ruleForm.loginPwd);
          let res = await this.$get("/Admin/Login", this.ruleForm);
          if (res.success) {
            sessionStorage.setItem("token", res.token);
            this.$setToken();
          }
          this.$router.push("/layout");
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
  },
};
</script>

<style scoped lang="scss">
.wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  .login {
    margin-top: 2rem;
    width: 30%;
  }
}
</style>
