---
title : "New sample blog"
date : 2020-05-01
featuredImage: ../blog_img.jpg
published : true
slug : "sample-blog"
tags : ["rohit","dalal"]
---



# Rohit Dalal

#### This is my heading level 4

```javascript
app.get('sadsad',(req,res) => {
    console.log("ASHKAJSAS");
})
```

```c++
#include <iostream>
using namespace std;

```

![Sample image from Unsplash ](https://images.unsplash.com/photo-1589088483047-21fa6de9bc8f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80)

​																Photo by [Jr Korpa](https://unsplash.com/@korpa?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText) on [Unsplash](https://unsplash.com/?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText)

------

## This is new blog section

What I'm trying to tell in this blog post is that, Filter coffee is the best beverage on the earth.

```jsx
export const query = graphql`
  query PostQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        featuredImage {
          childImageSharp {
            fluid(maxWidth: 800) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
```

> This is some blockquote bitchesss....

