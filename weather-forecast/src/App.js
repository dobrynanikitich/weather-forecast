import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import { getDataReducer } from './redux/reducers/getDataReducer';
import { CURRENT_LOCATION } from './redux/actions/actions';
import { getCurrentLocation } from './redux/reducers/getDataReducer';

import './App.css';

const App = ({ getCurrentLocation }) => {
  useEffect(() => {
    getCurrentLocation()
  })

  return (
    <div>
      HI
    </div>
  )
}

const mapStateToProps = state => {
  return {

  }
}

const mapDispatchToProps = {
  getCurrentLocation
}

export default connect(mapStateToProps, mapDispatchToProps )(App);
