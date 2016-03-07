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
In the previous post I gave a brief introduction to the topic of this series and how we were going to approach setting up a development and production environment in the cloud. Ideally automating the application releases as much as possible. Now, we're going to get our hands dirty. This post will cover the setup of the local development environment with the objective to get to the live development environment in Part III. <!-- more -->Let's work our way up in the following order:<br>

{% image http://s11.postimg.org/bn5019hib/high_level_2.jpg %}

1. Installing NodeJS 
2. Setting up our first application
3. Configuring the dependencies of the application
4. Preparing the application for version control through Github

<br>
<h4>Installing NodeJS</h4>

Installation of Node is very straightforward. The downloads for each platform can be found on the following location [https://nodejs.org/en/download/](https://nodejs.org/en/download/). For my development machine, Windows 10 is taken as a reference and I'm working on the 64-bit version. Download the installer and follow the wizzard or unzip the tarbal if you're working on a Linux distro. Ensure to select all of the available options. Node will be added to our PATH environment (we can run it from our native shell) and NPM (Node's package manager) is installed by default.<br><br>

{% image http://s28.postimg.org/6jy6axrcd/2016_02_29_19_22_00_Action_center.png %}

<br><br><h5>Setting up our first application</h5>

Once Node is installed we can get to the step of setting up our first application. To simplify things we'll set up a blogging application. Zero effort spent on development, since the objective is to get the architecture right. We're going to install Hexo. It is a blogging framework for NodeJS with all of this functionality baked in. Open an <b>elevated command prompt </b> and set up a working directory for your project:
``` powershell
D:\ mkdir development
```
Next we're going to initialize Hexo. This involves installing the Hexo CLI (command line interface) on a global level. The command line interface allows us to manage our hexo applications. Run the following command:

 ``` powershell
D:\ npm install hexo-cli -g
```
{% alert warning %}
Do not forget to execute installations from an <b>elevated</b> prompt. Packages will be incomplete and the application will not run properly if you do not run your command shell under administrator privileges.<br>
{% endalert %}

Let's install the hexo application, with "node-blog" being the name of our application (or whichever name you want to give it).
 ``` powershell
D:\ cd development
D:\development\hexo init node-blog. 
```

<br><br><h4>Configuring the dependencies of the application</h4>
Before we can label our application as fully configured, the NPM dependencies need to be installed. Node package manager is a command line program that allows us to manage NodeJS libraries. These libraries contain reusable code to prevent us from having to reinvent the wheel. In the case of our blogging application, the dependencies include all of the Hexo modules. Code for the CLI of Hexo. Code for the application server. Code for the templating, views and routes of the blog. Installing dependencies is always in the same manner. We navigate to the directory where the package.json file is located and run the command "npm install". Here is what the file will look like for our blogging app: 

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
D:\development\node-blog cd node-blog
D:\development\node-blog npm install 
```

In case you encounter some errors, including "***", you did not follow my advice to run the console with administrator privileges. Relaunch the console and reinstall the NPM modules. 

Now is the time to get more excited. We have officially built our first NodeJS app, without having really built anything! It's magic. To check it out for yourself, navigate to the working directory of the blog and run the following command: 

``` powershell
D:\development\node-blog hexo server
```

Upon starting the web application server, you can navigate to the link in your browser. You'll be amazed to discover that the blogging application is up and running in our local environment on port 4000.<br><br>

{% image http://s18.postimg.org/j6qa3fpa1/app.png %}

We can go on and manage this blog. Create posts (hexo new), generate static files (hexo generate) and migrate content from an existing provider such as Wordpress (hexo migrate). All good and well, but I'll skip that part before we're going to go too off topic. In-depth notes of Hexo's functionality can be found on their [official website](https://hexo.io/docs/). More important than the looks of our blog, is how we're going to deploy it to the world wide web and continue maintaining it with minimum hassle and maximum joy.

<br><h4>Preparing the application for version control through Git(hub)</h4>
Git and Github have been a long time answer to painless version control. In terms of what it can do for our application, it will keep our code centralized and maintainable. When changes are happening to our code, the Github repository will provide the exact lines that have been modified and by who. In addition we have full control to manage who can make adjustments to the code and who not. First we will install Git from the following [link](https://git-scm.com/downloads). Complete the wizzard and select the options that you personally desire.<br><br>

{% image http://s8.postimg.org/7n3vhz6s5/2016_03_01_20_46_46_Start.png %}

We can initialize our project's directory as a Git repository. Change into the directory from the command line and run the init command in the following fashion: 

``` powershell
D:\development\node-blog git init
```

Stage and prepare the files for the first commit to our online Github repository.
``` powershell
D:\development\node-blog git add .
D:\development\node-blog git commit -m "first commit"
```

Next we will set up the repository on [Github](http://github.com) to host the project on a centralized place. Login to your account and initialize the "node-app" repository without a README file. Open the repository and check the repository's URL as a pure reference.<br><br>
{% image http://s14.postimg.org/63j15hggh/2016_03_01_20_59_58_Laure_Kamalandua_node_app.png %}
<br>We will need the URL to add the files from our local Git repository to Github. Return to your command shell to finish up adding our local repository as a remote:

``` powershell
D:\development\node-blog git remote add remote-computer-name https://github.com/LaureKamalandua/node-app.git
D:\development\node-blog git push remote-computer-name master
```
Both Git and Github are configured. The changes in our local repository have been succesfully added to the remote repository. If you want to verify this step. Log back in to your Github account and check the content of your newly created repository. All of the files will be present. Besides the afforementioned perks of version control, there is an extremely important reason why we're running with Github. That is, Heroku.

Heroku is a cloud platform that lets companies build, deliver, monitor, back-up and scale apps. For us, that means the ability to automate application deployment to a live development environment, without having to undergo the infrastructural headache (imaging servers, finetuning web servers, configuring databases, setting up monitoring). In Part III of this series we will finish the add the live development environment on top of the local environment. Until then, you'll have to stay tuned and experiment ...