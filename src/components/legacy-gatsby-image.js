
import React from "react"
import Img from "gatsby-image"

const LegacyImg = ({ ...props }) => <Img style={{boxShadow: `0 0 0px 3px red`}} {...props} />

export default LegacyImg