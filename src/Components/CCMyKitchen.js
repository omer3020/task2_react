import React, { Component, } from 'react';
import CCRecipes from './CCRecipes';
import styled from 'styled-components';

const Container = styled.div`
margin:200px;
color: red;
height:100vh;

&:hover{color:black}
`;



const Dishs = [
    { id:1, title: 'title', description: 'avi',pic:'pic' },
    { id:2, title: 'title', description: 'benny',pic:'pic' },
    { id:3,title: 'title', description: 'charlie' ,pic:'pic'}];


export default class CCMyKitchen extends Component {
    constructor(props) {
        super(props);
    
        this.state =
        {
            dList : Dishs
        };
}

getDataFromRecipes = (id) =>{
    this.deleteDish(id)
}

deleteDish = (dishId) => {
    let newDlist = this.state.dList.filter((dish) => dish.id !== dishId);
    this.setState({ dList: newDlist });
    console.log(this.state.dList)
		
  }

render(){
    return(
    <Container>
      <div><CCRecipes 
      getDataFromRecipes={this.getDataFromRecipes}
      dishs = {this.state.dList}/></div> 
    </Container>
    )
}
}