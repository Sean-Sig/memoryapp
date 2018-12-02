<template>
    <section>
      <b-field grouped position="is-centered">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">
            SIGN IN
          </h1>
        </div>
      </div>
    </b-field>
        <b-field label="Username"
            <b-input placeholder="Email or Username" maxlength="30"></b-input>
        </b-field>

        <b-field label="Password"
            <b-input placeholder="Password" type="password" maxlength="30"></b-input>
        </b-field>

        <b-field grouped position="is-left">
          <b-checkbox>
          Remember Me
        </b-checkbox>
        </b-field>
        <b-field grouped position="is-left">
          <p class="control">
            <button class="button is-primary" @click="goAdd">
              Login
            </button>
          </p>
        </b-field>
    </section>
</template>

<script>
    export default {
        data() {
            return {
            }
        },
        methods: {
          goAdd() {
            this.$router.push('/add');
          }
        }
    }
</script>
