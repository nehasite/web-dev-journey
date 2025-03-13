let btn = gsap.timeline()

btn.to("#box1", {
    x:1200,
    duration:2,
    backgroundColor:"yellow",
    scale:0.5
})
btn.to("#box2",{
    x:1300,
    duration:2,
    backgroundColor:"orange",
    scale:0.5
})
btn.to("#box3",{
    x:1100,
    duration:2,
   backgroundColor:"red",
   scale:0.5
})


