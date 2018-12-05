import React, { Component } from 'react';
import './Posts.css';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button } from 'reactstrap'

class Posts extends Component {
    constructor(props) {
        super(props);

        this.state = {
            image:""
        }
        this.fetchImg()
    }

    fetchImg = async () => {
        const response = await fetch("https://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag=cat&rating=g&fmt=json")
    
        if (response.ok && response.status===200){       
        console.log(response)

        const Maria = await response.json()
        
        this.setState({image: Maria.data.image_url})
        console.log(Maria.data.image_url)
        } else {
            console.log('Error:' + response.status)
        }
    } 
    
    render() {
        return (
            <div className="primario">
            <div>
               <Card> 
        <CardImg top width="100%" src={this.state.image} className='image'/>
        <CardBody>
          <CardTitle>{this.props.data.id}</CardTitle>
          <CardSubtitle>{this.props.data.title}</CardSubtitle>
          <CardText>{this.props.data.body}</CardText>
          <Button>Next...</Button>
        </CardBody>
      </Card>
            </div>
            </div>
        )
    }
}

export default Posts;