import React, { Component, } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

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
    <div>
      <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={this.props.pic} />
  <Card.Body>
    <Card.Title>{this.props.title}</Card.Title>
    <Card.Text>
      {this.props.description}
    </Card.Text>
    <Button onClick={()=>{this.preperDish(this.props.id)}} variant="primary">Prepare dish</Button>
  </Card.Body>
</Card>
    </div>
    )
}
}