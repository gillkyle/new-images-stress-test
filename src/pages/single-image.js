import React from "react";
import { GatsbyImage, StaticImage, getImage } from "gatsby-plugin-image";
import { useStaticQuery, graphql } from "gatsby";

import Img from "../components/legacy-gatsby-image";

export default function GatsbyImages() {
  const data = useStaticQuery(graphql`
    query SingleImageQuery {
      testFixed: file(relativePath: { eq: "transparent.png" }) {
        childImageSharp {
          fixed(width: 300) {
            ...GatsbyImageSharpFixed
          }
          gatsbyImage(width: 300, layout: FIXED, background: "#ffaa55") {
            imageData
          }
        }
      }
      testFluid: file(relativePath: { eq: "transparent.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
          gatsbyImage(width: 300, layout: FLUID, background: "#ffaa55") {
            imageData
          }
        }
      }
      testConstrained: file(relativePath: { eq: "transparent.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
          gatsbyImage(width: 300, layout: CONSTRAINED, background: "#ffaa55") {
            imageData
          }
        }
      }
    }
  `);

  return (
    <div>
      <h1>Single image testing</h1>
      <hr />
      <div style={{ display: `grid`, gridGap: 8, gridTemplateColumns: `300px 300px 300px 300px`}}>
        <div>
          Fixed
          <StaticImage 
            src="../img/transparent.png"
            width={300}
            layout="fixed"
            placeholder="blurred"
            backgroundColor="#ffaa55"
          />
          <GatsbyImage 
            image={getImage(data.testFixed)} 
          />
          <Img
            fixed={data.testFixed.childImageSharp.fixed}
            backgroundColor="#ffaa55"
          />
        </div>
        <div>
          Fluid
          <StaticImage 
            src="../img/transparent.png"
            layout="fluid"
            width={300}
            placeholder="blurred"
            backgroundColor="#ffaa55"
          />
          <GatsbyImage 
            image={getImage(data.testFluid)} 
          />
          <Img
            fluid={data.testFluid.childImageSharp.fluid}
            backgroundColor="#ffaa55"
          />
        </div>
        <div>
          Constrained
          <StaticImage 
            src="../img/transparent.png"
            width={300}
            placeholder="blurred"
            backgroundColor="#ffaa55"
          />
          <GatsbyImage 
            image={getImage(data.testConstrained)} 
          />
          <Img
            fluid={data.testConstrained.childImageSharp.fluid}
            backgroundColor="#ffaa55"
          />
        </div>
        <div>
          Static Image with no props
          <StaticImage 
            src="../img/transparent.png"
            width={300}
          />
        </div>
      </div>
    </div>
  );
}
