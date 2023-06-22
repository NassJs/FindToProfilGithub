'use client';

import { useProfil } from "@/hooks/useProfil";
import { Card, CardBody, CardHeader } from "@/component/Card/Card";
import Image from 'next/image';

export default function MyProfil() {

    const { profil } = useProfil("NassJs");
    console.log("avatar", profil)

    if (profil)
        return (
            <main>
                <Card className="bg-slate-400 border rounded">
                    <CardHeader>
                        <span> {profil.login}</span>
                        <Image src={profil.avatar_url} height={100} width={100} alt="image du profil" />
                    </CardHeader>
                    <CardBody>
                        <div> followers : {profil.followers}</div>
                        <div> following : {profil.following}</div>
                        <div> repositoris punlic : {profil.public_repos}</div>
                    </CardBody>
                    <div> locality : {profil.company}</div>
                </Card>
            </main>
        )
} 