const removeNode = el => {
  let parentNode = el.parentNode;
  if (
      el.children.length > 0 &&
      el.children[0].className.includes("el-switch")
  ) {
      el.parentNode.hasDeletedNode = true;
      let firstChild = el.children[0];
      el.removeChild(firstChild);
  } else {
      parentNode && !parentNode.hasDeletedNode && parentNode.removeChild(el);
  }
};

const nodeOperator = (el, binding) => {
  removeNode(el)
  // const menuIds = window.sessionStorage.getItem('menuIds').split(",").map(Number)
  // const { value } = binding
  // if (!value) {
  //     return el
  // }
  // if (!menuIds.includes(value)) {
  //     removeNode(el)
  // }
}

export default {
  name: 'permission',
  options: {
    created(el, binding, vnode, prevVnode) {
      // 下面会介绍各个参数的细节
    },
    // 在元素被插入到 DOM 前调用
    beforeMount(el, binding, vnode, prevVnode) {},
    // 在绑定元素的父组件
    // 及他自己的所有子节点都挂载完成后调用
    mounted(el, binding, vnode, prevVnode) {
      // nodeOperator(el, binding)
    },
    // 绑定元素的父组件更新前调用
    beforeUpdate(el, binding, vnode, prevVnode) {},
    // 在绑定元素的父组件
    // 及他自己的所有子节点都更新后调用
    updated(el, binding, vnode, prevVnode) {},
    // 绑定元素的父组件卸载前调用
    beforeUnmount(el, binding, vnode, prevVnode) {},
    // 绑定元素的父组件卸载后调用
    unmounted(el, binding, vnode, prevVnode) {}
  }
}
