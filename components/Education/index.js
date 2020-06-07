import React from 'react'
import EducationItem from './EducationItem'

const degrees = [
  {
    degree: 'Master´s Degree',
    subject: 'Computer´s Information Systems',
    institution: 'USP - University of São Paulo'
  },
  {
    degree: 'Graduation´s Degree',
    subject: 'Computer´s Information Systems',
    institution: 'FAI-MG - Faculdade de Administração e Informática'
  }
]

const Education = () => {
  return(
    <div>
      <h3 className='text-4xl font-bold text-center uppercase mt-10 mb-5 text-orange'>My Education</h3>
      <div className='mx-6 md:mx-0 md:grid md:grid-cols-2 leading-none bg-white rounded-lg shadow-lg'>
        {degrees.map((degree, i) => (
          <EducationItem key={'i' + i} degree={degree}  />
        ))}
      </div>
    </div>
  )
}
export default Education
