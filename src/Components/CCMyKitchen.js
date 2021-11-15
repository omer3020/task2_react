import React, { Component, } from 'react';
import CCRecipes from './CCRecipes';
import styled from 'styled-components';
import CCRecipesDone from './CCRecipesDone';

const Container = styled.div`
margin:200px;
color: black;
float:left
background-color: black;
// &:hover{color:black}
`;



const Dishs = [
    { id:1, title: 'title', description: 'avi',pic:'pic' },
    { id:2, title: 'title', description: 'benny',pic:'pic' },
    { id:3,title: 'title', description: 'charlie' ,pic:'pic'}];

const DishsToEat = []


export default class CCMyKitchen extends Component {
    constructor(props) {
        super(props);

        this.state =
        {
            dList : Dishs,
            toEatList : DishsToEat

        };
}

getDataFromRecipes = (id) =>{
    this.deleteDishTop(id)
}

getDataFromRecipesDone = (id) =>{
    this.deleteDishBotton(id)
}

deleteDishBotton = (dishId) => {
    debugger
    let deleteDish = this.state.DishsToEat.filter((dish) => dish.id == dishId);
    // DishsToEat.push(deleteDish)
    let newDlist = this.state.DishsToEat.filter((dish) => dish.id !== dishId);
    this.setState({ 
        dList: this.state.newDlist.concat(deleteDish) ,
        toEatList :newDlist
    });
  }



deleteDishTop = (dishId) => {
    debugger
    let deleteDish = this.state.dList.filter((dish) => dish.id == dishId);
    // DishsToEat.push(deleteDish)
    let newDlist = this.state.dList.filter((dish) => dish.id !== dishId);
    this.setState({ 
        dList: newDlist ,
        toEatList :this.state.toEatList.concat(deleteDish)
    });
  }

render(){
    return(
    <Container>
      <div>
      <CCRecipes
        getDataFromRecipes={this.getDataFromRecipes}
        dishs = {this.state.dList}/>
      </div>

      <div>
        <CCRecipesDone 
        dishss = {this.state.toEatList}
        getDataFromRecipesDone={this.getDataFromRecipesDone}

        />
      </div>
    </Container>
    )
}
}