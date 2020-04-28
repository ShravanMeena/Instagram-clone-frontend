import React, { Component } from 'react'
import { View,Text, StyleSheet,Image } from 'react-native'
import { Container, Header, Thumbnail,Button,Icon, Content, Card, CardItem, Body, Left, Right } from 'native-base';


export default class CardComponent extends Component {
    render() {

        const image = {
            "1": require('../img/1.jpg'),
            "2": require('../img/2.jpg'),
            "3": require('../img/3.jpg'),

        }
        
        return (
            <Card>
            <CardItem>
                <Left>
                  <Thumbnail source = { require('../img/2.jpg')} />
                    <Body>
                        <Text> Shravan </Text>
                        <Text note>Jan 9, 2020 </Text>
                    </Body>
                </Left>
            </CardItem>
            <CardItem cardBody>
                <Image source={image[this.props.imageSource]} style={{height:200, width:null, flex:1}} />
            </CardItem>
            <CardItem style={{height: 45}}>
                <Left>
                    <Button transparent>
                        <Icon name='ios-heart' style={{color:'black'}}/>
                    </Button>
                    <Button transparent>
                        <Icon name='ios-chatbubbles' style={{color:'black'}}/>
                    </Button>
                    <Button transparent>
                        <Icon name='ios-send' style={{color:'black'}}/>
                    </Button>
                </Left>
            </CardItem>
            <CardItem style={{height: 20}}>
                <Text>{this.props.likes} likes</Text>
            </CardItem>
            <CardItem >
                <Text>
                <Text style={{fontWeight:"700"}}>Shravan</Text>
                    loremiloremiloremiloremiloremiloremi loremiv loremi loremi loremi
                    loremiloremiloremiloremiloremiloremi loremiv loremi loremi loremi
                    loremiloremiloremiloremiloremiloremi loremiv loremi loremi loremi
                </Text>
            </CardItem>
          </Card>
        )
    }
}

