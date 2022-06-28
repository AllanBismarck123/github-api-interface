import React, { createContext, useState } from 'react'

export const GithubContext = createContext({
    loading: false,
    user: {},
    repositories: [],
    starred: [],
  });

function GithubProvider({children}) {
    const [githubState, setGithubState] = useState ({
        hasUser: false,
        loading: false,
        user: {
            login: undefined,
            name: undefined,
            publicUrl: undefined,
            blog: undefined,
            company: undefined,
            location: undefined,
            followers: 0,
            following: 0,
            public_gists: 0,
            public_repos: 0,

        },
        repositories: [],
        starred: [],
    });

    const contextValue = {
        githubState, 
    }

    return (
        <GithubContext.Provider value= {contextValue}>
            {children}
        </GithubContext.Provider>
    );
};

export default GithubProvider