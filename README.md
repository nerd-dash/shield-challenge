# ShieldChallenge

## Description

This is a simple challenge to test your skills in Angular development.

### Project Overview

- This project is a simple trivia list and a form to add new items to the list.
- More features are expected to be added in the future.

### Guidelines of the project

- The architecture is already defined to use a state management to integrate the API services and the view components.
- The design defined that ever new component should be wrapped into a card containing always a title and a content.

## Instructions

#### All the files you'll need for this solution are already created.

`list-service`:

- `getTrivia` Method returns an array of trivia items.
- `addTrivia` Method adds a new trivia item to the list.

`list-component` needs :

- [ ] An implementation to retrieve the items.
- [ ] The items should be displayed in the provided card component.
- [ ] The cards should be displayed horizontally, line-wrapped and with space between them.


`trivia-form` needs :

- [ ] An implementation to add new items to the list.
- [ ] The form card should be centralized in the page.
- [ ] `optional` The form may be reset after adding the new item.
- [ ] `optional` The form may have error messages if required fields are not filled.
- [ ] `optional` When submitting the form, create a default date for the trivia.

`app-trivia` optional :

- [ ] `optional` Change the color of the mat-card-title using a directive.
- [ ] `optional` Add the date of the trivia to the card, right side of the title.
- [ ] `optional` Format the date with a pipe to match E.G.: Jun 15, 2015.
