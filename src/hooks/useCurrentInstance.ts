export default function useCurrentInstance() {
  const proxy = getCurrentInstance()?.proxy as ComponentPublicInstanceCostom

  return {
    proxy
  }
}
