import "./App.css";
import Theme from "./components/Theme";
import styled from "styled-components";
import { QueryClient, QueryClientProvider, useQuery } from "react-query";
import HomePage from "./components/HomePage";
import ColumnContainer from "./components/ColumnsContainer/ColumnsContainer";
import NavigationBar from "./components/NavigationBar";
const queryClient = new QueryClient();
function App() {
  const variant = "light";
  /*   const A = ["a", "b", "c", "d"];
  A.push("e");
  console.log("array  ", A);
  console.log("pop  ", A.pop()); */
  return (
    <Theme>
      <QueryClientProvider client={queryClient}>
        <SuperContainer variant={variant}>
          <NavigationBar navigationItems={[<div>About</div>, <div>Services</div>, <div>Projects</div>]} logo={"Sunnyside"} variant={variant} />
          <HomePage variant={variant} />
          <FooterContainer variant={variant}>
            <ColumnContainer variant={variant} items={[<NameFooter>Valentina</NameFooter>]} />
          </FooterContainer>
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

export const FooterContainer = styled.div<{ variant: string }>`
  background-color: ${(props) => props.theme.navBarStyles[props.variant].backgroundFooter};
  color: ${(props) => props.theme.navBarStyles[props.variant].colorPage};
  margin-top: 2em;
  padding: 3em;
`;

export const NameFooter = styled.div`
  font-family: ${(props) => props.theme.logoStyles.fontFamilyLogo};
  font-size: 20px;
`;

export default App;
