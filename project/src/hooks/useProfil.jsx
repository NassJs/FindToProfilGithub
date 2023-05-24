import { useEffect, useState } from "react"
import axios from "axios"


export const useProfil = () => {
    const [profil, setProfil] = useState();
    useEffect(() => {
        axios.get(`https://api.github.com/users/NassJs`)
            .then((res) => {
                console.log(res.data)
            }, [])
    })
    return { profil }
}