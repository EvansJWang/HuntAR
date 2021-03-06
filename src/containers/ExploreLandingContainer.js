import * as ExplorARActions from '../actions/ExplorARActions'
import * as apiActions from '../actions/apiActions'
import  ExploreLandingPage from '../components/ExploreLandingPage'
import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { View } from 'react-native';

const ExploreLandingContainer = ({ user }) => (
  <View>
    <ExploreLandingPage
      ExplorARActions={ExplorARActions}
      user={user}
      apiActions={apiActions}
    />
  </View>
)


const mapStateToProps = state => ({
  user: state.user
})

export default connect(
  mapStateToProps
)(ExploreLandingContainer)
