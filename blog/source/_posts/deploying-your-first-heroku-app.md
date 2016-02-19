---
title: Deploying your first Heroku app
date: 2016-02-17 19:32:36
tags: 
- powershell
- inspiration
coverImage: empty.jpg
thumbnailImage: header-1.jpg
thumbnailImagePosition: bottom
---
<p>A couple of days ago, I bumped into a published script on Technet, named "Inspire Me". It would promise to print interesting quotes straight into your Powershell console. My enthusiasm instantly dropped when I examined the script and encountered the following lines (excerpt). The developer had hard-coded the inspirational quotes, which is not inspiring at all. Since there are no limitations to inspiration and creativity, I decided to rewrite this concept.  <!-- more -->The script should be able to provide an eternal amount of quotes in a random manner. I made use of the [Forismatic (http://forismatic.com/) to achieve this object. In addition, there is some smart mathematics in the background to format the quotes correctly. Including stars at the top and the bottom at the width of the quote's length. Splitting the quote at the word that is in the middle index of the quote's length. There's even a function included that will add the module to your Powershell profile. That way you can admire a quote each time your shell is launched. So far, so good, eh. It was interesting to be retweeted by Jeffrey Snover (the inventor of Powershell itself) while receiving my first fork and stars on Github. You can check "Get-Inspired.ps1" right here. I'll even instruct UNIX-guys to do so, since a bash port is on its way.</p>

```powershell
# List of Quotes added in to Array 
[string[]]$quoteList =  
                "Do Good, Be Good, Be one.", 
                "Life is like a flowing river of opportunities.It's up to you to stand up with a bucket or with a spoon.", 
                "All the art of living lies in a fine mingling of letting go and holding on. - Henry Ellis", 
                "You are not YET complete. You have no right to judge yourself because you are still work in progress !", 
   
function Get-Inspired() {
    $APIurl = 'http://www.forismatic.com/api/1.0/'
    $host = New-Object System.Net.WebClient
    $host.Headers.Add("Content-Type", "application/x-www-form-urlencoded")
    $host.Encoding = [System.Text.Encoding]::UTF8
    $quoteChars = $quoteFull.Length
    $quoteArray = $quoteFull.Split()
    $quoteWords = ($quoteFull | Measure-Object -Word).Words
    $splitIndex = ($quoteWords/2)
    $splitWord = $quoteArray[$splitIndex]
    $splitWordFloor = [math]::floor($splitIndex)
       
```

