import React, { Component } from 'react';
import 'semantic-ui-css/semantic.min.css';
import { Grid } from 'semantic-ui-react';

//components
import ChatInput from './components/chatInput';
import ChatroomList from './components/chatroomList';
import MessageCard from './components/messageCard';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Grid celled>

          <Grid.Row>
            <Grid.Column width={4}>
              <ChatroomList/>
            </Grid.Column>
            <Grid.Column width={8}>
              <MessageCard/>
            </Grid.Column>
          </Grid.Row>

          <Grid.Row>
            <Grid.Column width={4} >
              <p> Chat options </p>
            </Grid.Column>
            <Grid.Column width={8}>
              <ChatInput/>
            </Grid.Column>
          </Grid.Row>

        </Grid>
      </div>
    );
  }
}

export default App;
