<template>
  <div id="login-container">
    <div id="login-box">
      <div id="logo-box">
        <img src="../assets/logo.png" alt />
      </div>
      <el-form :rules="loginFormRules" ref="loginFormRef" :model="loginForm">
        <el-form-item prop = 'username'>
          <el-input v-model="loginForm.username"></el-input>
        </el-form-item>
        <el-form-item prop = 'password'>
          <el-input type="password" v-model="loginForm.password"></el-input>
        </el-form-item>
        <el-row>
          <el-col :offset="15">
            <el-button type="primary" @click = 'login'>登陆</el-button>
            <el-button type="info" @click = 'resetForm'>重置</el-button>
          </el-col>
        </el-row>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loginForm: {
        username: "admin",
        password: "123456"
      },
       //   给各个表单域进行校验
    loginFormRules: {
      username: [
        {
          required: true,
          message: "请输入用户名称",
          trigger: "blur"
        }
      ],
      password: [
        {
          required: true,
          message: "请输入密码",
          trigger: "blur"
        }
      ],
    }
    };
  },
  methods: {
    login() {
      
      this.$refs.loginFormRef.validate( valid =>{

        if (valid === true) {

              this.$http.post('/login', this.loginForm)
             .then(res=>{
              if(res.data.meta.status !==200){
                this.$message.error(res.data.meta.msg)
              }else{
                this.$message.success(res.data.meta.msg)
                sessionStorage.setItem('token',res.data.data.token)
                this.$router.push('/Home')
              }
             })
             .catch(err=>{
               console.log(err)
             })                                                               

             


            
        }
      })
    },
    // 对表单实现重置
   resetForm(){
       this.$refs.loginFormRef.resetFields()
   }
  }
};
</script>

<style lang="less" scoped>
#login-container {
  background-color: #2b4b6b;
  height: 100%;
  overflow: hidden;                                              
  #login-box {
    width: 450px;
    height: 304px;
    background-color: #fff;
    border-radius: 4px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    .el-form {
      position: absolute;
      bottom: 0;
      width: 100%;
      padding: 20px;
      box-sizing: border-box;
    }
    #logo-box {
      width: 130px;
      height: 130px;
      border-radius: 50%;
      border: 1px solid #fff;
      padding: 8px;
      box-shadow: 0 0 10px #eee;
      left: 50%;
      position: absolute;
      transform: translate(-50%, -50%);
      background-color: #fff;
      img {
        width: 100%;
        height: 100%;
        border-radius: 50%;
        background-color: #eee;
      }
    }
  }
}
</style>