---
title: Inspiring Powershell
date: 2016-02-17 19:32:36
tags: 
- Powershell
- Inspiration
coverImage: header-2.jpg
thumbnailImage: header-1.jpg
thumbnailImagePosition: bottom
---
<p>A couple of days ago, I bumped into a published script on Technet, named "Inspire Me". It would promise to print interesting quotes straight into your Powershell console. My enthusiasm instantly dropped when I examined the script and encountered the following lines:</b>

```powershell
# List of Quotes added in to Array 
[string[]]$quoteList =  
    "Do Good, Be Good, Be one.", 
    "Life is like a flowing river of opportunities.It's up to you to stand up with a bucket or with a spoon.", 
    "All the art of living lies in a fine mingling of letting go and holding on. - Henry Ellis", 
    "You are not YET complete. You have no right to judge yourself because you are still work in progress !", 
```
<!-- more -->
The developer had hard-coded the inspirational quotes, which is not inspiring at all. Since there are no limitations to inspiration and creativity, I decided to rewrite this concept. The script should be able to provide an eternal amount of quotes in a random manner. I made use of the [Forismatic API](http://forismatic.com/) to achieve this object. In addition, there is some smart mathematics in the background to format the quotes correctly. Depending on the length of the quote, the string is breaked mid index and stars are formatted on the top and at bottom of the quote. There's even a Set-PsProfile function included that will automatically add the module to your Powershell profile. This way you can admire a quote each time your shell is launched. So far, so good, eh. It was interesting to be retweeted by Jeffrey Snover himself (the inventor of Powershell). 

<blockquote class="twitter-tweet tw-align-center" data-lang="en"><p lang="en" dir="ltr"><a href="https://twitter.com/jsnover">@jsnover</a> when everything else lets you down, besides <a href="https://twitter.com/hashtag/Powershell?src=hash">#Powershell</a>. I&#39;m getting creative. <a href="https://t.co/yiPqCiUyFa">https://t.co/yiPqCiUyFa</a> <a href="https://t.co/gLZiXEHWi2">pic.twitter.com/gLZiXEHWi2</a></p>&mdash; Laure Kamalandua (@laurekamalandua) <a href="https://twitter.com/laurekamalandua/status/699140727448735744">February 15, 2016</a></blockquote> <script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>

You can check <b>"Get-Inspired.ps1"</b> right here or clone it from Github on https://github.com/LaureKamalandua/get-inspired.git</p>

```powershell
# -------------------------------------------------  Author        :   Laure Kamalandua  ----------------------------------------------------- #
# -------------------------------------------------  Contact       :   laure.kamalandua@gmail.com  --------------------------------------- #
# -------------------------------------------------  Website       :   http://www.laurekamalandua.com  ----------------------------------- #
# -------------------------------------------------  Version       :   1 ---------------------------------------------------------------------------- #
# -------------------------------------------------  Description   :   Fetches a random inspirational quote ------------------------------- #

function Get-Inspired() { 
    $APIurl = 'http://www.forismatic.com/api/1.0/' 
    $remotehost = New-Object System.Net.WebClient 
    $remotehost.Headers.Add("Content-Type", "application/x-www-form-urlencoded") 
    $remotehost.Encoding = [System.Text.Encoding]::UTF8 
    [xml]$quote = $remotehost.UploadString($apiUrl, 'method=getQuote&lang=en&format=xml') 
    $quoteFull = $quote.forismatic.quote.quotetext +"- " + $quote.forismatic.quote.quoteauthor 
    $quoteChars = $quoteFull.Length 
    $quoteArray = $quoteFull.Split() 
    $quoteWords = ($quoteFull | Measure-Object -Word).Words 
    $splitIndex = ($quoteWords/2) 
    $splitWord = $quoteArray[$splitIndex] 
    $splitWordFloor = [math]::floor($splitIndex) 
    $correctIndex = $quoteFull.LastIndexOf($splitWord) 
    if ($quoteChars -gt 66 -AND $quoteChars -lt 180){ 
        $finalQuote = $quoteFull.Insert($correctIndex, "       `r`n" + '       ') 
        "`r`n" + '       ' + '*' * $correctIndex +"`r`n" 
        Write-Host '      ' $finalQuote -ForegroundColor Yellow 
        "`r`n" + '       ' + '*' * $correctIndex + "`r`n" 
    } elseif ($quoteChars -gt 0 -AND $quoteChars -lt 65) { 
        "`r`n" + '       ' + '*' * $quoteChars +"`r`n" 
        Write-Host '      ' $quoteFull -ForegroundColor Yellow 
        "`r`n" + '       ' + '*' * $quoteChars + "`r`n" 
    } else { 
        "`r`n" + '       ' + '*' * $quoteChars +"`r`n" 
        Write-Host '      ' $quoteFull -ForegroundColor Yellow 
        "`r`n" + '       ' + '*' * $quoteChars + "`r`n" 
    } 
} 

function Set-PSProfile {
    $script = $PSScriptRoot + '\get-inspired.ps1'
    $documents = (Get-ChildItem env:).userprofile + '\Documents\' 
    $documentPowershell = $documents + 'WindowsPowerShell\Microsoft.PowerShell_profile.ps1'
    if (((Get-ChildItem $profile -ErrorAction SilentlyContinue | select -Property *).Exists) -eq $True) {
        Write-Host 'The Powershell profile exists and the module will be added.' -ForegroundColor Green 
        $scriptcontent = Get-Content $script -Head 35 -Force | Select-Object -Skip 6 | Add-Content $profile -Force
        Add-Content $profile 'Get-Inspired'
        Write-Host 'The module has been succesfully added to your profile.' -ForegroundColor Green    
    } else {
        Write-Host 'Your Powershell profile does not exist.'`n'It will be created.' -ForegroundColor Red
        New-Item -Path $profile -Type File -Force | Out-Null
        Write-Host 'The profile has been created' -ForegroundColor Yellow
        $scriptcontent = Get-Content $script -Head 35 -Force | Select-Object -Skip 6 | Add-Content $profile -Force
        Add-Content $profile 'Get-Inspired'
        Write-Host 'The module has been succesfully added to your profile.' -ForegroundColor Green
    }
}      
```

