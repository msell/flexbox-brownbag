```
cd ./02-intro
npm install
npm start
```

1) Intro
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
8) Alignment + Centering with align-content
9) Alignment + Centering with align-self
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