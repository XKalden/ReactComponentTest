import React, { PureComponent } from 'react';

import style from './App.css';

import Persons from '../components/Persons/Persons';
import {Home} from '../components/Cockpit/Cockpit';

import Aux from '../hoc/Aux';
import wrapper from '../hoc/Wrapper';


export const AuthContest = React.createContext(false);



class App extends PureComponent {
  constructor(props){
    super(props);
    console.log('[App.js] Inside Constructor', props);
    this.state ={
      person:[
        {id:'asd', name:'Max', age:11},
        {id:'asdsadf', name:'dude', age:21},
        {id:'1asd', name:'tsering', age:18},
        {id:'1asasdd', name:'tserinadsag', age:181}
      ],
      otherState: 'some other value',
      showPerson: false,
      toggleClicked: 0,
      authenticated: false
    }

  }

  componentWillMount(){
    console.log('[App.js] Inside componentWillMount()'); 
  }

  componentDidMount(){
    console.log('[App.js] Inside componentDidMount()');
  }



  componentWillUpdate(nextProps, nextState){
    console.log('[Update App.js] Inside componentsWillUpdate', nextProps, nextState);
  }

  static getDerivedStateFromProps(nextProps, prevState){
    console.log('[Update App.js] Inside getDerivedStateFromProps', nextProps, prevState);
    return prevState;
  }

  getSnapshotBeforeUpdate(){
    return console.log('[UPdate App.js] Inside getSnapshotBeforeUpdate---------');
  }


  componentDidUpdate(){
    console.log('[Update App.js] Inside componentDidUpdate');
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
    this.setState((prevState, props) => {
      return{
          showPerson: !(doesShow),
          toggleClicked: this.state.toggleClicked + 1
        }} 
     );
  }

  deletPersonHandler = (personIndex) => {
    const persons = [...this.state.person];
    persons.splice(personIndex, 1);
    this.setState({
      person: persons
    })
  }
  
  loginHandler = () => {
    this.setState({ authenticated:true});
  }

  render() {
    console.log('[App.js] Inside render()');
    let person = null;
  
    if(this.state.showPerson){
      person = (
      <div>
        <Persons
          person={this.state.person}
          clicked={this.deletPersonHandler}
          changed={this.nameChangerHandler}
        />;
      </div>
      );
    }


    return (
        <Aux>
          <button onClick={()=>{this.setState({showPerson: true})}}></button>
          <Home
            appTitle={this.props.title}
            person={this.state.person}
            showPerson={this.state.showPerson}
            login={this.loginHandler}
            clicked={this.togglePersonHandler}
            
          />
          <AuthContest.Provider value={this.state.authenticated}>{person}</AuthContest.Provider>
          


      </Aux> 
    );
  }

  
}

export default wrapper(App, style.App);
