'use client';
import { TextField } from "../component/Textfield"
import { Title } from "@/component/Title";
import { useProfil } from "@/hooks/useProfil";
import { Card } from "@/component/Card/Card";
// import { Picture } from "@/component/Picture";
import Image from 'next/image';
export default function Home() {

  const { profil } = useProfil("NassJs");
  console.log("avatar", profil)
  const handleEvent = (e) => {
    e.preventDefault();


  }

  if (profil)
    return (
      <main>
        <Title> Find To Profil Github</Title>
        <Card className="bg-slate-400 border rounded">

          <p> Photo profil : </p>
          {/* <Picture src={profil.avatar_url} height="500" width="500" /> */}
          <Image src={profil.avatar_url} height={100} width={100} alt="image du profil" />
          <TextField placeholder="Search Profil" onChange={handleEvent} />
          <div> followers : {profil.followers}</div>
          <div> following : {profil.following}</div>
        </Card>
      </main>
    )
} 
