import React, {Component} from 'react';
var Profile = require('./Profile');
var api = require('../utils/api');
var Repositories = require('./Repositories');
var Notes = require('./Notes');
import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableHighlight
} from 'react-native';

var styles = StyleSheet.create({
  container: {
    marginTop: 65,
    flex: 1
  },
  image: {
    height: 350
  },
  buttonText: {
    fontSize: 24,
    color: 'white',
    alignSelf: 'center'
  },
});
class Dashboard extends Component {
  makeBackground(btn) {
    var obj = {
      flexDirection: 'row',
      alignSelf: 'stretch',
      justifyContent: 'center',
      flex: 1
    }

    if(btn === 0){
      obj.backgroundColor = '#48BBEC';
    }else if (btn === 1){
      obj.backgroundColor = '#E77AAE';
    } else {
      obj.backgroundColor = '#758BF4';
    }

    return obj;
  }
  goToProfile() {
    /*Navigate to Profile page pass in userInfo*/
    this.props.navigator.push({
      component: Profile,
      title: 'Profile Page',
      passProps: {userInfo: this.props.userInfo}
    })
  }
  goToRepos() {
    /*fetch the Repositories
    *Pass in userInfo.login to get the repos
    */
    api.getRepos(this.props.userInfo.login)
      .then((res) => {/*If successful with response go to repos component*/
        this.props.navigator.push({/*After data is in lets navigate to route*/
          component: Repositories,
          title: 'Repos',
          passProps:{
            userInfo: this.props.userInfo,
            repos: res
          }
        });
      });
  }
  goToNotes() {
    api.getNotes(this.props.userInfo.login)
    .then((res) => {
      res = res || {};
      this.props.navigator.push({
        component: Notes,
        title: 'Notes',
        passProps: {
          notes: res,
          userInfo: this.props.userInfo
        }

      })
    })

  }
  render() {
    return(
      <View style={styles.container}>
      <Image source={{uri: this.props.userInfo.avatar_url}} style={styles.image}/>
      <TouchableHighlight
        style = {this.makeBackground(0)}
        onPress={this.goToProfile.bind(this)}
        underlayColor='#88D4F5'>
        <Text style={styles.buttonText}> View Profile</Text>
      </TouchableHighlight>
      <TouchableHighlight
        style = {this.makeBackground(1)}
        onPress={this.goToRepos.bind(this)}
        underlayColor='#88D4F5'>
        <Text style={styles.buttonText}> View Repos</Text>
      </TouchableHighlight>
      <TouchableHighlight
        style = {this.makeBackground(2)}
        onPress={this.goToNotes.bind(this)}
        underlayColor='#88D4F5'>
        <Text style={styles.buttonText}> View Notes</Text>
      </TouchableHighlight>
      </View>
    )
  }
};

module.exports = Dashboard;
