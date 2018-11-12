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
        <form action="#!">
          <h6>Sign in</h6>
          <div class="input-field">
            <label for="email">Email</label>
            <input type="email" name="email" id="email" required>
          </div>
          <div class="input-field">
            <label for="password">Password</label>
            <input type="password" name="password" id="password" required>
          </div>
          <div class="input-field">
            <!-- <span class="error red-text text-lighten-2">Error appears here</span> -->
            <p class="forgot"><a href="#!">Forgot Password?</a></p>
            <button type="submit" class="btn z-depth-0">Sign in</button>
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
	export default {
    name: 'Login',
	}
</script>
