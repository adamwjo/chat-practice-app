import React, { Component } from 'react';
import 'semantic-ui-css/semantic.min.css';
import { Grid } from 'semantic-ui-react';



class App extends Component {
  render() {
    return (
      <div className="App">
        <Grid celled='internally'>

          <Grid.Row>
            <Grid.Column width={6}>
              <p> Chat Rooms </p>
            </Grid.Column>
            <Grid.Column width={10}>
              <p> Chat display </p>
            </Grid.Column>
          </Grid.Row>

          <Grid.Row>
            <Grid.Column width={6}>
              <p> Chat options </p>
            </Grid.Column>
            <Grid.Column width={10}>
              <p> Chat input </p>
            </Grid.Column>
          </Grid.Row>

        </Grid>
      </div>
    );
  }
}

export default App;
