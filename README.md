# Frontend software developer hiring exercise

This is a sample project for frontend skills assessment in our frontend software developer positions. 
This project was using Angular `ng` code generators and Visual Studio Code.

[See the PDF for open position for frontend engineer: Angular/TypeScript](./frontend-engineer.pdf)

[More about the hiring process](https://github.com/miohtama/how-to-hire-developers)

# What are we assessing here?

We want to sure that all candidates have the skillset needed to work with complex Angular frontends

* Working with Angular framework: Creation of new components, interacting with services

* Code quality and communication: Comments, the naming of functions, readability

* Eye for user experience and design to produce basic styling and responsive layouts, working with CSS and frameworks

* Can write tests, both unit and end-to-end tests  

We will also give you extra points for all the recommendations that are given to us, what comes
to code structure, ideas, etc.

# How to complete assessment

* You might want to peek into Angular v8 documentation, [CLI](https://cli.angular.io/) and [Material](https://material.angular.io/) packages before diving in

* Create a private clone of this repository. Make sure it is *private* as you do not want to show sloppiness by leaking your super secret solution to other
  candidates

* Track how much time (hours, minutes) you spent on the exercise. This will not affect your application, but we will use this 
  to tune the hiring process and make sure the exercises are challenging, but not too easy.

* Make a pull request against the repository you just created 

* when you are done, Send an invite to the repository to Github user `miohtama`

* I will take a look, make notes and let you know the feedback. There are two possible outcomes

    - You will be invited to a video interview and continue the hiring process

    - We will let you know that the exercise was not completed properly, but we might consider you for other positions 

## Pull request content 

Things we would like to see in the pull request commentary

* What what was changed and why

* The screenshot of fixed issues and new screens

* How much you spent time on it

# Exercise

The application has a sign up form as in the screenshot.

1. Ask users for their international telephone number

2. This number should be stored 

3. Write an end-toend test that checks the phone number was correctly saved. You might need to add a control displaying the telephone number back to the user somewhere.

4. Make the sign up form pretty. Currently it lacks all styling. It needs to look pretty and behave well both on web and mobile.


# How to run code

The assessment is based on Angular 8 scaffolding. 

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

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

* Setup `ng e2e` configuration within Visual Studio Code debug launcher. `launch.json` example:

```json
{
    // Use IntelliSense to learn about possible attributes.
    // Hover to view descriptions of existing attributes.
    // For more information, visit: https://go.microsoft.com/fwlink/?linkid=830387
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

* Launch `ng e2e` through Visual Studio Code

* Now any hit breakpoint should pop up the debugger within Visual Studio Code

## Further help

To get more help contact me via email or [Twitter public message](https://twitter.com/moo9000).
