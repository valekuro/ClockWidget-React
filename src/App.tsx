import "./App.css";
import Theme from "./components/Theme";
import styled from "styled-components";
import { QueryClient, QueryClientProvider, useQuery } from "react-query";
import HomePage from "./components/HomePage";
import NavigationBar from "./components/NavigationBar";
const queryClient = new QueryClient();
function App() {
  const variant = "light";
  return (
    <Theme>
      <QueryClientProvider client={queryClient}>
        <SuperContainer variant={variant}>
          <NavigationBar navigationItems={[<div>About</div>, <div>Services</div>, <div>Projects</div>]} logo={"Sunnyside"} variant={variant} />

          <HomePage variant={variant} />
        </SuperContainer>
      </QueryClientProvider>
    </Theme>
  );
}
export const SuperContainer = styled.div<{ variant: string }>`
  background-color: ${(props) => props.theme.navBarStyles[props.variant].backgroundPage};
  color: ${(props) => props.theme.navBarStyles[props.variant].colorPage};
  text-align: center;
`;
export default App;
