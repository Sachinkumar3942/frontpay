import React, { useState } from "react";
import Spinner from "./Spinner";
import toast from "react-hot-toast";
import Repos from "./Repos";
const Explore = () => {
  const [loading,setLoading]=useState(false);
  const [repos,setRepos]=useState([]);
  const [selectedLanguage, setSelectedLanguage] = useState("");
  const exploreRepos=async(language)=>{
    setLoading(true);
    setRepos([])
    try{
      const res= await fetch(`https://api.github.com/search/repositories?q=language:${language}&sort=stars&order=desc&per_page=10`)
      const data=await res.json();
      setRepos(data.items);
      setSelectedLanguage(language)
    }catch(error){
      toast.error(error.message);
    }finally{
      setLoading(false);
    }
  }
  return (
    <div className=" flex flex-col m-4 mt-[5rem]  bg-blue-500  bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border rounded-xl w-full border-gray-100">
      <h1 className="text-3xl font-bold items-center text-center pt-4 text-gray-400  ">Explore popular repos...</h1>
      <div className="flex  items-center justify-center px-5 gap-3 rounded-tr-xl rounded-tl-xl  py-4">
        
        <div className="flex justify-center text-white text-3xl mt-4 hover:bg-gray-700 rounded-full p-2">
          <img onClick={()=>exploreRepos("c++")} className="h-12 " src="/c++.svg" alt="C++ logo" />
        </div>
        <div className="flex justify-center text-white text-3xl mt-4 hover:bg-gray-700 rounded-full p-2">
          <img onClick={()=>exploreRepos("csharp")} className="h-12 " src="/csharp.svg" alt="C++ logo" />
        </div>
        <div className="flex justify-center text-white text-3xl mt-4 hover:bg-gray-700 rounded-full p-2">
          <img onClick={()=>exploreRepos("css")} className="h-12 " src="/css.svg" alt="C++ logo" />
        </div>
        
        <div className="flex justify-center text-white text-3xl mt-4 hover:bg-gray-700 rounded-full p-2">
          <img className="h-12 " src="/html.svg" onClick={()=>exploreRepos("html")} alt="C++ logo" />
        </div>
        <div className="flex justify-center text-white text-3xl mt-4 hover:bg-gray-700 rounded-full p-2">
          <img className="h-12 " onClick={()=>exploreRepos("java")} src="/java.svg" alt="C++ logo" />
        </div>
      </div>
      <div className=" flex items-center justify-center px-5 gap-3 rounded-br-xl rounded-bl-xl py-4">
        <div className="flex justify-center text-white text-3xl mt-4 hover:bg-gray-700 rounded-full p-2">
          <img className="h-12 " src="/javascript.svg" onClick={()=>exploreRepos("javascript")} alt="C++ logo" />
        </div>
        <div className="flex justify-center text-white text-3xl mt-4 hover:bg-gray-700 rounded-full p-2">
          <img className="h-12 " src="/python.svg" onClick={()=>exploreRepos("python")} alt="C++ logo" />
        </div>
        <div className="flex justify-center text-white text-3xl mt-4 hover:bg-gray-700 rounded-full p-2">
          <img className="h-12 " src="/swift.svg" onClick={()=>exploreRepos("swift")} alt="C++ logo" />
        </div>
        <div className="flex justify-center text-white text-3xl mt-4 hover:bg-gray-700 rounded-full p-2">
          <img className="h-12 " onClick={()=>exploreRepos("typescript")} src="/typescript.svg" alt="C++ logo" />
        </div>
        <div className="flex justify-center text-white text-3xl mt-4 hover:bg-gray-700 rounded-full p-2">
          <img className="h-12 " src="/go.svg" onClick={()=>exploreRepos("go")} alt="C++ logo" />
        </div>
      </div>
      <div className=" flex flex-col rounded-2xl w-full justify-center items-center" >
      {repos.length > 0 && (
					<h2 className='text-lg font-semibold text-center my-4'>
						<span className='bg-blue-100 text-blue-800 font-medium me-2 px-2.5 py-0.5 rounded-full '>
							{selectedLanguage.toUpperCase()}{" "}
						</span>
						Repositories
					</h2>
				)}
				{!loading && repos.length > 0 && <Repos repos={repos} alwaysFullWidth />}
				{loading && <Spinner />}
      </div>
    </div>
  );
};

export default Explore;
