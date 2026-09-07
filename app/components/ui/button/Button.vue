<script lang="ts" setup >
/** biome-ignore-all lint/style/useVueMultiWordComponentNames: false positive */

import type { PrimitiveProps } from "reka-ui"
import { Primitive } from "reka-ui"
import type { HTMLAttributes } from "vue"
import type { ButtonVariants } from "."

interface Props extends PrimitiveProps {
  variant?: ButtonVariants["variant"]
  size?: ButtonVariants["size"]
  class?: HTMLAttributes["class"]
}

const _props = withDefaults(defineProps<Props>(), {
  as: "button",
})
</script>

<template>
  <Primitive
    data-slot="button"
    :as="as"
    :as-child="asChild"
    :data-size="size"
    :data-variant="variant"
  >
    <slot />
  </Primitive>
</template>
