import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import styles from './Comment.module.css';
import Avatar from '../Avatar';

export const Comment = () => {
  return (
    <div className={styles.comment}>
      <Avatar
        hasBorder={false}
        src="https://github.com/PHziinn.png"
        alt=""
      />
      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Wesley Santos</strong>
              <time
                title="11 de Maio às 22:00h"
                datetime="2024-05-11 22:00:00">
                Cerca de 1h atrás
              </time>
            </div>
            <button title="Deletar comentário">
              <DeleteOutlineIcon />
            </button>
          </header>
          <p>Muito bom Devon, parabéns!! 👏👏</p>
        </div>
        <footer>
          <button>
            <ThumbUpIcon sx={{ fontSize: 20 }} />
            Aplaudir <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  );
};
