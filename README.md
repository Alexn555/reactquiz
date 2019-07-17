# React Quiz system using redux

v 1.0
 Base init stable application


##  How to install

```bash
# Install dependencies
cd reactmoviecrab
npm install
```

Main plot
 Uses classical redux pattern, with store and reducers.
 Uses axios for backend http client to get backend movies information.
 
## How to test
Currently using react-scripts build-in test tool based on jest with test help of enzyme.
Tests are commonly spread among component folders 
Exm. utils tests are in folder  utils/test this way, in my opinion, is more comfortable for importing 
required files

cmd -> npm run test

 
## How to run

### The backend serve
Backend data is coming from https://api.themoviedb.org/3/movie/popular

## To view online
http://norwaydict.com/reactquiz
  Click on any link in the page 
  (it will for now mask as norwaydict main site hrefs, but it works as expected)
  

```bash
npm start
This will run the client at localhost:3000
 Check the page in desired Browser

 Best viewed in Firefox, Chrome

 # Table libraries
  Uses react-bootstrap-table-next as base and filter react-bootstrap-table2-filter
 CSS  Semantic UI for headers, messages like Loading, Error no data
      Bootstrap 4 for table component and override component
	  
	Plot
   Uses redux pattern.
   Consists of components: lists
   And actions with reducers
   
     Libraries: 
	  react-bootstrap
	  axios - http client
	  node-sass - sass
	  sass-loader
	  semantic-ui-css - similar to boostrap
	  sfcookies - for future small settings savings
   
     Scheme:  
	   Contents
	    pages - pages of application
	    actions - redux signals that help call other components
	    components - required for pages components
		types - enums, lists, constants
	    reducers - redux building blocks of handling state change with business logic
	    utils - utility classes like date parser, object handler
		App.js - main page declaration and volume toggle
	    store.js - redux store
	    index.js - starting point whole application
	    setupTests - setuo enzyme adapter
		tests are spread among folders 
		
		App ->  choose-quiz is entry point page where you select username, quiz  
		         after that press Start -> 
		  Question-list page which contains question, answer (page component), progressBar (independent component)
		          after you picked all answers -> result page where is summary report with total score
			
		  Answer page -> gets quizId, question id as properties, shows the possible answers in which one is the correct one 
		
		  Progress bar -> gets currentItemIndex, count of items as properties to get raw procentage and show it as css bar
		  
		  Result page -> gets quizId, username, answers as properties and shows the summary with total score
		  
		  QuizError component -> shows error if data not loading, rejected or some other error occurs
		  
				You also can adjust width, so in mobile app looks, answer items place accordning to width and looks good.
		    
	   

  Enjoy the app and do call if you have some feedback. 
  Thanks for the task!
  

