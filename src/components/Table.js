import React from 'react'
import TableBody from './TableBody'
import TableHeader from './TableHeader'

const Table = ({ personsData, removePerson }) => {
  return (
    <table>
      <TableHeader/>
      <TableBody 
        personsData={personsData} 
        removePerson={removePerson} />
    </table>
  )
}

export default Table
