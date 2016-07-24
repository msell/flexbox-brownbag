
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
