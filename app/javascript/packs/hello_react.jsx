// Run this example by adding <%= javascript_pack_tag 'hello_react' %> to the head of your layout file,
// like app/views/layouts/application.html.erb. All it does is render <div>Hello React</div> at the bottom
// of the page.

import React from 'react'
import ReactDOM from 'react-dom'

const Hello = () => {
  const changeLogin = () => {
    fetch('/change-login?login=foo@foo.fr&password=plopplop', {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(console.log)
  }

  const getPosts = () => {
    fetch('/posts', {
      method: 'GET',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(console.log)
  }

  return (
    <>
      <button onClick={getPosts}>Get Post</button>
      <button onClick={changeLogin}>Change Login</button>
    </>
  )
}

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Hello />,
    document.body.appendChild(document.createElement('div')),
  )
})
