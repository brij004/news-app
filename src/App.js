import "./App.css";

import React, { Component } from "react";
import NavBar from "./Components/NavBar";
import News from "./Components/News";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

export default class App extends Component {
  apikey =process.env.REACT_APP_NEWS_API
  state = {
    progress:0
  }
  setprogress=(progress)=>{
 this.setState({progress:progress})
  }

  render() {
    return (
      <BrowserRouter>
        <NavBar />
        <LoadingBar
        height={3}
        color='#f11946'
        progress={this.state.progress}

      />
        <Routes>
        <Route path="/Home" element={<Navigate to="/" replace />} />
          <Route exact path="/" element={<News setprogress={this.setprogress} apikey={this.apikey}  key="general" country="in" category="general" />} />
          <Route exact path="/general" element={<News setprogress={this.setprogress} apikey={this.apikey}  key="general" country="in" category="general" />} />
          <Route exact path="/business" element={<News setprogress={this.setprogress} apikey={this.apikey}  key="business" country="in" category="business" />} />
          <Route exact path="/entertainment" element={<News setprogress={this.setprogress} apikey={this.apikey}  key="entertainment" country="in" category="entertainment" />} />
          <Route exact path="/health" element={<News setprogress={this.setprogress} apikey={this.apikey} key="health" country="in" category="health" />} />
          <Route exact path="/science" element={<News setprogress={this.setprogress} apikey={this.apikey} key="science" country="in" category="science" />} />
          <Route exact path="/sports" element={<News setprogress={this.setprogress}  apikey={this.apikey} key="sports" country="in" category="sports" />} />
          <Route exact path="/technology" element={<News setprogress={this.setprogress} apikey={this.apikey}  key="technology" country="in" category="technology" />} />
        </Routes>
      </BrowserRouter>
    );
  }
}
