import React, { Component} from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CCRecipe from './CCRecipe';
import styled from 'styled-components';

const Container = styled.div`

`;


export default class CCRecipes extends Component {
    constructor(props) {
        super(props);
    
        this.state =
        {
            // dishs:this.props.dishs
        };

    }

    getDataFromRecipesTop = (id) => {
        // console.log(data);
        this.props.getDataFromRecipes(id)
      }


render(){
    // console.log(this.props.dishs)

return(
    <Container>
    <h2>Recipes</h2>
    <h6>Recipes made:</h6>
       {this.props.dishs.map((dish) => 
    <CCRecipe 
    key={dish.id}
    getDataFromRecipe = {this.getDataFromRecipesTop} 
    title={dish.title} 
    description={dish.description}
    pic={dish.pic}
    id={dish.id}
    buttonName={"Prepare Dish"}
    variant={"primary"}
    />
       )}
    </Container>  
    
    );
    }
}
