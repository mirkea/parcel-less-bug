import { h, app} from "hyperapp"
//import { BatchFx, Time, withFx } from 'hyperapp-fx'

//actions ?
const Toggle = state => ({ ...state, isTracking: !state.isTracking })
const MouseMoved = function (state, event) { 
    return {...state, position: `${event.x},${event.y}` }
}

//command ?!
const effect = (props, dispatch) => {
    const eventListener = function (event) {
        dispatch(props.action, event);
    }
    addEventListener("mousemove", eventListener)

    return function () {
        removeEventListener("mousemove", eventListener)
    }
}

function subb(state) {
    console.log("subscription took place")
    if (state.isTracking) {
        //array of efect runners or a single efect runner
        //return [moves({ action: MouseMoved })];
        return [{effect: effect, action: MouseMoved}]
    }
    return false
}

const initState = {
    position: "0,0",
    isTracking: true
}

app({
    init: initState,
    view: state => (
        <main>
            <span>lalalalalalalala</span>
            <h1>{state.position}</h1>
            <button onClick={Toggle}>Toggle Subscription</button>
        </main>
    ),
    subscriptions: subb,
    container: document.body
})