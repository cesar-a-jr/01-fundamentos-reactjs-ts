import { format, formatDistanceToNow } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';
import { FormEvent, InvalidEvent, useState, ChangeEvent } from 'react'


import { Avatar } from './Avatar'
import { Comment } from './Comment'
import styles from './Post.module.css'

interface Content{
  typ: 'paragraph'|'link';
  content: string 
}

interface Author{
  AvatarUrl: string;
  name: string;
  role:string;
  };

interface PostProps{
  author: Author;
  publishedAt: Date;
  content:Content[];
}

export function Post({ author, publishedAt, content }: PostProps) {
  const [comments, setComments] = useState([  
    'Post muito bacana!',
    "Muito bom Devon, parabéns!! 👏👏",
  ])

  const [newCommentText, setNewCommentText] = useState('')

  const publishedDateFormated = format(publishedAt, "dd 'de' LLLL 'às' HH:mm'h'", { locale: ptBR })

  const publishedDAteRelativeToNow = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: true,
  })

  function handleCreateNewComment(event: FormEvent){
    event.preventDefault()
    setComments([...comments, newCommentText]);
    setNewCommentText('');
  }

  function handleNewCommentChange(event: ChangeEvent<HTMLTextAreaElement>){
    event.target.setCustomValidity('')
    setNewCommentText(event.target.value);
  }

  function handleNewCommentInvalid(event: InvalidEvent<HTMLTextAreaElement>){
    event.target.setCustomValidity('Este campo é obrigatório!')
  }

  function deleteComment(commentToDelete: string){
    const commentsWithoutDeletedOne = comments.filter(comment => {
      return comment !== commentToDelete;
    })

    setComments(commentsWithoutDeletedOne);
  }

  const isNewCommentEmpty = newCommentText.length === 0

  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src={author.AvatarUrl} />
          <div className={styles.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>

        <time title={publishedDateFormated} dateTime={publishedAt.toISOString()}>{publishedDAteRelativeToNow}</time>
      </header>

      <div className={styles.content}>
        {content.map(line => {
          if (line.typ == 'paragraph') {
            return <p key={line.content}>{line.content}</p>;
          } else if (line.typ == 'link') {
            return <p key={line.content}><a href="#">{line.content}</a></p>;
          }

        })}
      </div>

      <form onSubmit={handleCreateNewComment} className={styles.comentForm}>
        <strong>Deixe seu feedback</strong>
        <textarea
          name='comment'
          placeholder='Deixe um comentário'
          value={newCommentText}
          onChange={handleNewCommentChange}
          onInvalid={handleNewCommentInvalid}
          required
        />

        <footer>
          <button type='submit' disabled={isNewCommentEmpty}>Publicar</button>
        </footer>
      </form>

      <div className={styles.comentList}>
        {comments.map(comment => {
          return (
            <Comment 
              key={comment} 
              content={comment} 
              deleteComment={deleteComment}
            />
          )
        })}
      </div>
    </article>
  )
}