const toString = Object.prototype.toString

export function isFunction (obj: any) {
  return typeof (obj) === 'function'
}

export function isObject (obj: any) {
  return obj === Object(obj)
}

export function isArray (obj: any) {
  return toString.call(obj) === '[object Array]'
}

export function isDate (obj: any) {
  return toString.call(obj) === '[object Date]'
}

export function isRegExp (obj: any) {
  return toString.call(obj) === '[object RegExp]'
}

export function isBoolean (obj: any) {
  return toString.call(obj) === '[object Boolean]'
}

export function isString (obj: any) {
  return toString.call(obj) === '[object String]'
}

export function isUndefined (obj: any) {
  return toString.call(obj) === '[object Undefined]'
}

export function isNull (obj: any) {
  return toString.call(obj) === '[object Null]'
}

export function isNumberical (obj: any) {
  return (typeof (obj) === 'number' || typeof (obj) === 'string') && !isNaN(<number>obj - parseFloat(<string>obj))
}
