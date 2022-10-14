import React from 'react'
import { connect } from 'react-redux'
import { Redirect, Route, RouteProps } from 'react-router'

import { StoreState } from '@app/redux'
import { isAuthenticated } from '@app/redux/session/selectors'

interface Props extends RouteProps {
  authenticated: boolean
}

function AuthRoute({ authenticated, ...props }: Props) {
  return authenticated ? <Route {...props} /> : <Redirect to="/login" />
}

const mapStateToProps = (state: StoreState) => ({
  authenticated: isAuthenticated(state.session)
})

export default connect(mapStateToProps)(AuthRoute)
