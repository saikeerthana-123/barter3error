import React,{Component} from 'react';
import { Text, View, StyleSheet, TextInput, TouchableOpacity, Alert, Image, Modal } from 'react-native';
import Constants from 'expo-constants';
import firebase from 'firebase';
import db from '../config'

export default class Login extends Component {
  constructor(){
    super()
      this.state = {
        emailId:'',
        passward:'',
        firstName: '',
        lastName:'',
        address:'',
        contact:'',
        confirmPassward:'',
        isModalVisible:false
      }
    }

  UserLogin = (emailId,passward)=>{
    return(
      firebase.auth().signInWithEmailAndPassword(emailId,passward).then(()=>{
        return(
          Alert.alert('Login Successful')
        )
        })
        .catch((error)=>{
          return(
            Alert.alert(error.message)
          )
        }
      )
      )
  }

    UserSignUp = (emailId,passward,confirmPassward)=>{
    return(
      firebase.auth().createUserWithEmailAndPassword(emailId,passward).then(()=>{
        firebase.auth().createUserWithEmailAndPassword(emailId, password)
        .then((response)=>{
          db.collection('users').add({
            firstName:this.state.firstName,
            lastName:this.state.lastName,
            contact:this.state.contact,
            address:this.state.address,
            emailId:this.state.emailId
          })
          return Alert.alert( 'User Added Successfully', '', [ 
            {text: 'OK', onPress: () => this.setState({"isModalVisible" : false})}, ] );
        })
        })
        .catch((error)=>{
          return(
            Alert.alert(error.message)
          )
        }
      )
      )
  }

  showModal=()=>{
    return(
      <Modal 
      transparent = {true}
      visible = {this.state.isModalVisible}>
      <View>
        <ScrollView>
          <KeyboardAvoidingView>
            <Text>Registration</Text>
            <TextInput style={styles.loginBox}
              placeholder={'first Name'}
              onChangeText={(text)=>{
                this.setState({
                  firstName: text
                })
              }}/>

            <TextInput style={styles.loginBox}
            placeholder={'Last Name'}
            onChangeText={(text)=>{
              this.setState({
                lastName: text
              })
            }}/>

            <TextInput style={styles.loginBox}
            placeholder={'contact'}
            onChangeText={(text)=>{
              this.setState({
                contact: text
              })
            }}/>

            <TextInput style={styles.loginBox}
            placeholder={'address'}
            onChangeText={(text)=>{
              this.setState({
                address: text
              })
            }}/>

            <TextInput style={styles.loginBox}
            placeholder={'email'}
            onChangeText={(text)=>{
              this.setState({
                emailId: text
              })
            }}/>

            <TextInput style={styles.loginBox}
            placeholder={'passward'}
            onChangeText={(text)=>{
              this.setState({
                password: text
              })
            }}/>

            <TextInput style={styles.loginBox}
            placeholder={'conform passward'}
            onChangeText={(text)=>{
              this.setState({
                confirmPassward: text
              })
            }}/>

        <View>
          <TouchableOpacity style={[styles.button,{marginBottom:20, marginTop:20}]}
                  onPress = {()=>this.userSignUp(this.state.emailId,this.state.password,this.state.confirmPassward)}>
              <Text>Register</Text>
          </TouchableOpacity>
        </View>
          </KeyboardAvoidingView>          
        </ScrollView>
      </View>
      </Modal>
    )
  }

  render(){
      return (
        <View style={styles.container}>
     <View style={styles.container}>
      <Text style = {styles.text}>Barter System App</Text>
      <Text style = {styles.text2}>Start Barter System Today</Text>
      <Image style={{width:200,height:200,marginLeft:70,marginTop:-500}} source ={{uri:'https://thumbs.dreamstime.com/b/                       barter-commerce-trade-transaction-economic-concept-exchange-swap-goods-drawing-illustration-vector-75029629.jpg'}}/>
    </View>

    <View style={styles.container2}>
      <TextInput style = {styles.loginbox}
      placeholder = 'abc@xyz.com'
      keyboardType = 'email-address'
      onChangeText = {(text)=>{ this.setState({ emailId: text }) }}
      ></TextInput>

      <TextInput style = {styles.loginbox}
      placeholder = 'enter your passward'
      secureTextEntry = 'passward'
      onChangeText = {(text)=>{ this.setState({ passward: text }) }}>
      </TextInput>

      <TouchableOpacity style = {styles.button} onPress={()=>{
        this.UserLogin(this.state.emailId,this.state.passward)
      }}>
      <Text>Log In</Text>
      </TouchableOpacity>

      <TouchableOpacity  style = {styles.button}
      onPress = {()=>{this.UserSignUp(this.state.emailId,this.state.passward)}}
      >
      <Text>Sign Up</Text>
      </TouchableOpacity>
    </View>
    </View>

  );
  }

  }
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#68C6B8',
  },
  text:{
    marginTop:10,
    marginBottom:500,
    alignSelf:'center',
    fontSize:25,
    textDecorationLine: 'underline',
  },
  text2:{
    marginTop:10,
    alignSelf:'center',
    fontSize:15,
  },
  loginbox:{
    borderColor:'black',
    justifyContent:'center',
    backgroundColor:'white',
    marginBottom:5,
    borderRadius:10
  },
  container2:{
    flex:1,
    alignItems:'center',
    marginTop:1,
  },
  button:{
    borderColor:'white',
    justifyContent:'center',
    backgroundColor:'#E35E28',
    marginBottom:5,
    borderRadius:8,
    width:100 ,
    alignItems:'center'   
  }
});
