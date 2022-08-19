<template>
<div class="container text-center">
    <h1>Sign Up</h1>

    <div class="container all_form">
        <form ref="anyName" @submit.prevent="postData(posts.email)" method="post">
            <div class="row">

                <div class="col-6">

                    <div class="mb-3 text-start">
                        <label for="exampleInputFirstName" class="form-label">First Name</label>

                        <input type="text" @blur="$v.posts.firstname.$touch()" placeholder="Enter Your Firstname" name="firstname" v-model.trim="$v.posts.firstname.$model" :class="{'is-invalid':$v.posts.firstname.$error , 'is-valid':!$v.posts.firstname.$invalid}" class="form-control input" id="exampleInputFirstName" />

                        <div class="valid-feedback">Your first name is valid. </div>

                        <div class="invalid-feedback">
                            <span v-if="!$v.posts.firstname.required">First name is required. </span><br />
                        </div>
                    </div>

                </div>

                <div class="col-6">
                    <div class="mb-3 text-start">

                        <label for="exampleInputLastName" required class="form-label">Last Name</label>

                        <input @blur="$v.posts.lastname.$touch()" type="text" placeholder="Enter Your Lastname" name="lastname" v-model.trim="posts.lastname" class="form-control input" :class="{'is-invalid':$v.posts.lastname.$error , 'is-valid':!$v.posts.lastname.$invalid}" id="exampleInputLastName" aria-describedby="emailHelp" />

                        <div class="valid-feedback">Your Last name is valid. </div>

                        <div class="invalid-feedback">
                            <span v-if="!$v.posts.lastname.required">Last name is required. </span><br />
                            <br />
                        </div>

                    </div>

                </div>
            </div>

            <div class="row">
                <div class="col-8">
                    <div class="mb-3 text-start">

                        <label for="exampleInputPhoneNumber" class="form-label">Phone Number</label>

                        <input @blur="$v.posts.phone.$touch()" type="text" placeholder="Enter Your Phone Number" name="phone" v-model.trim="$v.posts.phone.$model" class="form-control input" :class="{'is-invalid':$v.posts.phone.$error , 'is-valid':!$v.posts.phone.$invalid}" id="exampleInputPhoneNumber" aria-describedby="emailHelp" />

                        <div class="valid-feedback">Your Phone Number is valid. </div>

                        <div class="invalid-feedback">
                            <span v-if="!$v.posts.phone.required">Phone Number is required. </span>

                            <span v-if="!$v.posts.phone.numeric">Phone Number Should be Numeric. </span>

                            <span v-if="!$v.posts.phone.checknumber">Phone Number is Not Valid. </span>
                        </div>

                    </div>
                </div>

                <div class="col-4">
                    <div class="mb-3 text-start">
                        <label for="exampleInputAge" required class="form-label">Age</label>
                        <input @blur="$v.posts.age.$touch()" type="text" placeholder="Enter Your Age" name="age" v-model.trim="$v.posts.age.$model" class="form-control input" id="exampleInputAge" :class="{'is-invalid':$v.posts.age.$error , 'is-valid':!$v.posts.age.$invalid}" min="0" maxlength="10" />

                        <div class="valid-feedback">Your Age is valid.</div>

                        <div class="invalid-feedback">

                            <span v-if="!$v.posts.age.required">Age is required. </span>

                            <span v-if="!$v.posts.age.numeric">Age Should be Numeric. </span>

                            <span v-if="!$v.posts.age.between">Enter Correct Age. </span>
                        </div>

                    </div>
                </div>

            </div>

            <div class="mb-3 text-start">

                <label for="exampleInputEmail1" required class="form-label">Email address</label>

                <input @blur="$v.posts.email.$touch()" type="email" placeholder="Enter Your Email" name="email" v-model.trim="$v.posts.email.$model" :class="{'is-invalid':$v.posts.email.$error , 'is-valid':!$v.posts.email.$invalid}" class="form-control input" id="exampleInputEmail1" aria-describedby="emailHelp" />

                <div class="valid-feedback">Your Email is valid</div>

                <div class="invalid-feedback">
                    <span v-if="!$v.posts.email.required">Email is required. </span>

                    <span v-if="!$v.posts.email.email">Incorrect email address. </span>

                </div>

            </div>

            <div class="mb-3 text-start">
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

                <!-- <div class="form-group form-check">
                    <input type="checkbox" id="showpassword" class="form-check-input" @click="toggleShowPassword" v-model="showpassword">
                    <label for="showpassword" class="form-check-label">Show Password</label>
                </div> -->

            </div>

            <div class="mb-3 text-start">
                <label for="exampleInputPassword2" required class="form-label">Confirm Password</label>
                <input @blur="$v.posts.cpassword.$touch()" type="password" placeholder="Confirm Password" name="password" v-model.trim="$v.posts.cpassword.$model" :class="{'is-invalid':$v.posts.cpassword.$error , 'is-valid':(posts.password !='')? !$v.posts.cpassword.$invalid : ''}" class="form-control input" id="exampleInputPassword2" />

                <div class="valid-feedback">Your Confirm Password is valid. </div>

                <div class="invalid-feedback">
                    <span v-if="!$v.posts.cpassword.required">Confirm Password is Required. </span>
                    <span v-if="!$v.posts.cpassword.sameAs">Confirm Password should be same as Password. </span>
                </div>

            </div>

            <button type="submit" class="btn btn-dark">
                <!-- <button type="submit" :disabled="$v.$invalid" class="btn btn-dark"> -->
                Submit
            </button>

            <p class="mt-4">
                Already have registered ?<router-link style="text-decoration:none;" to="/login"> Go to Login</router-link>
            </p>

        </form>
    </div>
