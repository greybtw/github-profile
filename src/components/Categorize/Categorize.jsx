import React from 'react';
import { NativeSelect, FormControl } from '@material-ui/core';
import styles from './Categorize.module.css';

const Categorize = ( {handleOptionChange} ) => {

    return(
        <div className={styles.container}>
            <span className={styles.text}>
                TOP Repos
            </span>
            <FormControl className={styles.select}>
                <NativeSelect defaultValue="" onChange={(e) => handleOptionChange(e.target.value)}>
                    <option value="stargazers_count">stars</option>
                    <option value="size">size</option>
                    <option value="forks_count">forks</option>
                </NativeSelect>
            </FormControl>    
       </div>
    );
}

export default Categorize;