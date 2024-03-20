## React.js Full Course in Bangla.

#### Lectured by: Anisul Islam Rubel & Bro Code.

<hr>

#### Basic React Knowledge

- `node_modules` folder is external library and package's, build tool's, utility
  library etc, it's just contain external library our project relies on.
- we import app.jsx to main.jsx so that we can access App.jsx.
- remember we need to export statement in the App.jxs file.

#### Step By Step Environment setup.

- First i install node js,
- than change directory nad run the code `npm create vite@latest`,
- than i choose `react`,
- and than i choose `javascript`,
- than `cd` what i was create for my react project file name,
- and than run the code `npm install`,
- after run this code `npm run dev`,
- <b>now environment is ready</b>.
- we export because what we want use in the future in every component.
- we use import because what we take from component.
- [Nodejs install from ubuntu](https://youtu.be/NS3aTgKztis?si=IPOV09zYbFjHcmj-)

#### Restart Server and some shortcut.

- first i need to ensure to right `pwd`
- than `npm run dev`
- it will start the server.
- [if clone a React reppo i have to `npm install` in terminal]
- `rcc` is command for class component make.
- `rfc` is for functional component make.

## List of learning by file name in this reppo.

- `App.jsx` in that file we display all file.
- `practice1.jsx` from that file we practice inline CSS, and also use Public
  folder CSS ,and Source Folder CSS, also use const value.
- `Card.jsx` in that file we learn how to add css style in card image, and add
  image.
- `Student.jsx` in that file we learn using 'proops' proops is like
  agunment(string, num, boolean) value pass.
- `Proptype.jsx` in that file we learn we can define prop type and if value is
  other type it show error in the browser console.
- `default_prop.jsx` in this file we learn if we set default value in prop, and
  don't give any value in prop automatically show default value.
- `UserGreeting.jsx` in this file we learn prop condational rendering by true
  false, we also use const value in this practice file.
- `UserGreeting.jsx` also in that file we use prop value and Boolean from
  'App.jsx page'.
- `Button.jsx` we don't finish practice this file from bro code (Click event).
- `destruc.jsx` from this file we use Destructuring, with destructuring we don't
  have to use `prop.` we can just call the name of the variable.
- `mapping_data.json` we take json for storing data, we learn how to write json
  file.
- `mapping_data.jsx` in this file we Display the josn file data by array style.
- `mapping.jsx` in this file we display the json file data using map method.
- `mapping_card.jsx` this file is for practicing mapping json file data main
  practice file is `mapping.jsx`
- `nasted_map.jsx` in this file we practice nasted mapping json data.
- `class_component.jsx` in this file we practice class component, but regularly
  we use functional component, we practice it for learning purpose(and i have to
  display it from 'main.jsx' because createRoot is in 'main.jsx' not in
  'App.jsx').
- `Icon.jsx` in this file we practice icon in react (before we use icon we have
  to install 'icon' package).
- `React_boostrap.jsx` in this file we practice boostrap in React also add
  inline css style.
- 'Count_App' we make it in file `State.jsx` in this file we practice state ,
  setState and event handler (using class not function,) (We make count app in
  this practice file).
- 'condational_rendering' in that file we practice Condational rendering,
  ternary, short circuit ().
- 'Event_Handeler' from this file we practice OnChange Event Handler(it show the
  input text in realtime).
- 'Hook_useState' in this folder we larn Different between
  `Functional and class component`
- 'Update_state' in this folder we learn previous example `Functional component`
  'useState' use different way or update way.
- 'Event_bubbling' in this folder we will learn how to stop calling parent
  component if we call chaild.(if we stopPropagation child will not call parent)
- 'React_form' in this folder we will learn useing Form in React and we control
  `state` and show in 'input value' (also practice module CSS in form).
- 'Passing_data' from this folder we will learn passing data from child to
  parent.
- 'State_lifting' from this file we learn state lifting like passing data.
- 'State_lifting_principal' from this file we learn data passing child to parent
  but complex, and todo practice.

## What was my fault and what i learn in this project.

- i was forget to change directory to my new making react file and chack `pwd`
- in function return i take <div> to take multiple string.
- and i can use () in return funtion.
- external CSS file should be on Public folder.
- i was not make css file in public folder and link to html file, that's why it
  wasn't work.
- for scr style file i have to import form that file i use in css.
- in function return we use parenthesis `()`;
- if i need js const in function i need to take const or variable in the
  function `{}`
- in `{}` we can use js builtIn function also.
- we use javascript function like uppercase function.
- if we use image in react we have to import image first, than use in js
  variable name by calling.
- we use proops as JS object.
- using proops we can pass new value in the component.
- using proops sring can be in `name="string"` but number should be in
  `age={26}`
- Default Prop will can show default set value.
- by prop calling we can call variable form other page.
- Remember we have to import the json file where we want to display the json
  file data.
- i learn how to all inside file from another file when i was practicing json
  data file mapping.
- i learn class component, it's similar like functional component.
- i was using constructor function out side of class component and that was my
  fault.
- i was using two return and it show error i should have used one return.
- we also can use ternary operator in the return directely.
- i learn in form if i use `required` without data passing form can't be
  submitted.
- i learn with `ctrl + F5` i can clear cash in the browser.
- i was using `{}` in map function, and i was wrong i should use `()`
- ([...todo]) we use sprade operator use it will show also before all todo and
  right now todo.
- i have learn sometimes if i add unnecessary `import` in the page can show
  error or not run the page.
- i have face error when i do't use `uuid` form web site but form video cause
  maybe it wasn't update code.
- i import `React` 2nd time again and it was crush the page. (i should take
  `import react` only one time in a page).
- i learn if i don't make button function yet, a call the function in the button
  it will show error in the whole page.
- i was using {{} && {}} and it won't work it should be like {{} && <p>{}</p>}  
- If we want to pass key to a Fragment, we can’t use the <>...</> syntax.
  we have to explicitly import Fragment from 'react' and render <Fragment key={yourKey}>...</Fragment>.

###### Done Task For Today
- Learning React useRef Hook in functional component.
- Practicing useRef Hook in functional component.
- Learning useRef Hook | useReducer Hook.
- Practicing UseReducer Hook.
- Learning prop drilling.
- Practicing prop drilling.
- Learning React Hooks | useContext Hook
- 
