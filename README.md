## **Explanation**

- **Highlight**: Use of React hooks for state and effects, Axios for async data fetching, and Bootstrap for responsive UI.
- **Emphasize**: Clean separation of concerns—search, display, and layout are in their own components.
- **Mention**: Accessibility and responsiveness are considered (clear button, mobile-friendly layout).
- **Point out**: The app is easy to extend (e.g., add more weather details, support for more units, etc.).

---

## **Packages Used**

- **React**: The core library for building user interfaces with components and hooks.
- **Axios**: For making HTTP requests to the OpenWeather API.
- **Bootstrap**: For responsive, mobile-first UI and utility classes.
- **Custom CSS**: For background video and responsive tweaks (Lander.css).

---

## **Component Overview**

### 1. **Lander.jsx**
- **Purpose**: Main layout and entry point for the weather UI.
- **Features**:
  - Renders a full-screen looping video background.
  - Overlays a centered container with the app title, "Powered by OpenWeather" line, the search box, and the weather card.
  - Uses Bootstrap classes for layout and spacing.
  - Holds the main weather state, which is passed to the `WeatherCard` component.
- **Key Points**:
  - Responsive design: The container adapts to screen size.
  - Imports and uses `Search` and `WeatherCard` components.

---

### 2. **Search.jsx**
- **Purpose**: Allows users to search for a city and fetches suggestions as they type.
- **Features**:
  - Controlled input field for city search.
  - Shows a clear ("×") button inside the input when there’s text.
  - Fetches city suggestions from the OpenWeather Geocoding API using **Axios** and **useEffect** (runs on every input change).
  - Displays suggestions in a dropdown; clicking a suggestion fetches weather data for that city.
- **Key Functions**:
  - **useEffect**: Watches the `query` state and fetches suggestions when it changes.
  - **handleInput**: Updates the `query` state as the user types.
  - **handleSelect**: Fetches weather data for the selected city and updates the parent’s weather state.
- **Accessibility**: The clear button is accessible and focuses the input after clearing.

---

### 3. **WeatherCard.jsx**
- **Purpose**: Displays the current weather for the selected city.
- **Features**:
  - Shows city name, temperature, feels like, humidity, sunrise, and sunset.
  - Allows toggling between Celsius and Fahrenheit.
  - Includes a close ("×") button to remove the card.
  - Responsive and visually clean, using Bootstrap for layout.
- **Key Functions**:
  - **formatTime**: Converts UNIX timestamps to readable AM/PM times, considering timezone offset.
  - **Unit Toggle**: Switches between Celsius and Fahrenheit for temperature display.

---

### 4. **Lander.css**
- **Purpose**: Handles the background video, overlay, and responsive tweaks.
- **Features**:
  - `.lander-bg` and `.lander-video`: Ensures the video covers the entire background.
  - `.lander-overlay`: Adds a semi-transparent overlay for readability.
  - Media queries: Adjusts padding and width for mobile screens.
  - Ensures `.card` and overlay containers are responsive.

---

## **How the App Works (Flow)**

1. **User opens the app**: Sees a video background, app title, "Powered by OpenWeather", and a search box.
2. **User types a city**: Search.jsx fetches and displays city suggestions in real-time.
3. **User selects a city**: The app fetches current weather data for that city and displays it in WeatherCard.jsx.
4. **User can toggle temperature units** or close the weather card to search again.

---

## **Key React Concepts Used**

- **State Management**: `useState` for local state in each component.
- **Side Effects**: `useEffect` in Search.jsx for API calls on input change.
- **Props**: Passing data and callbacks between parent (Lander.jsx) and children (Search.jsx, WeatherCard.jsx).
- **Refs**: `useRef` for focusing the input after clearing.
- **Conditional Rendering**: Only shows the weather card if weather data is present.

---

## **API Usage**

- **OpenWeather Geocoding API**:  
  - Endpoint: `https://api.openweathermap.org/geo/1.0/direct`
  - Used for city suggestions as the user types.
- **OpenWeather Current Weather API**:  
  - Endpoint: `https://api.openweathermap.org/data/2.5/weather`
  - Used to fetch weather details for the selected city.

---



**In summary:**  
This app demonstrates modern React practices, clean component structure, real-world API integration, and responsive design—all essential skills for a front-end developer.
