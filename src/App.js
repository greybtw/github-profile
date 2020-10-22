import React from 'react';
import { Search, UserInfo, Charts, Categorize, Cards } from './components';

import styles from './App.module.css';

import { fetchData, fetchRepos, fetchReposFromOption } from './api';

class App extends React.Component {

    state = {
        info: {},
        searching: true,
        repos: [],  
        option: 'stargazers_count',
        listRepos: [],
    }

    handleRequest = async (username) => {
        const fetchedData = await fetchData(username);
        
        if(fetchedData.status === 200) {
            const fetchedRepos = await fetchRepos(username);
            this.setState({ info: fetchedData, searching: false, repos: fetchedRepos});

            const fetchedListRepo = await fetchReposFromOption(this.state.repos, this.state.option);
            this.setState({ listRepos: fetchedListRepo });
        }
        else {
            this.setState({info: { message: "Not Found"}, searching: true})
            console.log("Not Found");
        }
    }

    handleOptionChange = async (value) => {
        const fetchedRepo = await fetchReposFromOption(this.state.repos, value);
        this.setState({ option: value, listRepos: fetchedRepo });
    }

    render() {
        const data  = this.state;
        return (
            data.searching ? (
                    <div className={ styles.wrapper }>
                        <Search handleRequest={this.handleRequest}/>
                    </div>
            ) : (
                    <div className={ styles.container }>
                        <UserInfo data={data.info} />
                        <Charts repos={data.repos} />
                        <Categorize handleOptionChange={this.handleOptionChange}/>
                        <Cards listRepos={data.listRepos}/>
                    </div>
            )
        )
    }
}

export default App;