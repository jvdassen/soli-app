<template class="he">
  <div class="home">
    <h1>Helfer</h1>
    <div id="map"></div>
  </div>
</template>

<script>
// @ is an alias to /src
const L = window.L

export default {
  name: 'Home',
  components: {
  },
  mounted: function () {
    var mymap = L.map('map').setView([47.5006194101323, 8.72443199157715], 14)
    L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
      attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
      maxZoom: 15,
      id: 'mapbox/streets-v11',
      tileSize: 512,
      zoomOffset: -1,
      accessToken: 'pk.eyJ1IjoiamxvdGFjbyIsImEiOiJjazd0MDVibHowMnNvM29uMW01dWNscXh3In0.Bcy_qzFTKYclui8qL4xwlw'
    }).addTo(mymap)
    window.mymap = mymap

    if (!window.helpers) {
      window.helpers = [
        { x: 47.5076194101323, y: 8.72443199157715, radius: 200, message: 'i can do xy | contact me: help@dude.xy' },
        { x: 47.5006194101323, y: 8.72243199157715, radius: 300, message: 'ill help you shopping | call me: 07812345678' }
      ]
    }

    this.renderCircles(window.helpers, mymap)
  },
  methods: {
    renderCircles: function (circles, map) {
      circles.forEach(item => {
        var circle = L.circle([item.x, item.y], {
          color: 'red',
          fillColor: '#f03',
          fillOpacity: 0.5,
          radius: item.radius
        })
        circle.bindPopup(item.message)
        circle.addTo(map)
      })
    }
  }
}
</script>

<style>
.home {
  height: 100%;
  width: 100%;
}
#map {
  height: calc(100% - 1em);
  width: 100%;
}
</style>
