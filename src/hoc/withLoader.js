import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import DefaultLoader from '../components/Loader/Loader'

function getDisplayName(Wrapped) {
  return Wrapped.displayName || Wrapped.name || 'Component'
}

export default function withLoader(action, Loader) {
  return function wrapWithLoader(Wrapped) {
    class WithLoader extends Component {
      render() {
        const { loading } = this.props
        if (loading) {
          return Loader ? <Loader/> : <DefaultLoader/>
        }
        return <Wrapped {...this.props} />
      }
    }

    const mapStateToProps = (state) => ({
      loading: state.loaders.actions[action],
    })

    const ConnectedWithLoader = connect(mapStateToProps)(WithLoader)

    ConnectedWithLoader.propTypes = {
      loading: PropTypes.bool,
    }

    ConnectedWithLoader.displayName = `WithLoader(${getDisplayName(Wrapped)})`

    return ConnectedWithLoader
  }
}
