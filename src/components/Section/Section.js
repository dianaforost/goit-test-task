import css from './Section.module.css'
import { useLocation } from "react-router-dom"
export default function Section({children}){
    const location = useLocation();
    return <section className={location.pathname === '/' ? css.section : css.tweetsSection}>
        <div className={css.container}>
            <div className={css.contentContainer}>
            {children}
            </div>
        </div>
    </section>
}