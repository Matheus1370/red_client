<!-- src/components/ItemTable.vue -->
<template>
  <v-container>
    <v-data-table
      :items="items"
      :headers="headers"
      item-value="id"
      class="elevation-1"
    >
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
defineProps({
  items: Array,
  headers: Array
})
defineEmits(['edit', 'delete'])
</script>
