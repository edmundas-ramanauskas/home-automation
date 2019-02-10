import React, { Component } from 'react';
import { Provider as ReduxProvider } from 'react-redux';
import { Route, Switch } from 'react-router';
import { ConnectedRouter } from 'connected-react-router';
import { createBrowserHistory } from 'history';
import { Container, Provider as RenditionProvider } from 'rendition';
import { configStore } from '../store';
import Header from '../modules/header';

const history = createBrowserHistory();
const { store } = configStore(history);

class App extends Component {
  render() {
    return (
      <ReduxProvider store={store}>
        <RenditionProvider>
          <Header />
          <Container>
            <ConnectedRouter history={history}>
              <Switch>
                <Route exact path="/" render={() => <div>Main Page</div>} />
                <Route render={() => <div>Not Found</div>} />
              </Switch>
            </ConnectedRouter>
          </Container>
        </RenditionProvider>
      </ReduxProvider>
    );
  }
}

export default App;
