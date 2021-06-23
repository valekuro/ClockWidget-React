import "./App.css";
import Theme from "./components/Theme";
import styled from "styled-components";
import { store } from "./app/store/store";
import { Provider } from "react-redux";
import Thanks from "./components/ThanksPage/ThanksPage";
import { QueryClient, QueryClientProvider, useQuery } from "react-query";
import HomePage from "./components/HomePage";
import ContactUsPage from "./components/ContactUsPage";
import { useHistory, BrowserRouter as Router, withRouter, Switch, Route, Link } from "react-router-dom";
import Calculator from "./components/Calculator";
import ColumnContainer from "./components/ColumnsContainer/ColumnsContainer";
import NavigationBar from "./components/NavigationBar";
import Summary from "./components/Summary";
const queryClient = new QueryClient();
function App() {
  const variant = "light";
  return (
    <Theme>
      <Provider store={store}>
        <QueryClientProvider client={queryClient}>
          <SuperContainer variant={variant}>
            <Router>
              <NavigationBar
                navigationItems={[
                  <Link to="/calculator" style={{ color: "white", textDecoration: "none" }}>
                    Calc
                  </Link>,

                  <Link to="/contactus" style={{ color: "white", textDecoration: "none" }}>
                    Contact us
                  </Link>,
                  <div>Language</div>,
                ]}
                logo={
                  <Link to="/" style={{ color: "white", textDecoration: "none" }}>
                    <LogoContainer variant={variant}>Sunnyside</LogoContainer>{" "}
                  </Link>
                }
                variant={variant}
              />
              <Switch>
                <Route exact path="/" component={() => <HomePage variant={variant} />} />
                <Route exact path="/contactus" component={() => <ContactUsPage variant={variant} />} />
                <Route exact path={`/contactus/:data`} component={() => <Summary variant={variant} />} />
                <Route exact path={`/contactus/:data/send`} component={() => <Thanks variant={variant} />} />
                <Route exact path={`/calculator`} component={() => <Calculator variant={variant} />} />
              </Switch>
              <FooterContainer variant={variant}>
                <ColumnContainer variant={variant} items={[<NameFooter>Valentina</NameFooter>]} />
              </FooterContainer>
            </Router>
          </SuperContainer>
        </QueryClientProvider>
      </Provider>
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
export const LogoContainer = styled.div<{
  variant: string;
}>`
  display: flex;
  padding: 0.5em;
  font-family: ${(props) => props.theme.logoStyles.fontFamilyLogo};
  font-size: ${(props) => props.theme.logoStyles.fontSizeLogo};
  color: ${(props) => props.theme.navBarStyles[props.variant].color};
`;

export default App;
