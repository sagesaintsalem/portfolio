// import styled from 'styled-components';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';



const Home = () => {
    return (
        <div>
            <h1>Welcome!</h1>
            <p>My name is Rita Toussaint and this is my portfolio site!</p>
            <Alert key='primary' width='600px'>
                <p>I wish I could fix this.</p>
            </Alert>
            <Button variant="danger">IT BREAK</Button>
        </div>
    )

}

export default Home;