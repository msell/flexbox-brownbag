
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
