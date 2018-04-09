import React, { Component } from 'react';
import Person from './Person/Person';

class Persons extends Component {
  constructor(props){
    super(props);
    console.log('[Pd.js] Inside Constructor', props);
    this.lastPersonRef = React.createRef();

  }

  componentWillMount(){
   
    console.log('[Pd.js] Inside componentWillMount()'); 
  }

  componentDidMount(){
    console.log('[Pd.js] Inside componentDidMount()');
    this.lastPersonRef.current.focus();
  }

  componentWillReceiveProps(nextProps) {
    console.log('[Update Pd.js] inside componentWillReceiveProps', nextProps);
  }

 

  componentWillUpdate(nextProps, nextState){
    console.log('[Update Pd.js] Inside componentsWillUpdate', nextProps, nextState);
  }

  componentDidUpdate(){
    console.log('[Update Pd.js] Inside componentDidUpdate');
  } 


  render(){
    console.log('[Pd.js] Inside render()');

    return this.props.person.map((people, index) => {
      return <Person 
        click={() => this.props.clicked( index )}
        positon={index}
        name={people.name} 
        age= {people.age}
        ref={this.lastPersonRef} 

        key={people.id}
        changed={(event) => this.props.changed(event, people.id)} />
      });
  }

}



export default Persons;
