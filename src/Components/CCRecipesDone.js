import React, { Component } from 'react'
import CCRecipe from './CCRecipe';

export default class CCRecipesDone extends Component {
    constructor(props) {
        super(props);
    
        this.state =
        {
            // counter:this.props.dishs.length

        };
    }

    getDataFromRecipeBotton = (id) => {
        // console.log(data);
        this.props.getDataFromRecipesDone(id)
      }


    render() {
        console.log(this.props.dishss)
        return (
            <div>Recipes made:{this.props.dishss.length}
            
            <div>
            {this.props.dishss.map((dish) => 
            <CCRecipe 
            key={dish.id}
            getDataFromRecipe={this.getDataFromRecipeBotton} 
            title={dish.title} 
            description={dish.description}
            pic={dish.pic}
            id={dish.id}
            buttonName={"Ready to EAT!"}
            variant={"danger"}
            />
            )}
            </div>  
            
            
            
            </div>

            
        )
    }
}

