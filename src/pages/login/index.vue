<template>
  <div class="login">
    <div class="login-form">
      <h3 class="login-title">Vue3 admin</h3>
      <div class="login-form-item">
        账号
        <input type="text" v-model="formData.username" placeholder />
      </div>
      <div class="login-form-item">
        密码
        <input :type="passType" v-model="formData.password" />
        <div class="passType" @click="changePassType">
          <i
            :class="{'iconfont':true, 'iconyanjing': passType === 'text','iconbiyan': passType === 'password' }"
          ></i>
        </div>
      </div>
      <button class="login-btn">Login</button>
    </div>
  </div>
</template>

<script>
import { ref, reactive } from "vue";

export default {
  name: "Login",
  setup() {
    const formData = reactive({
      username: "",
      password: "",
    });

    // 密码框类型
    const passType = ref("password");

    function changePassType() {
      passType.value = passType.value === "password" ? "text" : "password";
    }

    return {
      formData,
      passType,
      changePassType,
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
  text-align: center;

  .login-title {
    font-size: 18px;
    line-height: 40px;
    margin-bottom: 20px;
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
    line-height: 34px;
    font-size: 16px;
    cursor: pointer;
  }
}
</style>