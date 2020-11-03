import React from 'react'

const TableBody = ({ personsData, removePerson }) => {
  const row = personsData.map((person, index) => {
    return (
      <tr key={index}>
        <td>{person.name}</td>
        <td>{person.job}</td>
        <td>
          <button onClick={() => removePerson(index)}>Delete</button>
        </td>
      </tr>
    )
  })
  return (
    <tbody>
      {row}
    </tbody>
  )
}

export default TableBody
