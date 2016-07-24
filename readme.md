```
cd ./02-intro
npm install
npm start
```

1) Intro
[https://css-tricks.com/snippets/css/a-guide-to-flexbox/(Flexbox Guide)]
2) Flex Container, Flex Items
  ```
  .container {
    display:flex;
    border:10px solid goldenrod;
}
```

Show other flex container display attributes:

```
  display: inline-flex
```

```
  height:100vh;
```

All divs inside the flex container are automatically turned into 'flex items'

3) Flex Direction
  Alignment entirely depends on flex direction

  - row is the default flex direction, so it will have no impact on our layout
  ```
  .container {
    flex-direction:row;
  }

  flex-direction:column;
  flex-direction:row-reverse;
  ```

  - when the container flex-direction is row the 'main axis' is left to right
  - when the flex container direction is column the 'main axis' is top to bottom

4) Wrapping Elements
  
  - lets try to assign 300 width to each box... what happens when we dont have enough width?  3000 pixels in this case.
  ```
  .box {
    width:300px;    
  }
  ```

- this is because the default in the flex container is flex-wrap:nowrap
```
.container {
  display:flex;
  flex-wrap:wrap;
}

.container {
  display:flex;
  flex-wrap:wrap-reverse;
}

.box {
  width: 33.3333333%;
}

```

- change flex direction to column
- change .container height:100vh; to min-height:100vh;  now the elements wont wrap.
- try adding .box margin:10px; notcie the impact.  Margin is not part of the box model,
- change margin to padding... notice that 3 flex items now fit on a line


5) Ordering
  - start over, so that your css looks like this

  ```
  .container {
    display: flex;
  }
```
- set box flex to 1 so it will take the width of the container
- will talk more about the flex property and all the different arguments you can give it later
```
  .box {
    flex: 1;
  }
```

- change the order of existing flex items
```
.box3 {
  order:1;
}
```

- the default order of everything is zero, so setting a box to 1 or 5 has the same effect.
- negative numbers also work
- order can be very useful for responsive designs


6) Alignment + Centering with justify-content

```
  justify-content:flex-start;

  no change above because thats the default

  justify-content:flex-end;

  justify-content:center;

  justify-content:space-between;

  justify-content:space-around;

```

- now change the container flex-direction to column, notice the space between/around is missing
- set container min-height: 100vh;
- change the font size to 10 on the box, now you should see the space
- change justify-content to flex-start 
- change justfy-content to center

7) Alignment + Centering with align-items
  - align-items is more concerned w/ the cross-axis

  - set align-items:center on the container, notice no change becuase there is no room in the container.
  - set the container height to 100vh; bang centered.
  - comment out align-items notice it by default is set to stretch, absence of align-items results in align-items:stretch
  - try align-items:flex-end; flex-start, flex-baseline
  - baseline aligns the bottom of the text in the flex items.
  - to see this in action change the font size on various boxes
  ```
  .box3{
  font-size: 200px;
}

.box1{
  font-size: 10px;
}
```
- change flex-direction to column and center and see what happens

8) Alignment + Centering with align-content
- add align-content:space-between; to container.
- notice no visual difference.  That is because align deals w/ the cross-axis and we dont have any extra space.
- so what we need to do is get our content to wrap so we can see how to align rows.
- add width 33.333% to each box. and add flex-wrap: wrap; to the container.
- add align-content: flex-start to container, then align-items, center
- add a justify-content: center; to see what that does;
```
.container {
    display:flex; 
    border: 10px solid goldenrod;
    height: 100vh;

    flex-wrap: wrap;
    align-content: center;
    justify-content: center;
}

.box {
  width: 33.33%
}
```

- recap the 2 important things about align-content:
  - you must have content that wraps to see it take effect
  - it only impacts things along the cross-axis

9) Alignment + Centering with align-self
  - set align-items: flex-start;
  - add various padding-bottom attributes to different boxes
```
.container {
    display:flex; 
    border: 10px solid goldenrod;
    height: 100vh;

    align-items: flex-start;
}

.box {
  width: 33.33%;
}

.box2 {
  padding-bottom: 200px;
}

.box6 {
  padding-bottom: 0;
}

.box9 {
  padding-bottom: 50px;
}
```

- add align-self: flex-end; to box9.
- this will override whatever the container specified for that item
- change box9 align-self to center and stretch
```
.box9 {
  padding-bottom: 50px;
  align-self: flex-end;
}
```

10) Flexbox sizing with flex property
11) Flexbox flex-gro, flex-shrink, and flex-basis
     - shorthand notation
     flex: 1 5 400px
12) flex-basis and wrapping work together
13) Cross Browser Flexbox Support + Autoprefixer
14) Pure Flexbox navigation code along
15) Mobile content reordering with Flexbox
16) Nesting Flexbox for vertical and horizontal centering
17) Flexbox Pricing Grid
18) Flexbox equal height columns and leftover elements
19) Flexbox single line form
20) Create a mobile app layout with Flexbox