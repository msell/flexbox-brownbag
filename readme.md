
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
