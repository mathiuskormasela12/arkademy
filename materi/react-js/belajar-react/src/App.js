// import React, { Component } from 'react';

// class App extends Component {
//   state = {
//     nama: 'Matthew'
//   }
//   // constructor() {
//   //   super();
//   //   // this.state = {
//   //   //   nama: 'Mathius'
//   //   // };

//   //   this.handle = this.handle.bind(this);
//   // }
//   constructor() {
//     super();

//     this.handle = function(e) {
//       this.setState({
//         nama: e
//       });
//     }
//   }


//   // handle(e) {
//   //   this.setState({
//   //     nama: e
//   //   });
//   // }

//   render() {
//     return (
//       <React.Fragment>
//         <h1>Hello { this.state.nama }</h1>
//         <button onClick={() => this.handle('World')}>CHange</button>
//       </React.Fragment>
//     );
//   }
// }

// export default App;


import React, { Component } from 'react';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';

import Home from './pages/Home';
import About from './pages/About';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <BrowserRouter>
          <Switch>
            <Route path="/" exact component={ Home } />
            <Route path="/about/:nama" component={ About } />
          </Switch>
        </BrowserRouter>
      </React.Fragment>
    );
  }
}

export default App;