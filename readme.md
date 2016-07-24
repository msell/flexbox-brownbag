
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
