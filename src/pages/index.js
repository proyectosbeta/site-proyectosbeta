import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";
import Layout from "../components/layout";
import Seo from "../components/seo";

const IndexPage = () => (
  <Layout>
    <center>
      <h1>
        Bienvenidos a <b>Proyectos Beta!</b>
      </h1>
      <div>
        Estamos de Mantenimiento!!!
        <StaticImage
          src="../images/construction.png"
          alt="Sitio en mantenimieto"
          placeholder="Sitio en mantenimieto"
          layout="fixed"
          width={300}
          height={300}
        />
      </div>
    </center>
  </Layout>
);

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Home" />;

export default IndexPage;
