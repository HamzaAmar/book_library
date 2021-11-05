import * as React from "react";

function check(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 78 78" {...props}>
      <path d="M78 19L29 68h-1L0 40v-2l7-6h2l20 20 41-41h1l7 6v2z" />
    </svg>
  );
}

export default check;
