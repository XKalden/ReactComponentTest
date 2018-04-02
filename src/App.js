import React, { Component } from 'react';
import './App.css';

import Person from './Person/Person';


class App extends Component {
  state = {
    person:[
      {id:'asd', name:'Max', age:28},
      {id:'asdsadf', name:'Kalden', age:21},
      {id:'1asd', name:'tsering', age:18},
      {id:'1asasdd', name:'tserinadsag', age:181}
    ],
    otherState: 'some other value',
    showPerson: false
  }


  nameChangerHandler = (event, id) => {
    const personIndex = this.state.person.findIndex(p => {
      return p.id === id;
    });

    const singlePerson = {
      ...this.state.person[personIndex]
    }

    // singlePerson = Object.assign({},this.state.person[personIndex] );

    singlePerson.name = event.target.value;

    console.log(singlePerson);

    const person = [...this.state.person];

    person[personIndex] = singlePerson;

    this.setState({
      person: person

    })
  }

  togglePersonHandler = () => {
    const doesShow = this.state.showPerson;
    this.setState({
      showPerson: !(doesShow)
    });
  }

  deletPersonHandler = (personIndex) => {
    const persons = this.state.person;
    persons.splice(personIndex, 1);
    this.setState({
      person: persons
    })
  }

  render() {
    const buttonStyle = {
      backgroundColor: 'green',
      color: 'white',
      font: 'inherit',
      border: '1px soild blue',
      padding:'8px',
      cursor: 'pointer',
      ':hover': {
        backgroundColor: 'lightgreen', 
        color: 'black'
      }
    }


    let person = null;
    if(this.state.showPerson){
      person = (
      <div>
        { this.state.person.map((people, index) => {
          return <Person 
            click={this.deletPersonHandler.bind(this,index)}
            name={people.name} 
            age= {people.age} 
            key={people.id}
            changed={(event) => this.nameChangerHandler(event, people.id)}/>
          })
        }
      </div>
      );

      buttonStyle.backgroundColor = 'red';
  
    }

    let classes = [];
    if(this.state.person.length <= 2){
      classes.push('red');
    }
    if(this.state.person.length <= 1){
      classes.push(' bold');
    }
    

    return (
     
        <div className="App">
            <h1> hello i am react app </h1>
            <p className={classes.join(' ')}>This is really your </p>
            <button 
              style={buttonStyle}
              onClick={this.togglePersonHandler}>Click </button>
              {person}
        </div>
      
    );
  }

  
}

export default App;
