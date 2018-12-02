<template>
  <div>
    <b-field grouped position="is-left">
      <p class="control">
        <button class="button is-primary" @click="goBack">
          back to memories
        </button>
      </p>
    </b-field>
    <b-field grouped position="is-centered">
    <div class="hero-body">
      <div class="container">
        <h1 class="title">
          Find Your Highlight!
        </h1>
      </div>
    </div>
  </b-field>

  <p class="content"><b>Selected:</b> {{ selected }}</p>
<b-field>
    <b-autocomplete
        rounded
        v-model="name"
        :data="filteredDataArray"
        placeholder="e.g. Hawaii"
        icon="magnify"
        @select="option => selected = option">
        <template slot="empty">No results found</template>
    </b-autocomplete>
</b-field>
<p>
  <br />
</p>

<button class="button is-primary is-medium"
    @click="isCardModalActive = true">
    GO!
</button>

<b-modal :active.sync="isCardModalActive" :width="640" scroll="keep">
            <div class="card">
                <div class="card-image">
                    <figure class="image is-4by3">
                        <img src="@/assets/ThumbsUp.gif">
                    </figure>
                </div>
                <div class="card-content">
                    <div class="media">
                        <div class="media-content">
                            <p class="title is-4">{{ selected }}</p>
                            <small>07/12/2017</small>
                        </div>
                    </div>

                    <div class="content">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Proin ornare magna eros, eu pellentesque tortor vestibulum ut.
                      Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Proin ornare magna eros, eu pellentesque tortor vestibulum ut.
                      Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Proin ornare magna eros, eu pellentesque tortor vestibulum ut.
                      Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Proin ornare magna eros, eu pellentesque tortor vestibulum ut.
                      Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.
                        <br>

                    </div>
                </div>
            </div>
        </b-modal>


  </div>
</template>

<script>
export default {
  data () {
    return {
      data: [
        'First Date',
        'Dog',
        'Break Up',
        'Sick',
        'Hawaii',
        'Jazz Game',
        'New Job',
        'Funeral',
        'Code',
        'Learning',
        'Fight Night',
        'Car Accident',
        'Baby',
        'Game Night',
        'Boys Night',
        'Girls Night',
        'Love',
        'Fun day'
      ],
      name: '',
      selected: null,
      isImageModalActive: false,
      isCardModalActive: false
    }
  },
  computed: {
    filteredDataArray() {
      return this.data.filter((option) => {
        return option
        .toString()
        .toLowerCase()
        .indexOf(this.name.toLowerCase()) >= 0
      })
    }
  },
  methods: {
    goBack() {
      this.$router.push('/memories');
    }
  }
}
</script>
