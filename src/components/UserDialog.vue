<template>
  <v-dialog v-model="dialogVisible" width="600px">
    <v-card>
      <v-card-title>
        {{ mode === 'create' ? 'Adicionar Usuário' : mode === 'edit' ? 'Editar Usuário' : 'Excluir Usuário' }}
      </v-card-title>

      <v-card-text>
        <v-row>
          <v-col>
            <v-text-field
              v-model="localUser.name"
              :readonly="mode === 'delete'"
              label="Nome"
              variant="outlined"
            />
            <v-text-field
              v-model="localUser.email"
              :readonly="mode === 'delete'"
              label="Email"
              variant="outlined"
            />
          </v-col>
        </v-row>

        
            <v-text-field
              v-model="localUser.password"
              :readonly="mode === 'delete'"
              label="Senha"
              variant="outlined"
            />
      </v-card-text>

      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn variant="text" @click="$emit('close')">Cancelar</v-btn>
        <v-btn
          :color="mode === 'delete' ? 'error' : 'success'"
          variant="tonal"
          @click="handleConfirm"
        >
          {{ mode === 'delete' ? 'Excluir' : 'Salvar' }}
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script setup>
import { ref, watch } from 'vue'

const props = defineProps({
  modelValue: Boolean, // v-model para abrir/fechar
  mode: {
    type: String,
    default: 'create' // create | edit | delete
  },
  user: {
    type: Object,
    default: () => ({ name: '', email: '', password: '' })
  }
})

const emit = defineEmits(['update:modelValue', 'save', 'delete', 'close'])

const localUser = ref({ ...props.user })

// Controla visibilidade
const dialogVisible = ref(props.modelValue)

watch(() => props.modelValue, (val) => {
  dialogVisible.value = val
  localUser.value = { ...props.user }
})

watch(dialogVisible, (val) => {
  emit('update:modelValue', val)
})

function handleConfirm() {
  if (props.mode === 'delete') {
    emit('delete', localUser.value)
  } else {
    emit('save', localUser.value)
  }
  dialogVisible.value = false
}
</script>
