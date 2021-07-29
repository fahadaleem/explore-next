import React from "react";
import { useRouter } from "next/router";

export const getStaticPaths = async () => {
  const response = await fetch("https://api.tvmaze.com/shows?page=1");

  const data = await response.json();

//   const paths = data.map((elem) => {
//     return {
//       params: { elem: elem.id.toString() },
//     };
//   });

  const paths = data.map(elem => {
    return { params: {tvshow: elem.id.toString()}}

});

  return {
    paths,
    fallback: false,
  };
};


export const getStaticProps = async ({params})=>{
    const response = await fetch(`https://api.tvmaze.com/shows/${params.tvshow}`)
    const data = await response.json();

    return {
        props:{data}
    }
}

const TVShow = (data) => {
  const router = useRouter();
  const tvShow = router.query.tvshow;

  console.log(data)
  return <h1>TV Show! {data.data.name}</h1>;
};

export default TVShow;
