import React from 'react'
import { Container, PostForm } from '../Comp'

function AddPost() {
  console.log("AddPost Rendered");
  return (
    <div className='py-8'>
      <Container>
        <PostForm />
      </Container>
    </div>
  )
}

export default AddPost