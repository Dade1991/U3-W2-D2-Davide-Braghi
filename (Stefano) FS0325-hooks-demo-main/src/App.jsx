import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Col, Container, Row } from 'react-bootstrap'
// import StateExample from './components/StateExample'
import EffectExample from './components/EffectExample'

function App() {
  return (
    <>
      <Container>
        <Row className="justify-content-center mt-3">
          <Col xs={12} md={6} className="text-center">
            <h1>Gli HOOKS in React!</h1>
            {/* <StateExample /> */}
            <EffectExample />
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default App
