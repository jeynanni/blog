import React, { Component } from 'react';
import './Posts.css';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button } from 'reactstrap';
import Loader from 'react-loader-spinner';

class Posts extends Component {
    constructor(props) {
        super(props);

        this.state = {
            image:"",
            loader: true
        }
        this.fetchImg()
    }

    fetchImg = async () => {
        const response = await fetch("https://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag=cats&rating=g&fmt=json")
    
        if (response.ok && response.status===200){       
               
            const Maria = await response.json()
        
                this.setState({image: Maria.data.image_url, loader: false})
        
        } else {
            console.log('Error:' + response.status)
        }
    } 
    
    render() {
        return (
            <div className="primario">
            
                <Card body inverse style={{ backgroundColor: '#333', borderColor: '#333' }}body outline color="warning" > 
                    <CardImg top width="100%" src={this.state.image} className='image'/>
                     {this.state.loader && <Loader type="TailSpin" color="#ffff" height={80} width={80} />}
                    <CardBody>
                    <CardTitle>{this.props.data.id}</CardTitle>
                    <CardSubtitle>{this.props.data.title}</CardSubtitle>
                    <CardText>{this.props.data.body}</CardText>
                    
                    </CardBody>
                </Card>
            </div>
        )
    }
}

export default Posts;