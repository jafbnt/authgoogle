"use client";

import { Button } from "@/components/ui/button";

import { signIn, useSession, signOut } from "next-auth/react";

export default function AuthenticationPage() {
  const { data: session, status } = useSession();
  return (
    <div className="flex h-full w-full justify-center items-center">
      {status === "loading" ? <>carregando...</> : null}

      {session ? (
        <div className=" shadow-md min-w-max items-center justify-between gap-4 flex p-9 rounded-md border-[1px]">
          {session.user?.image && (
            <img className=" rounded-full size-12" src={session.user?.image} alt={session.user.name ?? ""} />
          )}
          <div className="flex flex-col ">
            <span className="font-bold text-lg">{session.user?.name}</span>
            <span className="font-semibold text-gray-600 text-sm">{session.user?.email}</span>
          </div>
          <Button variant="outline" className="bg-red-400 text-white hover:text-white hover:font-semibold hover:bg-red-500 hover:scale-110 transition-all duration-200 ease-in" type="button" onClick={() => signOut()}>
            Sair
          </Button>
        </div>
      ) : (
        <Button variant="outline" type="button" onClick={() => signIn()}>
          google
        </Button>
      )}
    </div>
  );
}
