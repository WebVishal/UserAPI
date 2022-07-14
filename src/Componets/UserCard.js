import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

const UserCard = (props) => {

    const removeCard = (id) => {

        fetch(`http://localhost:5000/users/${id}`, {
            method: "DELETE"
        })
            .then((response) => {
                return response.json()
            }).catch((error)=>{

                console.log(error)
            })
    }


    return (
        <>
            <Card style={{ width: '18rem', margin: "1rem" }}>
                <Card.Header>User Introduction - {props.id}</Card.Header>
                <ListGroup variant="flush">
                    <ListGroup.Item>FirstName: {props.name}</ListGroup.Item>
                    <ListGroup.Item>LastName: {props.LastName}</ListGroup.Item>
                    <ListGroup.Item>Address: {props.address}</ListGroup.Item>
                    <ListGroup.Item>Phone: {props.phone}</ListGroup.Item>
                    <ListGroup.Item>Email: {props.email}</ListGroup.Item>
                </ListGroup>
                <Button variant="primary"
                    onClick={(a) => removeCard(props.id)}>Delet Card</Button>
            </Card>
        </>
    )
}
export default UserCard