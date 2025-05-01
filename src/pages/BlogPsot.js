import React from 'react'
import { useParams } from 'react-router-dom'

export default function BlogPsot() {
    const params = useParams();
  return (
    <div>Blog Psot is {params.id}</div>
  )
}
