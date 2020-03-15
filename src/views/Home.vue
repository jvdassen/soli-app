<template>
  <div class="home">
    <md-card class="infocard">
      <md-card-header>
        <md-card-header-text>
          <div class="md-title">So funktionierts</div>
          <div class="md-subhead">Willkommen</div>
        </md-card-header-text>

        <md-card-media md-small>
        <md-icon class="cardicon">help_outline</md-icon>
      </md-card-media>
      </md-card-header>
      <md-card-content>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur erat orci, tempus quis risus vitae, laoreet porttitor risus. Mauris vestibulum tellus a eros convallis, non finibus odio maximus. Donec luctus enim sed orci egestas, et aliquet orci tristique. Praesent eleifend nibh nec rhoncus ultricies.
      </md-card-content>

      <md-card-actions>
        <md-button>Action</md-button>
        <md-button>Action</md-button>
      </md-card-actions>
    </md-card>

    <md-card class="infocard">
      <md-card-header>
        <md-card-header-text>
          <div class="md-title">Wichtig</div>
          <div class="md-subhead">Das folgende solltest du beachten</div>
        </md-card-header-text>

        <md-card-media md-small>
          <md-icon class="cardicon">warning</md-icon>
        </md-card-media>
      </md-card-header>
      <md-card-content>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur erat orci, tempus quis risus vitae, laoreet porttitor risus. Mauris vestibulum tellus a eros convallis, non finibus odio maximus. Donec luctus enim sed orci egestas, et aliquet orci tristique. Praesent eleifend nibh nec rhoncus ultricies.
      </md-card-content>

      <md-card-actions>
        <md-button>Action</md-button>
        <md-button>Action</md-button>
      </md-card-actions>
    </md-card>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home',
  components: {
  }
}
</script>
<style>
.cardicon {
  width: 100% !important;
  height: 100% !important;
}
.infocard {
  margin-bottom: 20px;
}
</style>
