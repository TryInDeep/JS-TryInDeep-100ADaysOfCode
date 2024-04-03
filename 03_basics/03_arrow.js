const user = {
    username: "Tridip",
    price: 999,

    welcomeMassage: function() {
        console.log(   `${this.username}, welcome to website `);
        console.log(this);
    }
}

// user.welcomeMassage()
// user.username = "Aankhi"
// user.welcomeMassage()
// this key word means => current concept // constext means values

console.log(this);
// in website console iit will give some function but in enviroment it will be empty {}
// in browser  most global object window object **