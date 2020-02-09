*Please note this position is closed and we are not taking anymore new submissions.*

# Frontend software developer hiring exercise

This is a sample project for frontend skills assessment in our developer positions. 
The project was created using Angular `ng` code generators and Visual Studio Code.

[See the PDF for open position for frontend engineer: Angular/TypeScript](./frontend-engineer.pdf)

[More about the hiring process](https://github.com/miohtama/how-to-hire-developers)

- [What are we assessing here?](#what-are-we-assessing-here-)
- [How to complete this exercise](#how-to-complete-this-exercise)
  * [Pull request content](#pull-request-content)
- [Exercise](#exercise)
- [How to run code](#how-to-run-code)
  * [Development server](#development-server)
  * [Code scaffolding](#code-scaffolding)
  * [Build](#build)
  * [Running unit tests](#running-unit-tests)
  * [Running end-to-end tests](#running-end-to-end-tests)
  * [Further help](#further-help)

# What are we assessing here?

We want to ensure that all candidates have skills needed to work with complex Angular frontends

* Working with Angular framework: Creation of new components, interacting with services

* Code quality and communication: Comments, the naming of functions, readability

* Eye for user experience and design: Crafting page and responsive layouts, working with CSS frameworks

* Writing tests, both unit and end-to-end tests  

For smart and extra hard-working people, we will credit extra points 
for recommendations and new best practices we learn from you.

# How to complete this exercise

* This exercise should take an hour for an experienced Angular developer, somewhat longer if you have 
  not done Angular work recently.

* You might want to peek into Angular v8 documentation, [CLI](https://cli.angular.io/) and [Material](https://material.angular.io/) packages before diving in,
  especially if you have not been working with Angular before.

* Create a private clone of [this repository](https://github.com/miohtama/frontend-developer-hiring-exercise). 
  Make sure your clone is *private* as you do not want to show sloppiness by leaking your super-secret solutions to other
  candidates.

* Track how much time (hours, minutes) you spent on the exercise. This will not affect your application, but we will use this 
  to tune the hiring process and make sure the exercises are challenging, but not too easy. 

* Make a pull request against the repository you created yourself.

* When you are done, send an invitation to the repository to Github user `miohtama` ([me](https://twitter.com/moo9000))
  and also notify me via [email](mailto:mikko@fb.io)

* I will take a look at your work, make notes and let you know the feedback. There are two possible outcomes

    - The hiring process continues with you and you will be invited to a video interview 

    - The exercise outcome did not match the expectations, but we will let you know if there are other open positions
      in organisation that might be suitable for your resume 

    - Give us 1-2 business days to get back to you after your email where you state the exercise is complete

## Pull request content 

Things we would like to see in the pull request commentary

* What what was changed and why

* The screenshot of fixed issues and changes in the UI

* How much you spent time on it

* Any good ideas and recommendations you came up while working on it

# Exercise

The exercise application has a sign-up form as in the screenshot.

![A sample screenshot](https://raw.githubusercontent.com/miohtama/frontend-exercise/master/screenshot.png)

The task is to add a new field on this sign-up screen and make the sign-up form prettier.

1. Add a field asking users for their international mobile phone number. Make sure this input is user-friendly 
   and works with people who have no clue what's an international phone number format. You are free to 
   pick any field, component or framework to be included in this project, even if the choice 
   would not make sense from the maintenance perspective: jQuery/Bootstrap is ok if you think can make it work.

2. The inputted phone number should be passed to `UserService` when the user registers. When the number is stored,
   name sure it is normalised in plus format like `+3581231234`, no spaces or funny characters in the string.  

3. Write an end-to-end test that checks the phone number was correctly saved. 
   You might need to add a control displaying the telephone number back in the user interface somewhere.
   This test must be executed when the command `ng e2e` is run. (I do not like Protractor for
   running tests, but it is the default in Angular schematics.)

4. Make the sign-up form pretty. Currently, as you see, the form lacks good styling. 
   The page needs to look pretty and behave well both web and mobile. Element sizes,
   paddings, margins and fonts look harmonious. This 
   assess that you are able to accomplish basic UI design work. The context of the 
   form is an imaginary eSports or video game site.

# How to run code

The assessment is based on Angular 8 scaffolding. 

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

Tested on Node v11.0.0.

Example:

```
npm install
ng serve
```

Should give you

```
10% building 3/3 modules 0 activeℹ ｢wds｣: Project is running at http://localhost:4200/webpack-dev-server/
ℹ ｢wds｣: webpack output is served from /
ℹ ｢wds｣: 404s will fallback to //index.html

chunk {main} main.js, main.js.map (main) 71.4 kB [initial] [rendered]
chunk {polyfills} polyfills.js, polyfills.js.map (polyfills) 264 kB [initial] [rendered]
chunk {runtime} runtime.js, runtime.js.map (runtime) 6.15 kB [entry] [rendered]
chunk {styles} styles.js, styles.js.map (styles) 179 kB [initial] [rendered]
chunk {vendor} vendor.js, vendor.js.map (vendor) 6.98 MB [initial] [rendered]
Date: 2020-02-04T10:04:44.023Z - Hash: 6e5aa8eb8c49ec6ad889 - Time: 10113ms
** Angular Live Development Server is listening on localhost:4200, open your browser on http://localhost:4200/ **
ℹ ｢wdm｣: Compiled successfully.
```


## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

You can also run tests under [Visual Studio Code with debug/breakpoint support with these instructions](https://github.com/microsoft/vscode-recipes/tree/master/Angular-CLI#debug-end-to-end-tests).

* Start `ng serve` on a background

* Setup `ng e2e` configuration within a Visual Studio Code debug launcher. `launch.json` example:

```json
{
    "version": "0.2.0",
    "configurations": [
        {
            "type": "node",
            "request": "launch",
            "name": "Launch Program",
            "skipFiles": [
                "<node_internals>/**"
            ],
            "program": "${workspaceFolder}/serve",
            "preLaunchTask": "tsc: build - tsconfig.json",
            "outFiles": [
                "${workspaceFolder}/dist/out-tsc/**/*.js"
            ]
        },

        {
            "name": "ng e2e",
            "type": "node",
            "request": "launch",
            "program": "${workspaceFolder}/node_modules/protractor/bin/protractor",
            "protocol": "inspector",
            "args": ["${workspaceFolder}/e2e/protractor.conf.js"]
          }                
    ]
}
```

* Add a breakpoint by using the red dot in a gutter in Visual Studio Code editor

* Launch `ng e2e` by pressing the debug run button in Visual Studio Code

* Now any hit breakpoint should pop up the debugger within Visual Studio Code

## Further help

To get more help contact me via email or [poke me on Twitter](https://twitter.com/moo9000).
