import React from "react";
import Header from "../../components/Header";

function NotFound() {
    return (
        <div className="dark h-screen bg-primary">
            <Header />
            <div className="flex justify-center items-center h-3/4">
                <div className="px-40 sm:px-10 flex flex-col justify-center items-center gap-10">
                    <h1 className="text-white text-5xl">
                        Eita, não era pra você estar aqui!!
                    </h1>
                    <img src={require("../../resources/lost.gif")} alt="" />
                    <h1 className="text-red-500 text-xl">
                        Erro 404
                    </h1>
                </div>
            </div>
        </div>
    );
}

export default NotFound;
