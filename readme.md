10) Flexbox sizing with flex property
  
  ```
  .box {
    flex: 1;
  }
```

  - what does flex do?
  - flex property on an item instucts the item how to scale.
  - it will scale larger or smaller based on available space.
  - without specifying flex itmes just take as much space as they need
  - flex deals w/ the additional space remaining in the container

```
.box2 {
  flex: 2;
}

.box5 {
  flex: 3.5;
}
```
- crush the browser down to show what happens when there is not enough space
