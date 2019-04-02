import { h, app } from "hyperapp"
import "../../src/styles/styles.less";
// @ts-ignore
import { Modal, ModalHeader, ModalBody, ModalFooter } from '../../src/components/core/Modal'
import { Button } from '../../src/components/core/Button'

let isShown= false;

const hide = (state)=>{
    isShown = false;
    return {...state}
}


const show = (state)=>{
    isShown = true;
    return {...state}
}

app({
    init: {},
    view: () => {
        return (
            <div>
            <Button onClick={show} rounded outline role="primary">Show Pop Up</Button>
            
            <Modal onClose={hide} show={isShown}>
                <ModalHeader onClose={hide}>Discard envelope?</ModalHeader>
                <ModalBody>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</ModalBody>
                <ModalFooter>
                    <Button rounded outline role="primary">Discard</Button>
                    <Button rounded outline role="primary">Save as draft</Button>
                    <Button onClick={hide} rounded role="primary">Back</Button>
                </ModalFooter>
            </Modal>
            </div>
        )
    },
    container: document.body
})