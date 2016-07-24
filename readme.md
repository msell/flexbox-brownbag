12) flex-basis and wrapping work together
  ```
  .box {
  flex-basis: 500px;
}
```
- what happens when we dont have 3000px above?  (flex-shrink kicks in)
- add flex-wrap: wrap; to container
- ok now how do we get the items to use the extra space on the right?
  - give the boxes a flex-grow: 1;

```
.box3 {
  flex-grow: 10;
}
```

- note that in this scenario, flex-grow and shrink they only impact the row they are on
- grow and shrink has zero impact on the other rows.

- now lets flip the axis 
```
.container {
    display:flex; 

    flex-wrap: wrap;
    flex-direction: column;
    min-height: 100vh;
}

.box {
  flex-grow: 1;
}

.box3 {
  flex-grow: 150;
}
```

- now set box flex-basis: 250px; and change min-height to just height;

- now add flex-basis:100px; to box4.  crush the browser up and down vertically.
