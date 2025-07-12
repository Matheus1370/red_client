<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { ref } from 'vue'
const isDrawerOpen = ref(false)
</script>

<template>
  <v-app theme="dark">
    <v-navigation-drawer v-model="isDrawerOpen">
      <v-list>
        <v-list-subheader>Menu</v-list-subheader>
        <v-list-item prepend-icon="mdi-home">Home</v-list-item>
        <v-list-item prepend-icon="mdi-account">Usuários</v-list-item>
        <v-list-group value="Clientes">
          <template #activator="{props}">
            <v-list-item
              v-bind="props"
              prepend-icon="mdi-account-multiple">
              Clientes
            </v-list-item>
          </template>

          <v-list-item prepend-icon="mdi-currency-usd">Vendas</v-list-item>
          <v-list-item prepend-icon="mdi-chart-line">Relatório</v-list-item>
        </v-list-group>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar flat class="border-b">
      <v-app-bar-nav-icon @Click="isDrawerOpen = !isDrawerOpen"></v-app-bar-nav-icon>
      <v-app-bar-title>RedFox Client</v-app-bar-title>

      <template #append>
        <v-btn icon class="mr-2">
          <v-badge dot color="info">
            <v-icon icon="mdi-bell-outline"></v-icon>
          </v-badge>
        </v-btn>
        <v-menu>
          <template #activator="{props}">
            <v-avatar v-bind="props">
              <v-img 
              cover
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6SGvshARHJ5GYSH_Kig8-cYNw5rO3nWn7mA&s"></v-img>
            </v-avatar>
          </template>

            <v-card min-width="200px">
              <v-list :lines="false" density="compact" nav>
                <v-list-item prepend-icon="mdi-account-outline">
                  <v-list-item-title>Perfil</v-list-item-title>
                </v-list-item>
                <v-list-item prepend-icon="mdi-heart-outline">
                  <v-list-item-title>Favoritos</v-list-item-title>
                </v-list-item>
              </v-list>
            </v-card>
        </v-menu>
        </template>
    </v-app-bar>

    <v-main >
      <RouterView />
    </v-main>
  </v-app>

</template>

<style scoped>

</style>
