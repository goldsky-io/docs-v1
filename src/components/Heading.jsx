import * as React from "react";

export function Heading({ id = "", level = 1, children, className }) {
  const Component = `h${level}`;

  const link = (
    <Component className={["heading", className].filter(Boolean).join(" ")}>
      <div id={id} />
      {children}
      <style jsx>
        {`
          div {
            position: absolute;
            top: calc(-1 * (var(--nav-height) + 44px));
          }
        `}
      </style>
    </Component>
  );

  return level !== 1 ? (
    <a href={`#${id}`} className="hover:opacity-100">
      {link}
      <style jsx>
        {`
          a :global(.heading::after) {
            opacity: 0;
            color: var(--toc-border);
            content: "  #";
            transition: opacity 250ms ease;
          }
          a :global(.heading:hover::after) {
            opacity: 1;
          }
        `}
      </style>
    </a>
  ) : (
    link
  );
}
