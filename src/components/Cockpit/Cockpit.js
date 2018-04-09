import React from 'react';
import style from './Cockpit.css';
import Aux from '../../hoc/Aux';


export const Home = (props) => { 
    let classes = [];
    let btnClass = style.button;

    if(props.showPerson){
        btnClass = [style.button, style.Red].join(' ');

    }


    if( props.person.length <= 2){
      classes.push( style.red);
    }
    if( props.person.length <= 1){
      classes.push( style.bold);
    }
    
    
    return(
    <Aux>
        <h1> {props.appTitle} </h1>
        <p className={classes.join(' ')}>This is really your </p>
        <button 
            className={btnClass}
            onClick={props.clicked}>Toggle Person</button>
        <button onClick={props.login}>Log Inlogin</button>

    </Aux>
    );

}




