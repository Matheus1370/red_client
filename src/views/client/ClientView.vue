<script setup>
import { ref, onMounted } from 'vue'
import ItemTable from '@/components/ItemTable.vue'
import UserDialog from '@/components/UserDialog.vue'

import {
  getClients,
  createClient,
  updateClient,
  deleteClient
} from '@/services/ClientService'

const dialogVisible = ref(false)
const dialogMode = ref('create') // 'create' | 'edit' | 'delete'
const selectedUser = ref({ name: '', email: '', role: '' })

const clients = ref([])

const headers = [
  { title: 'ID', key: 'id' },
  { title: 'Nome', key: 'name' },
  { title: 'Email', key: 'email' },
  { title: 'Senha', key: 'password' },
  { title: 'Ações', key: 'actions', sortable: false }
]

function openDialog(mode, user = null) {
  dialogMode.value = mode
  selectedUser.value = user ? { ...user } : { name: '', email: '', password: '' }
  dialogVisible.value = true
}

async function handleSave(client) {
  if (dialogMode.value === 'create') {
    const { data } = await createClient(client)
    clients.value.push(data)
  } else if (dialogMode.value === 'edit') {
    const { data } = await updateClient(client.id, client)
    const index = clients.value.findIndex(c => c.id === data.id)
    if (index !== -1) clients.value[index] = data
  }
}

async function handleDelete(client) {
  await deleteClient(client.id)
  clients.value = clients.value.filter(c => c.id !== client.id)
}

onMounted(async () => {
  const { data } = await getClients()
  clients.value = data
})
</script>

<template>
  <v-container>
    <h1 class="mb-6">Dashboard</h1>

    <v-card flat class="border mb-4">

    <!-- Cabeçalho com título e botão -->
    <v-card-title class="d-flex justify-space-between align-center">
      <span class="text-h6">Clientes</span>
      <v-btn
        @click="openDialog('create')"
        variant="tonal"
        color="primary"
        size="small"
      >
        Adicionar Cliente
      </v-btn>
    </v-card-title>

    <!-- Tabela -->
    <ItemTable
      :items="clients"
      :headers="headers"
      @edit="(client) => openDialog('edit', client)"
      @delete="(client) => openDialog('delete', client)"
    />

    <!-- Diálogo -->
    <UserDialog
      v-model="dialogVisible"
      :mode="dialogMode"
      :user="selectedUser"
      @save="handleSave"
      @delete="handleDelete"
      @close="dialogVisible = false"
    />
  </v-card>

  </v-container>
</template>
