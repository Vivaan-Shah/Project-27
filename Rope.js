class Rope{
constructor (bodyR, pointR) {
var options = {
bodyA:bodyR,
pointB:pointR,
stiffness:0.2,
length:200,
}
this.body=Constraint.create(options)
World.add(world,this.body)
this.pointR=pointR
}
display() {
push()
stroke("blue");
line(this.body.bodyA.position.x, this.body.bodyA.position.y, this.pointR.x, this.pointR.y)
pop()
}
}