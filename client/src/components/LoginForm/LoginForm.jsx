import React, { useState } from "react";

export default function LoginForm() {
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = e => {
        e.preventDefault();
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Nombre de usuario;
                <input type="text" value={userName} onChange={e => setUserName(e.target.value)} />
            </label>
            <br />
            <label>
                Contraseña:
                <input type="password" value={password} onChange={ e => setPassword(e.target.value)} />
            </label>
            <br />
            <button type="submit">Iniciar sesión</button>
            <br />
        </form>
    )
}