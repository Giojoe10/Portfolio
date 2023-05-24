import { message } from "antd";
import axios from "axios";
import React, { useState } from "react";
import { HideLoading, ShowLoading } from "../../redux/rootSlice";
import { useDispatch } from "react-redux";

function Login() {
    const [user, setUser] = useState({
        username: "",
        password: "",
    });

    const dispatch = useDispatch();
    const login = async () => {
        try {
            dispatch(ShowLoading());
            const response = await axios.post(
                "/auth/admin-login",
                user
            );
            dispatch(HideLoading());
            const {success, data} = response.data;
            if (success) {
                window.location.href = "/admin";
                message.success(response.data.message);
            } else {
                message.error(response.data.message);
            }
        } catch (error) {
            message.error(error.message);
            dispatch(HideLoading());
        }
    };

    return (
        <div className="flex justify-center items-center h-screen bg-primary">
            <div className="w-96 flex flex-col gap-5 p-5 shadow rounded-md bg-white">
                <h1 className="text-xl font-bold text-center">
                    Login de Administrador
                </h1>
                <input
                    type="text"
                    value={user.username}
                    onChange={(e) =>
                        setUser({ ...user, username: e.target.value })
                    }
                    placeholder="Usuario"
                />
                <input
                    type="password"
                    value={user.password}
                    onChange={(e) =>
                        setUser({ ...user, password: e.target.value })
                    }
                    placeholder="Senha"
                />
                <button
                    className="bg-tertiary text-white px-5 py-2 rounded-md"
                    onClick={login}
                >
                    Login
                </button>
            </div>
        </div>
    );
}

export default Login;
