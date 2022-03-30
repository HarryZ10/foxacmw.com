import React from "react";
import { board_members } from './content.json';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css';

function Members() {

    return(
        <>
         {board_members.map((member, index) => (
            <Col key={index}>
                <img src={member.image} alt={member.name} className="grid-item-image" />
                <h3 className="member-name">{member.name}</h3>
                <p className="member-pos">{member.pos}</p>
            </Col>
         ))}
        </>
        
    );
}

function Team() {
    
  return (
    <div id="team" className="container">
      <h1 className="section-heading" id="sub-heading">
        2021-22 Board of Directors
      </h1>
        <Container fluid>
            <Row style= {{ width: '100%' }}>
                <Members />
               
            </Row>
        </Container>
    </div>
  );
}

export default Team;