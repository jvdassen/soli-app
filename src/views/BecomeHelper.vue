<template class="he">
  <div class="home">
    Please pick a point and radius (in meters) where you are willing to do the offered task
    What would you like to offer?
    During which times?
    How can we contact you?
    <form novalidate class="md-layout">
      <md-card class="md-layout-item md-size-50 md-small-size-100">
        <md-card-header>
          <div class="md-title">Become a helper</div>
        </md-card-header>

        <md-card-content>
              <md-subheader>Task Beschreibung</md-subheader>

              <md-field>
                <label>Task</label>
                <md-input name="task" v-model="task" placeholder="Kurzbeschreibung deines Angebots" />
              </md-field>

              <md-field>
                <label for="description">Textarea</label>
                <md-textarea name="description" v-model="description" placeholder="Beschreibung deines Angebots"></md-textarea>
              </md-field>

              <md-subheader>Kontakt</md-subheader>
              <md-field>
                <label for="description">Textarea</label>
                <md-textarea name="description" v-model="contact" placeholder="Wann bist du verfügbar und wie kann man dich kontaktieren?"></md-textarea>
              </md-field>

              <md-subheader>Region</md-subheader>
              <div>Bitte wähle einen Ort und Radius, damit wir wissen für welche Gebiete dein Angebot gilt.</div>
              <div>Klicke dazu auf die Karte und fülle dann den Radius in Metern aus. Idealerweise ist das Zentrum nicht deine Adresse ;-)</div>

              <div id="create"></div>

              <md-field>
                <label>Radius in Metern</label>
                <md-input name="task" v-model="radius" type="number" placeholder="Radius in Metern" />
              </md-field>
        </md-card-content>

        <!--md-progress-bar md-mode="indeterminate" v-if="sending" /-->

        <md-card-actions>
          <md-button class="md-primary" :disabled="!valid" @click="save">Create user</md-button>
        </md-card-actions>
      </md-card>

      <md-snackbar >The user  was saved with success!</md-snackbar>
    </form>
  </div>
</template>

<script>
// @ is an alias to /src
const L = window.L
var map = null

export default {
  name: 'BecomeHelper',
  components: {
  },
  data: function () {
    return {
      task: '',
      description: '',
      contact: '',
      centerlat: null,
      centerlng: null,
      radius: ''
    }
  },
  watch: {
    radius: function () {
      this.renderCircle({
        x: this.centerlat,
        y: this.centerlng,
        radius: this.radius
      }, map)
    }
  },
  computed: {
    valid: function () {
      return true
      // return this.task && this.description && this.contact && this.centerlat && this.centerlng && this.radius !== 1
    }
  },
  mounted: function () {
    var app = this
    var mymap = L.map('create').setView([47.5006194101323, 8.72443199157715], 14)
    map = mymap

    window.map = map

    L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
      attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
      maxZoom: 20,
      id: 'mapbox/streets-v11',
      tileSize: 512,
      zoomOffset: -1,
      accessToken: 'pk.eyJ1IjoiamxvdGFjbyIsImEiOiJjazd0MDVibHowMnNvM29uMW01dWNscXh3In0.Bcy_qzFTKYclui8qL4xwlw'
    }).addTo(mymap)

    L.Popup = L.popup
    var popup = new L.Popup()

    function onMapClick (e) {
      console.log('User clicked:', e.latlng)
      app.centerlat = e.latlng.lat
      app.centerlng = e.latlng.lng
      popup.setLatLng(e.latlng)
        .setContent('Zentrum erfasst! Bitte gib uns den Radius an.')
        .openOn(mymap)
    }
    mymap.on('click', onMapClick)

    // this.renderCircle(item, mymap)
  },
  methods: {
    save: function () {
      window.helpers = [
        { x: 47.5076194101323, y: 8.72443199157715, radius: 200, message: 'i can do xy | contact me: help@dude.xy' },
        { x: 47.5006194101323, y: 8.72243199157715, radius: 300, message: 'ill help you shopping | call me: 07812345678' },
        { x: this.centerlat, y: this.centerlng, radius: this.radius, message: `${this.description}` }
      ]
    },
    renderCircle: function (item, map) {
      var circle = L.circle([item.x, item.y], {
        color: 'red',
        fillColor: '#f03',
        fillOpacity: 0.5,
        radius: item.radius
      })
      circle.bindPopup(item.message)
      circle.addTo(map)
      window.cc = circle
    }
  }
}
</script>

<style>
.home {
  height: 100%;
  width: 100%;
}
#create {
  height: 300px;
  width: 100%;
}
</style>
