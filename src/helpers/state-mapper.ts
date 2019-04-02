import { assocPath, path } from 'ramda'
import { NoEffect } from '../components/default-flow/TagInput/NoEffect'

const makeMap = (pathArr: Array<string | number>) => (handler) => (state) => {
  return assocPath(pathArr, handler(path(pathArr, state)), state)
}

const makeMapAction = (pathArr: Array<string | number>) => (handler) => (state, props, event) => {
  const reply = handler(path(pathArr, state), props, event)
  let update = assocPath(pathArr)
  let fx = NoEffect()
  if (Array.isArray(reply)) {
    update = update(reply[0])
    fx = reply[1] || fx
  } else {
    update = update(reply)
  }
  return [update(state), fx]
}

const makeMapTrivial = (path) => (handler) => (state, props, event) => {
  const myState = state[path]
  const newSubstate = handler(myState, props, event)
  return { ...state, [path]: newSubstate }
}

export default makeMap
