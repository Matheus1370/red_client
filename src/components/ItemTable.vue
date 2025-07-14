<template>
  <v-container>
    <v-data-table
      :items="items"
      :headers="headers"
      item-value="id"
      class="elevation-1"
    >
      <template #item.password="{ item }">
        <div class="d-flex justify-space-between align-center">
          <span>
            {{ showPassword[item.id] ? item.password : '•'.repeat(item.password.length) }}
          </span>
          <v-icon
            :icon="showPassword[item.id] ? 'mdi-eye-off' : 'mdi-eye'"
            @click="showPassword[item.id] = !showPassword[item.id]"
            size="20"
            class="ms-2"
          />
        </div>
      </template>

      <template #item.actions="{ item }">
        <v-btn
          size="small"
          variant="tonal"
          color="primary"
          @click="$emit('edit', item)"
          class="me-2"
        >
          Editar
        </v-btn>
        <v-btn
          size="small"
          variant="tonal"
          color="error"
          @click="$emit('delete', item)"
        >
          Excluir
        </v-btn>
      </template>
    </v-data-table>
  </v-container>
</template>


<script setup>
import { ref } from 'vue'
defineProps({
  items: Array,
  headers: Array
})
defineEmits(['edit', 'delete'])
const showPassword = ref({})
</script>
