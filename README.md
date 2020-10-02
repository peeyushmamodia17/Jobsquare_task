# Jobsquare_task
It's a assignment of Jobsquare company task. I do that using node.js. In this i do social auth using gmail and show user detail and update it. And made Admin panel in this admin can delete the user and update the user.

It is a submission of test for Jobsquare company. I use Node.js, MongoDb, ejs, JavaScript and RestApi for that. In this i do social auth using gmail and show user detail and update it. And made Admin panel in this admin can delete the user and update the user.

## Demo

Go to link for video https://drive.google.com/file/d/1k9LHZf-9Ze5Red9tJ2lehZU2_YP3VtVk/view?usp=sharing

# Getting Started
1. Clone the project by link https://github.com/peeyushmamodia17/Jobsquare_task.git
2. Go to folder.
3. Open VS Code editor.
4. Open Project folder in VS Code.
5. Open Command line in Vs code.
6. Run following command.
    ``` 
    npm install
    ```
7. Run command: `npm start`.
8. Server will run successfully then open browser.

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:8000](http://localhost:8000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.


## Functionality

`User Google Login/signup`

* On clicking button form will render then on clicking Google signup/signin user will signup aith google.
* If user already present in database then it not save again otherwise it save user in mongoDb database.
* On home page show user name with welcome.
* On header clicking on profile it show user detail like image,email,name.After clicking on update detail user can update his city and role after updating it render on profile page.
* By clicking on sign out user will be logout.

`Admin`

* Firstly fill the data manually in databse for admin login and password.
* In database use table name admins and fields are id, email and password.
* Afetr fill the detail in database go on screen and login as admin after login it render admin panel.
* On admin panel it show all users with delete and update link.
* By clicking on delete user will be delete from database.
* By clicking on update a form will render then admin update user detail only city and role.
* Afetr doing all operation admin can logout by signout button on header.
