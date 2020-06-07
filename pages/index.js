import React from 'react'
import getUser from '../utils/getUser'

import { FiLink, FiUsers } from 'react-icons/fi'
import { RiGitRepositoryLine } from 'react-icons/ri'
import { GoGist, GoStar } from 'react-icons/go'
import PageHead from '../components/PageHead'
import Hero from '../components/Hero'

const Index = ({ repos, user }) => {
    return (
        <div className='container mx-auto bg-network'>
            <PageHead />
            <Hero />
            
            <div className='bg-white rounded-lg shadow-lg py-12 px-8 mx-8 md:mx-0 md:px-16'>
              <h3 className='text-4xl text-center text-orange'>What I do</h3>
              <p className='text-2xl'>Fullstack Developer balbalaba</p>
            </div>

            <div>
              <h3 className='text-4xl font-bold text-center uppercase mt-10 mb-5 text-orange'>My Education</h3>
              <div className='mx-6 md:mx-0 md:grid md:grid-cols-2 leading-none bg-white rounded-lg shadow-lg'>
                {[1,2].map(i => (
                <div key={'education-'+i} className='border-dashed border-t md:border-t-0 md:border-l px-6 mx-6 md:mx-0 md:px-12 py-6'>
                  <h4 className='text-lg uppercase font-bold mb-2 text-orange'>Master´s Degree</h4>
                  <p className='text-2xl uppercase'>Computer Information Systems<br />
                  <span className='text-lg normal-case font-bold'>USP - University of São Paulo</span></p>
                </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className='mx-6 md:mx-0 text-4xl font-bold text-center uppercase mt-10 text-orange'>Tech contributions</h3>
              <p className='text-center'>Github stats: <RiGitRepositoryLine className='inline-block' /> {user.public_repos} / <GoGist className='inline-block' /> {user.public_gists} / <FiUsers className='inline-block' /> {user.followers}</p>
              <div className='md:grid md:grid-cols-3 md:gap-2 md:my-6'>
                {repos.map(repo => {
                    return (
                        <div key={repo.id} className='my-3 md:my-0 rounded bg-white p-4 hover:shadow-md'>
                            <h3 className='font-bold hover:underline'><a href={'https://github.com/' + repo.full_name}>{repo.full_name}</a></h3>
                            <p>Language: {repo.language} / <GoStar className='inline-block' /> Stars: {repo.stargazers_count}</p>
                        </div>
                    )
                })}
              </div>

            </div>
            <div>
              <p className='text-center my-8 py-4 border-t-2'>
                You can find the source-code of this website:
                <br />
                <a href=''>https://github.com/tuliofaria/tuliofaria.dev</a>
              </p>
            </div>
        </div>
    )
}
export async function getServerSideProps(context){
    const { repos, user } = await getUser('tuliofaria')
    return {
        props: {
            currentDate: new Date().toString(),
            repos,
            user
        }
    }
}
export default Index
