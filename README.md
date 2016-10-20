uatools.js
==========

A set of tools to help you analyse user agent strings. The intent is not to provide a tool to help sniffing user agent but to help web developers to suggest right associated app based on right operating system.

You can try it live just [here](http://www.catuhe.com/uatools)

Once referenced, uatools.js allows you to call:
* UATOOLS.GetOperatingSystem()
* UATOOLS.IsMobile()
* UATOOLS.IsTablet()

Experimental:
* UATOOLS.IsWindowsAnniversaryUpdateOrAbove()

You can add a windows store button which only appear when your website is running on Windows Anniversary version or bigger.

First step: reference the uatools.js file.

Then add an anchor :
``` 
<a  class="winstore-link" 
    data-winstore-id="9wzdncrfj364" 
    data-winstore-cid="test" 
    data-winstore-badge-size="small">
</a>
```

Parameters are:
- ```class="winstore-link"```: **mandatory** for the tool to recognize this link as a Windows store link
- ```data-winstore-id="YOURAPPIDINSTORE"```: **mandatory** for the tool to create the link
- ```data-winstore-cid="YOURCAMPAINID"```: **optional** for the tool to create the link
- ```data-winstore-badge-size="small"```: **optional** size of the generated button (small|medium|large), default = medium

You can have as many of them as you want our your page. 

Feel free to contribute to get even more accurate results!

