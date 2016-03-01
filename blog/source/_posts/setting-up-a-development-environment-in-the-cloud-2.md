---
title: 'Setting up a NodeJS development and production environment in the cloud. Part II'
date: 2016-02-28 14:25:38
tags:
- NodeJS
- Express
- Jade
- Heroku
- Git
- Github
- Hexo
- Setting up a development and production environment in the cloud
coverImage: header-2.jpg
---
In the previous post I gave a brief introduction to the topic of this series and how we were going to approach setting up a development and production environment in the cloud. Ideally automating the application releases as much as possible. Now, we're going to get our hands dirty. This post will cover the setup of the development environment with the objective to get to the production environment in Part III. Let's work our way up in the following order:<br>

{% image http://s11.postimg.org/bn5019hib/high_level_2.jpg %}

1. Installing NodeJS 
2. Setting up our first application
3. Configuring the dependencies of the application
4. Preparing the application for version control through Github
5. Setting up Heroku and syncing the deployment through Github
6. Testing the development environment

<br>
<h4>Installing NodeJS</h4>

Installation of Node is very straightforward. The downloads for each platform can be found on the following location [https://nodejs.org/en/download/](https://nodejs.org/en/download/). For my development machine, Windows 10 is taken as a reference and I'm working on the 64-bit version. Download the installer and follow the wizzard or unzip the tarbal if you're working on a Linux distro. Ensure to select all of the available options. Node will be added to our PATH environment (we can run it from our native shell) and NPM (Node's package manager) is installed by default.<br><br>

{% image http://s28.postimg.org/6jy6axrcd/2016_02_29_19_22_00_Action_center.png %}

<br><br><h5>Setting up our first application</h5>

Once Node is installed we can get to the step of setting up our first application. To simplify things we'll set up a blogging application through Hexo. Minimum effort to be spend on development, since the objective is to get the architecture right. We're going to install Hexo. It is a blogging framework for NodeJS with all of this functionality baked in. Open an <b>elevated command prompt </b> and set up a working directory for your project: 

``` powershell
D:\ mkdir development
```
Next we're going to initialize Hexo. This involves installing the Hexo CLI (command line interface) on a global level.
The command line interface allows us to manage our hexo applications. 
Do not forget to execute any installation from an <b>elevated</b> prompt. 
Packages will be incomplete and the application will not run properly if you do not do so under administrator privileges.    
 ``` powershell
D:\ npm install hexo-cli -g
```

Now we can install the hexo application, with "node-blog" (or whichever name you want to give it) being the name of our application.
 ``` powershell
D:\ cd development
D:\development\hexo init node-blog. 
```

<br><br><h4>Configuring the dependencies of the application</h4>
Before we can label our application as fully configured, the NPM dependencies need to be installed. Get accustomed to this, as it will always be one of the first steps when you're going to set up a Node application. 

Node package manager is a command line program that allows us to manage NodeJS libraries. These libraries contain reusable code to prevent us from having to reinvent the wheel. In the case of our blogging application, the dependencies include all of the Hexo modules. Code for the CLI of Hexo. Code for the application server. Code for the templating, views and routes of the blog. Etc. Installing dependencies is always in the same manner. We navigate to the directory where the package.json file is located and run the command "npm install". Here is what the file will look like for our blogging app: 

``` powershell
{
  "name": "node-blog,
  "version": "0.0.0",
  "private": true,
  "hexo": {
    "version": "3.1.1"
  },
  "dependencies": {
    "hexo": "^3.1.1",
    "hexo-admin": "^2.0.0",
    "hexo-generator-archive": "^0.1.4",
    "hexo-generator-category": "^0.1.3",
    "hexo-generator-index": "^0.2.0",
    "hexo-generator-tag": "^0.2.0",
    "hexo-renderer-ejs": "^0.1.1",
    "hexo-renderer-marked": "^0.2.9",
    "hexo-renderer-stylus": "^0.3.0",
    "hexo-server": "^0.1.3"
  }
}

```

Let's install all of these important components with the following commands:

``` powershell
D:\development cd blog
D:\development\blog npm install 
```

In case you encounter some errors, including "***", you did not follow my advice to run the console with administrator privileges. Relaunch the console and reinstall the NPM modules. 

Now is the time to get more excited. We have built our first NodeJS app, without really building anything! To check it out for yourselves, navigate to the working directory of the blog and run the following command: 

``` powershell
D:\development\blog hexo server
```

Navigate to the link in your browser. You'll be amazed to discover that your blog is up and running without having spent any effort on its development. 
You can create blog posts (hexo new), But I'll skip that part, before we're going to go off topic. For in-depth notes of Hexo's functionality, I advise to visit this link. 
More important than the looks of our blog, is the fact that the blog 
