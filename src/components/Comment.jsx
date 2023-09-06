import {Avatar} from './Avatar'

import { ThumbsDown, Trash } from 'phosphor-react'
import styles from './Comment.module.css'

export function Comment(){
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
                    <button title="Deletar comentário">
                        <Trash  size={24}/>
                    </button>
                </header>

                <p>Muito bom Devon, parabéns!! 👏👏 </p>
            </div>

            <footer>
                <button>
                    <ThumbsDown />
                    Aplaudir <span>20</span>
                </button>
            </footer>
        </div>
       </div>
       
    )
}