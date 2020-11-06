import './App.css';
import {Layout, Header, Navigation, Drawer, Content, Footer, FooterSection, FooterLinkList} from 'react-mdl';
import Main from './components/main';
import {Link} from 'react-router-dom';

function App() {
  return (
    <div className="demo-big-content">
        <Layout>
            <Header className="header-color" title="F1 WORLD CHAMPION" scroll>
                <Navigation>
                    <Link to="/">Home</Link>
                    <Link to="/f1stats">F1 Statistics</Link>
                    <Link to="/f1ecnomics">F1 & Economics</Link>
                    <Link to="/f1uscities">US Hosting Cities</Link>
                    <Link to="/f1maps">F1 Maps</Link>
                </Navigation>
            </Header>

            <Drawer title="Navigation">
                <Navigation>
                  <Link to="/">Home</Link>
                  <Link to="/f1stats">F1 Statistics</Link>
                  <Link to="/f1ecnomics">F1 & Economics</Link>
                  <Link to="/f1uscities">US Hosting Cities</Link>
                  <Link to="/f1maps">F1 Maps</Link>
                </Navigation>
            </Drawer>

            <Content>
                <div className="page-content" />
                <Main/>
            </Content>
            
            <Footer size="mini">
              <FooterSection type="left" logo="UPenn CIS 550">
              </FooterSection>
              <FooterSection type="right" logo="Database & Information System Final Project">
              </FooterSection>
            </Footer>
        </Layout>
    </div>
  );
}

export default App;
