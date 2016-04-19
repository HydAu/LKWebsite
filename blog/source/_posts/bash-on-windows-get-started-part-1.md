---
title: Bash on Windows - Getting Started (Part I)
date: 2016-04-18 18:29:44
tags:
- Bash on Windows
- Linux
- Windows 10
- Microsoft Developer
coverImage: https://cdn.pbrd.co/images/jnqeh8X.png
---
What sounded like an April Fool's joke on Microsoft's Build 2016 conference has become a reality: Bash is available on Windows. At first glance my reaction wasn't euphoric. Being a long term Powershell fan and anti text-oriented IT pro. I felt like they had to give in to the Linux community. Rather than pushing their own agenda and  promoting the fact that Powershell is a solid and robust way of managing systems. <!-- more -->I know that many will debate on this point like a Mac/Windows, PS4/Xbox One, Ferrari/Lamborghini discussion, but this is my blog. If you don't like Microsoft, get out! Or at least get accustomed to the fact that some people like options, and taste is not a binary thing in which we have to choose one thing over the other. 
<br>

<h5>Let's get started</h5>
The Bash shell is easily enabled on a Windows 10 device with the minimum requirement of running {% hl_text purple %}build 14316{% endhl_text %}. You can check your build version by typing the Windows button + R and typing "winver". Upgrade your system if it's still on an older build and proceed to the following steps:<br><br>

1. Enable {% hl_text purple %}Developer mode{% endhl_text %} on your device. Go to the {% hl_text purple %}Update & security{% endhl_text %} tab in the Settings application. Select {% hl_text purple %}For developers{% endhl_text %} and enable the "Developer mode" option.
<br>
<br>

{% image fancybox center http://imgh.us/2016-04-18_18_47_12-Start.png %}


<br>2. Search for {% hl_text purple %}Windows Features{% endhl_text %} from the search bar. Scroll down to "Windows Subsystem for Linux (Beta)". Enable this feature and reboot your device.

{% image fancybox center http://imgh.us/2016-04-18_18_46_36-Start.png %}

3. Upon reboot open your shell and type ```bash``` followed by ```y```. The Ubuntu system will be initialized and ready for use. 

<h5>What's next?</h5>

There haven't been many practical applications yet for the Bash on Windows shell. So far, I've seen bloggers sharing their notes on how to install a slightly fancier shell than the default one (the [Fish Shell](http://www.hanselman.com/blog/InstallingFishShellOnUbuntuOnWindows10.aspx)). Some people are running GUI Linux apps by installing X Server using [this](http://mspoweruser.com/now-can-run-linux-gui-apps-windows-10-using-bash/) method. And there is always Reddit: 
<br>

{% image fancybox center https://cdn.pbrd.co/images/jmp2Q2I.gif %}

<br>
<h5>Conclusion</h5>
Microsoft has [officially](https://blogs.windows.com/buildingapps/2016/03/30/run-bash-on-ubuntu-on-windows/) stated that Bash for Windows is currently at its very early stages and intended to help build cross platform apps. It is not intended to be a server platform to host websites or infrastructure on. Limitations aside, the Ubuntu founders have confirmed their excitement and commitment to fully support this endeavour. We can expect that Microsoft and Linux will continue to push the limits of open source collaboration, which only makes me look forward to wrap up Part II of this series. A more hands on approach of developing an interesting project on this new platform.