import * as GeoActions from '../actions/GeoActions'
import  ExploreLaunchPage from '../components/ExploreLaunchPage'
import { createCombatInstance } from '../actions/apiActions'
import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { View } from 'react-native';

const ExploreLaunchContainer = ({ characters, monsters, user, GeoActions }) => (
  <View>
    <ExploreLaunchPage
      characters={characters}
      monsters={monsters}
      GeoActions={GeoActions}
      user={user}
    />
  </View>
)


const mapStateToProps = state => ({
  characters: state.characters,
  monsters: state.monsters,
  user: state.user
})

const mapDispatchToProps = dispatch => ({
    GeoActions: bindActionCreators(GeoActions, dispatch),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ExploreLaunchContainer)
