
11) Flexbox flex-gro, flex-shrink, and flex-basis

    ```
    .box {  
      flex-grow: 1;
      flex-shrink: 1;
    }
    ```

- flex: 1; is a shorthand for setting flex-grow and flex-shrink to 1

- remvoe the box stying and try this
```
.box1 {
  flex-basis: 400px;
  flex-grow: 1;
}

.box2 {
  flex-basis: 400px;
}
```

- notice above on box2 the defualt for flex-grow is zero.  That means when there is extra room, dont do anything.
add flex-grow: 2; to box2 it will give box2 twice the extra space as box 1

- crush the browser down to 800px, then go smaller. notice the items do not wrap to next line
- they just shrink to the available space.

     - shorthand notation flex: grow/shrink/basis
     flex: 1 5 400px
