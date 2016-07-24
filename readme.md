

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
