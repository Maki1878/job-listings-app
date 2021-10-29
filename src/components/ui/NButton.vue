<template>
  <button :disabled="disabled" :class="{ negative: negative }" @click="$emit('click')">
    <span v-if="label">{{ label }}</span>
    <div v-if="renderSlotLabel">
      <slot name="label"></slot>
    </div>
    <span v-if="renderPropIcon" class="material-icons icon">{{ icon }}</span>
    <div v-if="renderSlotIcon">
      <slot name="icon"></slot>
    </div>
  </button>
</template>

<script>
export default {
  emits: ['click'],
  props: {
    label: {
      type: String,
      required: false,
      default: null,
    },
    icon: {
      type: String,
      required: false,
      default: null,
    },
    disabled: {
      type: Boolean,
      required: false,
      default: false,
    },
    negative: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
  computed: {
    renderSlotLabel() {
      return this.$slots.label && !this.label;
    },
    renderPropIcon() {
      return this.icon && !this.label && !this.$slots.label;
    },
    renderSlotIcon() {
      return this.$slots.icon && !this.label && !this.$slots.label && !this.icon;
    },
  },
};
</script>

<style scoped>
button {
  background: #1c86ff;
  color: white;
  border-radius: 2px;
  position: relative;
}

button:hover {
  background: #1c86ff linear-gradient(rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05));
}

button:active {
  background: #1c86ff linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2));
}

button:disabled {
  background: #1c86ff linear-gradient(rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5));
}

.icon {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}

.negative {
  background: #e53935;
}

.negative:hover {
  background: #e53935 linear-gradient(rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05));
}

.negative:active {
  background: #e53935 linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2));
}

.negative:disabled {
  background: #e53935 linear-gradient(rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5));
}
</style>
