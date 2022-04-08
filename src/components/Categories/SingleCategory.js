import React from 'react'

export default function SingleCategory(props) {
  return (
    <tr>
    <td>{props.category.Name}</td>
    <td>{props.category.Description}</td>
</tr>
  )
}
