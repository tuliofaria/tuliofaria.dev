import React from 'react'
import { GoStar } from 'react-icons/go'

const Repo = ({ repo }) => {
  return(
    <div className='my-3 md:my-0 rounded bg-white p-4 hover:shadow-md'>
        <h3 className='font-bold hover:underline'><a href={'https://github.com/' + repo.full_name}>{repo.full_name}</a></h3>
        <p>Language: {repo.language} / <GoStar className='inline-block' /> Stars: {repo.stargazers_count}</p>
    </div>
  )
}
export default Repo
