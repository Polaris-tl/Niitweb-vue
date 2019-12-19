<template>
  <div class="login">
    <h4>查看该板块需要权限，请登录</h4>
    <form >
      <p>用户名：111；密码：222</p>
      <div>
        <label for="user">用户名</label>
        <input id='user' type="text" v-model="name"/>
      </div>
      <div>
        <label for="pwd">密码</label>
        <input id='pwd' type="password" v-model="pwd"/>
      </div>
      <p v-if="error" class="err-msg">{{error}}</p>
      <button @click.prevent="login">提交</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
      return {
          name: '',
          pwd : '',
          error : ''
      }
  },

  methods : {
      check(name,pwd) {
          if(!name || !pwd) {
              this.error = '请输入用户名或密码'
              return false
          }
          return true
      },
      login() {
          const {name, pwd, $router } = this
          if(!this.check(name,pwd)) return
          if(name == '111' && pwd == '222'){
              sessionStorage.setItem("isLogin",true)
              $router.push({ name : 'xinwen' })
          } else {
              this.error = '密码或用户名错误'
          }
      }
  }
}
</script>

<style scoped lang="less">
.login {
    width: 300px;
    margin: 10% auto;
    text-align: center;
    padding: 16px;
    border-radius: 4px;
    background: #def0ff;
  h4{
    font-size: 21px;
    color: #565656;
    margin-bottom: 20px;
  }
  input{
    margin: 6px;
    height: 29px;
    font-weight: normal;
    display: inline-block;
    border: none;
  }
  p{
    padding-bottom: 19px;
    color: #ff2020;
  }
  button{
    display: inline-block;
    border: none;
    padding: 6px 37px;
    background: #42aefb;
    color: #fff;
    margin-top: 10px;
  }
  div{
    position: relative;
  }
  label{
    position: absolute;
    left: -5px;
    top: 9px;
  }
}
</style>