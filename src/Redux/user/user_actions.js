// import React from 'react'
import axios from "axios"
import { LOGIN_USER_ERROR, LOGIN_USER_LOADING, LOGIN_USER_SUCCESS } from "./user_type"
import { BASE_URL } from "../../constants/config"

export const getUser = (obj) => async (dispatch) => {

    dispatch({ type: LOGIN_USER_LOADING })
    try {
        let data = await axios(BASE_URL+"/user/login", {
            method: "post",
            data: obj
        })
        let { message, token, status } = data.data
        console.log(message)
        if (status == 1) {
            dispatch({ type: LOGIN_USER_SUCCESS, payload: token })
        } else {
            alert("user doesn't exist")
            dispatch({ type: LOGIN_USER_ERROR })
        }
    } catch (error) {
        dispatch({ type: LOGIN_USER_ERROR })
    }

}
