import React, { Component} from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CCRecipe from './CCRecipe';

export default class CCRecipes extends Component {
    constructor(props) {
        super(props);
    
        this.state =
        {
            // dishs:this.props.dishs
        };

    }

    getDataFromRecipe = (id) => {
        // console.log(data);
        this.props.getDataFromRecipes(id)
      }


render(){
return(
    <div>
       {this.props.dishs.map((dish) => 
    <CCRecipe 
    key={dish.id}
    getDataFromRecipe={this.getDataFromRecipe} 
    title={dish.title} 
    description={dish.description}
    pic={dish.pic}
    id={dish.id}
    />
       )}
    </div>  
    
    );
    }
    }
