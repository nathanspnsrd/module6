import React, { useState, useContext } from "react"

import AuthForm from "./AuthForm.js"

import { UserContext } from "../context/userContext.js"

const initInputs = { username: "", password: "" }

export default function Auth() {
    const context = useContext(UserContext)

    const [ inputs, setInputs ] = useState(initInputs)
    const [ toggle, setToggle ] = useState(false)

    function handleChange(e) {
        const {name, value} = e.target
        setInputs(prevInputs => ({
            ...prevInputs,
            [name]: value
        }))
    }

    function handleSignup(e) {
        e.preventDefault()
        context.signup(inputs)
    }

    function handleLogin(e) {
        e.preventDefault()
        context.login(inputs)
    }

    return (
        <div className="auth-container">
            <h1>RTV</h1>
            {
                !toggle
                ?
                <>
                    <AuthForm 
                        handleChange={handleChange}
                        handleSubmit={handleSignup}
                        inputs={inputs}
                        btnText="Sign up"

                    />
                    <p onClick={() => setToggle(prev => !prev)}>Already a member?</p>
                </>
                :
                <>
                    <AuthForm 
                        handleChange={handleChange}
                        handleSubmit={handleLogin}
                        inputs={inputs}
                        btnText="Login"

                    />
                    <p onClick={() => setToggle(prev => !prev)}>Not a member?</p>
                </>
            }
        </div>
    )
}