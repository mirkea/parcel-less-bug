import {app, h} from "hyperapp"
import {Http} from 'hyperapp-fx'
// @ts-ignore
import * as style from "./TagInput.less"
import {DropdownItem, DropdownMenu} from '../../core/Dropdown'
import {NoEffect} from "./NoEffect"

import {append, assoc, assocPath, compose, path, remove} from "ramda"
import {Debounce} from "../../../fx/Debounce"
import {TextHighlight} from "./TextHighlight"
import {Tag} from "./Tag"

export interface TagInputProps {
	key: string
	state?: any
	path?: Array<string|number>
	selectedIndex?: number
	showSuggestions?: boolean
	suggestionsLoading?: boolean
	searchValue?: string
	placeholder?: string
	maxLength?: number
	debounceInterval?: number
	tags?: string[]
	suggestions?: string[]

	deleteArmed?: boolean

	searchTags?(...args: any[])
	addTag?(...args: any[])

	onRemoveTag?(state: any, index:number)

	changeSelectedTag?(...args: any[])
	armDelete?(...args: any[])
}


export const TagInput = (pathAr, handlers) => {

	const tagsPath = append('tags', pathAr)
	const searchValuePath = append('searchValue', pathAr)
	const suggestionsLoadingPath = append('suggestionsLoading', pathAr)
	const suggestionsPath = append('suggestions', pathAr)

	const removeTag = (state, index) => {
		const arr = path(tagsPath, state)
		return assocPath(tagsPath, remove(index, 1, arr), state)
	}

	const addTag = (state, tag, e) => {
		e && e.stopPropagation()
		const arr = path(tagsPath, state)
		return [
			compose(
				assocPath(tagsPath, append(tag, arr)),
				assocPath(searchValuePath, ''),
				assocPath(['--activePopup'], false)
			)(state),
			NoEffect(),
		]
	}

	const openPopup = (state, key) => {
		return {...state, '--activePopup': key}
	}

	const searchTags = (state, {searchValue, key}) => {
		let newState = assocPath(suggestionsLoadingPath, true, state)
		newState = openPopup(newState, key)

		if (handlers.onSearch) return handlers.onSearch(newState, searchValue)

		return [newState, Http({
			url: "http://www.mocky.io/v2/5c4f32693300005200c583bd",
			action: (state, suggestions) => {
				return compose(
					assocPath(suggestionsPath, suggestions.map(o => o.label)),
					assocPath(suggestionsLoadingPath, false),
				)(state)
			},
		})]
	}

	const tempF = (state, value) => {
		console.log("tempF", arguments)
		return state
	}

	const onChange = (state, props, e) => {
		const searchValue = e.target.value
		return [
			(props.onChange && props.onChange(state)) || assocPath(props.path.concat('searchValue'), searchValue, state),
			Debounce({
				key: props.key,
				action: [props.onChange || searchTags, {searchValue, key: props.key}],
				wait: props.debounceInterval || 1000,
			}),
		]
	}

	const onKeyUp = (state, props, e) => {
		const value = e.target.value
		if (value !== props.searchValue) {
			return onChange(state, props, e)
		}
		switch (e.key) {
			case "Backspace":
				if (value == "" && props.tags.length)
					return removeTag(state, props.tags.length - 1)
				break
			case "ArrowDown":
				if (props.selectedTag < props.suggestions.length - 1)
					return [state, {
						action: props.changeSelectedTag,
						effect: (p, d) => {
							d(p.action, ++props.selectedTag)
						},
					}]
				else
					return state
			case "ArrowUp":
				if (props.selectedTag > 0)
					return [state, {
						action: props.changeSelectedTag,
						effect: (p, d) => {
							d(p.action, --props.selectedTag)
						},
					}]
				break
			case "Enter":
				return addTag(state, value, e)
			default:
				return [state, NoEffect()]

		}
	}

	//
	// const removeTag = map((myState, index) => {
	// 	return assoc('tags', remove(index, 1, myState.tags), myState)
	// })

	const armDelete = delteArmedLens => (state) => {
		return [set(delteArmedLens, true, state), NoEffect()]
	}

	const deleteArmed = (state) => state

	const onClick = (state, props, event) => {
		return [state, {
			action: searchTags,
			effect: (p, d) => {
				d(p.action)
			},
		}]
	}

	const view = (props: TagInputProps, children) => {
		const state = props.state || {}
		props = Object.assign({
			path: [],
			tags: [],
			maxLength: 10,
			placeholder: 'Add tag',
		}, props, path(props.path || [], state))
		const {
			tags,
			suggestions,
			searchValue,
			maxLength,
			placeholder,
			selectedIndex,
			suggestionsLoading,
		} = props
		const key = props.path.join('-') + props.key
		const showSuggestions = state['--activePopup']

		const onRemoveTag = removeTag //removeTag(props.path.concat(['tags']))

		// searchTags = () => { },
		// addTag = () => { },
		// removeTag = () => { },
		// changeSelectedTag = () => { },
		// armDelete = () => { },
		//
		// addedTags = [],
		// suggestions = [],
		// hideList = true,
		// inputId = "",
		// searchValue = "",
		// selectedTag = 0,
		// debounceInterval = 300,
		// deleteArmed = false }: PropsTagInput, children) => {
		return (
			<div key={key} className={style['taginput-wrapper']}>

				{tags && tags.map((tag, index) => (
					<Tag key={tag} onClick={[onRemoveTag, index]}
						 toggled={deleteArmed && index == tags.length - 1}>{tag}</Tag>
				))}

				<div key={key + '-input'} className={style['input-wrapper']}>
					<div>
						<input type='text' autocomplete='off'
							   className={style['input']}
							   value={searchValue}
							   placeholder={placeholder} aria-label={placeholder}
							   maxLength={maxLength}
							   onKeyUp={[onKeyUp, props]}
							   on0Click={[onClick, {suggestions}]}

						/>
						<DropdownMenu collapsed={!showSuggestions}>
							{suggestionsLoading && (<DropdownItem active={false}>
								<div>loading...</div>
							</DropdownItem>)}
							{suggestions && suggestions.map((tag, index) => (
								<DropdownItem active={index == selectedIndex} onClick={[addTag, tag]}>
									<TextHighlight text={tag} highlight={searchValue} />
								</DropdownItem>
							))}
						</DropdownMenu>
					</div>
				</div>
			</div>
		)
	}


	return {
		actions: {
			removeTag,
			addTag,
		},
		initial: {
			tags: ["aaa", "bbb"],
			suggestions: [],
			searchValue: "",
			placeholder: '',
			minQueryLength: 2,

			hideList: true,
			selectedTag: 0,
			debounceInterval: 300,
			delteArmed: false,
		},
		view,
	}
}
