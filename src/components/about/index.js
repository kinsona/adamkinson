import "./index.styl";

import React from "react";
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

function AboutSection({ headshot }) {
  return (
    <div className="AboutSection">
      <Img className="AboutSection__Image" fluid={headshot} />
      <div className="AboutSection__Text">
        <p>
          <strong>Adam Kinson</strong> is a mission-driven software engineer living in West Hartford, CT.  Having
          transitioned into a tech career as his second act, he strongly believes in improving the accessibility of
          technology as a means to address local economic, educational, and cultural needs.
        </p>
        <p>
          He currently works at Cigna building full-stack solutions using Python, Angular, Kubernetes, and AWS.  Previously,
          he worked at two growth-stage startups in Boston, Notarize and Alignable, developing user-facing
          features with React and Ruby on Rails.
        </p>
        <p>
          Before pivoting to tech, Adam started his career as an actuary.  He spent over 8 years in P&C insurance
          pricing home and auto products at two major Massachusetts-based companies, in a range of roles spanning
          data delivery, business operations, and team management.
        </p>
        <p> 
          He is available for hire for freelance projects or consulting.&nbsp;
          <a className="AboutSection__Text__CTA" href="https://www.linkedin.com/in/adamkinson/">Reach out to learn more!</a>
        </p>
      </div>
    </div>
  );
}

const AboutSectionWithImage = () => (
  <StaticQuery
    query={graphql`
      query {
        headshot: file(relativePath: { eq: "ajk.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 360, srcSetBreakpoints: [ 100, 200, 360 ] ) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => <AboutSection headshot={data.headshot.childImageSharp.fluid} />}
  />
)

export default AboutSectionWithImage
