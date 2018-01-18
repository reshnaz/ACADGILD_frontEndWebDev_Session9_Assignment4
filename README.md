# S9A4

Note: All output related files are under "src/app" folder.

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.5.4.

## Problem Statement
1. Create a form with 3 inputs ,1 dropdown fields, and a button.
2. The drop down filed values should display on initialization using services.
3. The input and the dropdown fields should use a Two-Way Binding. Create a model
for the fields and initialize them on ngOnInit(). Add a CSS class for the required and
valid fields.
4. Create a function which will bind with the (ngSubmit).
5. Make all the fields required. The 2-input field should make use of Regex, either for
only accepting numbers or for accepting alphabets. The text filed should accept a
minimum and maximum length. The error message should be shown as the error
occurred. If the form is not valid, do not submit the value and disable the submit
button.
6. Create a service for sending and retrieving the data.
7. The submit button should be enabled once all the validation is passed, click on the
button and it should send the data in the parameter and should also display the data
in HTML.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
