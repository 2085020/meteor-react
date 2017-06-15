// Any js here is automatically run for us

// Impost the react library
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import ImageList from './components/image_list';


// Create a component to render
/*const App = () => {
 return (
 <div>
 <ImageList />
 </div>
 );
 };*/

// Create a component based on class
class App extends Component {

    constructor (props) {
        super(props);
        this.state = { images: [] };
    }
    componentWillMount() {
        //Fantastic place to load data
        //console.log("Component is about to render");
        axios.get('https://api.imgur.com/3/gallery/hot/viral/0')
            .then(response => this.setState({images: response.data.data}))

        //NEVER DO THIS
        //this.state.images = [{}, {}]
            .catch(function (error) {
                console.log(error);
            });
    }

    render() {
        return (
            <div>
                <ImageList images = {this.state.images} />
            </div>
        );
    }
}
;

// Render this component to the screen
Meteor.startup(() => {
    ReactDOM.render(<App />, document.querySelector('.container'));


});
