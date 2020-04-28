import React, { Component } from 'react'
import {View, Text, StyleSheet, ScrollView} from 'react-native'
import { Container, Content, Card, Thumbnail, Icon } from 'native-base'
import CardComponent from '../CardComponent'

export default class HomeTab extends Component {
    render() {
        
        return (
            <Container style={styles.container}>
                
                <Content>

                    <View style={{height:100}}>
                        <View style={{flex:1, justifyContent:'space-between', flexDirection:'row',alignContent:'center',paddingHorizontal:8,padding:5}}>
                            <Text style={{fontWeight:'bold'}}>Stories</Text>
                             <View style={{flexDirection:'row',alignItems:'center'}}>
                                 <Icon name="md-play" style={{fontSize: 14}}> </Icon>
                                 <Text style={{fontWeight:'bold'}}>Watch All</Text>
                             </View>
                        </View>
                        <View style={{flex: 3}}>
                            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} 
                            contentContainerStyle={{    
                                alignItems:'center',
                                paddingStart:5,
                                paddingEnd:5
                            }}
                            >
                                <Thumbnail
                                 style={{marginHorizontal:5, borderWidth:2,borderColor:'pink'}}
                                source={require('../../img/1.jpg')} />
                                <Thumbnail
                                 style={{marginHorizontal:5, borderWidth:2,borderColor:'pink'}}
                                source={require('../../img/2.jpg')} />
                                <Thumbnail
                                 style={{marginHorizontal:5, borderWidth:2,borderColor:'pink'}}
                                source={require('../../img/3.jpg')} />
                                <Thumbnail
                                 style={{marginHorizontal:5, borderWidth:2,borderColor:'pink'}}
                                source={require('../../img/4.jpg')} />
                                <Thumbnail
                                 style={{marginHorizontal:5, borderWidth:2,borderColor:'pink'}}
                                source={require('../../img/3.jpg')} />
                                <Thumbnail
                                 style={{marginHorizontal:5, borderWidth:2,borderColor:'pink'}}
                                source={require('../../img/2.jpg')} />
                                <Thumbnail
                                 style={{marginHorizontal:5, borderWidth:2,borderColor:'pink'}}
                                source={require('../../img/1.jpg')} />
                            </ScrollView>
                        </View>
                    </View>

                    <CardComponent imageSource="1" likes="101"/>
                    <CardComponent imageSource="2" likes="601"/>
                    <CardComponent imageSource="3" likes="209"/>
                </Content>
            </Container>
        )
    }
}
const styles = StyleSheet.create({
    container:{
        backgroundColor:'white',
        flex:1
    }
})