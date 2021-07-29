import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'


export const getStaticProps = async ()=>{
  const response = await fetch("https://api.tvmaze.com/shows?page=1");
  const data = await response.json()
  return {props:{data}}
}

export default function Home({data}) {
  return (
    <div className={styles.container}>
        <h1>Welcome to the first application of Next!</h1>
        <h1>Popular TV Shows!</h1>
        <ul>
          {data.map(elem=>{
            return <li><Link href={`shows/${elem.id}`}>{elem.name}</Link></li>
          })}
        </ul>
    </div>
  )
}
