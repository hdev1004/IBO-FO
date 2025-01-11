<script setup lang="ts">
import { defineProps, defineEmits } from 'vue'
const props = defineProps({
  visible: {
    type: Boolean,
    required: true
  }
})

const emit = defineEmits(['update:visible'])
const close = () => {
  emit('update:visible', false)
}
</script>

<template>
  <section v-if="visible">
    <el-dialog title="Tips" width="30%">
      <span>This is a message</span>
      <span slot="footer" class="dialog-footer">
        <el-button type="danger" @click="close">반려</el-button>
        <el-button type="primary" @click="close">결재</el-button>
      </span>
    </el-dialog>
  </section>
</template>

<style lang="scss" scoped>
@import url('./VacationApplication.css');
</style>
