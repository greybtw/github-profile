import React from 'react';
import { Avatar } from '@material-ui/core';

import styles from './UserInfo.module.css';

const UserInfo = ({ data: {
                avatar_url,
                login,
                html_url,
                name,
                company,
                location,
                repos,
                followers,
                following,
                created,
                blog,
            }}) => {
    
    if(!avatar_url) return "Loading...";

    return(
        <div className={ styles.container }>
            
            <Avatar alt='avatar' src={avatar_url} className={ styles.avatar }/>
            <h1 className={ styles.username }>{name}</h1>
            <a href={html_url}>@{login}</a>

            <div className={styles.info}>
                {company ? (
                    <span className={styles.info__item}>
                        <svg className={styles.octicon} viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fillRule="evenodd" d="M1.5 14.25c0 .138.112.25.25.25H4v-1.25a.75.75 0 01.75-.75h2.5a.75.75 0 01.75.75v1.25h2.25a.25.25 0 00.25-.25V1.75a.25.25 0 00-.25-.25h-8.5a.25.25 0 00-.25.25v12.5zM1.75 16A1.75 1.75 0 010 14.25V1.75C0 .784.784 0 1.75 0h8.5C11.216 0 12 .784 12 1.75v12.5c0 .085-.006.168-.018.25h2.268a.25.25 0 00.25-.25V8.285a.25.25 0 00-.111-.208l-1.055-.703a.75.75 0 11.832-1.248l1.055.703c.487.325.779.871.779 1.456v5.965A1.75 1.75 0 0114.25 16h-3.5a.75.75 0 01-.197-.026c-.099.017-.2.026-.303.026h-3a.75.75 0 01-.75-.75V14h-1v1.25a.75.75 0 01-.75.75h-3zM3 3.75A.75.75 0 013.75 3h.5a.75.75 0 010 1.5h-.5A.75.75 0 013 3.75zM3.75 6a.75.75 0 000 1.5h.5a.75.75 0 000-1.5h-.5zM3 9.75A.75.75 0 013.75 9h.5a.75.75 0 010 1.5h-.5A.75.75 0 013 9.75zM7.75 9a.75.75 0 000 1.5h.5a.75.75 0 000-1.5h-.5zM7 6.75A.75.75 0 017.75 6h.5a.75.75 0 010 1.5h-.5A.75.75 0 017 6.75zM7.75 3a.75.75 0 000 1.5h.5a.75.75 0 000-1.5h-.5z"></path></svg>
                        {company}
                    </span>
                ) : null }
                
                {location ? (
                    <span className={styles.info__item}>
                        <svg aria-hidden="true" className={styles.octicon} height="16" width="12" role="img" viewBox="0 0 12 16" >
                            <path fillRule="evenodd" d="M6 0C2.69 0 0 2.5 0 5.5 0 10.02 6 16 6 16s6-5.98 6-10.5C12 2.5 9.31 0 6 0zm0 14.55C4.14 12.52 1 8.44 1 5.5 1 3.02 3.25 1 6 1c1.34 0 2.61.48 3.56 1.36.92.86 1.44 1.97 1.44 3.14 0 2.94-3.14 7.02-5 9.05zM8 5.5c0 1.11-.89 2-2 2-1.11 0-2-.89-2-2 0-1.11.89-2 2-2 1.11 0 2 .89 2 2z"></path>
                        </svg>
                        {location}
                    </span>
                ) : null}
                
                {blog ? (
                    <span className={styles.info__item}>
                        <svg className={styles.octicon} viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fillRule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg>
                        {blog}
                    </span>
                ) : null}

            </div>
            <div className={styles.status}>
                <div className={styles.status__item}>
                    <span className={styles.num}>{repos}</span>
                    <span className={styles.label}>repositories</span>
                </div>
                
                <div className={styles.status__item}>
                    <span className={styles.num}>{followers}</span>
                    <span className={styles.label}>followers</span>
                </div>
                
                <div className={styles.status__item}>
                    <span className={styles.num}>{following}</span>
                    <span className={styles.label}>following</span>
                </div>
            </div>
        </div>
    );
}

export default UserInfo;