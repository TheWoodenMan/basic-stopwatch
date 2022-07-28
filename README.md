# basic-stopwatch

a basic stopwatch app built to explore object oriented programming

Link to project: https://thewoodenman.github.io/basic-stopwatch/
![stopwatch-app](https://user-images.githubusercontent.com/85075266/181396994-885c1543-d403-481d-b4aa-859bf38232f7.png)

## How It's Made:
<br/>
Tech used: HTML, CSS, Javascript

This was the first OOP object based tool I made with Javascript

## Optimizations
<br/>
I coded everything inside the object with .this / self references for the methods.

The stopwatch is built with the pillars of OOP in mind, primarily Abstraction and Encapsulation.

I extended the functionality of the stopwatch to be able to pause and resume counting.

## Lessons Learned:
<br/>

As well as learning more OOP, I was also exposed to quite a lot of time based javascript methods, working with
miliseconds and unix time, it was interesting and challenging to get javascript to do what I needed. 

I had to make heavy use of documentation to get this one right, primarily on the time / date side of things

There is a bug in this one actually which I left in for now - the hundredths of a second display isn't fully accurate
it shows the last 2 digits of thousandths of a second instead, but visually it doesn't make much difference to the 
app. 

I tested all other use cases, running the app past ten minutes just to make sure the display could handle it, and so
I realsised the importance of stress testing apps to try to "break" them and find bugs.

I made this one look good on all devices using media queries, but it was quite time consuming - I later skipped this when
making the calculator app using OOP

https://github.com/TheWoodenMan/100devs-calculator

