import React from 'react'
import { FiUsers } from 'react-icons/fi'
import { RiGitRepositoryLine } from 'react-icons/ri'
import { GoGist } from 'react-icons/go'

const UserStats = ({ user }) => {
  return(
    <p className='text-center'>
      Github stats: 
      <RiGitRepositoryLine className='inline-block' /> {user.public_repos} / 
      <GoGist className='inline-block' /> {user.public_gists} / 
      <FiUsers className='inline-block' /> {user.followers}
    </p>
  )
}
export default UserStats
