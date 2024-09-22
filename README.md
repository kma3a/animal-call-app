# Animal Call App

## Purpose

The purpose of this application is to be able to visualize the data gathered for animal noises. I decided to make this an electron desktop application because I wanted to make something that I could give to the person collecting the data and they would not have to worry about maintenance of a website.

## Commands

| Command | Description | 
|---------|-------------|
| npm start | builds the app in the dist folder and starts the app in electron |
| npm run build-electron | compiles the ts files into js files in the distt folder | 
| npm run copy-html | copies the html file into the dist folder |

## Setup Notes

I tried to use [this old tutorial](https://medium.com/free-code-camp/creating-an-electron-app-using-angular-and-sqlite3-24ca7d892810) to set up the application with sqlite3. I had to reset up the application because `electron-forge init electron-angular-sqlite3 --template=angular2` was too old by about 7 years. I used the electron portion of the application right now with some updates. For example, I used getDataSource instead of createConnection because it is deprecated.

There was an issue with the experimentalDecorators in the `animal.schema.ts` file. I ended up having to go to my settings in VSCode and enable them to solve the issue.