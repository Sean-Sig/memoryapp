<template>
<section>
  <div class="hero-body">
    <div class="container">
      <h1 class="title">
        Memory Application
      </h1>
    </div>
  </div>

  <b-field grouped position="is-right">
    <p class="control">
      <button class="button is-primary" @click="goSearch">
        View Memories
      </button>
    </p>
  </b-field>

  <div class="block">
    <h2 class="subtitle">
      Rate Your Memory
    </h2>
    <b-radio v-model="radio" native-value="😢">
      One
    </b-radio>
    <b-radio v-model="radio" native-value="☹️ ☹️">
      Two
    </b-radio>
    <b-radio v-model="radio" native-value="😊 😊 😊">
      Three
    </b-radio>
    <b-radio v-model="radio" native-value="😎 😎 😎 😎">
      Four
    </b-radio>
    <b-radio v-model="radio" native-value="🤩 🤩 🤩 🤩 🤩">
      Five
    </b-radio>
  </div>

  <p class="content">
    <b>Memory Rating:</b>
    {{ radio }}
  </p>
  <b-field label="Select a date">
    <b-datepicker  placeholder="Click to select..." icon="calendar-today">
    </b-datepicker>
  </b-field>

  <b-field label="Topic">
    <b-input placeholder="Topic..."></b-input>
  </b-field>

  <b-field label="Memory">
    <b-input maxlength="1000" placeholder="Description of the memory..." v-model="memory" type="textarea"></b-input>
  </b-field>

  <b-field grouped position="is-right">

    <b-field>
      <b-field>
        <button class="button is-primary" @click="alertCustom">
          Record
        </button>
      </b-field>
    </b-field>

    <b-field class="file">
      <b-upload v-model="file">
        <a class="button is-primary">
          <span>Click to upload</span>
        </a>
      </b-upload>
    </b-field>

    <b-field>
      <p class="control">
        <button class="button is-primary is-danger" @click="cancelAlert">
          Cancel
        </button>
      </p>
    </b-field>

    <b-field>
      <p class="control">
        <button class="button is-primary" @click="saveAlert">
          Publish
        </button>
      </p>
    </b-field>

    <b-field>
      <b-field>
        <b-switch>Public</b-switch>
      </b-field>
    </b-field>
  </b-field>
</section>
</template>

<script>
export default {
  name: 'AddMemory',
  data () {
    return {
      memory: '',
      memories: [],
      file: null,
      radio: 'Rate Memory'
    }
  },
  methods: {
    cancelAlert() {
      this.$toast.open({
        message: `Memory Cancelled!`,
        type: 'is-danger'
  })
  this.memory = '';
    },
    saveAlert() {
      this.$toast.open({
        message: 'Memory Published!',
        type: 'is-success',
  })
    },
    addMemory() {
      this.memories.push({memory: this.memory})
      this.memory = '';
    },
    goSearch() {
      this.$router.push('/memories');
    },
    alertCustom() {
    this.$dialog.alert({
        title: 'Recording',
        message: 'Recording in progress...',
        confirmText: 'Stop!'
    })
}
  }
}
</script>



<style>
.content {
  font-size: 25px;
}
</style>
