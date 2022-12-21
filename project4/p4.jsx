import React from 'react';
import ReactDOM from 'react-dom';

import Example from './components/example/Example';
import States from './components/states/States';

class P4 extends React.Component {
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

  handleChangeView(){
    this.setState({viewExample: !this.state.viewExample});
  }

  render() {
    return (
      <div>
        <button onClick={(event) => this.handleChangeView(event)}>{this.buttonText()}</button>
        <div className="view">
          {this.state.viewExample ? <Example/> : <States/>}
        </div>
      </div>
    );
  }
}

ReactDOM.render(
  <P4/>,
  document.getElementById('reactapp'),
);