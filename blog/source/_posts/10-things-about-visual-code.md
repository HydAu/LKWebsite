---
title: 5 reasons to switch from Sublime Text to Microsoft Visual Code
date: 2016-02-26 15:00:09
tags:
- Visual Code
- Microsoft
- IDE
coverImage: header-2.jpg
---
Visual Studio Code is Microsoft's latest integrated development environment. With its aim to be the tool of choice for web and cloud application development across any platform, I decided to give it a spin. Trading in my Sublime Text Pro IDE, I haven't looked back ever since.<!-- more --><br><br>

<h5>1. Language support</h5>
{% image http://s23.postimg.org/qv6b4trqz/code_1.png %}
Out of the box Visual Code has support for 30 programming languages. From traditional C++ to HTML/Javascript and post-modern languages such as Coffee Script, TypeScript & Swift. Features for these languages include syntax coloring, bracket matching, snippets and IntelliSense. Even unsupported languages can be installed through Visual Code's extention manager.

<h5>2. Layout</h5> 
{% image http://s22.postimg.org/e7jppolsh/code_2.png %}
The workspace is well arranged and can be split in a maximum of 3 panels. From the left, there are 4 buttons on the sidebar. Respectively open files, search, version control and debugging. The sidebar contains a tree view of the project to summarize its structure. It is possible to re-arrange and create files on the go without having to open a file explorer. 

<h5>3. Git integration</h5>
{% image http://s9.postimg.org/5564any8f/code_3.png %}
One of the best features is definitely the Git integration for version control. A project can be setup as a Git repository. Once you start changing the files and committing, the changes will be properly highlighted in the project's lines. Green and red dots will appear in the sideline of the panel to show where changes have been made. When clicking on the version control icon of the sidebar, you can see details information on what has been changed and roll back changes if necessary. To my surprise, version control is 100% on point. I did some testing to check in which way things could mess up a project when working with remotes and checking files in/out from another computer than this host. This proved to be no problem at all. Visual Studio Code kept properly track of the changes that had been made on these remotes. Changes were instantly synced.

<h5>4. IntelliSense and Peek definitions</h5> 
{% image http://s22.postimg.org/d3hh9kzzl/editingevolved_intellisense.gif %}
IntelliSense is the Microsoft way of saying code autocompletion. This functionality will show word suggestions as you type. Built-in and custom objects, variables, parameters and object names will occur as you code. They come in handy when working with object oriented languages.

{% image http://s21.postimg.org/8i10z5ygn/code_4.png %}
Peek and go-to definitions allow to instantly go to the source where a code snippet was defined. A serious relieve in pain, as modern web application projects easily surpass a dozen directories and easily reach 100 files. No need to memorize where you defined a certain Javascript function that needs modification.

<h5>5. Extentions</h5>
{% image http://s23.postimg.org/6qf1i1lmz/code_6.png %}
Additional programming languages, themes and tools can be installed from the extention manager. One of the first plugins I downloaded was the Powershell plugin. It adds extended support for Cmdlets and the Powershell console is integrated in the IDE for debugging purposes. There is virtually a plugin for anything you can imagine.

<h5>6. Smart selection editing</h5>

Editing multiple variable names, paragrahps, sections in a single selection. Behaviour in regards to cursor selection and keybindings can also be modified from the workspace settings. <br>
{% image http://s21.postimg.org/vjxa36aif/editingevolved_column_select.gif %}
{% image http://s24.postimg.org/dqeqfj26t/editingevolved_multicursor.gif %}
{% image http://s24.postimg.org/fng1xui8l/editingevolved_multicursor_word.gif %}

<br><br>
<h5>Conclusion</h5>
Word has it that the Sublime Text pro has picked-up development on their infamous IDE. It will be extremely difficult to catch up with Microsoft's pace. Visual Code has all of the tools a developer can dream off and is available on Windows, Linux and Mac. You can download it for free from [here](https://code.visualstudio.com/).