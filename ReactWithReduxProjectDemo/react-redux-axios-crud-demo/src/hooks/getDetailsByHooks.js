import { GetApiDetailsById } from "../api/axiosRequest";
import { useEffect,useState } from "react";

const GetDetailsByHooks = (props) => {

    const [detailById, setDetailById] = useState({});

    const GetApiDetailsByHooks = (requestId) => {
            return GetApiDetailsById(requestId).then((res) => {
                setDetailById(res);
            });
    };

    useEffect(() => {
        GetApiDetailsByHooks(props);
    }, [])

    return [detailById];
}

export default GetDetailsByHooks;