#--react---
seo
how to pint to api&&&??/
clear imports
images optimisation
refactor folder structure

admin id move to ENV

dynamic input creation for quizz


creae lesson must be only for course owner??
ecourses in profile even if not owner??
registration form validation. redirect??


setcurrentuser bug> no progress in token after refresh

-progress bar

guarding routes in withAuth HOC???????


refactor landinglist & productlist into one compnent

lazy loading async

flash error messages

translate to rus



github clean up

#---css---

parallax @support on ios
img alt

#---seo---
seo
analytics
favicons
404

progress:[{japanes:[13123123, 13123123, 13123]}, {chinese:[13123123, 13123123, 13123]}]
taking progress from lesson.ecourse._id
=================
#backend
==================

User about me


refactor routes - move get all from index

admin roll?

flash messages

server side render// else lib

translate to rus
===================================



==========================
# deploy front
==================
search create-react-app heroku
### git rm -rf -git
echo node_modules>.gitignore

heroku create bbhub--builpack http://github bla blaa

touch static.json>
{
  "root": "build/",
  "routes": {
    "/**": "index.html"
  },
  "proxies": {
    "/api": {
      "origin": "https://bbhub-server.herokuapp.com/api"
    }
  }
}

git push heroku master

heroku logs -t -a bbhub-server
heroku open


**colors:** 
dBlue: HTML code: 	#015FA9
RGB code: 	R: 1 G: 95 B: 169
HSV: 	206.43� 99.41% 66.27%


lBlue	HTML code: 	#05CBFC
RGB code: 	R: 5 G: 203 B: 252
HSV: 	191.9� 98.02% 98.82%

orange HTML code: 	#F07B2A
RGB code: 	R: 240 G: 123 B: 42
HSV: 	24.55� 82.5% 94.12%

black 
	HTML code: 	#3A3937
RGB code: 	R: 58 G: 57 B: 55
HSV: 	40� 5.17% 22.75%

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

<!--====================== TEST API ============================-->

5c45b7840faf771c1c313743 japanes ecourse, lesson 5c45ebffa622902284346432


http POST localhost:8081/api/auth/signin email=v.lokaichuk@gmail.com password=bb_FLY_100%

http POST localhost:8081/api/auth/signin email=morty313777@test.com password=qwerty2 username=morty313777


http PUT localhost:8081/api/users/5c47178e84ed45168069d185 "Authorization:Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVjNDcxNzhlODRlZDQ1MTY4MDY5ZDE4NSIsInVzZXJuYW1lIjoibW9ydHkzMTM3IiwicHJvZmlsZUltYWdlVXJsIjoibW9ua2V5NyIsImlhdCI6MTU0ODI0NTY1M30.4xt5SrT-A7PhSPL_-S6tdNRGeppwQqE4J-eGRtsP98o" email=morty313777@test.com profileImageUrl=monkey77 username=morty313777


http PUT localhost:8081/api/users/5c47178e84ed45168069d185/progress "Authorization:Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVjNDcxNzhlODRlZDQ1MTY4MDY5ZDE4NSIsInVzZXJuYW1lIjoibW9ydHkzMTM3NzciLCJwcm9maWxlSW1hZ2VVcmwiOiJtb25rZXk3NyIsImlhdCI6MTU0ODI0NTkwNH0.qZitUlaMqX6sqOdUf7OvYiTP-E92wPNi_oTbqwNkM38" progress:='["nnnnnnnnnnnnnnnnnnnnn"]'

==================AUTH
http POST localhost:8081/api/auth/forgot email=morty3@test.com 
http POST localhost:8081/api/auth/reset token=80e8f128392ec5fed7e884ec131ab50326e2eb6b newPassword=qwerty2 verifyPassword=qwerty2


**===============POST NEW=====================
http POST localhost:8081/api/users/5c419085cd9f320d44a756cd/ecourses/5c45b7840faf771c1c313743/lessons "Authorization:Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVjNDE5MDg1Y2Q5ZjMyMGQ0NGE3NTZjZCIsInVzZXJuYW1lIjoiYWRtaW4iLCJwcm9maWxlSW1hZ2VVcmwiOiJodHRwczovL2kucGluaW1nLmNvbS9vcmlnaW5hbHMvYmUvNjcvMTkvYmU2NzE5ZjkwNzcyNDFmNjQ5YjRhMjNhNWVhNDA0ODUucG5nIiwiaWF0IjoxNTQ4MjUxNDk2fQ.FJCtCoVGvyyi1oQm9hcfJlRW2gVQIQcoxZIxQHR6VBI" order=5 question=55555 answer=55555 title=555555 text=555555 video=555555 img=fffffffinsta

=======================GET LESSONS
http GET localhost:8081/api/users/5c419085cd9f320d44a756cd/ecourses/5c45b7840faf771c1c313743/lessons "Authorization:Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVjNDE5MDg1Y2Q5ZjMyMGQ0NGE3NTZjZCIsInVzZXJuYW1lIjoiYWRtaW4iLCJwcm9maWxlSW1hZ2VVcmwiOiJodHRwczovL2kucGluaW1nLmNvbS9vcmlnaW5hbHMvYmUvNjcvMTkvYmU2NzE5ZjkwNzcyNDFmNjQ5YjRhMjNhNWVhNDA0ODUucG5nIiwiaWF0IjoxNTQ4MjUwNzczfQ.8_g5hkNX_8ST9ySbax4Sp8Plt-gGK1Ne9e1Bs4l0j68" 


