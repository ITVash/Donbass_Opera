import React from "react"
import PropTypes from "prop-types"
import { connect } from 'react-redux'
//import { withRouter } from 'react-router-dom'

import { AuthAction, NotifiAction } from '../../redux/actions'
import { AuthInfo, Loading, Table } from '../../components'
import "./style.scss"

const Home = props => {
  const { access, auth, sendMessages, logout, loading } = props
  //<div className='header__avatar' style={{background:`linear-gradient(135deg, ${firstColor} 0%, ${lastColor} 96%)`}}>ИП</div>
	return (
    <>{loading && <Loading />}
      <header className='header'>
        <div className='header__brand'>Монтировочный цех</div>
        <div className="header__info">
          {access && auth && (<AuthInfo auth={auth} sendMessages={sendMessages} logout={logout} />)}
        </div>
      </header>
      <section className='content'>
        <Table />
      </section>
		</>
	)
}

Home.propTypes = {
  access: PropTypes.number,
  loading: PropTypes.bool
}

export default connect(({Auth}) => ({auth: Auth.items, loading: Auth.isLoading}), {...AuthAction, ...NotifiAction})(Home)
