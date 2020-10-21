import React from "react";
import { StaticImage } from "gatsby-plugin-image";

import TestCase from "../components/test-case";
import ChameleonLandscape from "../img/landscape.jpg";
import ChameleonPortrait from "../img/portrait.jpg";

export default function StaticImages() {
  return (
    <div>
      <h1>Testing Static images</h1>
      These landscape and portrait images are used in addition to pngs of
      varying dimensions. The chameleon images make it easier to see where
      images are getting cropped.
      <div style={{ display: `flex`, flexDirection: `row` }}>
        <img alt="Chameleon" height={200} src={ChameleonLandscape} />
        <img alt="Chameleon" height={200} src={ChameleonPortrait} />
      </div>
      <TestCase
        title="No layout or size set (___x___)"
        notes="Nothing expected to render"
        looksCorrect={true}
      >
        <StaticImage src="../img/600x400.png" alt="600x400" />
      </TestCase>
      <h2>
        <pre>Fixed</pre>
      </h2>
      <TestCase
        title="Fixed with width (100x___) landscape"
        looksCorrect={true}
      >
        <StaticImage
          width={100}
          layout="fixed"
          src="../img/600x400.png"
          alt="600x400"
        />
        <StaticImage
          layout="fixed"
          width={100}
          src="../img/landscape.jpg"
          alt="600x400"
        />
      </TestCase>
      <TestCase title="Fixed with width (100x___) portrait" looksCorrect={true}>
        <StaticImage
          layout="fixed"
          width={100}
          src="../img/400x600.png"
          alt="400x600"
        />
        <StaticImage
          layout="fixed"
          width={100}
          src="../img/portrait.jpg"
          alt="chameleon"
        />
      </TestCase>
      <TestCase
        title="Fixed with width and height (150x100)"
        looksCorrect={true}
      >
        <StaticImage
          layout="fixed"
          width={150}
          height={100}
          src="../img/600x400.png"
          alt="600x400"
        />
      </TestCase>
      <TestCase
        title="Fixed with width and height (100x100) landscape fit=inside"
        looksCorrect={true}
      >
        <StaticImage
          layout="fixed"
          width={100}
          height={100}
          fit="inside"
          src="../img/600x400.png"
          alt="600x400"
        />
        <StaticImage
          layout="fixed"
          width={100}
          height={100}
          fit="inside"
          src="../img/landscape.jpg"
          alt="600x400"
        />
      </TestCase>
      <TestCase
        title="Fixed with width and height (100x100) landscape fit=outside"
        looksCorrect={true}
      >
        <StaticImage
          layout="fixed"
          width={100}
          height={100}
          fit="outside"
          src="../img/600x400.png"
          alt="600x400"
        />
        <StaticImage
          layout="fixed"
          width={100}
          height={100}
          fit="outside"
          src="../img/landscape.jpg"
          alt="600x400"
        />
      </TestCase>
      <TestCase
        title="Fixed with width and height (100x100) portrait fit=inside"
        looksCorrect={true}
      >
        <StaticImage
          layout="fixed"
          width={100}
          height={100}
          fit="inside"
          src="../img/400x600.png"
          alt="400x600"
        />
        <StaticImage
          layout="fixed"
          width={100}
          height={100}
          fit="inside"
          src="../img/portrait.jpg"
          alt="400x600"
        />
      </TestCase>
      <TestCase
        title="Fixed with width and height (100x100) portrait fit=outside"
        looksCorrect={true}
      >
        <StaticImage
          layout="fixed"
          width={100}
          height={100}
          fit="outside"
          src="../img/400x600.png"
          alt="400x600"
        />
        <StaticImage
          layout="fixed"
          width={100}
          height={100}
          fit="outside"
          src="../img/portrait.jpg"
          alt="400x600"
        />
      </TestCase>
      <TestCase
        title="Fixed with height (___x100)/(___x50)"
        looksCorrect={true}
      >
        <StaticImage
          layout="fixed"
          height={100}
          src="../img/600x400.png"
          alt="600x400"
        />
        <StaticImage
          layout="fixed"
          height={50}
          src="../img/600x400.png"
          alt="600x400"
        />
      </TestCase>
    </div>
  );
}
