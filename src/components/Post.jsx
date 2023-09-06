import { Comment } from './Comment'
import { Avatar } from './Avatar'
import styles from './Post.module.css'


export function Post(props){
    return(
       <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar
                        src="https://github.com/carlospio.png" 
                    />
                    <div className={styles.authorInfo}>
                        <strong>Carlos Pio</strong>
                        <span>Web Developer</span>
                    </div>
                </div>

                <time dateTime="2023-09-06 15:24:30" title="06 de setembro de 2023 às 15:24">Publicado há 1h</time>    
            </header>

            <div className={styles.content}>
                <p>Fala galeraa 👋</p>
                <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>
                <p><a href="">jane.design/doctorcare</a></p>
                <p>
                    <a href="">#novoprojeto</a>{' '}
                    <a href="">#nlw</a>{' '}
                    <a href="">#rocketseat</a>{' '}
                </p>
            </div>

            <form className={styles.commentForm}>
                <strong>Deixe seu feedback</strong>

                <textarea 
                    placeholder="Deixe um comentário"
                />

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
    )
}