import axios from "axios"

import { actionTypes } from "./actionType"
import { BASE_URL } from "../constants/API"


export const fetchProfile = (auth) => {
    return (dispatch) => {
        return axios(`${BASE_URL}auth/profile`, {
			headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${auth}`
            }
		})
        .then((res) => {
            if (res.status == 200){
                console.log("response status profile: ", res)
                dispatch({
                    type: actionTypes.FETCH_PROFILE,
                    payload: res.data,
                })
                return Promise.resolve()
            }
            
        })
        .catch(er => {
            console.log("err", er)
            alert(er.message)
        })
    }
}