prerequisites:

npm
node
java
angular cli
git (optional and recommended) - npm install -g @angular/cli

---------------------------
#RUNNING CODE LOCALLY
how to download and run code locally:

1.make a folder where you'd like to store your code.

2. right click to open git bash and type in "git clone https://github.com/radhikab41/schoolofSustainability"
you can also just go to https://github.com/radhikab41/schoolofSustainability, and download the code into your prefered folder location.

3.Commands to run code.
Assuming you have all the pre-requisites you can run the following commands in git bash to get this code running :
	- cd schoolofSustainability
	- npm install
	- ng serve --open

	you may now open the address "localhost:4200" on your browser , which should show you the website as it would appear.
--------------------------------------
#MAKING CHANGES IN THE CODE.

prerequisites:

1.you must have a github account to make changes.
2.you must be an assigned collaborator to the repository you are making changes to.
--------------------------------------------
1. Always make your changes and test locally if they run fine on your system before adding these changes to the main code.
2.
2. once you are satisfied - go to the folder where you have stored the code and right click anywhere to open GIT bash first or your terminal.
3. run command - "git pull", once this runs successfully, you will have an upto date code folder, along with the changes you have made (This step is necessary when working with a team in case someone else made changes since the last time you downloaded the code.)
4. Now in the code folder - right click to open GIT GUI.
5. A window opens showing all the files that have been changed since you downloaded this code - you would be able to find the file/files you made changes to here.
6. select the files you want to add to the code and then in the commit option on the top menu select "stage to commit"
[commit--> stage to commit]
7. you will see that the selected files move into a different "staged" compartment.
8. Now in the textbox available - add any comment describing the changes you made and press "commit"
9. you will see the files you staged disappear.
10. Once this happens, you select "Push" which would then finally add your code to the main folder.
11. NOTE : when you push -  you may be interupted, and asked for details like username and password. Be sure to enter this correctly for the code to be pushed.
--------------------------------------------------
.
.
.
.
.
.
FOLDER STRUCTURE:

this code has been divided in such a way that it mimics the way the website is divided in its pages.
for making changes to any particular page - find the corresponded folder - in the .html file

Code folder structure:

	src
		app
			about
				currentwork
				model
				opportunity
				story
				team
				vision
			database
			home
			newsEvents
			resources