</div>
</template>

<script src="https://unpkg.com/sweetalert/dist/sweetalert.min.js"></script>
<script>
// import FormValidation from "@vuelidate/core";
import {
    required,
    email,
    minLength,
    sameAs,
    maxLength,
    between,
    helpers,
    numeric
} from "vuelidate/lib/validators";
import axios from "axios";
import swal from 'sweetalert';


// const checknumber = helpers.regex(/^[789]\d{9}$/);
const checknumber = helpers.regex("checknumber", /^[7-9]{1}[0-9]{9}$/);
// const checkemail = helpers.regex(/^\w+([\.-]?\w+)*@\w+([-]?\w+)*\.\w{2,3}([\.]?\w{2,3})*$/);
const checkpassword = helpers.regex("checkpassword", /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*?[!?@#$%^&*-]).*$/)

export default {
    name: "FormData",
    data() {
        return {
            // $v: useValidate(),

            posts: {
                firstname: "",
                lastname: "",
                phone: "",
                age: "",
                email: "",
                password: "",
                cpassword: "",
                // showpassword:false,
                // submitStatus: null

            }
        };
    },

    validations() {
        return {
            posts: {
                firstname: {
                    required,
                },
                lastname: {
                    required,
                },
                phone: {
                    required,
                    numeric,
                    checknumber

                },
                age: {
                    required,
                    numeric,
                    between: between(1, 100),

                },
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
                cpassword: {
                    required,
                    sameAs: sameAs("password"),
                }
            }
        }
    },

    methods: {

        // postData (){
        //     if(this.$v.$invalid){
        //         this.submitStatus = "Fail"
        //     }
        //     else{
        //         this.submitStatus = "Success"
        //     }
        // }

        // toggleShowPassword(){
        //     var show = document.getElementById('password')
        //     if(this.showpassword == false){
        //         this.showpassword = true
        //         show.type = "text"
        //     }else{
        //         this.showpassword = false
        //         show.type = "password"
        //     }

        // }

        async postData(value) {
            console.log("val", value);
            if (value === "") return true;
            const response = await axios.get("http://localhost:3001/user");
            const registrations = response.data;
            console.log("regi", registrations);

            const alreadyDoneRegistration = registrations.find(registrations => registrations.email === value)
            console.log("alred", alreadyDoneRegistration);
            if (alreadyDoneRegistration) {
                // return false;
                // alert("Email already exist")
                swal({
                    title: "Error Message!",
                    text: "This Email is Already Exist.",
                    icon: "error",
                    button: "Ok",
                });
            }
            // return true;
            else {
                console.log("Submitted")
                let result = await axios.post("http://localhost:3001/user", this.posts);
                console.log("result", result);
                console.log("result", result.data.email);

                this.$refs.anyName.reset();
                // this.$router.push({
                //   name: "UserData",
                // });
                if (result.status == 201) {
                    alert("SignUp Done");
                    localStorage.setItem("user-info", JSON.stringify(result.data));
                    this.$router.push({
                        name: "Login",
                    });
                }
            }
        },

    },
};
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
