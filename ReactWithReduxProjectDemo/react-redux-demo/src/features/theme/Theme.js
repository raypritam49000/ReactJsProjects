import { useState } from "react";
import { useDispatch } from "react-redux";
import {changeThemeColor} from "./themeSlice"

const Theme = () => {
    const [color, setColor] = useState("white")
    const dispatch = useDispatch();

    return (
        <div>
            <input className="textbox" type="text" onChange={(e)=> setColor(e.target.value)} />
            <button className="button"
                onClick={() => dispatch(changeThemeColor(color,String))}> Change Text Color </button>
        </div>
    )
}

export default Theme;
