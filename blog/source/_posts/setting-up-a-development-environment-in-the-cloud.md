---
title: 'Setting up a development and production environment in the cloud. Part I'
date: 2016-02-20 10:24:25
tags:
- NodeJS
- Express
- Jade
- Heroku
- Git
- Github
- Hexo
coverImage: header-2.jpg
thumbnailImage: header-1.jpg
thumbnailImagePosition: bottom
---
Some time ago, a men said: 
{% hl_text yellow %}“Learn one language, conquer the world. Be conceited, twist and twirl”.{% endhl_text %}

Well. That’s not exactly what he said, but something interesting in software engineering happened in 2009.  Ryan Dahl launched NodeJS. A runtime environment for server-side web applications. Yes. Server side web applications. People could now start writing Javascript in the front (client-side) and Javascript in the back (server-side).<!-- more --> A new software bundle to simplify web development was born, namely the <b>MEAN (MongoDB, ExpressJS, AngularJS, NodeJS) stack</b>. All of these components are based on Javascript and offer the following improvements: 
<br>
- One programming language for client/server side tasks. Goodbye to a team of Python, Ruby, C# and Java developers who are constantly arguing about things.
- Cost effective, open source and free. 
- Hybrid. We can achieve development environments in which tooling for different operating systems integrate seamlessly.

It was revolutionary. But wait.  

One of the main things I discovered when recently switching from **LAMP (Linux/Apache/Mysql/Python,PHP)** to MEAN stack projects is definitely the lack of online troubleshooting material. When things go wrong, they fall into pieces. You should brace yourself. Which is not a surprise, since the foundation of LAMP stack application development dates back to the 90’s. MEAN stack is a 00’s baby. Fairly new, exciting and cutting edge. 

In this series we’ll start from the ground up to get one of our developed applications up and running in the cloud. Ready for consumption by the world wide web and neatly configured from a back-end perspective. The objective of this series is <b>NOT</b> to develop a top tier application (I’ll make other posts on that topic), but to provide the necessary steps needed from a deployment and configuration perspective to get that top tier application you already developed functioning.  

The following design reflects what we’ll get into:
<br>

* A client machine either running on Windows or Linux hosting a remote Github repository. This will be our development machine on which we will develop the application that is ready for the cloud. We will handle version control of our application through Git and Github to revision the code before it is pushed into production.
* Github is used to centralize the version control of our code. When multiple developers are contributing to our application, we would want to keep track of the changes that are going to be released into production. 
* A Heroku server. This will be our development/production barrier. The application developed on our client machine will be live on this location and automatically refreshed every single time files on the Github repository are updated. This will allow us to release changes into production when we feel ready to commit to them.      
* A production server running on Linux Debian 8 (Jessie). After we have provisioned changes and feel like things are looking great on the Heroku development environment, we will finally pull the Github changes into production on an incremental basis. 

So this was a brief introduction of what we’re going to be working on. I look forward to lead you through Part II of this series in an upcoming post. 
