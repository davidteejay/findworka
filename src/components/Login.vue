<template>
  <div class="auth login valign-wrapper">
    <div class="copyright">
      <p class="center">
        &copy; Findworka Solutions
      </p>
    </div>
    <div class="valign z-depth-1">
      <div class="head">
        <h4>Welcome to Horus</h4>
      </div>
      <div class="body">
        <form @submit.prevent="login">
          <h6>Sign in</h6>
          <div class="input-field">
            <label for="email">Email</label>
            <input v-model="email" type="email" name="email" id="email" required>
          </div>
          <div class="input-field">
            <label for="password">Password</label>
            <input v-model="password" type="password" name="password" id="password" required>
          </div>
          <div class="input-field">
            <span class="error red-text text-lighten-2">{{ error }}</span>
            <p class="forgot"><a href="#!">Forgot Password?</a></p>
            <button type="submit" class="btn z-depth-0" :class="{disabled: loading}">
              <span v-if="!loading">Sign In</span>
              <span v-else>...</span>
            </button>
          </div>
        </form>
        <p class="signup">Don't have an account? Get invited by mail. <a href="#!">Learn More.</a></p>
        <ul class="links">
          <li><a href="#!">Help</a></li>
          <li><a href="#!">Privacy</a></li>
          <li><a href="#!">Terms</a></li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
  import constants from './includes/constants'
  import axios from 'axios'
  const { API_URL } = constants

  export default {
    name: 'Login',
    data(){
      return {
        email: '',
        password: '',
        loading: false,
        error: ''
      }
    },
    methods: {
      login: function(){
        this.loading = true
        this.error = ''

        axios
          .post(`${API_URL}/auth/login`, {
            email: this.email,
            password: this.password
          })
          .then(res => {
            res = res.data
            if (res.error) this.error = 'Incorrect Username or Password'
            else alert('Logged In')
          })
          .catch(err => console.log(err))
          .finally(this.loading = false)
      },
    }
	}
</script>
