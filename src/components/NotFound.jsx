import React from 'react';
import { Container, Image} from 'react-bootstrap';
const NotFound = () => {
    return (
        <>
            <Container fluid="md" className=" d-flex flex-column align-items-center justify-content-center">
                <Image src="images/notfound.jpg" alt="404 Not Found Image" sx={{height:'10px'}} />
                <h1>Car Data Not Found.</h1>
                <p>Please check the data entered again</p>
            </Container>
        </>
    );
};

export default NotFound;