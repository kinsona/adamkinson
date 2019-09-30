import "./index.styl";

import React from "react";
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

function AboutSection({ fixedImage }) {
  return (
    <div className="AboutSection">
      <Img className="AboutSection__Image" fixed={fixedImage} />
      <div className="AboutSection__Text">
        <p>
          <strong>Adam Kinson</strong> is a mission-driven software engineer living in West Hartford, CT.  Having
          transitioned into a tech career as his second act, he strongly believes in improving the accessibility of
          technology as a means to address local economic, educational, and cultural needs.  His passion project,
          Community Code, aims to empower people to solve issues in their own community with tech solutions.
        </p>
        <p>
          He currently works at Cigna building full-stack solutions using Python, Angular, Kubernetes, and AWS.  Previously,
          he worked at two growth-stage startups in Boston, Notarize and Alignable, developing user-facing
          features with React and Ruby on Rails.
        </p>
      </div>
    </div>
  );
}

const AboutSectionWithImage = () => (
  <StaticQuery
    query={graphql`
      query {
        placeholderImage: file(relativePath: { eq: "ajk.jpg" }) {
          childImageSharp {
            fixed(width: 360) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    `}
    render={data => <AboutSection fixedImage={data.placeholderImage.childImageSharp.fixed} />}
  />
)

export default AboutSectionWithImage
