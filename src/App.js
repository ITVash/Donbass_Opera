import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

import { Auth, Home } from './pages'
import { AuthAction } from './redux/actions'

const App = props => {
	const { access } = props;

	return (
		<div className='App'>
			<Switch>
				<Route
					exact
					path='/login'
					render={() => (!access ? <Auth login /> : <Redirect to='/' />)}
				/>
				<Route exact path='/register' render={() => <Auth register />} />
				<Route
					exact
					path='/'
					render={() =>
						access && access >= 1 ? (
							<Home access={access} />
						) : (
							<Redirect to='/login' />
						)
					}
				/>
			</Switch>
		</div>
	);
};

export default connect(({Auth}) => ({access: Auth.items.access}), {...AuthAction})(App)
