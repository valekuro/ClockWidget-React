import "./App.css";
import Theme from "./components/Theme";
import styled from "styled-components";

import HomePage from "./components/HomePage";
function App() {
  const variant = "light";
  return (
    <Theme>
      <SuperContainer variant={variant}>
        <HomePage variant={variant} />
      </SuperContainer>
    </Theme>
  );
}
export const SuperContainer = styled.div<{ variant: string }>`
  background-color: ${(props) => props.theme.navBarStyles[props.variant].backgroundPage};
  color: ${(props) => props.theme.navBarStyles[props.variant].colorPage};
  text-align: center;
`;
export default App;
