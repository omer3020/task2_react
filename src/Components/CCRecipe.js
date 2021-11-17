import React, { Component, } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import styled from 'styled-components';

const CardContainer = styled.div`

float:left;
margin:5px;

img {
  
  height: 200px;
  position: relative;
  display: inline-block;
  overflow: hidden;
  margin: 0;
}
`;


export default class CCRecipe extends Component {
    constructor(props) {
        super(props);
    
        this.state =
        {
          
        };
}



preperDish = (perId) => {
   this.props.getDataFromRecipe(perId)
  }


render(){
    return(
    <CardContainer>
      <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={this.props.pic} />
  <Card.Body>
    <Card.Title>{this.props.title}</Card.Title>
    <Card.Text>
      {this.props.description}
    </Card.Text>
    <Button onClick={()=>{this.preperDish(this.props.id)}} variant={this.props.variant}>{this.props.buttonName}</Button>
  </Card.Body>
</Card>
    </CardContainer>
    )
}
}