<a name="readme-top"></a>

<!-- TABLE OF CONTENTS -->

# 📗 Table of Contents

- [📗 Table of Contents](#-table-of-contents)
- [Population 2073 API](#population-2073-api)
  - [🛠 Built With ](#-built-with-)
    - [Tech Stack ](#tech-stack-)
    - [Key Features ](#key-features-)
  - [💻 Getting Started ](#-getting-started-)
    - [Prerequisites](#prerequisites)
    - [Setup](#setup)
    - [Install](#install)
    - [Usage](#usage)
  - [👥 Authors ](#-authors-)
  - [🔭 Future Features ](#-future-features-)
  - [🤝 Contributing ](#-contributing-)
  - [⭐️ Show your support ](#️-show-your-support-)
  - [🙏 Acknowledgments ](#-acknowledgments-)
  - [📝 License ](#-license-)

<!-- PROJECT DESCRIPTION -->

# Population 2073 API<a name="about-project"></a>

This is an [Express.js](https://expressjs.com/) REST API developed for the capstone project for Module 3 of the Full Stack Developer Program offered by [Microverse](https://www.microverse.org/). It returns the 2073 population projections as estimated by [United Nations World Population Prospects 2022](https://population.un.org/wpp/). Since the dataset provided by the UN was very large, I chose to implement a simple server that returned ony the data needed for the frontend project.

## 🛠 Built With <a name="built-with"></a>

### Tech Stack <a name="tech-stack"></a>

<details>
  <summary>Server</summary>
  <ul>
    <li><a href="https://expressjs.com/">Express.js</a></li>
  </ul>
</details>

<details>
  <summary>Deployment</summary>
  <ul>
    <li><a href="https://render.com/">Render</a></li>
  </ul>
</details>
<!-- Features -->

### Key Features <a name="key-features"></a>

This API returns JSON data for the following endpoints:

- `BASE_URL/`  returns data for the whole world, and each region (as defined by the UN)
- `BASE_URL/asia`
- `BASE_URL/africa`
- `BASE_URL/latin-america`
- `BASE_URL/europe`
- `BASE_URL/northern-america`
- `BASE_URL/oceania`

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- GETTING STARTED -->

## 💻 Getting Started <a name="getting-started"></a>

To get a local copy up and running, follow these steps.

### Prerequisites

In order to run this project you need:

- <a href="https://nodejs.org/en/download">Node.js</a>
- <a href="https://docs.npmjs.com/downloading-and-installing-node-js-and-npm">npm</a>

### Setup

Clone this repository to your desired folder:

```sh
  cd desired-folder
  git clone https://github.com/henokkhm/microverse-population-2073-backend.git
```

### Install

Install this project with:

```sh
  cd microverse-population-2073-backend
  npm install
```

### Usage

- To start the app in the development mode on your local machine, simply run:

`npm start`

Then the API will run on [http://localhost:5001](http://localhost:5001). You can make requests to it using [Postman](https://www.postman.com/) or any browser.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- AUTHORS -->

## 👥 Authors <a name="authors"></a>

👤 **Henok K Hailemariam**

- GitHub: [@henokkhm](https://github.com/henokkhm)
- Twitter: [@henokkhm](https://twitter.com/henokkhm)
- LinkedIn: [henokkhm](https://www.linkedin.com/in/henokkhm/)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- FUTURE FEATURES -->

## 🔭 Future Features <a name="future-features"></a>

- [ ] **Add more functionality and styling**

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTRIBUTING -->

## 🤝 Contributing <a name="contributing"></a>

Contributions, issues, and feature requests are welcome!

Feel free to check the [issues page](../../issues/).

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- SUPPORT -->

## ⭐️ Show your support <a name="support"></a>

If you like this project, you can contribute to it. You are also welcome to give it a star on GitHub.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- ACKNOWLEDGEMENTS -->

## 🙏 Acknowledgments <a name="acknowledgements"></a>

I would like to thank Microverse for teaching and enforcing professional level practices.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- LICENSE -->

## 📝 License <a name="license"></a>

This project is [MIT](./LICENSE) licensed.

<p align="right">(<a href="#readme-top">back to top</a>)</p>