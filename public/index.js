firebase.initializeApp({
  apiKey: 'AIzaSyCWwDzcyP2fl1i59tSaMu51pTi_6VemcVE',
  authDomain: 'bridalmeetingguide.firebaseapp.com',
  projectId: 'bridalmeetingguide',
  storageBucket: 'bridalmeetingguide.appspot.com',
  messagingSenderId: '249801578081',
  appId: '1:249801578081:web:db42ac7f09ba6f9e9f7c20',
  measurementId: 'G-61JQMQ7XNM',
});

function signout() {
  firebase
    .auth()
    .signOut()
    .then(() => {
      console.log('Signed out');
    });
}

firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    document.getElementById('sign-in-status').innerText = '';
    document.getElementById('sign-out').style.display = 'block';
  } else {
    const url = location.protocol + '//' + location.host + '/login.html';
    location.href = url;
  }
});
