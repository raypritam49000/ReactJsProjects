import axios from 'axios';

export async function AxiosRequest(url, method, headers, params) {
    return params ? axios({
        url: url,
        method: method,
        headers: headers,
        data: params,
        timeout: 1000
    }) : axios({
        url: url,
        method: method,
        headers: headers,
        data: {},
        timeout: 1000
    });

}

const GetApiDetails = () => {
    const headers = {
        "Content-type": "application/json; charset=UTF-8"
    };
    return AxiosRequest("http://localhost:3000/details", "GET", headers, {});
};


const PostApiDetails = (data) => {
    const headers = {
        "Content-type": "application/json; charset=UTF-8"
    };
    return AxiosRequest("http://localhost:3000/details", "POST", headers, data);
};

const GetApiDetailsById = (id) => {
    console.log("GetApiDetailsById ====>>>>" + id);
    const headers = {
        "Content-type": "application/json; charset=UTF-8"
    };
    return AxiosRequest(`http://localhost:3000/details/${id}`, "GET", headers, {});
};


const UpdateApiDetails = (data, id) => {
    const headers = {
        "Content-type": "application/json; charset=UTF-8"
    };
    return AxiosRequest(`http://localhost:3000/details/${id}`, "PUT", headers, data);
};

const DeleteApiDetails = (id) => {
    const headers = {
        "Content-type": "application/json; charset=UTF-8"
    };
    return AxiosRequest(`http://localhost:3000/details/${id}`, "Delete", headers, {});
};

export { GetApiDetails, PostApiDetails, GetApiDetailsById, UpdateApiDetails, DeleteApiDetails };

