---
title: Bash on Windows ': Get started
date: 2016-04-18 18:29:44
tags:
- Linux
- Windows 10
- Bash
- Shell
coverImage: empty
---
What sounded like an April Fool's joke on Microsoft's Build 2016 has become a reality: Bash is available on Windows. At first glance my reaction wasn't euphoric. Being a long term Powershell fan and anti text-oriented IT Pro. I felt like they had to give in to the broad community of Linux users. Rather than pushing their own agenda and  promoting the fact that Powershell is a solid and robust way of managing systems. I know that many will debate on this point like a Mac/Windows, PS4/Xbox One, Ferrari/Lamborghini discussion, but this is my blog. And if you don't like Microsoft, get out! Or at least get accustomed to the fact that some people like options, and taste is not a binary thing in which we have to choose one thing over the other. 
<br>

<h5>Let's get started</h5>
The Bash shell is easily enabled on a Windows 10 device with the minimum requirement of running {% hl_text purple %}build 14316{% endhl_text %}. You can check your build version by typing the Windows button + R and typing "winver" and enter. Upgrade your system if it's still on an older build and proceed to the following steps:<br><br>

1. Enable {% hl_text purple %}Developer mode{% endhl_text %} on your device. Go to the {% hl_text purple %}Update & security{% endhl_text %} tab in the Settings application. Select {% hl_text purple %}For developers{% endhl_text %} and enable the "Developer mode" option.
<br>
<br>

{% image fancybox center http://imgh.us/2016-04-18_18_47_12-Start.png %}

<br>2. Search for {% hl_text purple %}Windows Features{% endhl_text %} from the home page or search bar. The "Turn Windows features on or off" application will show an extensive list of features that can be installed. Scroll down to "Windows Subsystem for Linux (Beta)'. Enable this feature and reboot your system.

{% image fancybox center http://imgh.us/2016-04-18_18_46_36-Start.png %}

3. Upon reboot open your shell and type ```bash``` followed by ```y```. The Ubuntu system will be initialized and ready for use. Let's tweak some buttons and start

<h5>Having fun</h5>