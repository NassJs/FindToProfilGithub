import { useEffect, useState } from "react"
import axios from "axios"


export const useProfil = (name) => {
    const [profil, setProfil] = useState({});

    useEffect(() => {
        if (name)
            axios.get(`https://api.github.com/users/${name}`)
                .then((res) => {
                    console.log(res.data)
                    setProfil(res.data)
                })
    }, [])

    return { profil }
}
