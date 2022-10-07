import { ThumbsUp, Trash } from 'phosphor-react'
import { useState } from 'react';
import { Avatar } from './Avatar'
import styles from './Comment.module.css'

interface CommentProps{
  content: string;
  deleteComment: (comment: string)=>void;
}

export function Comment({content, deleteComment}:CommentProps){

  const [likeCount, setLikeCount] = useState(0);

  function handleLikeComment (){
    setLikeCount(likeCount+1)
  }

  function handleDeleteComment(){
    deleteComment(content);
  }

  return(
    <div className={styles.Comment}>
      <Avatar hasBorder={false} src="https://github.com/afgprogrammer.png" alt=''/>

      <div className={styles.CommentBox}>
        <div className={styles.CommentContent}>
          <header>
            <div className={styles.AuthorAndTime}>
              <strong>Devon Lane (você)</strong>
              <time dateTime="2022-05-11 08:13:30">Cerca de 2h atrás</time>
            </div>

            <button onClick={handleDeleteComment} title='Deletar comentario'> 
            <Trash size={24}/>
            </button>

          </header>
          
          <p>{content}</p>
        </div>

        <footer>
          <button onClick={handleLikeComment}>
            <ThumbsUp/>
            Aplaudir <span>{likeCount}</span>
          </button>
        </footer>
      </div>
    </div>
  )
}