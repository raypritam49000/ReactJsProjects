import { GET_DETAILS, POST_DETAILS, UPDATE_DETAILS ,DELETE_DETAILS} from "../type";
import { UpdateApiDetails, DeleteApiDetails, PostApiDetails, GetApiDetails } from "../../api/axiosRequest";

const GetApiAction = () => {

    return function (dispatch) {
        return GetApiDetails().then((res) => {
            dispatch({
                type: GET_DETAILS,
                payload: res.data
            })
        })
    }

}

const PostApiAction = (data) => {
    return function (dispatch) {

        dispatch({
            type: POST_DETAILS,
            payload: false
        })

        return PostApiDetails(data).then((res) => {
            dispatch({
                type: POST_DETAILS,
                payload: true
            })
        })
    }

}

const UpdateApiAction = (data, id) => {
    return function (dispatch) {

        dispatch({
            type: UPDATE_DETAILS,
            payload: false
        })

        return UpdateApiDetails(data, id).then((res) => {

            dispatch({
                type: UPDATE_DETAILS,
                payload: true
            })
        })
    }

}

const DeleteApiAction = (id) => {
    return function (dispatch) {

        dispatch({
            type: DELETE_DETAILS,
            payload: false
        })

        return DeleteApiDetails(id).then((res) => {

            dispatch({
                type: DELETE_DETAILS,
                payload: true
            })
        })
    }

}


export { GetApiAction, PostApiAction, UpdateApiAction, DeleteApiAction };