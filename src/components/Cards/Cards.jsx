import React from 'react';
import { Grid } from '@material-ui/core';
import styles from './Cards.module.css';
import cx from 'classnames';

const Cards = (props) => {
    if(!props.listRepos)
        return "Loading...";
    const data = [...props.listRepos];

    return(
        props.listRepos ? (
        <div className={styles.container}>
            <Grid container spacing={2} justify={"center"}>
                { 
                    data.map((item, i) => 
                            <Grid item xs={10} sm={5} lg={3} md={4} className={ cx(styles.card) } key={i}>
                                <a href={item.html_url}>
                                    <span className={styles.title}>
                                        <svg aria-hidden="true" className={styles.octicon}  height="16" role="img" viewBox="0 0 12 16" width="12"><path fillRule="evenodd" d="M4 9H3V8h1v1zm0-3H3v1h1V6zm0-2H3v1h1V4zm0-2H3v1h1V2zm8-1v12c0 .55-.45 1-1 1H6v2l-1.5-1.5L3 16v-2H1c-.55 0-1-.45-1-1V1c0-.55.45-1 1-1h10c.55 0 1 .45 1 1zm-1 10H1v2h2v-1h3v1h5v-2zm0-10H2v9h9V1z"></path></svg>
                                        <p>{item.name}</p>
                                    </span>
                                    <p className={styles.desc}>{item.description}</p>
                                    <span className={styles.information}>
                                        <div className={styles.information__left}>
                                            <span>
                                                <span style={{background: `${item.color}`}} className={styles.language}></span>
                                                {item.language}
                                            </span>

                                            <span>
                                                <svg aria-hidden="true" className={styles.octicon} height="16" role="img" viewBox="0 0 14 16" width="14"><path fillRule="evenodd" d="M14 6l-4.9-.64L7 1 4.9 5.36 0 6l3.6 3.26L2.67 14 7 11.67 11.33 14l-.93-4.74L14 6z"></path></svg>
                                                {item.stargazers_count}
                                            </span>

                                            <span>
                                                <svg aria-hidden="true" className={styles.octicon} height="16" role="img" viewBox="0 0 10 16" width="10"><path fillRule="evenodd" d="M8 1a1.993 1.993 0 0 0-1 3.72V6L5 8 3 6V4.72A1.993 1.993 0 0 0 2 1a1.993 1.993 0 0 0-1 3.72V6.5l3 3v1.78A1.993 1.993 0 0 0 5 15a1.993 1.993 0 0 0 1-3.72V9.5l3-3V4.72A1.993 1.993 0 0 0 8 1zM2 4.2C1.34 4.2.8 3.65.8 3c0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3 10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3-10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2z"></path></svg>
                                                {item.forks_count}
                                            </span>
                                        </div>
                                        <div className={styles.information__right}>
                                            {
                                                item.size > 1024 ? (`${(Math.round((item.size / 1024)*100)/100)} MB`) : (`${item.size} KB`)
                                            }
                                        </div>
                                    </span>
                                </a>
                            </Grid>
                    )
                }
            </Grid>
        </div>
        ) : null
    )
}

export default Cards;