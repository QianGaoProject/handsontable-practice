# HandsonTable-practice-test

[Project link](https://qiangaoproject.github.io/handsontable-practice/build/index.html)

## Installation
* Download [node.js](https://pip.pypa.io/en/stable/)
* Colne the repo
```bash
git clone https://github.com/QianGaoProject/handsontable-practice.git
```
* Use the package manager [npm] to install all dependencies.

```bash
npm install
```

## Usage

Run dev
```bash
npm run dev
```

Build a website
```bash
npm run build
```

## Functionality

- "Add an Option" area functionality:
    - Adding an option to a list
        - The user enters an option in the text box
        - The user clicks “Add an option and the option is added to the list
    - Deleting an option to a list
        - The user clicks the “x” by an option and it is removed from the list & handsontable      
    - Searching 
        - As the user enters text in the search box, the list is filtered to display only options matching the text entered thus far


- The page is responsive



 

## Built With

* use React for JavaScript functionality
* Use redux for state management
* Use typescript
* Use webpack to create the project instead create-react-scripts
* Use scss/sass for css
* Use local storage to persist the entered items in the browser
* Use css-in-js lib(styled component) instead scss/sass




## License
[MIT](https://choosealicense.com/licenses/mit/)