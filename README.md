# Match Hub Coding Assesment
![](https://github.com/Justinhoejj/matchHubCodingAssesment/blob/main/QuestionnaireSystemUI.jpg)

### Built With
* [React.js](https://reactjs.org/)
* [Django](https://www.djangoproject.com/)
* [Bootstrap](https://getbootstrap.com)

<!-- GETTING STARTED -->
## Getting Started
This questionnaire system is a single application that utilises django restful framework and React.js for the front end.

### Prerequisites
You will require node.js and python3 to run this application. Follow the guides below to install if you do not have them on your device.

*[Install node.js](https://www.e2enetworks.com/help/how-to-install-nodejs-npm-on-ubuntu/)
*[Install python3](https://phoenixnap.com/kb/how-to-install-python-3-ubuntu)
*[Install django rest framework](https://www.django-rest-framework.org/)


### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/Justinhoejj/matchHubCodingAssesment.git
   ```
2. Install NPM packages
   ```sh
   npm install
   ```
3. Configure babel
   Create `.babelrc` in the root folder and fill it with the code snippet below
   ```babelrc
   {"presets": ["@babel/preset-env", "@babel/preset-react"],
    "plugins": ["transform-class-properties"]}
   ```
4. Build application in in questionnairesystem     
   From the root folder:
   ```sh
   cd questionnairesystem
   ```
   ```sh
   npm run build
   ```
5. Run application
   ```sh
   python3 manage.py runserver
   ```

Application should be hosted on localhost port 8000 http://127.0.0.1:8000/

## Usage

Create a new response or view all responses by nagivating through the header. 

To edit an existing response click edit on the target response in view all responses tab.
To delete an existing response click delete on the target reponse in view all responses tab.

>**Note**: All questions must be answered before submiting or saving.
