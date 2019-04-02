import { h, app } from "hyperapp"
import { Card, CardBody } from '../../src/components/core/Card';
import { Icon } from '../../src/components/core/Icon';
import { Illustration } from '../../src/components/core/Illustration';
import { gigi, icons } from 've-ui-theme';
import { ListGroup, ListGroupItem } from "../../src/components/core/List";


app({
  init: {},
  view: state => (
    <div>
      <ListGroup>
        <ListGroupItem>Default</ListGroupItem>
        <ListGroupItem>Default</ListGroupItem>
        <ListGroupItem disabled>Default</ListGroupItem>
        <ListGroupItem>Default</ListGroupItem>
        <ListGroupItem active>Default</ListGroupItem>
        <ListGroupItem>
          Default 
          {icons.chevronLeft}
        </ListGroupItem>
      </ListGroup>
  </div>
  ),
  container:document.body
})


