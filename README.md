
## To run on your local ✨
Clone this repo

Add `.env.local` file in project root
with following past line

`REACT_APP_API_URL=http://localhost:8080/v1/`

And run following command
### Available Scripts

In the project directory, you can run:

#### `yarn`

Install project dependencies.

#### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.


#### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

### Directory Structure

```
├── src
│   ├── components
│   │   │   ├── Layout.tsx
│   │   │   ├── NavBar.tsx
│   │   │   └── ReportItem.tsx
│   ├── pages
│   │   |__ Home
|   |       |--Home.tsx
|   |       └──Home.util.ts
│   │   
│   ├── types
│   │   └── home.ts
│   ├── App.tsx
│   └── index.tsx
├── .env.local
├── .gitignore
├── package.json
├── README.md
└── tsconfig.json
```