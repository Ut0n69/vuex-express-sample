<template>
  <button :disabled="disabled || processing" @click="handleClick">
    {{ text }}
  </button>
</template>

<script>
export default {
  name: 'ButtonSubmit',
  props: {
    text: {
      type: String,
      default: 'Button'
    },
    onclick: {
      type: Function,
      required: true
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      processing: false
    };
  },
  methods: {
    handleClick(event) {
      if (this.processing) return;
      this.processing = true;
      this.onclick(event).then(() => {
        this.processing = false;
      });
    }
  }
};
</script>
