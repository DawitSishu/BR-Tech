import React, {useState} from "react";
import { Alert } from "react-bootstrap";

const EmailSuccess = () =>{
    const [show, setShow] = useState(true);

    if (show) {
        return (
          <Alert variant="success" onClose={() => setShow(false)} dismissible>
            <Alert.Heading>Fantastic!</Alert.Heading>
            <p>
              Your email has been sent successfully, we'll get back to you 
              as soon as possible.Stay tuned for our response.
              Thank you!!
            </p>
          </Alert>
        );
      }else{
          return(<></>)
      }
}
export default EmailSuccess;