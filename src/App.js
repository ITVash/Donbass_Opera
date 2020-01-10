import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

import { Login } from './containers'
import { AuthAction } from './redux/actions'

const App = props => {
  const { access } = props
  
  return (
    <div className="App">
      <Switch>
        <Route exact path='/login' render={() => <Login />} />
        <Route exact path='/' render={() => access && access >=1 ? 'А вот и главная страница' : <Redirect to='/login' />} />
      </Switch>
    </div>
  );
}

export default connect(({Auth}) => ({access: Auth.items.access}), {...AuthAction})(App)
