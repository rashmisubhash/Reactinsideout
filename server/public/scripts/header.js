// const header = document.querySelector('header')

// const headerContainer = document.createElement('div')
// headerContainer.className = 'header-container'

// const headerLeft = document.createElement('div')
// headerLeft.className = 'header-left'

// const headerLogo = document.createElement('img')
// headerLogo.src = '/logo.png'

// const headerTitle = document.createElement('h1')
// headerTitle.textContent = 'UnEarthed'

// headerLeft.appendChild(headerLogo)
// headerLeft.appendChild(headerTitle)

// const headerRight = document.createElement('div')
// headerRight.className = 'header-right'

// const headerButton = document.createElement('Home')
// headerButton.textContent = 'Home'
    
// headerButton.addEventListener('click', function handleClick(event) {
//   window.location = '/'
// })

// headerRight.appendChild(headerButton)

// headerContainer.appendChild(headerLeft)
// headerContainer.appendChild(headerRight)

// header.appendChild(headerContainer)



// const header = document.querySelector('headers')
const header = document.getElementById('headers')

// Create the container
const headerContainer = document.createElement('div')
headerContainer.className = 'container grid custom-header'

// Create the left section (logo and title)
const headerLeft = document.createElement('div')
headerLeft.className = 'header-left'

// Create the logo
const headerLogo = document.createElement('img')
headerLogo.src = '/insidelogo.jpeg'
headerLogo.className = 'logo' // Optional class for custom styling

// Create the title
const headerTitle = document.createElement('h1')
headerTitle.textContent = 'Inside Out'

// Append logo and title to the left section
headerLeft.appendChild(headerLogo)
headerLeft.appendChild(headerTitle)

// Create the right section (button)
const headerRight = document.createElement('div')
headerRight.className = 'header-right'

// Create the button
const headerButton = document.createElement('button')
headerButton.textContent = 'Home'
headerButton.className = 'contrast' // Adds a contrast style button
    
headerButton.addEventListener('click', function handleClick(event) {
  window.location = '/'
})

// Append the button to the right section
headerRight.appendChild(headerButton)

// Append left and right sections to the container
headerContainer.appendChild(headerLeft)
headerContainer.appendChild(headerRight)

// Finally append the container to the header
header.appendChild(headerContainer)
