const debounceTimeouts = {}
const debounceEffect = (props, dispatch) => {
  const key = props.key || props.action
  let timeout = debounceTimeouts[key]
  if (!timeout) {
    debounceTimeouts[key] = timeout = [key]
  } else {
    clearTimeout(timeout[1])
  }

  timeout[1] = setTimeout(()=> {
    dispatch(props.action)
    delete debounceTimeouts[key]
  }, props.wait)
}

export const Debounce = (props) => {
  return { wait: 300, ...props, effect: debounceEffect }
}
