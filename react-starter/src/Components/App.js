import React from 'react';
import $ from 'jquery';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { text: 'Hello' };
  }

  componentWillMount() {
    $(document.body).on('click', () => {
      this.setState({ text: 'Goodbye' });
    });
  }

  render() {
    return (
      <div className='container'>
        <div className='jumbotron'>
          <h1>{`${this.state.text} World!!`}</h1>
          <p>
            Lorem ipsum dolor sit amet
          </p>
        </div>
      </div>
    );
  }
}
