<template>
  <svg
    class="icon-font"
    aria-hidden="true"
    :class="getClassName"
    @click="handleClick()"
  >
    <filter
      id="drop-shadow"
      xmlns="http://www.w3.org/2000/svg"
    >
      <feGaussianBlur
        in="SourceAlpha"
        stdDeviation="2"
      />
      <feOffset
        dx="1"
        dy="1"
        result="offsetblur"
      />
      <feComponentTransfer>
        <feFuncA
          type="linear"
          slope="0.2"
        />
      </feComponentTransfer>
      <feMerge>
        <feMergeNode />
        <feMergeNode in="SourceGraphic" />
      </feMerge>
    </filter>
    <g
      v-bind="getAttrs()"
    >
      <use :xlink:href="'#' + icon" />
    </g>
  </svg>
</template>


<script lang='ts'>
import { computed, defineComponent, toRefs } from 'vue'

export default defineComponent({
  name: 'IconFont'
})

</script>

<script setup lang='ts'>
const props = defineProps({
  icon: {
    type: String,
    default: ''
  },
  shadow: {
    type: Boolean,
    default: false
  },
  verticalCenter: {
    type: Boolean,
    default: false
  },
  cursor: {
    type: Boolean,
    default: false
  },
  disabled: {
    type: Boolean,
    default: false
  }
})

const emit = defineEmits(['click'])

const { 
  verticalCenter,
  cursor,
  shadow,
  disabled
} = toRefs(props)

const getClassName = computed(() => {
  const className:any[] = []
  if (verticalCenter.value) {
    className.push('middle')
  }
  if (cursor.value) {
    className.push('cursor')
  }
  if (disabled.value) {
    className.push('disabled')
  }
  return className
})
const handleClick = ():void => {
  !disabled.value && emit('click')
}

const getAttrs = () => {
  const attrs: { filter?: String } = {}
  shadow &&
  (attrs.filter = 'url(#drop-shadow)')

  return attrs
}

</script>



<style lang="scss" scoped>
.icon-font {
  width: 1em; height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
  &.middle {
    vertical-align: middle;
  }
  &.cursor {
    cursor: pointer;
  }
  &.disabled {
    color: #c0c4cc;
    cursor: not-allowed;
  }
}
</style>
