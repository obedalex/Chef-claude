import React from 'react'

// function handleClick(){
//    console.log("I was clicked")
// }

// function handleMouseOver(){
//    console.log("I was hovered")
// }

// <main className="container">
//   <img
//     src="https://picsum.photos/640/360"
//     alt="Placeholder image from Picsum"
//     onMouseOver={handleMouseOver}
//   />
//   <button onClick={handleClick}>Click me</button>
// </main>

 const Andex = () => {
    let [isImportant, setIsImportant] = React.useState(0)

    /**
     * Challenge: 
     * 1. Create a function called `handleClick` that runs
     *    setIsImportant("Definitely")
     * 2. Add a click event listener to the button
     *    that runs `handleClick` when the button is clicked.
     */

    function handleClick(){
        setIsImportant("Definitely")
    }
    
    return (
        <main>
            <h1 className="title">Is state important to know?</h1>
            <button className="value" onClick={handleClick}>{isImportant}</button>
        </main>
    )
}

export default Andex


    /**
     * Challenge: 
     * Create state to track our count value (initial value is 0)
     * Don't forget to replace the hard-coded "0" with your new state
     */
