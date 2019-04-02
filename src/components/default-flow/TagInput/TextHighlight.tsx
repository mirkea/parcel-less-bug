import {h} from "hyperapp"
export const TextHighlight = ({text, highlight}) => {
	const index = text.indexOf(highlight)
	const before = index !== -1 ? text.substr(0, index) : text
	const after = index !== -1 ? text.substr(index + highlight.length) : ""
	const match = index !== -1 ? highlight : ""
	return (<span>{before}<b>{match}</b>{after}</span>)
}
