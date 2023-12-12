<br />
<div align="center">
    <a href="https://github.com/tchan128/svg-logo-maker"><img src="./assets/logo.png" alt="Logo" width="80" height="80"></a>
    <h3 align="center">SVG Logo Maker</h3>
    <p align="center">
        The motivation for this project is to create a easily accessible SVG logo generator for users. SVG is one of the highest quality image for any graphics and logos and it's very important for users and businesses to ensure their graphics are as high quality as possible. Thus, having an easy way to create these logo, even as a temporary placeholder, is very helpful. I built this project it allows users to quickly create a SVG logo according to their input which is very efficient. This app is a solution for users who are looking to create a logo quickly with their choice of letter, shape, and color. Through this project, I learned how to use classes and inheritance to create new objects. I also learned how to work with SVG files. One big piece I learned is the importance of testing and how to write tests and run these files. This is an important concept and piece of workflow to understand and execute well.
        <br/>
        <br/>
        <a href="https://github.com/tchan128/svg-logo-maker"><strong>Explore the docs »</strong></a>
    </p>
</div>

<details>
  <summary>Table of Contents</summary>
  <ol>
    <li><a href="#about-the-project">About The Project</a></li>
    <li><a href="#installation">Installation</a></li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#visuals">Visuals</a></li>
    <li><a href="#test">Test</a></li>
    <li><a href="#credits">Credits</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>

## About the Project

This project is a SVG logo maker. This project is built with Javascript & Next.js. In this project, there are 4 main components: Creating a logo based on user input of i) letters they want, ii) shape they want, iii) color of text, and iv) color of shape. Once the user submits their responses, the program will generate a `.svg` file of the logo with the requested input. 

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Installation

Nothing is needed to install this project. To execute this program, you would need to clone a copy on your laptop and run `node index.js`. It will then have you answer 4 prompts to generate the desired logo.

<p align="right">(<a href="#readme-top">back to top</a>)</p>
 
## Usage

In this project, a SVG logo maker is built to allow users to create SVG logos easily and efficiently based on their input. Whether it is for fun or for use in projects or products, it is something that can be easily created and customized. 

When `node index.js` is ran, it will prompt the user for four things:

1) Letters to include in the logo. This can be up to 3 letters. 

2) Color of text. This can be a general word like "blue" or a hexcode like "#0000FF"

3) Shape of logo. This is a checkbox that allows the selection of either i) square, ii) circle, or iii) triangle.

4) Color of the shape. This can be a general word like "blue" or a hexcode like "#0000FF"

Afterwards, it will prompt a success message and you will see a new file called `logo.svg` which you will be able to open in a browser with the desired customizations. 

Here is a video of how to use the app: https://share.vidyard.com/watch/kx4frdd6YQSwy7M4qnkGtZ?

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Visuals




## Test

This project had 9 tests that were created in the `shapes.test.js` file. There were 3 categories of tests: shape generation, text size generation, and text and text color generation. 

- The first three tests ensures that the correct color and shape of the logo is generated
- The next three tests ensures that the correct font size is being used depending on how many letters will be in the logo 
- The last three tests ensures that the text and text color provided by the user will be displayed correctly 


<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Credits

This SVG logo maker was coded from scratch.  

Here are some websites that helped with the build of this logo maker:

- How to make max length input for prompt: https://www.npmjs.com/package/inquirer-maxlength-input-prompt
    - This required installing: npm i inquirer-maxlength-input-prompt 
- How to make SVG files open on browser: https://developer.mozilla.org/en-US/docs/Web/SVG/Namespaces_Crash_Course
- How to create shapes: https://developer.mozilla.org/en-US/docs/Web/SVG/Tutorial/Basic_Shapes

README icon is found here: https://www.flaticon.com/free-icon/ai-application_11698485?term=picture+generator&page=1&position=2&origin=search&related_id=11698485

The README template is found here: https://github.com/othneildrew/Best-README-Template

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## License

This repo uses the MIT License. 

Please refer to the LICENSE in the repo for more information.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Contact

Tiffany Chan - tchan12899@gmail.com

Project Link: https://github.com/tchan128/svg-logo-maker

<p align="right">(<a href="#readme-top">back to top</a>)</p>