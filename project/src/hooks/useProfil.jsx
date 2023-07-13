import { useState, useEffect } from "react"
import axios from "axios"


export const useProfil = (name) => {
    const [profil, setProfil] = useState({});
    console.log("recoit name en props", name)

    useEffect(() => {
        async function fetchData() {
            await axios.get(`https://api.github.com/users/${name}`)
                .then((res) => {
                    console.log(res.data)
                    setProfil(res.data)
                })
        }
        fetchData()
    }, [name])

    return { profil }
}
