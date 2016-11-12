## 1: Install NodeJS:
Downloadlink:
https://nodejs.org/en/download/

Windows:
Choose "Windows Installer (.exe) 64-bit" unless you have an older 32-bit system.

Mac:
Choose "macOS Installer (.pkg) 64-bit"

Once you've downloaded the .exe or the .pkg, double click it to install it.

## 2: Open a command line

Windows:
Click the windows icon at the bottom left of the screen and type "Command Prompt".
Once windows suggests the Command Prompt program, click it.

Mac:
Open Launch Pad and type "Terminal" once macOS suggests the terminal, click it.

## 3: Test if Node works
In your command line type "node -v".
The output of this should be something like v6.9.0.
If you get anything similar to this, you have sucessfully installed nodejs!

## 4: Install Create React App with NPM (node package manager)
In your command line type "npm install -g create-react-app".
This installs the great create-react-app utility which will help us to set up our react application.

## 5: Create an application with create-react-app
In your command line type "create-react-app NameOfMyApplication"
You can replace NameOfMyApplication with a name of your choosing.

This will create everything you need for your react application and will take a few minutes.
Get up, get a coffee or help others ;)

## 6: Navigate into the newly created project directory
In your command line type "cd NameOfMyApplication".
You will need to substitute the name you choose in the previous step here.
The "cd" command stands for "change directory" and allows you to navigate through the file system with your command line.

## 7: Start your application
Once your command line is in the folder of the application we just created, type "npm start".
This will start a development server on your computer and open a browser tab with your React app in it.

If you see a page saying "Welcome to React" in your browser everything worked and you now have a running React Application.

## 8: Start programming
Open the App.js file in your favourite code editor.
The App.js file is located in the "src" folder of your newly created project.
Here you can now start editing the code. Hit save and see it update in real time in your browser.
You can start by changing the "Welcome to React"-text to something like "MoinWorld" ;)

Good code Editors are:
Sublime Text 3 (https://www.sublimetext.com/3)
Atom (https://atom.io/)

## 9: Add the animal service to your project
In your `src` folder create a new file and name it `AnimalsService.js`.
Then copy the code below into the newly file and save it.
Once you have done so you can import the AnimalsService like so into your app `import AnimalsService from './AnimalsService.js'`.
You can use it by calling the functions `AnimalsService.getAnimalPair()` or `AnimalsService.getAllAnimals()`.
`

    const serverBaseUrl = 'http://139.162.162.59:3500';

    class AnimalsService {
        static getAllAnimals() {
            var request = new XMLHttpRequest();
            request.open('GET', serverBaseUrl + '/animals', false);
            request.send(null);

            const response = JSON.parse(request.responseText);
            response.animals.forEach((animal) => {
                animal.url = serverBaseUrl + animal.url;
                return animal;
            });

            return response
        }

        static vote(winner) {
            var request = new XMLHttpRequest();
            request.open('POST', serverBaseUrl + '/vote/' + winner.image, false);
            request.send(null);

            return JSON.parse(request.responseText);
        }

        static getAnimalPair() {
            var request = new XMLHttpRequest();
            request.open('GET', serverBaseUrl + '/animalpair', false);
            request.send(null);

            const response = JSON.parse(request.responseText);
            if(response) {
                if (response.animal1) {
                    response.animal1.url = serverBaseUrl + response.animal1.url;
                }
                if (response.animal2) {
                    response.animal2.url = serverBaseUrl + response.animal2.url;
                }
            }

            return response;
        }
    }

    export default AnimalsService;
`
