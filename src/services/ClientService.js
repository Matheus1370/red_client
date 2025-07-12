import api from '@/plugins/axios'

export function getClients() {
  return api.get('/clients')
}

export function createClient(client) {
  return api.post('/clients', client)
}

export function updateClient(id, client) {
  return api.put(`/clients/${id}`, client)
}

export function deleteClient(id) {
  return api.delete(`/clients/${id}`)
}