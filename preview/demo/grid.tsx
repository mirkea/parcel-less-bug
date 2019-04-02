import { h, app } from 'hyperapp'
import { Container, Row, Col } from '../../src/components/core/Grid'
import { ButtonGroup } from '../../src/components/core/Button'
import './grid.less';

app({
  init: {},
  view: state => (
    <Container fluid>
      fluid
      <Container>
        <Row>
          <Col>Column</Col>
          <Col xs={1} md='3'>Column xs=1 md=3</Col>
          <Col sm='2'>Column</Col>
          <Col md='12'>Column</Col>
          <Col lg='12'>Column</Col>
          <Col xl={3}>Column</Col>
          <Col xs={{ size: 6, offset: 3, order: 2 }} md={{ size: 'auto', order: 2 }}>xs = size: 6, offset: 3, order: 2<br/>md=size: 'auto', order: 2</Col>
          <Col >Column</Col>
          <Col xs={{ order: '3' }}>Column</Col>
          <Col md={{ display: 'none' }} lg={{ display: 'block' }}>md=display: 'none'<br/>lg=display: 'block'</Col>
        </Row>
        <Row>
          <Col shrink>Grow</Col>
          <Col>Shrink</Col>
        </Row>
      </Container>
  </Container>
  ),
  container: document.body
})
