import React from 'react'
import PropTypes from 'prop-types'

function FirstApp ({ title, Subtitle, numberPage }) {
  return (
    <>
      <h1> {title} </h1>
      <h2> {Subtitle} </h2>
      <span> {numberPage} </span>
    </>
  )
}

FirstApp.propTypes = {
  title: PropTypes.string.isRequired,
  Subtitle: PropTypes.string,
  numberPage: PropTypes.number.isRequired
}
FirstApp.defaultProps = {
  Subtitle: 'There is no title'
}
export default FirstApp
