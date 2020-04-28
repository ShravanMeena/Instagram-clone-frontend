import React, { Component } from 'react'
import { Container, Thumbnail,Button,Icon, Content, Card, CardItem, Body, Left, Right } from 'native-base';
import { Header } from 'react-native-elements';
import {View, Text, Image, Dimensions} from 'react-native'
import CardComponent from '../CardComponent';

var {width, height} = Dimensions.get('window')

var images = [
    require('../../img/1.jpg'),
    require('../../img/2.jpg'),
    require('../../img/3.jpg'),
    require('../../img/4.jpg'),
    require('../../img/4.jpg'),
    require('../../img/3.jpg'),
    require('../../img/2.jpg'),
    require('../../img/3.jpg'),
    require('../../img/1.jpg'),
]

export default class ProfileTab extends Component {
    constructor(props){
        super(props);
        this.state = {
            activeIndex : 0
        }
    }

    segmentClicked = (index) => {
        this.setState({
            activeIndex:index
        })
    }

    renderSectionOne = () => {
            return images.map((image, index) => {
                return(
                    <View key={index} style={[{width:width/3, height:width/3},
                        {marginBottom:2}, index % 3 !== 0 ? {paddingLeft:2} : {paddingLeft:0}
                    ]}>
                    <Image style={{flex:1, width:undefined, height:undefined}}
                        source={image} />
                </View>
                )
            })
    }

    renderSection = () => {
        if(this.state.activeIndex == 0){
            return(
                <View style = { { flexDirection: 'row',flexWrap: 'wrap'}} >
                    {this.renderSectionOne()}
                </View>
            )
        }
        else if(this.state.activeIndex == 1){
            return (
                <View>
                    <CardComponent imageSource="1" likes="550"/>
                    <CardComponent imageSource="2" likes="942"/>
                    <CardComponent imageSource="3" likes="920"/>
                </View>
            )
        }
    }

    render() {
        return (
            <Container style={{flex:1, backgroundColor:'white'}}>
                 <Header
                    containerStyle={{
                        backgroundColor: '#fff',
                        justifyContent: 'center',
                        paddingHorizontal: 14,
                        borderWidth:.2,
                        borderBottomColor:'#dedede'

                    }}
                    leftComponent={{ icon: 'add-circle-outline', color: '#000' }}
                    centerComponent={{ text: 'Instagram', style: { color: '#000', fontSize:20, fontWeight:'700' } }}
                    rightComponent={{ icon: 'alarm', color: '#000' }}
                    />
                    <Content>
                       <View style={{paddingTop:10}}>
                            <View style={{flexDirection:'row'}}>
                            <View style={{flex:1,alignItems:'center'}}>
                                <Image source={require('../../img/1.jpg')} 
                                    style={{width:75, height:75,borderRadius:37.5}}
                                />
                            </View>
                            <View style={{flex:3}}>
                                <View style={{flexDirection:'row', justifyContent:'space-around'}}>
                                    <View style={{alignItems:'center'}}>
                                        <Text>20</Text>
                                        <Text style={{fontSize:10, color:'grey'}}>posts</Text>
                                    </View>
                                    <View style={{alignItems:'center'}}>
                                        <Text>370</Text>
                                        <Text style={{fontSize:10, color:'grey'}}>followers</Text>
                                    </View>
                                    <View style={{alignItems:'center'}}>
                                        <Text>760</Text>
                                        <Text style={{fontSize:10, color:'grey'}}>following</Text>
                                    </View>
                                </View>
                                <View style={{flexDirection:'row', paddingTop:10}}>
                                    <Button bordered dark
                                        style={{ flex:3, height:30,justifyContent:'center',
                                            marginLeft:10}}
                                    > 
                                    <Text>Edit Profile</Text> 
                                    </Button>

                                    <Button bordered dark
                                        style={{ flex:1, height:30,justifyContent:'center',
                                            marginRight:10,marginLeft:5}}
                                    > 
                                        <Icon name='settings' />
                                    </Button>
                                </View>
                           </View>
                        </View>
                        <View style={{paddingVertical:10,paddingHorizontal:10}}>
                            <Text style={{fontWeight:'bold'}}>Shravan Meena</Text>
                            <Text>Influencer | Creator | Entertainment</Text>
                            <Text>www.websote.Component.com</Text>
                        </View>
                       </View>

                       <View>
                           <View style={{flexDirection:'row',justifyContent:'space-around',borderTopWidth:1,borderTopColor:'#eae5e'}}>
                               <Button Button transparent 
                               onPress = { () => this.segmentClicked(0)} 
                                active = {this.state.activeIndex == 0}  
                                  >
                                    <Icon name='ios-apps' 
                                        style={[this.state.activeIndex == 0 ? {} : {color:'grey'}]}
                                    />
                               </Button>
                               <Button transparent 
                               onPress = { () => this.segmentClicked(1)} 
                                active = {this.state.activeIndex == 1} 
                               >
                                    <Icon name='ios-list' 
                                        style={[this.state.activeIndex == 1 ? {} : {color:'grey'}]}
                                    />
                               </Button>
                               <Button transparent 
                                onPress = { () => this.segmentClicked(2)} 
                                active = {this.state.activeIndex == 2} 
                               >
                                    <Icon name='ios-people' 
                                    style={[this.state.activeIndex == 2 ? {} : {color:'grey'}]}
                                    />
                               </Button>
                               <Button transparent 
                                onPress = { () => this.segmentClicked(3)} 
                                active = {this.state.activeIndex == 3} 
                               >
                                    <Icon name='ios-bookmark' 
                                        style={[this.state.activeIndex == 3 ? {} : {color:'grey'}]}
                                    />
                               </Button>
                           </View>
                           {this.renderSection()}
                       </View>
                    </Content>
            </Container>
        )
    }
}
