import { SAY_HELLO } from './actionType'

export const sayHello = () => {
  return {
    type: SAY_HELLO,
    display: 'Hello World'
  }
}