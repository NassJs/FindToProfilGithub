'use client';

import { useProfil } from "@/hooks/useProfil";
import { useRef, useState } from "react";
import { Card, CardBody, CardHeader } from "@/component/Card/Card";

export default function MyProfil() {

    const inputRef = useRef();
    const [inputValue, setInputValue] = useState("")
    const { profil } = useProfil(inputValue);

    const handleClickBtn = () => {
        setInputValue(inputRef.current.value)
    }


    const handleForm = (e) => {
        e.preventDefault();
    }


    return (
        <main>
            <form onSubmit={handleForm}>
                <input type="text"
                    ref={inputRef}
                    placeholder="find to profil"
                />
                <button onClick={() => handleClickBtn()}> Submit </button>
                <Card className="bg-slate-400 border rounded">
                    <CardHeader>
                        <span> user : {profil.login}</span>
                        <div> locality : {profil.company}</div>
                    </CardHeader>
                    <CardBody>
                        <div> followers : {profil.followers}</div>
                        <div> following : {profil.following}</div>
                        <div> repositoris punlic : {profil.public_repos}</div>
                    </CardBody>
                </Card>
            </form>
        </main>
    )


} 