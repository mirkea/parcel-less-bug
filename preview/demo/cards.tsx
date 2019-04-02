import { h, app } from 'hyperapp'
import { Card, CardBody } from '../../src/components/core/Card'
import { ButtonGroup } from '../../src/components/core/Button';
import './cards.less';

app({
  init: {},
  view: state => (
    <div>
      <Card>
        <CardBody>Default</CardBody>
      </Card>
      <Card border='none'>
        <CardBody>Borderless</CardBody>
      </Card>
      <Card border='primary'>
        <CardBody>Border primary</CardBody>
      </Card>
      <Card border='light' transparent>
        <CardBody>Transparent, border light</CardBody>
      </Card>
      <Card border='dark' transparent>
        <CardBody>Transparent, border dark</CardBody>
      </Card>
      <Card border='danger' transparent>
        <CardBody>Transparent, border danger</CardBody>
      </Card>
      <Card border='none' key='boss1'>
        <CardBody>Transparent, border light</CardBody>
      </Card>
      <Card border='none' key='boss2'>
        <CardBody>Transparent, border dark</CardBody>
      </Card>
      <Card border='none' key='boss3'>
        <CardBody>Transparent, border danger</CardBody>
      </Card>
  </div>
  ),
  container: document.body
})
