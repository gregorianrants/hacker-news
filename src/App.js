import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import './App.css';
import queryString from 'query-string'
import NavBar from "./components/TopLevel/Navbar";
import Top from './components/TopLevel/Top'
import New from './components/TopLevel/New'
import Comments from './components/TopLevel/Comments'
import User from './components/TopLevel/User'
import styled, {createGlobalStyle} from 'styled-components'
import ThemeContext from "./components/TopLevel/ThemeContext";

const GlobalStyle = createGlobalStyle`
body{
  background-color: ${props => props.theme==='dark' ? '#1C2022' : 'white'};
}
`


const ContainerStyled = styled.div`
  max-width: 900px;
  margin: 0 auto;
  padding: 0 3em;
`








class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            theme: 'light',
            toggleTheme: ()=>{
                this.setState(
                    ({theme})=> ({theme: theme === 'light' ? 'dark' : 'light'})
                )
            }
        }
    }

    render(){
        return (
            <>
                <ThemeContext.Provider value={this.state}>
                    <ThemeContext.Consumer>
                        {({theme})=><GlobalStyle theme={theme}/>}
                    </ThemeContext.Consumer>
                    <Router>
                        <ContainerStyled>
                            <NavBar />
                            <Switch>
                                <Route exact path='/'>
                                    <Top />
                                </Route>
                                <Route path='/new'>
                                    <New />
                                </Route>
                                <Route path='/post'>
                                    <Comments />
                                </Route>
                                <Route
                                    path='/user'
                                    render={({location}) => {
                                        let {id} = queryString.parse(location.search)
                                        return (<User userID={id}/>
                                        )
                                    }}

                                />
                            </Switch>
                        </ContainerStyled>
                    </Router>
                </ThemeContext.Provider>
            </>
        )
    }

}

export default App;

