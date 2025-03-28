import React from 'react'

function handleClick(){
   console.log("I was clicked")
}

function handleMouseOver(){
   console.log("I was hovered")
}

 const Andex = () => {
  return (
    <main className="container">
      <img
        src="https://picsum.photos/640/360"
        alt="Placeholder image from Picsum"
        onMouseOver={handleMouseOver}
      />
      <button onClick={handleClick}>Click me</button>
    </main>
  )
}

export default Andex
