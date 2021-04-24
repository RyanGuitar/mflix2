import { connectToDatabase } from "../util/mongodb";
import styles from '../styles/movies.module.css';
import Image from 'next/image';

export default function Top({ movies }) {
  
  return (
    <div className={styles.bg}>
      <div className={styles.heading}>Movies on M-Flix</div>
      <ul>
        {movies.map((movie) => (
          <li key={movie._id} className={styles.box}>
            <h2>{movie.name}</h2>
            <h3>{movie.year}</h3>
            <p>Director : {movie.director}</p>
            <p>{movie.cast.join(' ')}</p>
            <Image 
            alt="mflix main"
            src={"/images/" + movie.image}
            layout="responsive"
            width={569}
            height={853}
            quality={100}
          />
          </li>
        ))}
      </ul>
    </div>
  );
}

export async function getStaticProps() {
  const { db } = await connectToDatabase();

  const movies = await db
    .collection("films")
    .find({})
    .sort({ metacritic: -1 })
    .limit(20)
    .toArray();

  return {
    props: {
      movies: JSON.parse(JSON.stringify(movies)),
    },
  };
}