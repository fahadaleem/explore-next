import Head from "next/head";
import { UserButton, useUser } from "@clerk/clerk-react";

export default function Home({ data }) {
  const {firstName} = useUser();
  return (
    <>
      <header>
        <UserButton />
      </header>
      <h1>Hello, {firstName}</h1>
    </>
  );
}
