import { NavLink } from "react-router-dom"
// import propTypes from 'prop-types';
import css from './BtnToBack.module.css'
export const BtnToBack = ({to,setFrom, locationValue}) =>{
    return <NavLink className={css.BackBtn} to={to} onClick={() => setFrom(locationValue)}>Back</NavLink>
}