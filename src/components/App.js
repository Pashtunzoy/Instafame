import React, { PropTypes } from 'react';
import Header from '../common/Header';
import Footer from './Footer';


class App extends React.Component {
  render () {
    return (
      <div>
        <div className="container">
          <h1>Instafame</h1>
          <Header />
          {this.props.children}
        </div>
        <Footer />
      </div>
    );
  }
}


App.propTypes = {
  children: PropTypes.object.isRequired
};

export default App;
