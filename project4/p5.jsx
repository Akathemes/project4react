import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Route, Link } from "react-router-dom";
import Example from './components/example/Example';
import States from './components/states/States';

class P5 extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      viewExample: true,
    };
  }

  buttonText() {
    if (this.state.viewExample) return "States";
    else return "Example";
  }

  handleChangeView = () => {
    this.setState({viewExample: !this.state.viewExample});
  };

  render() {
    return (
      <HashRouter>
				  <Link to="/states">States</Link>
          <Link to="/example">States</Link>
					<Route path="/states" component={States} />
			  	<Route path="/example" component={Example} />
				</HashRouter>
    );
  }
}

ReactDOM.render(
  
  <P5/>,
  document.getElementById('reactapp'),
);