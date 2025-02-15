'use client'
import React, { useEffect, useLayoutEffect, useState } from 'react';
import styles from "./page.module.css";

export default function ButtonBusca({onClick, children }){
    return(
        <button className={styles.botaoBuscar} onClick={onClick}>
            {children}
        </button>
    )
}