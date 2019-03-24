# Bloc Jams React Project

Bloc Jams is the first React Single Page Application (SPA) I built while going
through my apprenticeship at Bloc. It is an SPA for albums and music that uses
React Router to create a responsive page that also works on mobile devices.
First, I built the basic routes with React Router. Next, I built up the
functionality of the components controls using React. Finally, I styled the
application using bootstrap and css. Through this first SPA build I learned
about managing state and props, while building a responsive webpage.

## Built With

- [React](https://reactjs.org/): Javascript front-end library for UI (user
  interface) component rendering
- [React Router](https://github.com/ui-router/react): State based routing for
  React applications
- [Bootstrap](https://getbootstrap.com/): Mobile responsive styling

## Screenshots

### FullScreen Views

[![Bloc-Jams Home Screenshot](https://imgur.com/0MwifJ6.jpg)](https://imgur.com/0MwifJ6.jpg)
![Bloc-Jams Library Screenshot Two](https://imgur.com/aj0pJKX.jpg)
![Bloc-Jams Album Screenshot](https://imgur.com/cUpGjMC.jpg)

### Mobile Views

<!-- prettier-ignore -->
<img src="https://imgur.com/vQpZrSk.jpg" alt="Bloc-Jams Mobile View Home Screenshot One" width="300" height="500" /> <img src="https://imgur.com/BO8sgxq.jpg" alt="Bloc-Jams Mobile View Library Screenshot" width="300" height="500" /> <img src="https://imgur.com/frodwe2.jpg" alt="Bloc-Jams Mobile View Album Player Screenshot One" width="300" height="500" /> <img src="https://imgur.com/dCqBMEt.jpg" alt="Bloc-Jams Mobile View Album Player Track List Screenshot" width="300" height="500" />

## Assignment Checkpoints and Build Steps

### Checkpoint - Configuration

- Created boilerplate using create-react-app
- Set up git repository
- Incorporated supplied music and image assets

### Checkpoint - Routing

- Added react-router as a dependency
- Constructed routes for landing, library, and album
- Generateed links for landing, library, and album
- Created general components (imports and exports) for Landing, Library, and
  Album

### Checkpoint - Components: Landing

- Incorporated selling points with titles and descriptions for site landing page

### Checkpoint - Components: Library

- Included album data (Using static album data, rather than API JSON for now)
  and set to state
- Edited library to be a class with albums mapped out.
- Added route for individual albums with URL and passed parameters to Albums
  component
- Configured albums to be links using react-router-dom

### Checkpoint - Components: Album

- Imported albums from source data and created album as state
- Added album information layout in component
- Mapped song information to table with track, title, and duration

### Checkpoint - Audio Playback

- Built audio component from source data
- Added play and pause functions with set track function called and assigned to
  click function
- Set up click function for song component

### Checkpoint - Play Bar: Buttons

- Generated Play Bar class component and built up player buttons
- Implemented previous and next click functions to Album component
- Set up click functions (play/pause, previous, next) for Play Bar component

### Checkpoint - Play Bar: Range Inputs

- Added volume and time slider functionality
- Formatted display of time for current time and time remaining

### Checkpoint - Styling

- Incorporated Bootstrap to for responsive styling integration
- Added final display styling across application

## Author

Steven Thomson is a Fullstack Developer who recently transistioned back to the
U.S. If you would like to contact him:

- steven.thomson88@gmail.com
- [Steven Thomson's LinkedIn](https://www.linkedin.com/in/steventhomson1988/)

## Acknowledgements

Thank you to all of the artists who make their artwork availabe to share. Check
out the links below to find out more about the artist's whose images were used
in this project.

- [Bloc-Jams Artwork](https://unsplash.com/@darccide/collections)
