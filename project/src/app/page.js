'use client';
import { TextField } from "../component/Textfield"
import { Title } from "@/component/Title";
import { useProfil } from "@/hooks/useProfil";
export default function Home() {

  const { profil } = useProfil();

  const handleEvent = (e) => {
    e.preventDefault();
    console.log(e.target.value)
  }

  return (
    <main>
      <Title> Find To Profil Github</Title>
      <TextField placeholder="Search Profil" onChange={handleEvent} />
    </main>
  )
}
