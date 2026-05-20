import { useState } from "nuxt/app"

export const useTreePosition = () => {
  return useState('tree-position', () => [])
}
