import React, { useState, useEffect } from 'react'

const Header = () => {
    const [login, setLogin] = useState("");

    const hydrateStateWithLocalStorage = () => {
        if (localStorage.hasOwnProperty("login")) {
            let value = localStorage.getItem("login");
            try {
                value = JSON.parse(value);
                setLogin(value);
            }
            catch (e) {
                setLogin("")
            }
        }
    }

    return (
        <div>
            <header style={{ marginTop: "20px" }}>
                {console.log("login", ""+login)}
            </header>
        </div>
    )
}

export default Header;