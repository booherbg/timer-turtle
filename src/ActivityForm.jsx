import { useRef, useState } from 'react';
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";

export default function ActivityForm({ addActivity }) {
   const [name, setName] = useState('');
   const [time, setTime] = useState('');
   const nameRef = useRef(null);

   const handleSubmit = e => {
      e.preventDefault();
      addActivity(name, Number(time) * 60);
      setName('');
      setTime('');
      nameRef.current.focus();
   }
   return (
      <section>
         <h2>Add Activity</h2>
         <p>Add your activities. Use tab to move between inputs, enter to complete</p>
         <form onSubmit={handleSubmit} className='mb-3'>
            <Row>
               <Col md={6} sm={4}>
                  <InputGroup size="sm" className="mb-3">
                     <InputGroup.Text id="inputGroup-sizing-sm">Name</InputGroup.Text>
                     <Form.Control
                        ref={nameRef}
                        aria-label="Small"
                        aria-describedby="inputGroup-sizing-sm"
                        value={name}
                        onChange={e => setName(e.target.value)}
                        placeholder='Dinner'
                        required
                     />
                  </InputGroup>
               </Col>
               <Col md={6} sm={4}>
                  <InputGroup size="sm" className="mb-3">
                     <InputGroup.Text id="inputGroup-sizing-sm">Time (mins)</InputGroup.Text>
                     <Form.Control
                        aria-label="Small"
                        aria-describedby="inputGroup-sizing-sm"
                        value={time}
                        onChange={e => setTime(e.target.value)}
                        placeholder='Task Time'
                        type="number"
                        required
                     />
                  </InputGroup>
               </Col>
            </Row>
            <Button type="submit" variant='primary'>Add Activity</Button>
         </form>
      </section>
   )
}