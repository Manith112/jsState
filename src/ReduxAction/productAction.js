
import { BASE_URL } from "../constants/API"
import { actionTypes } from "./actionType"


export const fetchProducts = () => {
    return (dispatch) => {
        fetch(`${BASE_URL}products`)
        .then(res => res.json())
        .then(response => dispatch({
            type: actionTypes.FETCH_PRODUCTS,
            payload: response
        }))
    }
}