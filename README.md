
[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]



<!-- PROJECT LOGO -->
<br />
<p align="center">
  <a href="https://github.com/Kais3rP/star-rating-react-component">
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
    <a href="https://codepen.io/kais3rp/pen/NWNMgBX" target="_blank">View Demo</a>
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

* Import the Component in you project.

``` import Star from 'star-rating-react-component'; ```

Then you can render it as any other React Component:

``` function App(){ ```<br> 
```return ( <Star /> )```<br>
```}```
### Props:

If you pass no props, it has these default Props:

``` defaultProps = { ```<br>
  ```options: {```<br>
   ``` name: "half-grad",```<br>
   ``` numOfStars: 5,```<br>
   ``` starsWidth: 30,```<br>
   ``` color: "green",```<br>
   ``` bgColor: "white",```<br>
   ``` borderColor: "green",```<br>
   ``` scoreColor: "inherit"```<br>
 ``` },```<br>
 ``` handleScore: (score) => {```<br>
  ```  console.log(score);```<br>
 ``` }```<br>
```};```

The best way to customize the Component is to declare a custom options object:

```let options = {```<br>
```name: "custom",```<br>
  ```numOfStars: 5,```<br>
  ```starsWidth: 40,```<br>
  ```color: "#ffffff",```<br>
  ```bgColor: " #e6e6e6",```<br>
  ```borderColor: "orange",```<br>
  ```scoreColor: "inherit"```<br>
 ```};```<br>

and pass it to the Component:

``` function App(){ ```<br> 
```return ( <Star options={options}/> )```<br>
```}```

If you are going to use this component more than once, it's important you set a different name for each one, because the name is used to manage the id of the filling gradient and must be unique.

In case you are rendering multiple Components with map() method, you should do it like this:

```arr.map((x,i) => (```<br>
```<MyComponent>```<br> 
``` <Star options={{...options, name:i}}```<br> 
```</MyComponent>)```<br> 
```)```

Or if you are rendering it inside a component rendered it through the same way:


``` function MyComponent({name}){ ```<br> 
```return ( ```<br>
```<>```<br>
```<Star options={...options, name}/>```<br>
```</> )```<br>
```}```

```arr.map((x,i) => (```<br>
```<MyComponent name={i}/> )```<br> 
```)```

This is necessary to give unique id's to each Component in order to avoid inconsistencies in the hovering effect.

##  handleScore Callback

As props, it also accepts an handleScore callback:

``` function App(){ ```<br> 
```const handleScore = (score) => {```<br> 
 ```   console.log(score);```<br> 
 ``` }```<br> 
```return ( <Star options={options} handleScore={handleScore}/> )```<br>
```}```

This lets you use the score selected onClick, as you prefer.

### Demo Link : [https://codepen.io/kais3rp/pen/NWNMgBX)


<!-- ROADMAP -->
## Roadmap

See the [open issues](https://github.com/Kais3rP/create-star-ratings/issues) for a list of proposed features (and known issues).



<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request



<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE` for more information.



<!-- CONTACT -->
## Contact

Cesare Polonara - [@CesarePolonara](https://twitter.com/CesarePolonara) - cesare.polonara@gmail.com<br>
Project Link: [https://github.com/Kais3rP/star-rating-react-component](https://github.com/Kais3rP/star-rating-react-component)<br>
Demo Link : [https://codepen.io/kais3rp/pen/NWNMgBX](https://codepen.io/kais3rp/pen/NWNMgBX)<br>
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