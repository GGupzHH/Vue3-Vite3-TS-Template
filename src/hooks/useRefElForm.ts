import type { FormInstance } from 'element-plus'

export default function useRefElForm() {
  const refForm = ref<FormInstance>()
  return refForm
}
