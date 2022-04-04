import React from "react";

import "./index.scss";

// @ts-ignore
const Header = React.lazy(() => import('header/header'))

export const App = () => (
  <div className="mt-10 text-3xl mx-auto max-w-6xl">
    <React.Suspense fallback={<>Loading</>}>
      <Header title="hello" />
    </React.Suspense>
    <div>Framework: react</div>
    <div>Language: TypeScript</div>
    <div>CSS: Tailwind</div>
  </div>
);
