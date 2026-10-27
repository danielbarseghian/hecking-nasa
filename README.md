# Astronomy APOD

A small astronomy webpage that shows NASA’s Astronomy Picture of the Day (APOD), including its title, image or video, and explanation. It also displays a live clock.

## Bugs

Today the nasa API in kinda buggy so it works very rarely but normally tomorow (28/10) should be working fine, they should have fixed the bugs

## How to use 

1. Install the project dependencies:

   ```bash
   npm install
   ```

2. Create a `.env` file in the project root and add your NASA API key:

   ```env
   VITE_NASA_API_KEY=your_nasa_api_key
   ```

   Replace `your_nasa_api_key` with your key. You can use `DEMO_KEY` for testing, but it has usage limits.

3. Start the development server:

   ```bash
   npm run dev
   ```

4. Open the local address shown in the terminal.

## Project files

- `index.html` — page structure
- `src/main.js` — clock and API request
- `src/style.css` — page styling
- `.env` — NASA API key, protecting it with my life tbh

