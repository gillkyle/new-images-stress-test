import React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { useStaticQuery, graphql } from "gatsby";

import Img from "../components/legacy-gatsby-image";
import TestCase from "../components/test-case";
import ChameleonLandscape from "../img/landscape.jpg";
import ChameleonPortrait from "../img/portrait.jpg";

export default function GatsbyImages() {
  const data = useStaticQuery(graphql`
    query GatsbyImagesQuery {
      fixedWidth: file(relativePath: { eq: "landscape.jpg" }) {
        childImageSharp {
          fixed(width: 120) {
            ...GatsbyImageSharpFixed
          }
          gatsbyImage(width: 120, layout: FIXED) {
            imageData
          }
        }
      }
      fixedHeight: file(relativePath: { eq: "landscape.jpg" }) {
        childImageSharp {
          fixed(height: 80) {
            ...GatsbyImageSharpFixed
          }
          gatsbyImage(height: 80, layout: FIXED) {
            imageData
          }
        }
      }
      fluidWidth: file(relativePath: { eq: "landscape.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 240) {
            ...GatsbyImageSharpFluid
          }
          gatsbyImage(maxWidth: 240, layout: FLUID) {
            imageData
          }
        }
      }
      fluidHeight: file(relativePath: { eq: "landscape.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 160) {
            ...GatsbyImageSharpFluid
          }
          gatsbyImage(maxHeight: 160, layout: FLUID) {
            imageData
          }
        }
      }
      constrainedWidth: file(relativePath: { eq: "landscape.jpg" }) {
        childImageSharp {
          gatsbyImage(maxWidth: 600, layout: CONSTRAINED) {
            imageData
          }
        }
      }
      constrainedHeight: file(relativePath: { eq: "landscape.jpg" }) {
        childImageSharp {
          gatsbyImage(maxHeight: 600, layout: CONSTRAINED) {
            imageData
          }
        }
      }
      constrainedBoth: file(relativePath: { eq: "landscape.jpg" }) {
        childImageSharp {
          gatsbyImage(maxWidth: 600, maxHeight: 600, layout: CONSTRAINED) {
            imageData
          }
        }
      }
      placeholderSvg: file(relativePath: { eq: "landscape.jpg" }) {
        childImageSharp {
          fixed(width: 120) {
            ...GatsbyImageSharpFixed_tracedSVG
          }
          gatsbyImage(width: 120, layout: FIXED, placeholder: TRACED_SVG) {
            imageData
          }
        }
      }
      placeholderBase64: file(relativePath: { eq: "landscape.jpg" }) {
        childImageSharp {
          gatsbyImage(width: 120, layout: FIXED, placeholder: BASE64) {
            imageData
          }
        }
      }
      placeholderColor: file(relativePath: { eq: "landscape.jpg" }) {
        childImageSharp {
          gatsbyImage(width: 120, layout: FIXED, placeholder: DOMINANT_COLOR) {
            imageData
          }
        }
      }
      placeholderNone: file(relativePath: { eq: "landscape.jpg" }) {
        childImageSharp {
          gatsbyImage(width: 120, layout: FIXED, placeholder: NONE) {
            imageData
          }
        }
      }
      cropEntropy: file(relativePath: { eq: "landscape.jpg" }) {
        childImageSharp {
          fixed(height: 80, cropFocus: ENTROPY) {
            ...GatsbyImageSharpFixed_tracedSVG
          }
          gatsbyImage(
            height: 80
            layout: FIXED
            placeholder: TRACED_SVG
            cropFocus: ENTROPY
          ) {
            imageData
          }
        }
      }
      cropEast: file(relativePath: { eq: "landscape.jpg" }) {
        childImageSharp {
          gatsbyImage(
            height: 80
            layout: FIXED
            placeholder: TRACED_SVG
            cropFocus: EAST
          ) {
            imageData
          }
        }
      }
      fitInside: file(relativePath: { eq: "landscape.jpg" }) {
        childImageSharp {
          gatsbyImage(
            height: 80
            layout: FIXED
            placeholder: TRACED_SVG
            fit: INSIDE
          ) {
            imageData
          }
        }
      }
      fitContain: file(relativePath: { eq: "landscape.jpg" }) {
        childImageSharp {
          gatsbyImage(
            height: 80
            layout: FIXED
            placeholder: TRACED_SVG
            fit: CONTAIN
            background: "#ddd"
          ) {
            imageData
          }
        }
      }
      grayscale: file(relativePath: { eq: "landscape.jpg" }) {
        childImageSharp {
          gatsbyImage(height: 80, layout: FIXED, grayscale: true) {
            imageData
          }
        }
      }
      grayscaleFalse: file(relativePath: { eq: "landscape.jpg" }) {
        childImageSharp {
          gatsbyImage(height: 80, layout: FIXED, grayscale: false) {
            imageData
          }
        }
      }
      qualityLow: file(relativePath: { eq: "landscape.jpg" }) {
        childImageSharp {
          gatsbyImage(maxWidth: 400, layout: CONSTRAINED, quality: 5) {
            imageData
          }
        }
      }
      qualityHigh: file(relativePath: { eq: "landscape.jpg" }) {
        childImageSharp {
          gatsbyImage(maxWidth: 400, layout: CONSTRAINED, quality: 100) {
            imageData
          }
        }
      }
    }
  `);
  console.log(data);
  console.log(getImage(data.fixedWidth));

  return (
    <div>
      <h1>Testing Gatsby images</h1>
      These landscape and portrait images are used in addition to pngs of
      varying dimensions. The chameleon images make it easier to see where
      images are getting cropped. The images with the red border are the legacy
      gatsby-image components, for comparison.
      <div style={{ display: `flex`, flexDirection: `row` }}>
        <img alt="Chameleon" height={200} src={ChameleonLandscape} />
        <img alt="Chameleon" height={200} src={ChameleonPortrait} />
      </div>
      <hr />
      <TestCase
        title="Null image props"
        looksCorrect={true}
        notes="Nothing is expected to render, but a console warning does appear saying image prop is missing"
      >
        <GatsbyImage image={getImage(data.new)} alt="400x600" />
      </TestCase>
      <TestCase
        title="Null image props"
        looksCorrect={true}
        notes="Nothing is expected to render, but a console warning does appear saying image prop is missing"
      >
        <GatsbyImage image={null} alt="600x400" />
      </TestCase>
      <TestCase
        title="Eager loading"
        looksCorrect={true}
        notes="Image should load without js"
      >
        <GatsbyImage
          image={getImage(data.fixedWidth)}
          loading="eager"
          alt="chameleon"
        />
        <Img
          fixed={data.fixedWidth.childImageSharp.fixed}
          loading="eager"
          alt="chameleon"
        />
      </TestCase>
      <h2>
        <pre>Fixed</pre>
      </h2>
      <TestCase title="Fixed with width (120x___)" looksCorrect={true}>
        <GatsbyImage image={getImage(data.fixedWidth)} alt="chameleon" />
        <Img fixed={data.fixedWidth.childImageSharp.fixed} alt="chameleon" />
      </TestCase>
      <TestCase title="Fixed with height (___x80)" looksCorrect={true}>
        <GatsbyImage image={getImage(data.fixedHeight)} alt="chameleon" />
        <Img fixed={data.fixedHeight.childImageSharp.fixed} alt="chameleon" />
      </TestCase>
      <h2>
        <pre>Fluid</pre>
      </h2>
      <TestCase title="Fluid with maxWidth (240x___)" looksCorrect={true}>
        <div style={{ display: `grid`, gridTemplateColumns: `240px 240px` }}>
          <GatsbyImage image={getImage(data.fluidWidth)} alt="chameleon" />
          <Img fluid={data.fluidWidth.childImageSharp.fluid} alt="chameleon" />
        </div>
      </TestCase>
      <TestCase title="Fluid with maxHeight (___x160)" looksCorrect={true}>
        <div style={{ display: `grid`, gridTemplateColumns: `240px 240px` }}>
          <GatsbyImage image={getImage(data.fluidHeight)} alt="chameleon" />
          <Img fluid={data.fluidHeight.childImageSharp.fluid} alt="chameleon" />
        </div>
      </TestCase>
      <h2>
        <pre>Placeholders</pre>
      </h2>
      <TestCase title="Placeholder SVG" looksCorrect={true}>
        <GatsbyImage image={getImage(data.placeholderSvg)} alt="chameleon" />
        <Img
          fixed={data.placeholderSvg.childImageSharp.fixed}
          alt="chameleon"
        />
      </TestCase>
      <TestCase title="Placeholder Base64" looksCorrect={true}>
        <GatsbyImage image={getImage(data.placeholderBase64)} alt="chameleon" />
      </TestCase>
      <TestCase title="Placeholder Dominant Color" looksCorrect={true}>
        <GatsbyImage image={getImage(data.placeholderColor)} alt="chameleon" />
      </TestCase>
      <TestCase title="Placeholder None" looksCorrect={true}>
        <GatsbyImage image={getImage(data.placeholderNone)} alt="chameleon" />
      </TestCase>
      <h2>
        <pre>Cropping</pre>
      </h2>
      <TestCase title="Cropped entropy" looksCorrect={true}>
        <GatsbyImage image={getImage(data.cropEntropy)} alt="chameleon" />
        <Img fixed={data.cropEntropy.childImageSharp.fixed} alt="chameleon" />
      </TestCase>
      <TestCase title="Cropped east" looksCorrect={true}>
        <GatsbyImage image={getImage(data.cropEast)} alt="chameleon" />
      </TestCase>
      <h2>
        <pre>Fit</pre>
      </h2>
      <TestCase title="Fixed with fit inside" looksCorrect={true}>
        <GatsbyImage image={getImage(data.fitInside)} alt="chameleon" />
      </TestCase>
      <TestCase
        title="Fixed with fit contain"
        looksCorrect={true}
        notes="background color matches the string passed in #ddd"
      >
        <GatsbyImage image={getImage(data.fitContain)} alt="chameleon" />
      </TestCase>
      <h2>
        <pre>Grayscale</pre>
      </h2>
      <TestCase title="Grayscale true" looksCorrect={true}>
        <GatsbyImage image={getImage(data.grayscale)} alt="chameleon" />
      </TestCase>
      <TestCase title="Grayscale false" looksCorrect={true}>
        <GatsbyImage image={getImage(data.grayscaleFalse)} alt="chameleon" />
      </TestCase>
      <h2>
        <pre>Quality</pre>
      </h2>
      <TestCase title="Quality low (5)" looksCorrect={true}>
        <div style={{ width: 300 }}>
          <GatsbyImage image={getImage(data.qualityLow)} alt="chameleon" />
        </div>
      </TestCase>
      <TestCase title="Quality high (100)" looksCorrect={true}>
        <div style={{ width: 300 }}>
          <GatsbyImage image={getImage(data.qualityHigh)} alt="chameleon" />
        </div>
      </TestCase>
      <h2>
        <pre>Constrained</pre>
      </h2>
      <TestCase title="Constrained with maxWidth (600x___)" looksCorrect={true}>
        <div>
          <GatsbyImage
            image={getImage(data.constrainedWidth)}
            alt="chameleon"
          />
        </div>
      </TestCase>
      <TestCase
        title="Constrained with maxHeight (___x600)"
        looksCorrect={true}
      >
        <div>
          <GatsbyImage
            image={getImage(data.constrainedHeight)}
            alt="chameleon"
          />
        </div>
      </TestCase>
      <TestCase
        title="Constrained with maxWidth and maxHeight (600x600)"
        looksCorrect={true}
      >
        <div>
          <GatsbyImage image={getImage(data.constrainedBoth)} alt="chameleon" />
        </div>
      </TestCase>
    </div>
  );
}