======================GET ALL
http GET localhost:8081/api/ecourses/5c45b7840faf771c1c313743/lessons "Authorization:Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVjNDE5MDg1Y2Q5ZjMyMGQ0NGE3NTZjZCIsInVzZXJuYW1lIjoiYWRtaW4iLCJwcm9maWxlSW1hZ2VVcmwiOiJodHRwczovL2kucGluaW1nLmNvbS9vcmlnaW5hbHMvYmUvNjcvMTkvYmU2NzE5ZjkwNzcyNDFmNjQ5YjRhMjNhNWVhNDA0ODUucG5nIiwiaWF0IjoxNTQ4MTQ3MDAxfQ.0OnJspeyJ4amHMpd6_6ImnZjZeFE5JeASLSEhqIk2K0"

=====================GET MY

http GET localhost:8081/api/users/5c419085cd9f320d44a756cd/ecourses "Authorization:Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVjNDE5MDg1Y2Q5ZjMyMGQ0NGE3NTZjZCIsInVzZXJuYW1lIjoiYWRtaW4iLCJwcm9maWxlSW1hZ2VVcmwiOiJodHRwczovL2kucGluaW1nLmNvbS9vcmlnaW5hbHMvYmUvNjcvMTkvYmU2NzE5ZjkwNzcyNDFmNjQ5YjRhMjNhNWVhNDA0ODUucG5nIiwiaWF0IjoxNTQ4MjUxNDk2fQ.FJCtCoVGvyyi1oQm9hcfJlRW2gVQIQcoxZIxQHR6VBI" 

==================DELETE
http DELETE localhost:8081/api/users/5c419085cd9f320d44a756cd/ecourses/5c45b7840faf771c1c313743/lessons/5c45eb0da622902284346431 "Authorization:Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVjNDE5MDg1Y2Q5ZjMyMGQ0NGE3NTZjZCIsInVzZXJuYW1lIjoiYWRtaW4iLCJwcm9maWxlSW1hZ2VVcmwiOiJodHRwczovL2kucGluaW1nLmNvbS9vcmlnaW5hbHMvYmUvNjcvMTkvYmU2NzE5ZjkwNzcyNDFmNjQ5YjRhMjNhNWVhNDA0ODUucG5nIiwiaWF0IjoxNTQ4MDg1NzY3fQ.SDC9yyGWYaABmEFeG_HfcIXRzH0pHtjbfZWvWKq_fzo"

===================GET ONE
http GET localhost:8081/api/users/5c419085cd9f320d44a756cd/ecourses/5c45b7840faf771c1c313743/lessons/5c45ebffa622902284346432 "Authorization:Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVjNDE5MDg1Y2Q5ZjMyMGQ0NGE3NTZjZCIsInVzZXJuYW1lIjoiYWRtaW4iLCJwcm9maWxlSW1hZ2VVcmwiOiJodHRwczovL2kucGluaW1nLmNvbS9vcmlnaW5hbHMvYmUvNjcvMTkvYmU2NzE5ZjkwNzcyNDFmNjQ5YjRhMjNhNWVhNDA0ODUucG5nIiwiaWF0IjoxNTQ4MTQ3MDAxfQ.0OnJspeyJ4amHMpd6_6ImnZjZeFE5JeASLSEhqIk2K0"

=======================EDIT one
http PUT localhost:8081/api/users/5c419085cd9f320d44a756cd/ecourses/5c45b7840faf771c1c313743/lessons/5c45ed39a622902284346433 "Authorization:Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVjNDE5MDg1Y2Q5ZjMyMGQ0NGE3NTZjZCIsInVzZXJuYW1lIjoiYWRtaW4iLCJwcm9maWxlSW1hZ2VVcmwiOiJodHRwczovL2kucGluaW1nLmNvbS9vcmlnaW5hbHMvYmUvNjcvMTkvYmU2NzE5ZjkwNzcyNDFmNjQ5YjRhMjNhNWVhNDA0ODUucG5nIiwiaWF0IjoxNTQ4MTUyNTkwfQ.cgxJfg-5xBe52vk2DLfTERnEZqCOSIkaxR6vsESxrAc" question=zzzzz answer=zzzzz title=zzzzz text=zzzz video=zzzz img=zzzzz options:='["ham","spam"]' 



 langfrom=jrusiian langto=rjapanese text=qeasy_japaneese level=ma1 img=sakura" title=zjapanese langfrom=xrusiian langto=cjapanese text=veasy_japaneese level=ba1 img=nsakura


==========================
#deploy server
==================

heroku cli

git rm -rf -git
echo node_modules>.gitignore
heroku create bbhub-server
git remote heroku
heroku addons:create mongolab
heroku config
touch Procfile

in index.js of server app:>>>
const PORT = process.env.PORT;
process.env.MONGODB_URL inside of code

in index.js of models>>
    mongoose.connect(process.env.MONGO_URL || "mongodb://___:___@ds155164.mlab.com:55164/bbhub",{
    keepAlive:true,
    useNewUrlParser: true
});

in Procfile>>
web: node index.js

in heroku cli>>
heroku config:set SECRET_KEY=ggcsgiuhkjdlkd;skjfugh
git push heroku master
heroku open

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify









