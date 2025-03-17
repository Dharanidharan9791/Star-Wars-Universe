# Star Wars Universe

This project is a React-based web application that provides an interactive way to explore the Star Wars universe. It fetches data from the SWAPI (Star Wars API) and allows users to browse characters, view detailed information, and manage their favorites list. The application is built with modern web technologies like React, Redux Toolkit, and TailwindCSS, ensuring a responsive and user-friendly experience.

## Features

- **Character Browsing**: Explore a paginated list of Star Wars characters with their basic details.
- **Character Details**: View in-depth information about a character, including their homeworld, films, vehicles, and starships.
- **Favorites Management**: Add characters to a favorites list, edit their details, or remove them.
- **Responsive Design**: Optimized for various screen sizes using TailwindCSS.
- **Error Handling**: Gracefully handles API errors and loading states with user-friendly messages.

## Setup Procedure

1. **Clone the Repository**:
   ```bash
   git clone <repository-url>
   cd Star-Wars-Universe
   ```

2. **Install Dependencies**:
   Install all required packages using npm:
   ```bash
   npm install
   ```

3. **Start the Development Server**:
   Launch the application locally:
   ```bash
   npm run dev
   ```
   Open your browser and navigate to `http://localhost:5173`.

4. **Build for Production**:
   Generate a production-ready build:
   ```bash
   npm run build
   ```

5. **Preview the Production Build**:
   Test the production build locally:
   ```bash
   npm run preview
   ```

## Application Flow

1. **Home Page**:
   - Displays a grid of character cards with pagination.
   - Each card includes the character's name, gender, and basic details.
   - Users can add or remove characters from their favorites list directly from the card.

2. **Character Details Page**:
   - Provides detailed information about a selected character.
   - Includes data such as homeworld, films, vehicles, and starships.
   - Displays loading and error states while fetching data.

3. **Favorites Page**:
   - Lists all characters added to the favorites list.
   - Allows users to edit character details (e.g., gender, height) or remove them from the list.
   - Includes a fallback message when no favorites are present.

4. **Global Components**:
   - **Header**: Contains navigation links to the home and favorites pages.
   - **Footer**: Displays copyright information.
   - **Pagination**: Enables navigation between pages of characters.
   - **LoadingErrorWrapper**: Handles and displays loading or error states for API calls.

## Test Coverage

The project includes comprehensive unit tests to ensure the reliability of key components and features. Testing is implemented using Vitest and React Testing Library.

### Areas Covered:

- **FavoritesList**:
  - Verifies the empty state when no favorites are present.
  - Ensures favorite characters are displayed correctly.
  - Tests the functionality to remove characters from the favorites list.

- **LoadingErrorWrapper**:
  - Confirms proper rendering of loading, error, and success states.

- **Pagination**:
  - Validates the display of the current page and total pages.
  - Ensures navigation buttons are enabled/disabled appropriately.
  - Tests the `onPageChange` callback when buttons are clicked.

- **CharacterCard**:
  - Checks the display of character details.
  - Tests the toggle functionality for adding/removing favorites.

### Running Tests:

To execute all tests:
```bash
npm run test
```

To run tests in watch mode for continuous feedback:
```bash
npm run test:watch
```

## Technologies Used

- **Frontend**: React, React Router, Redux Toolkit, TailwindCSS
- **API**: SWAPI (Star Wars API)
- **Testing**: Vitest, React Testing Library
- **Build Tool**: Vite

## Future Enhancements

- Add search functionality to filter characters by name.
- Implement additional pages for planets, starships, and species.
- Enhance the UI with animations and transitions.
- Improve test coverage for edge cases and asynchronous operations.
