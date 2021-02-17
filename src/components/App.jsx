import React from 'react';
import Axios from 'axios';
import List from './List.jsx';
import ListItem from './ListItem.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      items: []
    }
  }

  componentDidMount() {
    Axios.get('/something')
    .then(({ data }) => {
      this.setState({
        items: data,
      })
    })
    .catch(err => {
      console.log(`I caught an ${err}!`)
    })
  }

  render () {
    return (
    <div>
      <h1>Make an app!!</h1>
      <List />
      <ListItem />
    </div>)
  }
}




export default App;
