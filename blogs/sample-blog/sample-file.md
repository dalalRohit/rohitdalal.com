---
title : "Sample Blog"
slug : "sample-blog"
date : 2020-05-13
published : true
tags : ["sample"]
description : "This is my new sample blog"
featuredImgUrl : https://images.unsplash.com/photo-1590784483120-bff33bff7107?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80
featuredImgAlt : Sample blog
---

## This is my first heading

Because of new computing technologies, machine learning today is not like machine learning of the past. It was born from pattern recognition and the theory that computers can learn without being programmed to perform specific tasks; researchers interested in artificial intelligence wanted to see if computers could learn from data. The iterative aspect of machine learning is important because as models are exposed to new data, they are able to independently adapt. They learn from previous computations to produce reliable, repeatable decisions and results. It’s a science that’s not new – but one that has gained fresh momentum.

<br/><br/>

While many machine learning algorithms have been around for a long time, the ability to automatically apply complex mathematical calculations to [big data](https://www.sas.com/en_us/insights/big-data/what-is-big-data.html) – over and over, faster and faster – is a recent development. Here are a few widely publicized examples of machine learning applications you may be familiar with:

<br/>

- The heavily hyped, self-driving Google car? The essence of machine learning.
- Online recommendation offers such as those from Amazon and Netflix? Machine learning applications for everyday life.
- Knowing what customers are saying about you on Twitter? Machine learning combined with linguistic rule creation.
- Fraud detection? One of the more obvious, important uses in our world today.

<br/>

<br/>

![Sample blog](https://images.unsplash.com/photo-1590784483120-bff33bff7107?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80)

*Photo by [Kristaps Ungurs](https://unsplash.com/@kristapsungurs?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText) on [Unsplash](https://unsplash.com/?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText)*

<br/>

------

<br/>

## What is gatsby ?

Image optimization — at least in my experience — has always been a major pain when building speedy websites. Balancing image quality and bandwidth efficiency is a tough act without the right tools. Photo editing tools such as Photoshop are great for retouching, cropping and resizing bitmap images. Unfortunately, they are not that good at creating 100% optimized images for the web.

<br/>

Luckily, we have extension packages for build tools that can optimize images for us quickly:

- **Gulp**: [gulp-imagemin](https://www.npmjs.com/package/gulp-imagemin)
- **Grunt**: [grunt-imagemin](https://www.npmjs.com/package/grunt-image)
- **Webpack**: [imagemin-webpack](https://www.npmjs.com/package/imagemin-webpack)
- **Parcel**: [parcel-plugin-imagemin](https://www.npmjs.com/package/parcel-plugin-imagemin)

Unfortunately, image optimization alone is not enough. You need to make sure that the entire website is responsive and looks great at all screen sizes. This can easily be done through CSS, but here lies the problem:

<br/>

#### **Should you optimize your image for large screens or small screens?**

If the majority of your audience is using mobile devices to access your site, then the logical choice is to optimize images for small screens. However, it’s likely that a significant source of revenue is coming from visitors with large screens over 17″. You definitely wouldn’t want to neglect them.

Luckily, we have technology that allows us to deliver optimized responsive images for different screen sizes. This means we need to generate multiple optimized images with different resolutions fit for specific screen sizes or responsive breakpoints.

For WordPress site owners, this kind of image optimization requires the use of a plugin and a third-party service. The creation of these responsive images cannot be done on the hosting server without significantly slowing down the site for users, hence the need for a third-party service.

If you are using Gatsby to run your website, then you are in luck. This feature is built-in and already configured for you to optimize your responsive images. You just need to drop in some images and write a bit of code to link up your responsive images with your web page. When you run the `gatsby build` command, the images are optimized for you. This saves you from requiring a third-party service to perform the optimization for you. It’s simply done on your deployment machine.

<br/>

<br/>



```javascript
<script type="text/javascript">
    
    //scroll to top on page refresh (PART1)
    window.onbeforeunload = function () {
      window.scrollTo(0, 0);
    }

    //for arrow click part (PART2)
    $(document).ready( function () {

     $('#down').on('click',function () {
      $("html").scrollTop(0);
       $('html, body').animate({
         scrollTop: $(where-you-want-to-scroll).offset().top
     }, 1000);
     });

    });

</script>
```

