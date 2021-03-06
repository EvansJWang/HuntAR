import * as firebase from "firebase";

export const SET_CHARACTER = 'SET_CHARACTER'
// start firebase connection if it hasnt been started yet - works
if (!firebase.apps.length) {
    firebase.initializeApp({
      apiKey: "AIzaSyALfFSMM-r5cVc-GxcUNf0RzvheeUIGr3c",
      authDomain: "huntar-3db6a.firebaseapp.com",
      databaseURL: "https://huntar-3db6a.firebaseio.com",
      storageBucket: "huntar-3db6a.appspot.com"});
}

const database = firebase.database();

// register - should work untested
export async function register(form) {
   try {
     let response =  await firebase.auth()
           .createUserWithEmailAndPassword(form.email, form.password);
           return (response)
   } catch (error) {
           return (error)
   }
}

//signin - works
export async function signin(form) {
   try {
     let response =  await firebase.auth()
           .signInWithEmailAndPassword(form.email, form.password);
            return (response)
   } catch (error) {
            return (error)
   }
}

//should work not tested
export async function signOut(form) {
   try {
     let response =  await firebase.auth()
           .signOut();
            return (response)
   } catch (error) {
            return (error)
   }
}


//save characters - works

export async function saveCharacters(uid, character) {
  var database = firebase.database();
  firebase.database().ref('users/' + uid + '/character').set({
      character
    });
}

// save combat instance - works
export async function createCombatInstance(uid, combatInstance) {
  var database = firebase.database();
  firebase.database().ref('users/' + uid + '/combatInstance').set({
      combatInstance
    });
}

// save position
export async function saveLocationHistory(uid, locationhistory) {
  debugger
  var database = firebase.database();
  firebase.database().ref('users/' + uid + '/locationhistory').set({
      locationhistory
    });
}




// pull characters from firebase
export async function setCharacter(uid, callback) {
    var database = firebase.database();
    test = firebase.database().ref('users/' + uid + '/character')
    test.once("value", function(snapshot) {
    temp = snapshot.val()
    callback(null, temp);
  }, function (errorObject) {
    console.log("The read failed: " + errorObject.code);
  });

};


export async function setLocationHistory(uid, callback) {
    var database = firebase.database();
    test = firebase.database().ref('users/' + uid + '/locationhistory')
    test.once("value", function(snapshot) {
    temp = snapshot.val()
    callback(null, temp);
  }, function (errorObject) {
    console.log("The read failed: " + errorObject.code);
  });
};
