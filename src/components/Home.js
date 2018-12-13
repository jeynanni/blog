import React, { Component } from 'react';

import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import User from './User';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from 'reactstrap';


class Home extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false,
      posts: []
    };
    this.firstFetch()
  }
  firstFetch = () => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(json => this.setState({ posts: json }))
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    return (

      <div className="App">

        <Navbar color="warning" light expand="md">
          <NavbarBrand href="/">JEY BLOG</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href={`/1`}>Home</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href={`/User/3`}>User</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href={`/Posts/6`}>Posts</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href={`/Comments/9`}>Comments</NavLink>
              </NavItem>

            </Nav>
          </Collapse>
        </Navbar>


        {/*} {this.state.posts.map(item => {
          return <Posts key={item.id} data = {item}/>
        }) }*/}

      </div>

    );
  }
}

export default Home;