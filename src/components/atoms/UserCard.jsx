import React from 'react'
import styles from "../../styles/UserCard.module.css"

export default function UserCard({userName, userAge, userDescription}) {
  return (
    
    <div className={styles.userCard}>
        <div className="userinfo">
            <p> Name</p>
            <p> {userName} </p>
        </div>
        <div className="styles.userinfo">
                <p>Age</p>
                <p>{userAge} </p>
        </div>
        <div className="styles.userinfo">
                <p>Description</p>
                <p>{userDescription} </p>
        </div>
    </div>
  );
}

   
    