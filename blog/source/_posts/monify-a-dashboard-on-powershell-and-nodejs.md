title: Developing Monify - A monitoring dashboard built with Powershell and NodeJS (Part I)
date: 2016-05-02 17:08:14
tags:
- Developing Monify - A monitoring dashboard built with Powershell and NodeJS
- Monify
- Powershell
- NodeJS
coverImage: https://cdn.pbrd.co/images/CNWorG7.png
---

The past weeks I've been honing my development skills. With the aim of building an interesting application that serves the Microsoft and popular web development stacks. Following the news about UWP (Universal Windows Platform), hybrid operating systems (Bash on Windows) & Visual Code, Microsoft has put a lot of energy in building extensive support for modern technologies. The same can be said for web development frameworks (NodeJS, React, Angular, Express). But unfortunately, the development community has not yet returned the favour.<!-- more -->

During my tenure as an IT professional, I desire to explore the unconventional topics to share interesting ways of interacting with the new platforms that Microsoft is leveraging and making available for us. I was surprised to discover that one bridge hasn't been explored in depth. Which is the appliance of Powershell in web applications. This objective led to the development of my first application: The Monifying dashboard.  

<br>
<h5>The concept</h5> 

The idea is to build a dashboard that is capable of visualizing data, representable for Mirosoft environments. Taking fully advantage of Powershell's strengths as a system management language. To get going, I started out with the following sketch to delve further into the architecture of the app. 

<br>

{% wide_image https://cdn.pbrd.co/images/D6PDLVe.png "Monify application architecture" %} 

<br>
<h5>The Powershell Part</h5>

A tailored Powershell script is ran in the back at timed intervals through the {% hl_text purple %}Set-JobTrigger{% endhl_text %} and {% hl_text purple %}Set-ScheduledJob{% endhl_text %} cmdlets. The script retrieves data about the computer's processes, system information, disk usage, etc. We can populate the data set with as much information as we want. Think event logs, logged on users, network interfaces, TCP/IP connections, Office 365 health checks, etc. Anything that Powershell can fetch can be sent to our NodeJS server! The data is exported to JSON on the desired location through the {% hl_text purple %}Convertto-JSON{% endhl_text %} cmdlet. 

<br>
<h5>The NodeJS Part</h5>

For the NodeJS server part, I based the application around the Express framework to take care of the views, routing and error handling parts. It ensures that the application can be extended with more advanced features as I proceed with its development. The index of the application contains Javascript that sends continuous AJAX (CORS) requests to the Powershell server to update the dashboard's data. Graph visualization is handled by the ChartJS library. 

<br>

{% wide_image https://cdn.pbrd.co/images/D5PuTx2.jpg "The dashboard" %} 


<br>
<h5>The goal</h5>

Currently the application showcases data dynamically from one server. I look forward to start working on the following functionalities: 
<br>

- authentication 
- implementing configuration files to import computers and settings
- setting up a MongoDB database 
- setting up replication of the database to keep logging volumes under control
- implementing search functionality
- implementing Office 365 support (POST requests)
- enhancing security

I look forward to release the project on Github and would kindly benefit from your comments, remarks, suggestions or anyone willing to contribute from a development perspective (Powershell and server side programming). I can always be contacted on [Twitter](http://twitter.com/laurekamalandua), [mail](mailto:laurekamalandua@gmail.com) or if you're really bold then you can issue a pull request on [Github](http://github.com/laurekamalandua) later on.