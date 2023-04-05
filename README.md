
[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]



<!-- PROJECT LOGO -->
<br />
<p align="center">
  <a href="https://react-ifgbpv.stackblitz.io">
    <img src="https://raw.githubusercontent.com/Kais3rP/star-rating-react-component/master/logo/Star_.svg" alt="Logo" width="80" height="80">
    <img src="https://raw.githubusercontent.com/Kais3rP/star-rating-react-component/master/logo/Star_.svg" alt="Logo" width="80" height="80">
    <img src="https://raw.githubusercontent.com/Kais3rP/star-rating-react-component/master/logo/Star_.svg" alt="Logo" width="80" height="80">
    <img src="https://raw.githubusercontent.com/Kais3rP/star-rating-react-component/master/logo/Star_.svg" alt="Logo" width="80" height="80">
    <img src="https://raw.githubusercontent.com/Kais3rP/star-rating-react-component/master/logo/Star_.svg" alt="Logo" width="80" height="80">
  </a>

  <h3 align="center">Custom Star Rating System</h3>

  <p align="center">
    A simple Star Rating System React Component, highly customizable and easy to use!
    <br />
    <a href="https://github.com/Kais3rP/star-rating-react-component"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://star-rating-react-component.netlify.app/" target="_blank">View Demo</a>
    ·
    <a href="https://github.com/Kais3rP/star-rating-react-component">Report Bug</a>
    ·
    <a href="https://github.com/Kais3rP/star-rating-react-component">Request Feature</a>
  </p>
</p>



<!-- TABLE OF CONTENTS -->
## Table of Contents

* [About the Project](#about-the-project)
  * [Built With](#built-with)
* [Getting Started](#getting-started)
* [Usage](#usage)
* [License](#license)
* [Contact](#contact)
* [Acknowledgements](#acknowledgements)



<!-- ABOUT THE PROJECT -->
## About The Project


This is a Star Rating System Component for React that renders a Star Rating graphical interface.
The generator is highly customizable, and lets you choose everything, colors, size, number of stars, etc...
More info on Usage in the proper Section.
It weighs 4kB.

### Built With

* [React Hooks]()


<!-- GETTING STARTED -->
## Getting Started

You can use this Component with: 

``` npm install -s star-rating-react-component ```

### Peer deps:
* react
* react-dom

<!-- USAGE EXAMPLES -->
## Usage

* This is the most basic way to import the Component:

```

import React from 'react';
import Star from 'star-rating-react-component'; 

 function App(){ 
return (
    <>
     <Star/>
    </> 
     )
}

```
### Props:

If you pass no props, it will have the default props:

``` 
let defaultProps = {
  options: {
    name: 'half-grad',
    numOfStars: 5,
    starsWidth: 30,
    color: "green",
    bgColor: "white",
    borderColor: "green",
    scoreColor: "inherit"
  },
  handleScore: (score) => { console.log(score) }
}

```

The best way to customize the Component is to declare a custom options object and an handleScore callback fired on click event:

```

import React from 'react';
import Star from 'star-rating-react-component'; 

let options = {
  name: 'custom',
  numOfStars: 5,
  starsWidth: 40,
  color: "#ffffff",
  bgColor: " #e6e6e6",
  borderColor: "orange",
  scoreColor: "inherit"
}

 function App(){ 

   const handleScore = (score) => {
    console.log(score);
 }

return (
    <>
     <Star options={options} handleScore={handleScore}/> 
    </>
     )
}

```

If you are going to use this component more than once, it's important you set a different name for each one, because the name is used to manage the id of the filling gradient and must be unique.

In case you are rendering multiple Components with map() method, you should do it like this:

```
{arr.map((x,i) => (
 <Star options={{...options, name:i}}
)}
)

```

Or if you are rendering it inside a component which itself is rendered multiple times :


``` 

     {arr.map((x,i) => (
 <MyComponent options={{...options, name:i}}/>  
)}


function MyComponent({options}){ 
return (
<>
<Star options={options}/>
</> 
)
}

```


This is necessary to give unique id's to each Component in order to avoid inconsistencies in the hovering effect.



### [https://react-ifgbpv.stackblitz.io](https://react-ifgbpv.stackblitz.io)


<!-- ROADMAP -->
## Roadmap

See the [open issues](https://github.com/Kais3rP/star-rating-react-component/issues) for a list of proposed features (and known issues).


<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE` for more information.



<!-- CONTACT -->
## Contact

Cesare Polonara - [@CesarePolonara](https://twitter.com/CesarePolonara) - cesare.polonara@gmail.com<br>
NPM : [https://www.npmjs.com/package/star-rating-react-component](https://www.npmjs.com/package/star-rating-react-component)<br>
Demo Link : [https://react-ifgbpv.stackblitz.io](https://react-ifgbpv.stackblitz.io)<br>
Personal Site : [http://cesare-polonara.netlify.app/](http://cesare-polonara.netlify.app/)

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/Kais3rP/repo.svg?style=flat-square
[contributors-url]: https://github.com/Kais3rP/repo/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/Kais3rP/repo.svg?style=flat-square
[forks-url]: https://github.com/Kais3rP/repo/network/members
[stars-shield]: https://img.shields.io/github/stars/Kais3rP/repo.svg?style=flat-square
[stars-url]: https://github.com/Kais3rP/repo/stargazers
[issues-shield]: https://img.shields.io/github/issues/Kais3rP/repo.svg?style=flat-square
[issues-url]: https://github.com/Kais3rP/repo/issues
[license-shield]: https://img.shields.io/github/license/Kais3rP/repo.svg?style=flat-square
[license-url]: https://github.com/Kais3rP/repo/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=flat-square&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/Kais3rP
[product-screenshot]: images/screenshot.png
