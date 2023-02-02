import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import { Alert } from 'react-bootstrap';

export default function Activities({ activities, setRunning, running, resetActivities }) {
   const [relative, setRelative] = useState(true);
   const largestTime = Math.max(...activities.map(a => a.time));
   return (
      <section>
         <h2>Activities:</h2>
         <input type="checkbox" checked={relative} onChange={() => setRelative(!relative)} /> Use Relative Width
         <div className="d-flex justify-content-between mb-3 mt-1">
            <div>
               <Button className='mr-auto' variant={running ? 'warning' : 'success'} onClick={() => setRunning(!running)}>
                  {running ? 'Pause Timer' : 'Start Timer'}
               </Button>
               <br/>
            </div>
            <div>
               <Button variant={'danger'} onClick={resetActivities}>
                  Reset Timers
               </Button>
            </div>
         </div>

         <section>
            {activities.length === 0 && <Alert variant="info">Please add some activities above.</Alert>}
            {activities.map((a, i) => (
               <Row className={'mt-1'} key={i}>
                  <Col xs={9} className='d-flex align-items-center'>
                     <div
                        style={{ width: `${relative ? (100 * (a.time / largestTime)) : '100'}%` }}
                        className={`progress`}
                        role="progressbar"
                        aria-label={`${a.name}`}
                        aria-valuenow={a.current}
                        aria-valuemin='0'
                        aria-valuemax={a.time}>
                        <div
                           className={`progress-bar bg-info ${a.current < a.time ? 'progress-bar-striped progress-bar-animated' : ''}`}
                           style={{ width: `${100 * (a.current / a.time)}%` }}>
                           {(a.current / 60).toFixed(0)}m {Math.round((a.current / 60 % 1) * 60)}s left
                        </div>
                     </div>
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