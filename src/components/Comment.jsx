import {Avatar} from './Avatar'

import { ThumbsUp, Trash } from 'phosphor-react'
import styles from './Comment.module.css'
import { useState } from 'react'

export function Comment({content, onDeleteComment}){
    const [likeCount, setLikeCount] = useState(0)


    function handleDeleteComment(){
        onDeleteComment(content)
    }
    function handleLikeComment(){
        setLikeCount(likeCount + 1)
    }

    return (
       <div className={styles.comment}>
        <Avatar hasBorder={false} src="https://github.com/carlospio.png" />


        <div className={styles.commentBox}>
            <div className={styles.commentContent}>
                <header>
                    <div className={styles.authorAndTime}>
                        <strong>Carlos Pio</strong>
                        <time dateTime="2023-09-06 15:24:30" title="06 de setembro de 2023 às 15:24"> Cerca de 1h Atrás</time>
                    </div>
                    <button onClick={handleDeleteComment} title="Deletar comentário">
                        <Trash  size={24}/>
                    </button>
                </header>

                <p>{content} </p>
            </div>

            <footer>
                <button onClick={handleLikeComment}>
                    <ThumbsUp />
                    Aplaudir <span>{likeCount}</span>
                </button>
            </footer>
        </div>
       </div>
       
    )
}