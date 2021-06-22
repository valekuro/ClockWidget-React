import "./App.css";
import Theme from "./components/Theme";
import styled from "styled-components";
import { QueryClient, QueryClientProvider, useQuery } from "react-query";
import HomePage from "./components/HomePage";
import ContactUsPage from "./components/ContactUsPage";
import { useHistory, BrowserRouter as Router, withRouter, Switch, Route, Link } from "react-router-dom";

import ColumnContainer from "./components/ColumnsContainer/ColumnsContainer";
import NavigationBar from "./components/NavigationBar";
const queryClient = new QueryClient();
function App() {
  const variant = "light";
  return (
    <Theme>
      <QueryClientProvider client={queryClient}>
        <SuperContainer variant={variant}>
          <Router>
            <NavigationBar
              navigationItems={[
                <Link to="/" style={{ color: "white", textDecoration: "none" }}>
                  About
                </Link>,
                <Link to="/contactus" style={{ color: "white", textDecoration: "none" }}>
                  Contact us
                </Link>,
                <div>Language</div>,
              ]}
              logo={"Sunnyside"}
              variant={variant}
            />
            <Switch>
              <Route exact path="/" component={() => <HomePage variant={variant} />} />
              <Route exact path="/contactus" component={() => <ContactUsPage variant={variant} />} />
            </Switch>
            <FooterContainer variant={variant}>
              <ColumnContainer variant={variant} items={[<NameFooter>Valentina</NameFooter>]} />
            </FooterContainer>
          </Router>
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
