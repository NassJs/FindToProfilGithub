'use client';
import { TextField } from "../component/Textfield"

export default function Home() {

  const handleEvent = (e) => {
    console.log(e.target.value)
  }
  return (
    <main>
      <TextField placeholder="Search Profil" onChange={handleEvent} />
    </main>
  )
}
