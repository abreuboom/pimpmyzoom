import 'firebase/storage';

import firebase from 'firebase';

const config = {
  apiKey: "AIzaSyBnqRaGwYZVHDFiFNOZHB1qmt7ohsKc7Aw",
  authDomain: "zoomer-481c7.firebaseapp.com",
  databaseURL: "https://zoomer-481c7.firebaseio.com",
  storageBucket: "zoomer-481c7.appspot.com"
};

firebase.initializeApp(config);

// var storageRef = firebase.storage().ref();
// var featuredCollection = storageRef.child("featured");

const db = firebase.database();
var ref = db.ref("backgrounds");


const uploadItem = (title, author, src) => {
  var uid = createUUID()
  console.log(uid);

  ref.child(uid).set({
    title: title,
    author: author,
    src: src
  });

}


function createUUID() {
  var dt = new Date().getTime();
  var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    var r = (dt + Math.random() * 16) % 16 | 0;
    dt = Math.floor(dt / 16);
    return (c == 'x' ? r : (r & 0x3 | 0x8)).toString(16);
  });
  return uuid;
}


export {
  ref,
  uploadItem
};