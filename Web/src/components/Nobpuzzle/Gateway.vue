<template>
    <div class="register">
        <div class="register__gateway_bg">
            
            <div class="register__gateway">
                
                <p class='register__text'>email</p>
                <input class="register__input" v-model="email"/>
                
                <p class='register__text'>password</p>
                <input class="register__input" v-model="password">
                <div>
                    <button @click="register" class='register__button'>{{buttonText}}</button>
                </div>
            </div>

        </div>

    </div>
</template>

<script>
import firebase from 'firebase'
export default {
    data: () => {
        return{
            email : '',
            password : '',
            buttonText : 'Register'
        }
    },

    methods: {

        buttonPressed(){
            console.log('pressed' + this.email + " " + this.password)
        },

        register(){
            
            firebase.auth().createUserWithEmailAndPassword(this.email, this.password).
                then(user => {
                    console.log("user was created" + user.email);
                }, err => {
                    alert(err.message)
                });
        },

        login(){
            firebase.auth().signInWithEmailAndPassword(this.email, this.password).
                then(user => {
                    console.log("user was created" + user.email);
                }, err => {
                    alert(err.message)
                });
        }
    }
};
</script>

<style lang="scss">
.register {
    &__gateway_bg {
        position: absolute;
        width: 500px;
        height: 300px;
        top: 300px;
        left: 403px;
        z-index: -1;
        border: 1px solid #707070;
        border-radius: 7px;
        background: #f9f9f8;
        display: flex;
        
    }

    &__gateway{
        margin: auto;
        margin-top: 5%;
    }

    &__text{
        font-family: 'Segoe UI';
        font-size: 17px;
    }

    &__input{
        border-radius: 7px;
    }

    &__button{

        margin-top: 20%;
        font-family: 'Segoe UI';
        font-size: 17px;
        border-color: transparent;
        border-width: 0px;
    }
}
</style>
