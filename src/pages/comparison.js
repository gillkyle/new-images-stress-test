import React from "react";
import { GatsbyImage, StaticImage, getImage } from "gatsby-plugin-image";
import { useStaticQuery, graphql } from "gatsby";

import Img from "gatsby-image";
import Chameleon from "../img/landscape.jpg"

const badgeStyle = {borderRadius: 4, backgroundColor: `#b6d3f7`, color: "#0e6bde", fontSize: 10, padding: `2px 4px`, textTransform: `uppercase`, marginRight: 8}

const variant = {
  blurred: true,
  traced: false,
}

export default function GatsbyImages() {
  const data = useStaticQuery(graphql`
    query ComparisonImageQuery {
      chameleon: file(relativePath: { eq: "landscape.jpg" }) {
        childImageSharp {
          # OLD QUERYING
          fixed(width: 300) {
            ...GatsbyImageSharpFixed
          }
          # NEW QUERYING
          gatsbyImage(width: 300, layout: FIXED) {
            imageData
          }
        }
      }
      chameleonTraced: file(relativePath: { eq: "landscape.jpg" }) {
        childImageSharp {
          # OLD QUERYING
          fixed(width: 300) {
            ...GatsbyImageSharpFixed_tracedSVG
          }
          # NEW QUERYING
          gatsbyImage(width: 300, layout: FIXED, placeholder: TRACED_SVG) {
            imageData
          }
        }
      }
    }
  `);

  return (
    <div>
      <h1>Comparisons</h1>
      <hr />
      <table>
        <tr>
          <th>Normal <code>{`<img>`}</code> from Unsplash</th>
          <th>Normal <code>{`<img>`}</code> from filesystem</th>
          <th><code>gatsby-image</code></th>
          <th><span style={badgeStyle}>New</span><code>gatsby-plugin-image</code></th>
          <th><span style={badgeStyle}>New</span><code>Static Image</code></th>
        </tr>
        {variant.blurred && <tr>
          <td>
            <img 
              src="https://images.unsplash.com/photo-1512499471375-a0680730c195" 
              alt="Chameleon" 
              style={{width: 300}} 
            />
          </td>
          <td>
            <img 
              src={Chameleon}
              alt="Chameleon" 
              style={{width: 300}} 
            />
          </td>
          <td>
            <Img
              fixed={data.chameleon.childImageSharp.fixed}
              alt="chameleon"
            />
          </td>
          <td>
            <GatsbyImage 
              image={getImage(data.chameleon)} 
              alt="Chameleon" />
          </td>
          <td>
            <StaticImage 
              src="../img/landscape.jpg"
              alt="Chameleon"
              width={300}
              placeholder="blurred"
            />
          </td>
        </tr>}
        {variant.traced && <tr>
          <td>
            <img 
              src="https://images.unsplash.com/photo-1512499471375-a0680730c195" 
              alt="Chameleon" 
              style={{width: 300}} 
            />
          </td>
          <td>
            <img 
              src={Chameleon}
              alt="Chameleon" 
              style={{width: 300}} 
            />
          </td>
          <td>
            <Img
              fixed={data.chameleonTraced.childImageSharp.fixed}
              alt="chameleon"
            />
          </td>
          <td>
            <GatsbyImage 
              image={getImage(data.chameleonTraced)} 
              alt="Chameleon" />
          </td>
          <td>
            <StaticImage 
              src="../img/landscape.jpg"
              alt="Chameleon"
              width={300}
              placeholder="tracedSVG"
            />
          </td>
        </tr>}
      </table>
    </div>
  );
}
