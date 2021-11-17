import React, { Component, } from 'react';
import CCRecipes from './CCRecipes';
import styled from 'styled-components';
import CCRecipesDone from './CCRecipesDone';

const upperContainer = styled.div`
width:100%;
`;

const bottomContainer = styled.div`
width:100%;

`;

const mainContainer = styled.div`

`;



const Dishs = [
    { id:1, title: 'Four Cheese Pasta', description: 'Pasta made with four different types of cheese - Parmesan, Cheddar, Brie and Emmental.',pic:'https://www.tasteofhome.com/wp-content/uploads/2017/10/exps19876_FF163882B01_14_5b-1.jpg?resize=768,768' },
    { id:2, title: 'Gnocchi with Tomato Sauce', description: 'Gnocchi is a type of pasta in the form of dumplings which are usually made with wheat flour.',pic:'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/vegetable-side-dishes-1629395893.jpeg?crop=1.00xw:1.00xh;0,0&resize=640:*' },
    { id:3,title: 'Pasta Con Pomodoro E Basilico', description: 'Pasta with the quintessential tomato and basil sauce.' ,pic:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaUMLHNnMKDnVNHxVvz6rKrBoahNbBSZ6nItloNFU1PWU6jb1XBs0LR4EPi5AJr18Ztvk&usqp=CAU'},
  ];

const DishsToEat = []


export default class CCMyKitchen extends Component {
    constructor(props) {
        super(props);

        this.state =
        {
            blueList : Dishs,
            redList : DishsToEat

        };
}

getDataFromRecipes = (id) =>{
    this.deleteDishTop(id)
}

getDataFromRecipesDone = (id) =>{
    this.deleteDishBotton(id)
}

deleteDishBotton = (dishId) => {
    //console.log("this.state.DishsToEat "+this.state.redList)
    let deleteDish = this.state.redList.filter((dish) => dish.id == dishId);
    let tempList = this.state.redList.filter((dish) => dish.id !== dishId);
    this.setState({ 
        blueList: this.state.blueList.concat(deleteDish) ,
        redList :tempList
    });
  }



deleteDishTop = (dishId) => {
    let deleteDish = this.state.blueList.filter((dish) => dish.id == dishId);
    let tempList = this.state.blueList.filter((dish) => dish.id !== dishId);
    this.setState({ 
        blueList: tempList ,
        redList :this.state.redList.concat(deleteDish)
    });
  }

render(){
   console.log("this.state.blueList" + this.state.blueList)

    return(
    <mainContainer>
      <upperContainer>
      <CCRecipes
        getDataFromRecipes={this.getDataFromRecipes}
        dishs = {this.state.blueList}/>
      </upperContainer>

       <br/>
       <br/>
       <br/>
       <br/>
       <br/>
       <br/>
       <br/>
       <br/>
       <br/>
       <br/>
       <br/>
       <br/>
       <br/>
       <br/>
       <br/>
       <br/>
       <br/>
       <br/>
       <br/>

        <bottonomContainer>
        <CCRecipesDone 
        dishss = {this.state.redList}
        getDataFromRecipesDone={this.getDataFromRecipesDone}
        />
      </bottonomContainer>
    </mainContainer>
    )
}
}