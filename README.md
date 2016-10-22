uatools.js
==========

A set of tools to help you analyse user agent strings. The intent is not to provide a tool to help sniffing user agent but to help web developers to suggest right associated app based on right operating system.

You can try it live just [here](http://www.catuhe.com/uatools)

Once referenced, uatools.js allows you to call:
* UATOOLS.GetOperatingSystem()
* UATOOLS.IsMobile()
* UATOOLS.IsTablet()

**Experimental:**
==========
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
- ```data-winstore-appname="YOURAPPNAME"```: **optional** the name of your app in the store

You can have as many of them as you want our your page. 

<img src="https://assets.windowsphone.com/f2f77ec7-9ba9-4850-9ebe-77e366d08adc/English_Get_it_Win_10_InvariantCulture_Default.png" height="20" alt="Download windows app in store image">
<img src="https://assets.windowsphone.com/f2f77ec7-9ba9-4850-9ebe-77e366d08adc/English_Get_it_Win_10_InvariantCulture_Default.png" height="40" alt="Download windows app in store image">
<img src="https://assets.windowsphone.com/f2f77ec7-9ba9-4850-9ebe-77e366d08adc/English_Get_it_Win_10_InvariantCulture_Default.png" height="80" alt="Download windows app in store image">

Feel free to contribute to get even more accurate results!

