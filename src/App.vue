<template>
  <md-app md-mode="reveal" class="container">
      <md-app-toolbar class="md-primary">
        <md-button class="md-icon-button" @click="menuVisible = !menuVisible">
          <md-icon>menu</md-icon>
        </md-button>
        <span class="md-title">Soli app</span>
      </md-app-toolbar>

      <md-app-drawer :md-active.sync="menuVisible">
        <md-toolbar class="md-transparent" md-elevation="0">Navigation</md-toolbar>

        <md-list>
          <md-list-item to="/home">
            <md-icon>info</md-icon>
            <span class="md-list-item-text">Info</span>
          </md-list-item>

          <md-list-item to="/helpers">
            <md-icon>search</md-icon>
            <span class="md-list-item-text">Helfer suchen</span>
          </md-list-item>

          <md-list-item to="/becomehelper">
            <md-icon>person_add</md-icon>
            <span class="md-list-item-text">Helfer werden</span>
          </md-list-item>

          <md-list-item to="/requests" :disabled="!requestsImplemented">
            <md-icon>question_answer</md-icon>
            <span class="md-list-item-text">Anfragen</span>
          </md-list-item>

          <md-list-item to="/messages" :disabled="!messagesImplemented">
            <md-icon>message</md-icon>
            <span class="md-list-item-text">Nachrichten</span>
          </md-list-item>
        </md-list>
      </md-app-drawer>

      <md-app-content>
        <div flex layout="row" style="height: 100%">
          <md-content flex style="height: 100%">
            <router-view/>
          </md-content>
        </div>

      </md-app-content>
    </md-app>
</template>

<script>
export default {
  name: 'App',
  data: () => {
    return {
      menuVisible: false,
      requestsImplemented: false,
      messagesImplemented: false
    }
  }
}
</script>

<style>
.container {
  min-height: 100vh;
}
</style>
