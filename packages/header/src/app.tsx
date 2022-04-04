import React from "react";

import "./index.scss";

interface AppProps {
  title: string;
}

export const App = ({ title }: AppProps) => (
  <header>Balint Orosz {title}</header>
);

export default App
