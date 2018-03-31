# _Doctor Lookup_

##### Web app that uses the BetterDoctor API to allow users to search for doctors in their area by medical issue or doctor name. 03/23/2018

## By Michael Albers

# Description
This is the Epicodus weekly project for week 2 of the JavaScript course. It uses API calls to gather data and generate results. It's purpose is to display understanding of API calls.

## _Doctor Lookup_
* Allows the user to look up doctors in the Portland area by medical issue or doctor name.

## Specifications

| Spec | Input | Output |
| :---------------| :---------------| :---------------|
| Search for a doctor by medical issue | "foot" | List of doctors that handle foot injuries |
| Seach for a doctor by name  | "kim" | Returns a list of doctors with "kim" in their name "Kim Johnson, Johhny Kim, Kimberly Kimkim" |



## Technologies Used
------------

* HTML
* CSS
* Bootstrap
* JavaScript
* JQuery
* Karma
* Jasmine
* Node JS
* ES Lint
* Webpack
* Babel

Installation
------------

```
$ git clone https://github.com/mikealbers/DoctorLookup
```

_Requires node.js; instructions to install:_ https://www.learnhowtoprogram.com/javascript/getting-started-with-javascript-2f9a73dc-b7f5-4a22-9101-e69d49f552ac/installing-node-js

Get a free API key from https://developer.betterdoctor.com/

Create a new file named .env in the root directory of this repository containing the following code
 ```
exports.apiKey=[YOUR API KEY HERE]
```

Install required npm packages and dependencies:

```
$ npm install
$ npm npm install dotenv-webpack --save-dev
$ npm run build
```

Start the webserver:
```
$ npm run start
```

## Known Bugs

  * _No known bugs at this time._

## Support and contact details

  _To suggest changes, submit a pull request in the GitHub repository._

### License

*MIT License*

Copyright (c) 2018 **_Michael Albers_**

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
