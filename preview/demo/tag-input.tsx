import {h, app} from "hyperapp"
// @ts-ignore
import {TagInput} from "../../src/components/default-flow/TagInput"
import {Http, Debounce} from 'hyperapp-fx'
import {
	lensPath,
	view,
	set,
	find,
	index,
	over,
	append,
	reject,
	compose,
	lensIndex,
	filter,
	curry,
	__,
	addIndex,
	nth,
	concat,
	chain,
	contains,
} from "ramda"
import {NoEffect} from '../../src/components/default-flow/TagInput/NoEffect'
import makeMap from "../../src/helpers/state-mapper"

const docLens = lensPath(['docs'])

const tagsLenses = ['addedTags', 'tagOptions', 'hideList', 'delteArmed', 'currentSearch', 'selectedTag', 'inputId'].reduce((state, key) => {
	state[`get${key[0].toUpperCase()}${key.slice(1)}Lens`] = (docId) => compose(docLens, lensPath([docId, 'tags', key]))
	return state
}, {})

const focus = (state, inputId) => {
	setTimeout(() => {
		document.getElementById(inputId).focus()
	}, 10)
	return state
}


const removeTag = (addedTagsLens, hideListLens, delteArmedLens, currentSearchLens, inputIdLens) => (state, index) => {
	return [compose(
		over(addedTagsLens, addIndex(filter)((item, i) => i != index)),
		set(hideListLens, true),
		set(delteArmedLens, false),
		set(currentSearchLens, ""),
	)(state), {
		action: focus,
		effect: (p, d) => {
			d(p.action, view(inputIdLens, state))
		},
	}]
}

const changeSelectedTag = selectedTagLens => (state, selectedTag) => {
	return [set(selectedTagLens, selectedTag, state), NoEffect()]
}

const searchTags = (map) => (state, value) => {
	return [state, Http({
		url: "http://www.mocky.io/v2/5c4f32693300005200c583bd",
		action: map((state, suggestions) => {
			return [{...state, suggestions: suggestions.map(o => o.label)}, NoEffect()]
		}),
	})]
}

const getTagInput = (map) => TagInput(map, {
	//onSearch: searchTags(map)
})

const TagInput1 = getTagInput(['tags1'])
const TagInput2 = getTagInput(['tags2'])

const cache = []
const mapDocs = (docs) => {
	if (cache[0] === docs) return cache[1]
	cache[0] = docs
	return cache[1] = Object.keys(docs).map((key, index) => {
		const Tags = getTagInput(['doctags', key]).view
		return (<Tags key={`tags-${key}`} state={docs[key]} />)
	})
}

const onTag2Change = (state, value) =>{
	console.log(value)
	state.doctags.aaaa.selectedValue = value
}

app({
	init: {
		tags1: {
			tags: ['aa','frt','rtrt']
		},
		tags2: {},
		doctags: {
			'aaaa': {
				tags: ["doc1", "test1"],
				suggestions: [],
			},
			'bbbb': {
				tags: ["doc2", "test2"],
				suggestions: [],
			},
		},
		// docs: [
		// 	{
		// 		id: "aaaa", title: "test doc 1",
		// 		tags: {
		// 			tags: ["doc1", "test1"],
		// 			suggestions: [],
		// 		},
		// 	},
		// 	{
		// 		id: "bbbb", title: "test doc 2",
		// 		tags: {
		// 			tags: ["doc2", "test2"],
		// 			suggestions: [],
		// 		},
		// 	},
		// ],
	},
	view: (state) => {
		return (
			<div>
				<div>
					<TagInput1.view
						key='tags1'
						state={state}
						path={['tags1']}
						placeholder="Some Value"
					/>
				</div>
				{/*mapDocs(state.doctags)*/}


				{/*{state.docs.map((doc, index) => {*/}
				{/*const addedTagsLens = tagsLenses.getAddedTagsLens(index);*/}
				{/*const tagOptionsLens = tagsLenses.getTagOptionsLens(index);*/}
				{/*const hideListLens = tagsLenses.getHideListLens(index);*/}
				{/*const deleteArmedLens = tagsLenses.getDelteArmedLens(index);*/}
				{/*const currentSearchLens = tagsLenses.getCurrentSearchLens(index);*/}
				{/*const selectedTagLens = tagsLenses.getSelectedTagLens(index);*/}
				{/*const inputIdLens = tagsLenses.getInputIdLens(index);*/}
				{/*return (<div>*/}
				{/*<TagInput*/}
				{/*searchTags={searchTags(tagOptionsLens, hideListLens,currentSearchLens, inputIdLens, deleteArmedLens)}*/}
				{/*addTag={addTag(selectedTagLens, addedTagsLens, tagOptionsLens, hideListLens, deleteArmedLens, currentSearchLens, inputIdLens)}*/}
				{/*removeTag={removeTag(addedTagsLens, hideListLens, deleteArmedLens, currentSearchLens, inputIdLens)}*/}
				{/*changeSelectedTag={changeSelectedTag(selectedTagLens)}*/}
				{/*armDelete={armDelete(deleteArmedLens)}*/}

				{/*addedTags={view(addedTagsLens, state)}*/}
				{/*tagOptions={view(tagOptionsLens, state)}*/}
				{/*hideList={view(hideListLens, state)}*/}
				{/*selectedTag={view(selectedTagLens, state)}*/}
				{/*deleteArmed={view(deleteArmedLens, state)}*/}
				{/*currentSearch={view(currentSearchLens, state)}*/}
				{/*inputId={view(inputIdLens, state)}*/}
				{/*debounceInterval={300}*/}
				{/*>Add Tag</TagInput>*/}

				{/*<br></br>*/}
				{/*</div>)*/}
				{/*})}*/}
				<br /><br />
				<pre>
				{JSON.stringify(state,2,2)}
				</pre>
			</div>
		)
	},
	container: document.body,
})
