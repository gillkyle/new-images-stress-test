import React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { useStaticQuery, graphql } from "gatsby";

import Img from "../components/legacy-gatsby-image";
import TestCase from "../components/test-case";

export default function GatsbyImages() {
  const data = useStaticQuery(graphql`
    query SingleImageQuery {
      test: file(relativePath: { eq: "landscape.jpg" }) {
        childImageSharp {
          fixed(width: 800) {
            ...GatsbyImageSharpFixed
          }
          gatsbyImage(width: 800, layout: FIXED, sizes: "800px") {
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
      <TestCase
        looksCorrect={true}
      >
        <GatsbyImage image={getImage(data.test)} alt="Chameleon" sizes="800px" />
        <Img
          fixed={data.test.childImageSharp.fixed}
          alt="chameleon"
        />
      </TestCase>
    </div>
  );
}
