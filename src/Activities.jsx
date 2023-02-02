import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import ProgressBar from "react-bootstrap/ProgressBar";
import Button from "react-bootstrap/Button";

export default function Activities({ activities, setRunning, running, resetActivities }) {
   return (
      <section>
         <h2>Activities:</h2>
            <div className="d-flex justify-content-between mb-3">
               <Button className='mr-auto' variant={running ? 'warning' : 'success'} onClick={() => setRunning(!running)}>
                  {running ? 'Pause Timer' : 'Start Timer'}
               </Button>
               <Button variant={'danger'} onClick={resetActivities}>
                  Reset Timer
               </Button>
            </div>
            
         <section className='mb-5'>
            {activities.map((a, i) => (
               <Row className={'mt-1'} key={i}>
                  <Col xs={9} className='d-flex align-items-center'>
                     <ProgressBar animated={a.current < a.time ? 'animated' : false} variant="info" now={100 * (a.current / a.time)} label={`${(a.current / 60).toFixed(2)} min left`} />
                  </Col>
                  <Col xs={3} className='d-flex align-items-center justify-content-center'>
                     {a.name} ({(a.time / 60).toFixed(0)}min)
                  </Col>
               </Row>
            ))}
         </section>
      </section>
   )
}