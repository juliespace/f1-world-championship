	Requirements: 
		Install JDK 1.8; Maven 3; npm and make sure the following commands are in PATH
			java
			mvn
			npm

	Build backend
		go to directory cis550/backend. All java dependencies are in pom.xml
		run following command to generate f1-project-1.0.0.jar
			mvn package

	Run backend
		In directory cis550/backend/target, run following command to start backend services
			java -jar f1-project-1.0.0.jar 

	Prepare frontend
		In directory cis550/frontend, all node dependencies are in package.json
		run following command to download node modules
			npm install

	Run frontend
		In directory cis550/frontend, run following commands to start frontend at http://localhost:3000
			npm start 
