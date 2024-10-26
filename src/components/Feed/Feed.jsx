import Avatar from '../Avatar';
import Comment from '../Comment';
import styles from './Feed.module.css';

export const Feed = () => {
  return (
    <article className={styles.feed}>
      <header>
        <div className={styles.author}>
          <Avatar
            hasBorder={false}
            src="https://github.com/PHziinn.png"
            alt=""
          />

          <div className={styles.authorInfo}>
            <strong>Wesley Santos</strong>
            <span>Web Developer</span>
          </div>
        </div>

        <time
          title="11 de Maio às 22:00h"
          datetime="2024-05-11 22:00:00">
          Publicado há 1h
        </time>
      </header>

      <div className={styles.content}>
        <p>Fala galeraa 👋 </p>
        <p>
          Acabei de subir mais um projeto no meu portfolio. É um projeto que fiz usando React. O
          nome do projeto é Developer Feed 🚀
        </p>
        <p>
          👉 <a href="#">jane.design/feed</a>
        </p>
        <p>
          <a href="#">#novoprojeto </a> <a href="#">#ws</a> <a href="#">#wesley_san</a>
        </p>
      </div>

      <form className={styles.comentForm}>
        <strong>Deixe seu feedback</strong>

        <textarea placeholder="Deixe um comentário" />

        <footer>
          <button type="submit">Publicar</button>
        </footer>
      </form>

      <div className={styles.commentList}>
        <Comment />
        <Comment />
        <Comment />
      </div>
    </article>
  );
};
