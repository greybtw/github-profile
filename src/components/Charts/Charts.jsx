import React from 'react';
import { Bar, Pie } from 'react-chartjs-2';
import { Grid } from '@material-ui/core';
import cx from 'classnames';
import styles from './Charts.module.css';


function analysLanguages (arrLanguages, repo) {
    if(repo.language)
    {
        let increased = false;
        arrLanguages.forEach((x) => {
            if(x.language === repo.language) {
                x.count += 1;
                increased = true;
                x.stargazers_count += repo.stargazers_count;
                return;
            }
        })
        if(!increased) {
            let newLanguage = {
                language: repo.language,
                count: 1,
                color: repo.color,
                stargazers_count: repo.stargazers_count
            }
            arrLanguages.push(newLanguage);
            return;
        }
        increased = false;
    }
    else
        return -1;
}

const Charts = ({ repos }) => {
    let arrLanguages = [];

    if(repos.length !== 0) {
        let others = {
            language: "Others",
            count: 0,
            color: 'rgb(229, 229, 229)',
            stargazers_count: 0
        }

        repos.forEach((repo) => {
            if(analysLanguages(arrLanguages, repo) === -1) {
                others.count += 1;
                others.stargazers_count += repo.stargazers_count;
            }
        });

        if(others.count)
            arrLanguages.push(others);
    }

    const dataTopLanguages = {
        labels: arrLanguages.map((language) => language.language),
        datasets: [{
            data: arrLanguages.map((language) => language.count),
            backgroundColor: arrLanguages.map((language) => language.color),
            hoverBackgroundColor: arrLanguages.map((language) => language.color)
        }]
    };
    const dataStarLanguages = {
        labels: arrLanguages.map((language) => language.language ),
        datasets: [{
            data: arrLanguages.map((language) => language.stargazers_count),
            backgroundColor: arrLanguages.map((language) => language.color),
            hoverBackgroundColor: arrLanguages.map((language) => language.color)
        }]
    };
    const dataMostStarRepo = {
        labels: repos.sort((a, b) => b.stargazers_count - a.stargazers_count).slice(0, 5).map((repo) => repo.name),
        datasets: [
            {
            label: '',
            backgroundColor: [
                'rgba(23, 185, 120, 0.5)',
                'rgba(252, 133, 174, 0.5)',
                'rgba(158, 87, 157, 0.5)',
                'rgba(250, 238, 28, 0.5)',
                'rgba(48, 58, 82, 0.5)'
            ],
            borderColor: [
                '#17b978',
                '#fc85ae',
                '#9e579d',
                '#faee1c',
                '#303a52'
            ],
            borderWidth: 1,
            data: repos.sort((a, b) => b.stargazers_count - a.stargazers_count).slice(0, 5).map((repo) => repo.stargazers_count)
            }
        ]
    };

    const chartSize = 300;
    const langChartError = (dataTopLanguages && dataTopLanguages.datasets[0].data[0] > 0);
    const starChartError = (dataStarLanguages && dataStarLanguages.datasets[0].data[0] > 0);
    const thirdChartError = (dataMostStarRepo && dataMostStarRepo.datasets[0].data[0] > 0);

    return( 
        <div className={styles.containter}>
            <Grid container spacing={2} justify="center" >
                <Grid container item xs={12} sm={7} md={4} lg={3} className={ cx(styles.card, styles.pie)} >
                    {langChartError ? 

                    (<div className={styles.wrapper}>
                        <h1>Top Languages</h1>
                        <Pie 
                            data={dataTopLanguages} 
                            options={{
                                legend: {
                                    position: 'right',
                                    align: 'center'
                                }
                            }}
                            width={chartSize} height={chartSize}
                        />
                        </div>) : (
                            <div className={ cx( styles.wrapper, styles.error)}>
                                <h3 >Oops!</h3>
                                <p>Nothing to see here!</p>
                            </div>
                    )}
                    
                </Grid>
                
                <Grid container item xs={12} sm={7} md={4} lg={3} className={ cx(styles.card, styles.pie)} >
                    {starChartError ? 
                    (
                        <div className={styles.wrapper}>
                            <h1>Most starred</h1>
                            <Bar 
                                data={dataMostStarRepo}
                                options={{
                                    maintainAspectRatio: false,
                                    legend: {
                                        display: false,
                                        fontSize: 16
                                    },
                                    scales: { 
                                        xAxes: [{
                                            gridLines: { 
                                                offsetGridLines: true
                                            },
                                            offset: true
                                        }]
                                    }
                                }}
                                
                                width={chartSize} height={chartSize}
                            />
                        </div>
                    ) : (
                        <div className={ cx( styles.wrapper, styles.error)}>
                            <h3 >Oops!</h3>
                            <p>Nothing to see here!</p>
                        </div>
                    )}
                    
                </Grid>
                
                <Grid container item xs={12} sm={7} md={4} lg={3} className={ cx(styles.card, styles.pie)} >
                    {thirdChartError ? 
                    (<div className={styles.wrapper}>
                        <h1>Stars per language</h1>
                        <Pie 
                            data={dataStarLanguages}
                            
                            options={{
                                legend: {
                                    position: 'right',
                                    align: 'center'
                                }
                            }}
                            width={chartSize} height={chartSize}
                        />
                    </div>) : (
                            <div className={ cx( styles.wrapper, styles.error)}>
                                <h3 >Oops!</h3>
                                <p>Nothing to see here!</p>
                            </div>
                    )
                    }
                </Grid>
            </Grid>
        </div>
    );
}

export default Charts;