import React from 'react';
import axios from 'axios';
import LineChart from './components/LineChart';

const server = 'https://shotahorii.info';
const server2 = 'https://shotahorii.info/todo1';

class App extends React.Component {

    constructor(props) {
        super(props);
        this.server = 'https://shotahorii.info/';

        this.state = {
            data: [
                [{x: 0, y: 6},{x: 1, y: 9},{x: 2, y: 6},
                {x: 3, y: 5},{x: 4, y: 2},{x: 6, y: 4},
                {x: 7, y: 2},{x: 8, y: 5},{x: 9, y: 2}]
            ]
        };

        this.handleClick = this.handleClick.bind(this);
        this.handleClick2 = this.handleClick2.bind(this);
    }

    componentDidMount() {
        axios.get(this.server+'api/dublinrestaurants').then(res => {
            this.setState({items: res.data});
          });
    }

    handleClick(e) {

        axios.get(server)
            .then((res) => {
            console.log(res);
            })
            .catch(console.error);

        this.setState({
            data : [
                [{x: 0, y: 2},{x: 1, y: 3},{x: 2, y: 4},
                {x: 3, y: 7},{x: 4, y: 9},{x: 6, y: 1},
                {x: 7, y: 8},{x: 8, y: 2},{x: 9, y: 5}]
            ]
          });
    }

    handleClick2(e) {

        axios.get(server2)
            .then((res) => {
            console.log(res);
            })
            .catch(console.error);

    }
    
    render() {
        return (<div>
                    <h1> Line chart test </h1>
                    <a href="#" onClick={this.handleClick}> Click me </a>
                    <a href="#" onClick={this.handleClick2}> Click me2 </a>
                    <LineChart  data={this.state.data} />
                </div>);
    }

}

export default App;