<template>
  <i 
    class="qs-icon"
    :style="{
      fontSize: typeof size === 'number' ? `${size}px` : size,
      color,
      transform: rotate ? `rotate(${rotate}deg)` : undefined
    }"
  >
    <Icon 
      :icon="icon"
      :class="{ 'is-spinning': spin }"
    />
  </i>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { Icon } from '@iconify/vue'
import { iconProps } from './icon'

export default defineComponent({
  name: 'QsIcon',
  components: {
    Icon
  },
  props: iconProps
})
</script>

<style scoped lang="scss">
.qs-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  line-height: 1;

  .iconify {
    width: 1em;
    height: 1em;
    vertical-align: -0.125em;
  }

  .is-spinning {
    animation: icon-spin 1s infinite linear;
  }
}

@keyframes icon-spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
</style> 