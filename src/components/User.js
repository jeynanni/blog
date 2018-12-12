import React, { Component } from 'react';
import './User.css';
import Loader from 'react-loader-spinner';
import { Media } from 'reactstrap';
import Happy from './Happy.png'

import Posts from './Posts';
import Home from './Home';

class User extends Component {
    constructor(props) {
        super(props);

        this.state = {
            user: undefined,
            loader: true,
            posts: []
        };
        this.secondFetch()
        this.thirdFetch()
    }

    secondFetch() {
        fetch('https://jsonplaceholder.typicode.com/users/' + this.props.id)
            .then(response => response.json())
            .then(json => this.setState({ user: json, loader: false }))
    }

    thirdFetch() {
        fetch('https://jsonplaceholder.typicode.com/users/' + this.props.id + '/posts')
            .then(response => response.json())
            .then(json => this.setState({ posts: json, loader: false }))
    }

    render() {
        const user = this.state.user
        if (user === undefined) {
            return <div>{this.state.loader && <Loader type="Hearts" color="#somecolor" height={80} width={80} />}</div>
        } else {
            return (
                <div>
              
                    <div className='user'>
                        <Media>
                            <Media left href="#">
                                <Media src={Happy} className='Happy' alt='Happy' />
                            </Media>
                            <Media body>
                                {this.state.user.id}<br />
                                <h1> {this.state.user.name}<br /></h1>
                                <i>{this.state.user.address.city}</i> <br />
                                send a message!<br /> <textarea data-testid="email" />
                                {this.state.posts.map(item => {
                                    return <Posts key={item.id} data={item} />
                                })}
                            </Media>
                        </Media>
                    </div>

                </div>
            )
        }

    };


}


export default User;