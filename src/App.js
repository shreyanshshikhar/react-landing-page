import React, { useState } from 'react';
import { Container, Navbar, Card, Button } from 'react-bootstrap';
import Image from 'react-bootstrap/Image';

function App() {
    const [username, setUsername] = useState("Mark Otto");

    return ( <
        >
        <
        Navbar className = "bg-body-secondary" >
        <
        Container >
        <
        h4 href = "#home"
        className = "text-info" > DASHBOARD < /h4> <
        Navbar.Toggle / >
        <
        Navbar.Collapse className = "justify-content-end" >
        <
        Navbar.Text >
        Hello, { username } <
        /Navbar.Text> < /
        Navbar.Collapse > <
        /Container> < /
        Navbar > <
        div className = 'bg-body-secondary'
        style = {
            { marginTop: '10px', display: 'flex', justifyContent: 'space-around' }
        } >
        <
        Image src = "https://assets-global.website-files.com/61791bef521c650699a0b1eb/642460c56845e7006531fa0e_How-onboard-a-developer-cover%20(1).png"
        fluid style = {
            { maxHeight: '550px' }
        }
        /> < /
        div > <
        Card >
        <
        Card.Body className = "d-flex justify-content-center" >
        <
        div className = "row" >
        <
        div className = "col-md-3 mb-2" >
        <
        Button variant = "secondary"
        size = "lg"
        block >
        <
        div className = "button-text" > Regression < br / > info < /div> < /
        Button > <
        /div> <
        div className = "col-md-3 mb-2" >
        <
        Button variant = "danger"
        size = "lg"
        block >
        <
        div className = "button-text" > Planning < br / > page < /div> < /
        Button > <
        /div> <
        div className = "col-md-3 mb-2" >
        <
        Button variant = "warning"
        size = "lg"
        block >
        <
        div className = "button-text" > Features of < br / > planning page < /div> < /
        Button > <
        /div> <
        div className = "col-md-3 mb-2" >
        <
        Button variant = "info"
        size = "lg"
        block >
        <
        div className = "button-text" > Chart < br / > page < /div> < /
        Button > <
        /div> < /
        div > <
        /Card.Body> < /
        Card > <
        />
    );
}

export default App;