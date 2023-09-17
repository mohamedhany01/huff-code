# Huffman Encoder/Decoder

<a name="readme-top"></a>

<!-- TABLE OF CONTENTS -->
<details open>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li>
      <a href="#build-and-start">Build and Start</a>
      <ul>
        <li><a href="#with-installing-angular-cli-globally">With Installing Angular CLI Globally</a></li>
        <li><a href="#without-installing-angular-cli-globally">Without Installing Angular CLI Globally</a></li>
      </ul>
    </li>
    <li>
      <a href="#usage">Usage</a>
      <ul>
        <li><a href="#encoding">Encoding</a></li>
        <li><a href="#decoding">Decoding</a></li>
      </ul>
    </li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## About The Project

The Huffman Encoder/Decoder is a web application that leverages the power of the Huffman coding algorithm to compress and decompress data efficiently. This project showcases the utilization of essential data structures like binary trees (Huffman tree), heaps (max heap), and hash maps. It is built using modern web development technologies, including the Angular framework, Angular Material UI, and TypeScript collections library.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Built With

- Angular
- Angular Material UI
- TypeScript
- TypeScript Collections
- HTML
- CSS

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- GETTING STARTED -->

## Getting Started

### Prerequisites

First we need [nodejs](https://nodejs.org/en/download/current), and to download needed packages will need `npm` or you can use `yarn`.

### Installation

1. Clone the repository using git command `git clone`
2. Install necessary packages to run the application
   ```sh
   npm install
   ```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- USAGE EXAMPLES -->

## Build and Start

### With Installing Angular CLI Globally

- To run the application run `npm run build`, then `npm run serve`
- To run the unit tests run `npm run test` or you can run headless mode with `npm run test:headless`
- To check lint issues run `npm run lint:check`, and to fix the issues run `npm run lint:fix`
- To check writing style issues run `npm run prettier:check`, and to fix the issues run `npm run prettier:fix`

### Without Installing Angular CLI Globally

- To run the application run `npm run build:fly`, then `npm run start:fly`
- To run the unit tests run `npm run test:fly` or you can run headless mode with `test:fly:headless`
- To check lint issues run `npm run lint:fly:check`, and to fix the issues run `npm run lint:fly:fix`
- To check writing style issues run `npm run prettier:fly:check`, and to fix the issues run `npm run prettier:fly:fix`

###

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Usage

To start use the project:

### Encoding

- The application will start with opening the encoder page.
- Write the text you want to encode in the text area, and click "Encode Text".
- The application will encode the text and open a new pop-up to download the encoded text and the key to decode the text (you need both of them to decode the text).

### Decoding

- You can switch to decoder by clicking on the lock icon over the text area in the encoder page.
- To decode the text you need two files:
  - The encoded text
  - The key (decoding table)
- Upload both files, and click "Decode Text"
- The application will decode the text and open a pop-up window to download the original text.

###

<p align="right">(<a href="#readme-top">back to top</a>)</p>
