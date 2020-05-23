---
title : "Hex clock using JavaScript"
slug : "hex-clock-using-javascript"
tags : ["javascript"]
description: "Hex clock"
date : 2020-14-05
featuredImage: thumbnail.jpg
published : true
---

<br/>

Hello geeks,

Once again in this article we’ll create a very simple web-page with minimal html ,css and more JavaScript this time. (No library, only pure Js).

<br/>



![Hex Clock Representation](./thumbnail.jpg)

​			                                                     *Photo by [Moritz Kindler](https://unsplash.com/@moritz_photography?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText) on [Unsplash](https://unsplash.com/s/photos/clock?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText)*

### What is Hex clock?

For any color in RGB format,there is a specific code of length 6. Means that code consists of 6 letters/alphabets or combination of both. We’ll be only dealing with combination of digits as clock format doesn’t support any alphabets. So, in actual clock with 24Hr format in ***hh:mm:ss*** ,we can see total of 6 digits(hh+mm+ss). Now,for that combination of 6 digits,there always exists a unique color and we’d like to change background-color of our web-page according to combination of hex-code we’ve got and that’s why  ***HEX-CLOCK***

Say,time now is 11:50:46, then hex-code generated is **#115046** and for that code there must exist a unique color which we’d change our background-color.

I hope that’s clear now,isn’t it?

------

### Basic html setup for this example:

```html
<!DOCTYPE html>
<html>
   <head>
       <title>Hex-clock with pure Js </title>
   </head>
   <body style="color:white;">
   </body>
</html>
```

<br/>

The main idea behind this example is to change the **background-color** CSS rule of entire body of our page for every change in second hand of clock.Now,this can be done in 2 steps:



1. Creating a function which calculates and updates hh:mm:ss for every second
2. Actually changing background-color of page and displaying clock time as hex code on DOM



<br/>

```js
function time()
{
     //constructor Date() built-in in Javascript
    var date=new Date();
     //getting hours,minutes,seconds from date
    var hours=date.getHours();
    var minutes=date.getMinutes();
    var seconds=date.getSeconds();
    var arr=[hours,minutes,seconds].map(function(num){
       return (num<10) ? '0'+num : String(num) 
    });
    
    hours=arr[0];
    minutes=arr[1];
    seconds=arr[2];
    
    return hours + ':' +  minutes + ':' + seconds;
}
```

<br/>

We’d understand working of **time()** with the help of example.

```javascript
console.log(new Date()):
>>Sun Jul 15, 12:50:43 GMT +0530 (India Standard Time)
```

<br/>

The time ,when the screenshot is taken is,12:50:43. We’re storing this exact output as above in our **date** variable and we’re calling 3 methods on it:

##### 1.getHours(): This returns the hour value of *date* variable

```javascript
var hours=date.getHours()
<< 12 //RESULT: hours=12
```

<br/>

##### 2.getMinutes():This returns the minute value of  *date.*

```jinja2
var minutes=date.getMinutes()
<< 50  //RESULT:minutes=50
```

<br/>

##### 3.getSeconds(): This returns the seconds value of *date.*

```javascript
var seconds=date.getSeconds()
<< 43 //RESULT: seconds=43
```

<br/>

Now,here comes the main part. Here,we’re gonna store above obtained values namely hours,minutes,seconds in an array and call [**map**](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map)  function on it. map() is a builtin JavaScript function suitable for arrays. **What it does is take every element of array on which it is called upon and pass that array element as a argument to the function inside map()**. The function inside map() is an [**anonymous function**](http://helephant.com/2008/08/23/javascript-anonymous-functions/) which means it doesn’t have any name but it does its work by receiving every element of array (called “num” in my code)as mentioned inside its function body.



##### **Working of anonymous function of map():**

We are using a simple return statement which evaluates a condition and based on that returns something.Here,I’ve used a [ternary operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator) to return either **‘0'+num** if condition is true or returns **String(num)** if it is false. This is the default behaviour of ternary operator.For every element of array,the condition is going to be evaluated .

The condition here is to check whether elements inside our array are greater than 10 or not.We are doing this check because,as you might have guessed,suppose for time value like 8:8:18 (say for example),our final code obtained will be like **#8818** and there is no color available for this hex code.So,here we can do 2 things:

1. Convert the obtained code to 6 digit code using extra trailing zeroes for each single digit number
2. Check whether obtained code is there inside infinitesimally long list of available colors or not

***Here,I’ll be going with option 1 as it seems more favorable and will 100% give colors for every tick.\*** So,that’s why if number is < 10,I’m adding a zero before and then storing it inside new array(**var arr**) as a element of array.

So,according to my example,my new array which holds formatted values of given current time(var arr) looks like this:

<br/>

```javascript
var arr=["12","50","43"];
```

<br/>

Now, I’m re-assigning **hours,minutes,seconds variables** to newly formatted values from the array and returning a string with “ : ” after and before to look like actual time format. ( “12”:”50":”43" like this).

Now,it’s time to actually update the **background-color** and display clock timings on the page which gets automatically updated and changed for every second.

------

Here comes the second function of our code,**output(time) ** which receives a string as a argument and the argument passed to **output()** is the return statement of our **time()** function. Sounds confusing?.It actually isn’t!

<br/>

```javascript
function output(time)
{
    var color= '# ' + time;
    document.body.bgColor=color;
    document.body.textContent=color;
}
```

<br/>

##### **Working of output() function:**

Argument received is added with ‘# ’ and stored in a variable to output something like this: #12:50:43 on our page. Then,we are changing background-color property and after, displaying out our nicely formatted time value on DOM.

Now,in order to update DOM after every second we need a function which automatically runs after every second.Thanks to Js,we’ve such function avaliable and its called[ **setInterval()**](https://www.w3schools.com/jsref/met_win_setinterval.asp) which receives a function as a first argument and a number which is a value in **milliseconds** after which you want to run first argument(a function) and keep this process going until the user manually disrupts its cycle by either closing the tab/window.

**output(time())** => This is exactly what we discussed above,we need a function to run after receiving output of **time()** function and pass it to some other function. Hence,we are calling output() after completion of **time()** after every second using **setInterval().**

```java
setInterval(output(time()),100)
```

------

So,here we are done with our little,quick tutorial on Hex-Clock.

I hope you find it intresting,useful!

Here’s my code-pen link to same example: https://codepen.io/dalalRohit/pen/NBxPmd

Thanks for reading this one.

> Clap it,if you like it….

Good bye :)