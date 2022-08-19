<template>
<div class="container text-center">
    <h1>Sign Up</h1>

    <div class="container all_form">
        <form ref="anyName" @submit.prevent="login" method="post">

            <div class="row">

                <div class="col-12 mb-3 text-start">

                    <label for="exampleInputEmail1" required class="form-label">Email address</label>

                    <input @blur="$v.posts.email.$touch()" type="email" placeholder="Enter Your Email" name="email" v-model.trim="$v.posts.email.$model" :class="{'is-invalid':$v.posts.email.$error , 'is-valid':!$v.posts.email.$invalid}" class="form-control input" id="exampleInputEmail1" aria-describedby="emailHelp" />

                    <div class="valid-feedback">Your Email is valid</div>

                    <div class="invalid-feedback">
                        <span v-if="!$v.posts.email.required">Email is required. </span>

                        <span v-if="!$v.posts.email.email">Incorrect email address. </span>

                    </div>

                </div>

                <div class="col-12 mb-3 text-start">
                    <label for="exampleInputPassword1" required class="form-label">Password</label>
                    <input @blur="$v.posts.password.$touch()" type="password" placeholder="Enter Your Password" name="password" v-model.trim="$v.posts.password.$model" :class="{'is-invalid':$v.posts.password.$error , 'is-valid':!$v.posts.password.$invalid}" class="form-control input" id="exampleInputPassword1 password" />

                    <div class="valid-feedback">Your Password is valid</div>

                    <div class="invalid-feedback">
                        <span v-if="!$v.posts.password.required">Password is required</span>

                        <span v-if="!$v.posts.password.minLength">Password should be more than 6.
                        </span>

                        <span v-if="!$v.posts.password.maxLength">Password should be less than
                            15. </span>

                        <span v-if="!$v.posts.password.checkpassword">Password should Atleast Consist one Capital, 1 Lower, 1 number and 1 Special character. </span>
                    </div>

                </div>

            </div>

            <button type="submit" @click="login" :disabled="$v.$invalid" class="btn btn-dark">Submit</button>

            <p class="mt-4">
                Don't have an account ?<router-link style="text-decoration:none;" to="/signup"> Create an account</router-link>
            </p>

        </form>
    </div>
</div>
</template>

<script>
import {
    required,
    email,
    minLength,
    maxLength,
    helpers,
} from "vuelidate/lib/validators";

import axios from "axios";
import swal from 'sweetalert';

const checkpassword = helpers.regex("checkpassword", /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*?[!?@#$%^&*-]).*$/)

export default {
    name: "Login",
    data() {
        return {

            posts: {
                email: "",
                password: "",
            }
        };
    },

    validations() {
        return {
            posts: {
                email: {
                    required,
                    email,
                },
                password: {
                    required,
                    minLength: minLength(6),
                    maxLength: maxLength(15),
                    checkpassword
                },
            }
        }
    },

    methods: {
        async login() {
            console.log("Pressed login btn");
            let result = await axios.get(
                `http://localhost:3001/user?email=${this.posts.email}&password=${this.posts.password}`
            );
            console.log(result);
            if (!result.data == "" && result.status == 200 && result.data.length > 0) {
                console.log("SignUp Done");
                localStorage.setItem("login-info", JSON.stringify(result.data));
                this.$router.push({
                    name: "UserData"
                });
            } else {
                swal({
                    title: "Error ! Invalid Credenticals !",
                    text: "Incorrect Email or Password",
                    icon: "error",
                    button: "Ok",
                });
            }
        },
    },

}
</script>

<style scoped>
.container {
    margin-bottom: 10px;
}

.all_form {
    width: 50%;
}

.form-label {
    color: white !important;
}

@media only screen and (max-width: 767px) {
    .all_form {
        width: 60% !important;
    }
}

@media only screen and (max-width: 576px) {
    .all_form {
        width: 80% !important;
    }
}
</style>
