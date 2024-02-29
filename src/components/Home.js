import React, { useCallback, useEffect, useState } from "react";
import Search from "./Search";
import SortRepos from "./SortRepo";
import ProfileInfo from "./ProfileInfo";
import Repos from "./Repos";
import toast from "react-hot-toast";
import Spinner from "./Spinner";
const Home = () => {
  const [userProfile, setUserProfile] = useState(null);
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [sortType, setSortType] = useState("recent");
  const getUserProfileAndRepos = useCallback(
    
    async (username = "Sachinkumar3942") => {
      setLoading(true);         
      try {
        // const res = await fetch(
    //   `https://localhost:5600/api/users/profile/${username}`
    // );
    // const {repos,userProfile}=await res.json();
    //  setRepos(repos);
    //  setUserProfile(userProfile)
    // return { userProfile, repos };
        const userResp = await fetch(
          `https://api.github.com/users/${username}`,
          {
            headers:{
              authorization:`token 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`
            }
          }
        );
        const userProfile = await userResp.json();
        setUserProfile(userProfile);
  
        const repoRes = await fetch(userProfile.repos_url);
        const repos = await repoRes.json();
        setRepos(repos);
  
        // Return userProfile and repos here
        return { userProfile, repos };
      } catch (error) {
        toast.error(error.message);
      } finally {
        setLoading(false);
      }
    },
    []
  );
  
  useEffect(() => {
    getUserProfileAndRepos();
  }, [getUserProfileAndRepos]);
  const onSearch = async (e, username) => {
    if (username?.length > 0) {
      e.preventDefault();
      setLoading(true);
      setRepos([]);
      setUserProfile(null);
      const { userProfile, repos } = await getUserProfileAndRepos(username);
      setUserProfile(userProfile);
      setRepos(repos);
      setLoading(false);
    } else return;
  };
  const onSort = (sortType) => {
		if (sortType === "recent") {
			repos.sort((a, b) => new Date(b.created_at) - new Date(a.created_at)); //descending, recent first
		} else if (sortType === "stars") {
			repos.sort((a, b) => b.stargazers_count - a.stargazers_count); //descending, most stars first
		} else if (sortType === "forks") {
			repos.sort((a, b) => b.forks_count - a.forks_count); //descending, most forks first
		}
		setSortType(sortType);
		setRepos([...repos]);
	};
  return (
    <div className="m-4 ">
      <Search onSearch={onSearch} />
      {repos.length >0 && <SortRepos onSort={onSort} sortType={sortType} />}
      <div className="flex gap-5 lg:flex-row flex-col items-start ">
        {userProfile && !loading && <ProfileInfo userProfile={userProfile} />}
        { !loading && <Repos repos={repos} />}
        {loading && <Spinner />}
      </div>
    </div>
  );
};

export default Home;
