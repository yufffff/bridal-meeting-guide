firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    document.getElementById('sign-in-status').innerText = '';
    // document.getElementById('sign-out').style.display = 'block';
    const url = location.protocol + '//' + location.host;
    location.href = url;
  } else {
    document.getElementById('sign-in-status').innerText = 'ログインしてください';
    // document.getElementById('sign-out').style.display = 'none';
  }
});

var ui = new firebaseui.auth.AuthUI(firebase.auth());
console.log(typeof ui);
ui.start('#firebaseui-auth-container', {
  signInFlow: 'popup',
  signInSuccessUrl: './',
  signInOptions: [
    {
      provider: firebase.auth.EmailAuthProvider.PROVIDER_ID,
      requireDisplayName: false,
    },
  ],
});
