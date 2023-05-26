'use client';
import { TextField } from "../component/Textfield"
import { useState } from "react";
import { Title } from "@/component/Title";
// import { useProfil } from "@/hooks/useProfil";
import { Card } from "@/component/Card/Card";

export default function Home() {

  let [name, setName] = useState('');
  // const { profil } = useProfil();
  // console.log(profil)


  const handleEvent = (e) => {
    e.preventDefault();
    setName(e.target.value)
  }

  return (
    <main>
      <Title> Find To Profil Github</Title>
      <Card className="bg-slate-400 border rounded">

        <TextField placeholder="Search Profil" onChange={handleEvent} />
      </Card>
    </main>
  )
}
