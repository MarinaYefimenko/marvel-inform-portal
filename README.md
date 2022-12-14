Marvel Comics Information Portal - React SPA:

Layout was made using Bootstrap and SCSS. Getting data using asynchronous fetch requests to the Marvel API.
The application is developed on the basis of functional components and hooks, one custom hook was written to manage the state.

Implemented components for selecting a random character from the database, displaying a list of all characters with an additional upload,
displaying information for each character on a user click. Added a controlled search form.
Component state management is implemented on the principle of a finite state machine using switch/case.

Navigation is done with React Router, page titles with Helmet. Pages are dynamically imported via React Lazy, animation React Transition Group.
Implemented user notification about loading process and errors, added 404 page. Error Boundaries to encapsulate component errors.
