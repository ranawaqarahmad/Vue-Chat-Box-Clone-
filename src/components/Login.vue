<template>
  <div class="login container">
    <div class="card">
      <div class="card-content center-align">
        <h2 class="teal-text">Login</h2>
        <form @submit.prevent="enterWelcome" autocomplete="off">
          <label for="email">Enter your Email:</label>
          <input type="email" name="email" v-model="email">
          <label for="password">Enter your Password:</label>
          <input type="password" name="password" v-model="password">
          <p v-if="feedback" class="red-text">{{ feedback }}</p>
          <button class="btn teal">Enter Welcome Page</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      email: '',
      password: '',
      feedback: null
    }
  },
  methods:{
    enterWelcome(){
      if(this.email == 'ranawaqarahmad33@gmail.com' && this.password == 'waqar' ){
        this.$router.push({ name: 'Welcome'})
      }else{
        this.feedback = 'You must enter a correct email to join'
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style >
.login{
  max-width: 400px;
  margin-top: 100px;
}
.login .h2{
  font-size: 3em;
}
.login button{
  margin: 30px auto;
}
</style>
