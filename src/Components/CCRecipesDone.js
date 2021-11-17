import React, { Component } from 'react'
import CCRecipe from './CCRecipe';
import styled from 'styled-components';



const Container = styled.div`



`;
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
        // console.log(this.props.dishss)
        return (
            <Container>
            <div>
            <h2>Ready to EAT!</h2>
            <h6>Recipes made:{this.props.dishss.length}</h6>    
            </div>
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
            
            
            
            </Container>

            
        )
    }
}

