<template>
  <div class="login">
    <div class="login-form">
      <h3 class="login-title">Vue3 admin</h3>
      <a-form
        name="custom-validation"
        ref="ruleForm"
        :model="formData"
        :rules="rules"
        v-bind="layout"
      >
        <a-form-item required has-feedback name="username">
          <a-input
            v-model:value="formData.username"
            type="text"
            placeholder="用户名"
            autocomplete="off"
          />
        </a-form-item>
        <a-form-item has-feedback name="password">
          <a-input
            v-model:value="formData.password"
            type="password"
            placeholder="密码"
            autocomplete="off"
          />
        </a-form-item>
        <a-form-item :wrapper-col="{ span: 24, offset: 0 }">
          <a-button
            class="login-btn"
            type="primary"
            @click="login"
            :loading="loading"
            >Login</a-button
          >
        </a-form-item>
      </a-form>
    </div>
  </div>
</template>

<script>
import { ref, reactive, getCurrentInstance } from "vue";

export default {
  name: "Login",
  setup() {
    const { ctx } = getCurrentInstance();

    const formData = reactive({
      username: "admin",
      password: "123456",
    });

    // 密码框类型
    const passType = ref("password");

    function changePassType() {
      passType.value = passType.value === "password" ? "text" : "password";
    }

    const loading = ref(false);

    function login() {
      loading.value = true;
      ctx.$refs.ruleForm
        .validate()
        .then(() => {
          loading.value = false;
          ctx.$router.push("/dashboard");
          sessionStorage.setItem("token", "aaaazzz======");
        })
        .catch(() => {
          loading.value = false;
          return false;
        });
    }

    return {
      layout: {
        labelCol: { span: 0 },
        wrapperCol: { span: 24 },
      },
      formData,
      rules: {
        username: [
          {
            required: true,
            message: "请输入用户名",
            trigger: "blur",
          },
        ],
        password: [
          {
            required: true,
            message: "请输入密码",
            trigger: "blur",
          },
        ],
      },
      passType,
      changePassType,
      login,
      loading
    };
  },
};
</script>

<style lang="scss" scoped>
.login {
  padding-top: 100px;
}
.login-form {
  width: 400px;
  margin: 0 auto;

  .login-title {
    font-size: 18px;
    line-height: 40px;
    margin-bottom: 20px;
    text-align: center;
  }

  .login-form-item {
    position: relative;
    display: flex;
    align-items: center;
    border: 1px solid #eeeeee;
    padding: 4px 8px;
    padding-right: 40px;
    margin-bottom: 10px;

    input {
      height: 32px;
      flex: 1;
      border: 0;
      outline: 0;
      font-size: 14px;
    }

    .passType {
      position: absolute;
      right: 0;
      width: 30px;
      text-align: center;
      user-select: none;
      cursor: pointer;
    }
  }

  .login-btn {
    width: 100%;
    cursor: pointer;
  }
}
</style>
