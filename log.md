# WDD442

This is the second server-side language course. It goes over RESTful design patterns, DBALs, Templating Engines, Oauth, and combing react with express.

## Week 1 -

This is a bit of a review week. Topics include CRUD operations, express routing, and RESTful.

## Week 2 -

This week is about Database Abstraction Layers (DBALs), Object Realtional Mapping (ORM), and Templating Engines.

## Week 3 -

For this week, we implement a templating engine into the project, and also learn about O Auth.

## Week 4 -

This week is about the final project. We integrate react into the project and style a front end application that uses the API to display all of the quizzes.

### Changes -

- Initial commit includes:
  - Completed 'Routing in Express' assignment.
  - Started 'Building a RESTful API' assignment.
  - Added files for additional models/controlers.
- Created default questions/choices models.
- Finished questions/choices controllers.
- Minor var name changes in questions/choices.
- Init sequelize.
- Generated models for quiz, question, choice.
- Removed old json models.
- Updated controllers to interface with sequelize.
- Added column names to migration.
- Added simple associations.
- Added weight column to quizzes.
- Updated controllers with new column names.
- Code syntax changes.
- Added Eta templating engine.
- Initial views setup.
- Added quizzes view.
- Finished quizzes CRUD functionality in the view.
- Added json response support to quizzes.
- Created questions views/CRUD functionality/JSON support.
- Created choices views/CRUD functionality/JSON support.
- Added GitHub Oauth view/controller.
- Added authentication to all api routes.
- Added login token table to db.
- Login Tokens now added to db on login.
- Added react app to the project.
- Added react boilerplate components for quizzes, questions, and home, login.
- Added cors to api.
- React now gets token from url and checks against db.
- Finished login component functionality.
- Home now displays quizzes when user is logged in.
- Added seeders to db for quizzes, questions, and choices.
- Quizzes now display questions and choices.
- Created logout component and functionality.
  - Removes token from local storage and db.
  - Redirects to login.
- Finished most of the functionality for the react app.
- First style pass for login component.
- Second style pass for login component.
- First style pass for Nav component.
- Switched to styled-components for styling.
- Second style pass for Nav component.
- First style pass for Home component.
- Fixed logout logic based on referer.
- Fixed login logic based on referer.
- Created link-as-button component.
- Created line component.
- First style pass for quiz component.
- Second style pass for quiz component.
- First style pass for home component.
- Tentative style completion.
- File structure change.
  - Created views folder.
  - Created components folder.
- Fixed quiz submit logic.
- Final styling maybe.
- Fixed login/logout logic, again.
- Small change to styling.

## Deployment -

- Moved changes to log file.
- Changed readme to give app preview.
- Added preview images to img folder.
- Modified app for deployment.
- Deployed app to heroku.
