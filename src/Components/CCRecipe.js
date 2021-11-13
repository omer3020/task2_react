import React, { Component, } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export default class CCRecipe extends Component {
    constructor(props) {
        super(props);
    
        this.state =
        {
            cardTitle:this.props.title,
            cardDescription:this.props.description,
            cardPic:this.props.pic,
            cardId:this.props.id

        };
}

preperDish = (perId) => {
   this.props.getDataFromRecipe(perId)
  }


render(){
    return(
    <div>
      <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={this.state.cardPic} />
  <Card.Body>
    <Card.Title>{this.state.cardTitle}</Card.Title>
    <Card.Text>
      {this.state.cardDescription}
    </Card.Text>
    <Button onClick={()=>{this.preperDish(this.state.cardId)}} variant="primary">Prepare dish</Button>
  </Card.Body>
</Card>
    </div>
    )
}
}