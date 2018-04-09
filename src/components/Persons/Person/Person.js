import React, {Component} from 'react';
import PropType from 'prop-types';

import classes from './Person.css';
import { AuthContest } from '../../../containers/App';


class Person extends Component {
    constructor(props){
        super(props);
        console.log('[Person.js] Inside Constructor', props);
        this.inputElement = React.createRef();
      }
    
    componentWillMount(){
        console.log('[Person.js] Inside componentWillMount()'); 
      }
    
    componentDidMount(){
        console.log('[Person.js] Inside componentDidMount()');
        
        if(this.props.positon === 0){
            this.inputElement.current.focus();
        }
     }
    
    focus(){
        this.inputElement.current.focus();
    }


   
    render(){


        console.log('[Person.js] Inside rendert()');
        return (
            <div className={classes.Person}>
                <AuthContest.Consumer>
                    {auth => auth ? <p>I'm authenticated! </p> : null}
                </AuthContest.Consumer>

                <p onClick={this.props.click}>I'm {this.props.name} and I am {this.props.age} years old!</p>
                
                <p>{this.props.children}</p>

                <input
                    ref={this.inputElement} 
                    
                    type="text" 
                    onChange={this.props.changed} 
                    value={this.props.name} />

            </div>
        )
    }


}

Person.propTypes = {
    click: PropType.func,
    age: PropType.number,
    name: PropType.string,
    changed: PropType.func
}

export default Person;