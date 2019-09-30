import "./index.styl";

import React from "react";

export default function SocialIcon({ href, src, alt }) {
  return (
    <a
      className="SocialIcon"
      href={href}
      target="_blank"
      rel="noopener noreferrer"
    >
      <img src={src} alt={alt} />
    </a>
  );
}
