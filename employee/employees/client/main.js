/**
 * Created by cruznavj on 15/06/2017.
 */
import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {
    return (
        <div>Hello There!</div>
    );
};
//After meteor loads in the browser render my app to the DOM.
Meteor.startup(()=>{
    //React render call
    ReactDOM.render(<App />, document.querySelector('.container'));
});