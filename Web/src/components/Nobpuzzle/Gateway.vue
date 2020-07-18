<template>
    <div class="register">
        <div class="register__gateway_bg">
            
            <div class="register__gateway">
                
                <p class='register__text'>Email:</p>
                <input class="register__input" v-model="email"/>
                
                <p class='register__text'>Password:</p>
                <input class="register__input" v-model="password" type="password" />
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
            email: '',
            password: '',
            buttonText: 'Register'
        }
    },

    methods: {

        buttonPressed(){
            if (this.buttonText === "Register"){
                this.register()
            }
            else{
                this.login()
            }
        },

        checkCoverSide(){
            if(this.$store.state.coverLeft){
                this.buttonText = "Register"
            }
            else{
                this.buttonText = "Login"
            }
        },

        register(){
            
            firebase.auth().createUserWithEmailAndPassword(this.email, this.password).
                then(user => {
                    console.log("user was created" + user);
                }, err => {
                    alert(err.message)
                });
        },

        login(){
            firebase.auth().signInWithEmailAndPassword(this.email, this.password).
                then(user => {
                    console.log("You Passed Mother fucker!" + user);
                }, err => {
                    alert(err.message)
                });
        }
    },

    mounted(){
        setInterval(this.checkCoverSide, 100)
    }
};
</script>

<style lang="scss">

.register {
    &__gateway_bg {
        margin: auto;
        margin-top: 300px;
        width: 500px;
        height: 300px;
        top: 300px;
        left: 403px;
        z-index: -1;
        box-shadow: 2px 5px 10px gray;
        border: 0px solid var(--dark);
        border-radius: 7px;
        background: var(--foreground);
        display: flex;
        
    }

    &__gateway{
        margin: auto;
        margin-top: 5%;
    }

    &__text{
        font-family: 'Sora', sans-serif;
        font-weight: bold;
        font-size: 20px;
        text-align: left;
    }

    &__input{
        transition: .15s;
        border: none;
        background-color: var(--foreground);
        border-bottom: solid 1px var(--dark);
        font-family: 'Sora', sans-serif;
        font-weight: bold;
        width: 200px;
        height: 70;
        &:focus {
            outline: none;
            border-bottom: solid 3px var(--dark);
        }
    }

    &__button{
        transition: .15s;
        margin-top: 20%;
        font-family: 'Sora', sans-serif;
        font-weight: bold;
        font-size: 17px;
        letter-spacing: 2px;
        border: none;
        border-radius: 5px;
        padding: 10px;
        background-color: var(--buttons);
        outline: none;
        &:active {
            
            transform: scale(1.1);
            background-color: #9cc2e2;
            }

    }
}
</style>
