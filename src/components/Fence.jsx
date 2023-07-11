import React, { Fragment } from "react";
import Highlight, { defaultProps } from "prism-react-renderer";
import { CopyCode } from "@/components/CopyCode";

export function Fence({ children, language }) {
  const ref = React.useRef(null);

  return (
    <Highlight
      {...defaultProps}
      code={children.trimEnd()}
      language={language}
      theme={undefined}
    >
      {({ className, style, tokens, getTokenProps }) => (
        <div className="group relative">
          <pre className={className} style={style} ref={ref}>
            <code>
              {tokens.map((line, lineIndex) => (
                <Fragment key={lineIndex}>
                  {line
                    .filter((token) => !token.empty)
                    .map((token, tokenIndex) => (
                      <span key={tokenIndex} {...getTokenProps({ token })} />
                    ))}
                  {"\n"}
                </Fragment>
              ))}
            </code>
          </pre>
          <CopyCode codeElement={ref} />
        </div>
      )}
    </Highlight>
  );
}
