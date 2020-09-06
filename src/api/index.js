import axios from 'axios';

const url = 'https://api.github.com/users';
const urlColors = 'https://raw.githubusercontent.com/ozh/github-colors/master/colors.json';

export const fetchData = async (username) => {
    try {
        const data = await axios.get(`${url}/${username}`).catch(
            function(err) {
                return(err);
            }
        );

        // console.log(data);
        if(data.message) {
            return {status: 404};
        }

        const modifiedData = { 
                avatar_url: data.data.avatar_url,
                login: data.data.login,
                html_url: data.data.html_url,
                name: data.data.name,
                company: data.data.company,
                location: data.data.location,
                repos: data.data.public_repos,
                followers: data.data.followers,
                following: data.data.following,
                created: data.data.created_at,
                blog: data.data.blog,

                limit: data.headers["x-ratelimit-limit"],
                remaining: data.headers["x-ratelimit-remaining"],
                status: 200
        }
        return modifiedData;
    }
    catch (err) {
        console.log(err);
    }
}

export const fetchRepos = async (username) => {
    try {
        const  repos  = await axios.get(`${url}/${username}/repos`);
        const colors = await axios.get(`${urlColors}`);
        // console.log(repos.data);
        // console.log(colors.data);
        const modifiedData = repos.data.map((repo) => 
            repo.language ? 
            ({
            name: repo.name,
            full_name: repo.full_name,
            html_url: repo.html_url,
            description: repo.description,
            size: repo.size,
            language: repo.language,
            stargazers_count: repo.stargazers_count,
            forks_count: repo.forks_count,
            color: colors.data[repo.language].color
            }) : 
            ({
                name: repo.name,
                full_name: repo.full_name,
                html_url: repo.html_url,
                description: repo.description,
                size: repo.size,
                language: repo.language,
                stargazers_count: repo.stargazers_count,
                forks_count: repo.forks_count,
                color: 'rgb(229, 229, 229)'
            })
        )
        // console.log(modifiedData);
        return modifiedData;
    }
    catch (err) {
        console.log(err);
    }
}

export const fetchColorRepo = async (language) => {
    try {
        const data = await axios.get(`${urlColors}`);
        // console.log(language);
        // console.log(data.data[`${language}`].color);
        return data.data[`${language}`].color;
    }
    catch (err) {
        console.log(err);
    }
}

export const fetchReposFromOption = async (Repos, value) => {
    try {
        let arrayRepo = [...Repos];
        return arrayRepo.sort((a, b) => b[value] - a[value]).slice(0, 6);
    }
    catch (err) {
        console.log(err);
    }
}