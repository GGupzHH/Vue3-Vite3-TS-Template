import { Component, VNode } from "vue"


export declare type ModalDialog = {
  (options: ModalDialogOptions): VNode
}

export type WidgetsPlugins = {
  $ModalDialog: ModalDialog
  visible?: boolean
}

export type ModalDialogOptions = {
  title: string
  top?: string
  hidePadding?: boolean
  dialogWidth?: string
  maxHeight?: string | number
  height?: string
  hideFooter?: boolean
  showClose?: boolean
  renderComponent: renderComponent
  onConfirm: onConfirm
}

export type renderComponent = {
  data: any
  component: Component
}

export type onConfirm = {
  (instance: any): Promise<any>
}



