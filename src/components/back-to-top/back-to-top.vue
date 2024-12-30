<template>
  <div 
    class="back-to-top"
    :class="{ 'show': show }"
    @click="scrollToTop"
    :style="{ '--progress': progress + '%' }"
  >
    <div class="progress-ring">
      <svg viewBox="0 0 36 36">
        <path 
          d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
          fill="none"
          stroke="rgba(255, 255, 255, 0.2)"
          stroke-width="3"
        />
        <path 
          d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
          fill="none"
          stroke="#fff"
          stroke-width="3"
          :stroke-dasharray="progressDasharray"
          stroke-dashoffset="100"
          class="progress"
        />
      </svg>
    </div>
    <div class="rocket-wrapper">
      <Icon icon="mdi:rocket-launch-outline" class="rocket-icon" />
      <div class="rocket-fire">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { Icon } from '@iconify/vue'

const show = ref(false)
const progress = ref(0)

const progressDasharray = computed(() => {
  return progress.value + ', 100'
})

const handleScroll = () => {
  const scrollTop = document.documentElement.scrollTop || document.body.scrollTop
  const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight
  progress.value = Math.round((scrollTop / scrollHeight) * 100)
  show.value = scrollTop > 300
}

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style lang="scss" scoped>
.back-to-top {
  --primary-color: #409EFF;
  --ring-size: 48px;
  position: fixed;
  right: 40px;
  bottom: 40px;
  width: var(--ring-size);
  height: var(--ring-size);
  background: var(--primary-color);
  border-radius: 50%;
  cursor: pointer;
  opacity: 0;
  transform: translateY(20px) scale(0.8);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  z-index: 999;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.1);
  overflow: visible;

  .progress-ring {
    position: absolute;
    inset: -4px;
    transform: rotate(-90deg);

    svg {
      width: 100%;
      height: 100%;
    }

    .progress {
      transition: stroke-dasharray 0.3s ease;
    }
  }

  &:hover {
    transform: translateY(-2px) scale(1.1);
    box-shadow: 0 8px 20px rgba(64, 158, 255, 0.35);

    .rocket-icon {
      transform: translateY(-2px);
      filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.2));
    }

    .rocket-fire {
      opacity: 1;
      transform: translateY(0);

      span {
        animation: fire 0.6s infinite;

        &:nth-child(2) {
          animation-delay: 0.2s;
        }

        &:nth-child(3) {
          animation-delay: 0.4s;
        }
      }
    }
  }

  &.show {
    opacity: 1;
    transform: translateY(0) scale(1);
  }

  .rocket-wrapper {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .rocket-icon {
    color: #fff;
    font-size: 24px;
    transition: all 0.3s ease;
    filter: drop-shadow(0 2px 2px rgba(0, 0, 0, 0.1));
  }

  .rocket-fire {
    position: absolute;
    bottom: -14px;
    display: flex;
    gap: 2px;
    opacity: 0;
    transform: translateY(4px);
    transition: all 0.3s ease;

    span {
      width: 4px;
      height: 4px;
      background: #fff;
      border-radius: 50%;
      opacity: 0.8;
      transform-origin: center bottom;
    }
  }
}

@keyframes fire {
  0% {
    transform: scaleY(1);
    opacity: 0.8;
  }
  50% {
    transform: scaleY(1.5);
    opacity: 0.6;
  }
  100% {
    transform: scaleY(1);
    opacity: 0.8;
  }
}

// 移动端适配
@media screen and (max-width: 768px) {
  .back-to-top {
    --ring-size: 44px;
    right: 20px;
    bottom: 20px;

    .rocket-icon {
      font-size: 20px;
    }
  }
}
</style> 