import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './Github.css'

export function Github() {
  const [username, setusername] = useState('');
  const [userData, setUserData] = useState(null);
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  
      const fetchUser = async () => { 
        if (!username.trim()) return;         
        setLoading(true)
        try{
        const respo = await axios.get(`https://api.github.com/users/${username}`)
        const repoRes = await axios.get(`https://api.github.com/users/${username}/repos`)
        setUserData(respo.data)
        setRepos(repoRes.data);
        console.log("Repos:", repos);
        console.log(username)
        }catch (error) {
          console.error("Error fetching user data:", error);
          setError(error)
        } finally {
        setLoading(false);
        }
      }
  
  return (
  <div className="w-full p-4 bg-gray-400">
   {/* <h1 className="text-center text-2xl font-bold mb-4 text-gray-800">
  🔍 Find Any GitHub Profile
</h1> */}
<main className="flex-grow px-4 py-3">
<div className="max-w-2xl mx-auto text-center">
      <h1 className="text-3xl font-bold text-gray-900 mb-2 flex items-center justify-center gap-2">
        <span role="img" aria-label="search">🔍</span> Find Any GitHub Profile
      </h1>
      <p className="text-gray-700 mb-6">
        Type a GitHub username to fetch their public profile, repositories, and contribution stats.
      </p>
      
    <div className="flex justify-center items-center">
      <input
        className="bg-white m-2  py-1 w-2xs rounded"
        type="text"
        value={username}
        onChange={(e) => setusername(e.target.value)}
      />
      <input
        className="text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2 mr-2 focus:outline-none"
        type="button"
        onClick={fetchUser}
        value="Search"
      />
    </div>
     <div className="text-left bg-white p-4 rounded shadow-md mt-8">
        <h2 className="text-xl font-semibold mb-2">What does this do?</h2>
        <ul className="list-disc pl-6 text-gray-700 space-y-1">
          <li>Displays profile image, bio, followers, and more.</li>
          <li>Lists public repositories with stars.</li>
          <li>Links directly to GitHub profiles and repos.</li>
        </ul>
      </div>
</div>
</main>
    {loading ? (
      <div className="flex justify-center items-center my-8">
        <span className="loader"></span>
      </div>
    ) : (
      <>
        {error && <p className="text-center text-red-600">{error}</p>}

        {userData && (
          <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-6 flex flex-col md:flex-row items-start">
            {/* Avatar */}
            <div className="w-full md:w-1/3 flex justify-center md:justify-start">
              <img
                src={userData.avatar_url}
                alt="Avatar"
                className="rounded-full w-48 h-48 border-4 border-blue-500"
              />
            </div>

            {/* User Info */}
            <div className="w-full md:w-2/3 mt-4 md:mt-0 md:ml-6">
              <h2 className="text-2xl font-bold">{userData.name}</h2>
              <p className="text-gray-600">@{userData.login}</p>
              <p className="mt-2 text-gray-700">{userData.bio}</p>

              <div className="mt-4 grid grid-cols-2 gap-4 text-sm">
                <p><strong>Public Repos:</strong> {userData.public_repos}</p>
                <p><strong>Followers:</strong> {userData.followers}</p>
                <p><strong>Following:</strong> {userData.following}</p>
                {userData.location && <p><strong>Location:</strong> {userData.location}</p>}
                {userData.company && <p><strong>Company:</strong> {userData.company}</p>}
                {userData.blog && (
                  <p>
                    <strong>Blog:</strong>{" "}
                    <a
                      className="text-blue-500"
                      href={userData.blog.startsWith("http") ? userData.blog : "https://" + userData.blog}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {userData.blog}
                    </a>
                  </p>
                )}
              </div>
            </div>
          </div>
        )}

        {repos.length > 0 && (
          <div className="max-w-4xl mx-auto mt-8 bg-white shadow rounded p-6">
            <h3 className="text-xl font-semibold mb-4">Repositories</h3>
            <ul className="space-y-3">
              {repos.map((repo) => (
                <li key={repo.id} className="border-b pb-2">
                  <a
                    href={repo.html_url}
                    target="_blank"
                    rel="noreferrer"
                    className="text-blue-600 font-medium"
                  >
                    {repo.name}
                  </a>
                  <span className="ml-2 text-sm text-gray-500">
                    ⭐ {repo.stargazers_count}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </>
    )}
  </div>
);

}

export default Github