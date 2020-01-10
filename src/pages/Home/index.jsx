import React from "react"
import PropTypes from "prop-types"
import { connect } from 'react-redux'
//import { withRouter } from 'react-router-dom'

import { AuthAction } from '../../redux/actions'
import { AuthInfo } from '../../components'
import "./style.scss"

const Home = props => {
  const { access, auth } = props
  //<div className='header__avatar' style={{background:`linear-gradient(135deg, ${firstColor} 0%, ${lastColor} 96%)`}}>ИП</div>
	return (
    <>
      <header className='header'>
        <div className='header__brand'>Монтировочный цех</div>
        <div className="header__info">
          {access && auth && (<AuthInfo auth={auth} />)}
        </div>
      </header>
      <section className='content'>
        тут у нас контент
      </section>
		</>
	)
}

Home.propTypes = {
	access: PropTypes.number,
}

export default connect(({Auth}) => ({auth: Auth.items}), {...AuthAction})(Home)
