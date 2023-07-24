import React, { Component } from "react";
import "./home.scss";
import Featured from "../../components/Featured/Featured";
// import {AccessAlarm} from '@material-ui/icons';
import Navbar from "../../components/Navbar/Navbar";
import List from "../../components/list/list";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import Footer from '../Footer/Footer';

class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      popular: [],
      trending: [],
      teen: [],
      top: [],
      newReleases: [],
      comedy: [],
    };
  }

  componentDidMount() {
    firebase
      .firestore()
      .collection("Popular")
      .onSnapshot((snapshot) => {
        console.log(snapshot);
        snapshot.docs.map((e) => {
          console.log(e.data());
        });

        const popular = snapshot.docs.map((e) => {
          const data = e.data();
          data["id"] = e.id;
          return data;
        });

        this.setState({
          popular: popular,
        });
      });

    firebase
      .firestore()
      .collection("Trending")
      .onSnapshot((snapshot) => {
        console.log(snapshot);
        snapshot.docs.map((e) => {
          console.log(e.data());
        });

        const trending = snapshot.docs.map((e) => {
          const data = e.data();
          data["id"] = e.id;
          return data;
        });

        this.setState({
          trending: trending,
        });
      });

    firebase
      .firestore()
      .collection("Teen")
      .onSnapshot((snapshot) => {
        console.log(snapshot);
        snapshot.docs.map((e) => {
          console.log(e.data());
        });

        const teen = snapshot.docs.map((e) => {
          const data = e.data();
          data["id"] = e.id;
          return data;
        });

        this.setState({
          teen: teen,
        });
      });

    firebase
      .firestore()
      .collection("Top")
      .onSnapshot((snapshot) => {
        console.log(snapshot);
        snapshot.docs.map((e) => {
          console.log(e.data());
        });

        const top = snapshot.docs.map((e) => {
          const data = e.data();
          data["id"] = e.id;
          return data;
        });

        this.setState({
          top: top,
        });
      });

    firebase
      .firestore()
      .collection("NewReleases")
      .onSnapshot((snapshot) => {
        console.log(snapshot);
        snapshot.docs.map((e) => {
          console.log(e.data());
        });

        const newReleases = snapshot.docs.map((e) => {
          const data = e.data();
          data["id"] = e.id;
          return data;
        });

        this.setState({
          newReleases: newReleases,
        });
      });

    firebase
      .firestore()
      .collection("Comedy")
      .onSnapshot((snapshot) => {
        console.log(snapshot);
        snapshot.docs.map((e) => {
          console.log(e.data());
        });

        const comedy = snapshot.docs.map((e) => {
          const data = e.data();
          data["id"] = e.id;
          return data;
        });

        this.setState({
          comedy: comedy,
        });
      });
  }

  render() {
    return (
      <div className="home">
        <Navbar />
        <Featured type={"movies"} />
        <List title="Popular on Netflix" list={this.state.popular} />
        <List title="Trending Now" list={this.state.trending} />
        <List title="Teen TV based on Books" list={this.state.teen} />
        <List title="Top 10 movies in India today" list={this.state.top} />
        <List title="New Releases" list={this.state.newReleases} />
        <List title="Hollywood Comedy Movies" list={this.state.comedy} />
        <Footer/>
      </div>
    );
  }
}

export default Home;
