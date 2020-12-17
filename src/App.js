import React from "react";
import "./App.css";
import HeaderContainer from "./components/Header/Header-container";
import Navigation from "./components/Navigation/Navigation";
import { Route, withRouter } from "react-router-dom";
import UsersContainer from "./components/Users/Users-container";
import ProfileContainer from "./components/Profile/Profile-container";
import Login from "./components/Login/Login";
import { initThunkCreator } from "./redux/app-reducer";
import { connect } from "react-redux";
import { compose } from "redux";
import Preloader from "./components/common/Preloader/Preloader";
import { Suspense } from "react";

const DialogsContainer = React.lazy( () => import("./components/Dialogs/Dialogs-container") );
class App extends React.Component {

  componentDidMount () {
    this.props.initThunkCreator();
  }
  
  render () {
    if (!this.props.initialized) return <Preloader />
    return (
      <div className="wrapper">
        <HeaderContainer />
        <Navigation />
        <div className="content">
          <Suspense fallback={<Preloader />}>
            <Route path="/Profile/:userId?" render={ () => <ProfileContainer />} />
            <Route path="/Messages" render={ () => <DialogsContainer />} />
            <Route path="/Users" render={ () => <UsersContainer /> }  />
            <Route path="/Login" render={ () => <Login /> }  />
          </Suspense>
        </div>
      </div>
    )
  } 
}

function mapStateToProps (state) {
  return({
    initialized: state.app.initialized,
  })
}

export default compose(
  connect(mapStateToProps, {initThunkCreator} ),
  withRouter,
)(App);
