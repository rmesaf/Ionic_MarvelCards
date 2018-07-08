# Marvel Cards

Mobile APP developed with Ionic for testing Marvel Developers API

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

You need to have installed:

* [Git](https://git-scm.com/downloads)
* [Node.js](https://nodejs.org/en/download/) (with NPM)
* [Ionic](https://ionicframework.com/)
* [Cordova](https://ionicframework.com/)

### Installing

Installing this project:

Clone this project using this command on a terminal:
```
git clone https://github.com/rmesaf/marvel_cards.git
```

Install all dependencies usign this command on a terminal:
```
npm install
```

Run the project with
```
cd marvel_cards
ionic serve
```

Note: You may need to add “sudo” in front of any global commands to install the utilities (MAC Users).

### Deploying
Build platforms
```
ionic cordova build [<platform>] 
```

Run Project
```
ionic cordova run [<platform>] --prod
```


NOTE: You will need to set the variables ANDROID_HOME, GRADLE in order to build an Android Version. This project was developed on IOS

## Built With

* [IONIC](https://ionicframework.com/) - The hybrid framework used
* [NPM](https://www.npmjs.com/) - Package Manager

## Authors

* **Ricardo Mesa** - *Initial work* 

## Acknowledgments

* Hat tip to anyone who's code was used.
