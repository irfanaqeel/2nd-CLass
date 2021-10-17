
const facebook_login = () => {
    var provider = new firebase.auth.FacebookAuthProvider();
    firebase.auth().signInWithPopup(provider)
        .then(function (result) {
            var user = result.user;
            window.location = "home.html"
            console.log("user===>", user.displayName)
        }).catch(function (error) {
            console.log(error.message)
        });
}


const signout = () => {
    firebase.auth().signOut()
        .then(() => {
            window.location = "login.html"
        })
        .catch(() => {

        })
}