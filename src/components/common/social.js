import React from "react"
import styles from "./social"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'

export default function Social(){
  return(
    <div className={styles.sideline}>
      <div className={styles.line}>
      </div>
      <ul>
       <li><FontAwesomeIcon icon={faCoffee} /></li>
       <li><FontAwesomeIcon icon={faCoffee} /></li>
       <li><FontAwesomeIcon icon={faCoffee} /></li>
      </ul>
    </div>
  )
}