import image from '../../images/web-design-png.png'
import css from './Home.module.css'
import { NavLink } from 'react-router-dom';
export default function Home(){
    return (
            <div className={css.homeContentContainer}>
                <div className={css.homeContainer}>
                <div className={css.homeTextContainer}>
                <h1 className={css.homeTitle}>Welcome! Nice to meet you!</h1>
                <p className={css.homeText}>Here you can follow other people and learn a lot!</p>
                <div className={css.btnContainer}>
                <a href='https://github.com/dianaforost/goit-test-task' className={css.linkToGitHub} target='_blank' rel='noreferrer'>Visit gitHub</a>
                <NavLink to='/tweets' className={css.btnToTweets}>Go to tweets</NavLink>
                </div>
                </div>
                <img className={css.homeImage} src={image} alt="vector" ></img>
                </div>
            </div>
    )
}