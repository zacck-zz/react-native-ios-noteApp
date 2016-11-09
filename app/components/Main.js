import React, {Component} from 'react';
var Dashboard = require('./Dashboard');
var api = require('../utils/api');
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableHighlight,
  ActivityIndicator
 } from 'react-native';

var styles = StyleSheet.create({
  mainContainer: {
        flex: 1,
        padding: 30,
        marginTop: 65,
        flexDirection: 'column',
        justifyContent: 'center',
        backgroundColor: '#48BBEC'
    },
    title: {
        marginBottom: 20,
        fontSize: 25,
        textAlign: 'center',
        color: '#fff'
    },
    searchInput: {
        height: 50,
        padding: 4,
        marginRight: 5,
        fontSize: 23,
        borderWidth: 1,
        borderColor: 'white',
        borderRadius: 8,
        color: 'white'
    },
    buttonText: {
        fontSize: 18,
        color: '#111',
        alignSelf: 'center'
    },
    button: {
        height: 45,
        flexDirection: 'row',
        backgroundColor: 'white',
        borderColor: 'white',
        borderWidth: 1,
        borderRadius: 8,
        marginBottom: 10,
        marginTop: 10,
        alignSelf: 'stretch',
        justifyContent: 'center'
    },
});
class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      isLoading: false,
      error: false
    };

  }
  handleChange(event) {
    this.setState({
      username: event.nativeEvent.text
    });
  }
  handleSubmit() {
    //update indicator spinner
    this.setState({
      isLoading: true
    });
    //fetch user from git
    api.getBio(this.state.username)
      .then((res) => {
        //check if user is on github
        if(res.message === 'Not Found') {
            //if not inform state that an issue has arisen
            this.setState({
              error: 'User not Found',
              isLoading: false
            })
        } else {
          //change routes push to next screen
          this.props.navigator.push({
            title: res.name || 'Select an Option',
            component: Dashboard,
            passProps: {userInfo: res}
          });
          this.setState({
            isLoading: false,
            error: false,
            username: ''
          })
        }
      })
  }
  render() {
    return(
      <View style={{marginTop: 65}}>
      <View style={{flex: 9, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'stretch'}}>
        <View style={{width: 50, height:50, backgroundColor: 'powderblue'}}>

        </View>
        <View style={{width: 50, backgroundColor: 'skyblue'}}>

        </View>
        <View style={{width: 50, height: 50, backgroundColor: 'steelblue'}}>

        </View>
      </View>
      <View style={{flex: 1, flexDirection: 'column', alignItems: 'flex-end'}}>
        <View style={{width: 50, height:50, backgroundColor: 'powderblue'}}>

        </View>
        <View style={{width: 50, height: 50, backgroundColor: 'skyblue'}}>

        </View>
        <View style={{width: 50, height: 50, backgroundColor: 'steelblue'}}>

        </View>
      </View>
    </View>

    );


    //check if an error occured
    // var showErr = (
    //   this.state.error ? <Text>{this.state.error}</Text> : <View></View>
    // );
    // return(
    //   <View style={styles.mainContainer}>
    //     <Text style={styles.title}>Search for a Github User</Text>
    //     <TextInput
    //       style={styles.searchInput}
    //       value={this.state.username}
    //       onChange={this.handleChange.bind(this)}/>
    //     <TouchableHighlight
    //       style={styles.button}
    //       onPress={this.handleSubmit.bind(this)}
    //       underlaycolor="white">
    //       <Text style={styles.buttonText}>SEARCH</Text>
    //     </TouchableHighlight>
    //     {/*show propgress while isLoading is true*/}
    //     <ActivityIndicator
    //       animating =  {this.state.isLoading}
    //       color = '#111'
    //       size = "large">
    //     </ActivityIndicator>
    //     {showErr}
    //   </View>
    // )
  }
};

module.exports = Main;
