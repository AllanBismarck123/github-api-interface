import { useContext } from "react";
import { GithubContext} from "../providers/github-provider"

function useGithub() {
    const { githubState } = useContext(GithubContext);
    return {githubState};
}

export default useGithub;