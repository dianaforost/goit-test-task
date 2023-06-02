import { NavLink } from "react-router-dom"
// import propTypes from 'prop-types';
import css from './BtnToBack.module.css'
export const BtnToBack = ({to,setFrom, locationValue}) =>{
    return <div className={css.BackBtnContainer}>
        {/* <div className={css.container}> */}
        <NavLink className={css.BackBtn} to={to} onClick={() => setFrom(locationValue)}>Back</NavLink>
        {/* </div> */}
    </div>
}