import React from "react"
import styles from "./social"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'

export default function Social(){
  return(
    <div className={styles.sideline}>
      <div className={styles.verticalline}>
        this is a thing
      </div>
      <div>
      <FontAwesomeIcon icon={faCoffee} />
      <FontAwesomeIcon icon={faCoffee} />
      <FontAwesomeIcon icon={faCoffee} />
      </div>
    </div>
  )
}