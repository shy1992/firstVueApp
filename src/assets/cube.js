var W = 600, H = 600;
var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
var STEPS = 0.5;
var MODEL_MIN_X = -2, MODEL_MAX_X = 2;
var MODEL_MIN_Y = -2, MODEL_MAX_Y = 2;

var points = [];

function initGeometry(){
	for(var x = -1; x<=1; x+=STEPS){
      for(var y = -1; y<=1; y+=STEPS){
        for(var z = -1; z<=1; z+=STEPS){
			points.push([x,y,z])
        }
      }
    }
}

function prespectiveProjection(point){
	var x = point[0],
    	y = point[1],
    	z = point[2];

    // distance between camera point and the projection applied 	smaller == closer together
	return [
    	x/(z+4),
    	y/(z+4)
    ];

}

function project(point){
	var perspectivePoint = prespectiveProjection(point);
    //var perspectivePoint = point;
    var x = perspectivePoint[0],
    	y = perspectivePoint[1];

	return [
    	W* (x - MODEL_MIN_X) / (MODEL_MAX_X - MODEL_MIN_X),
        H* (1-(y - MODEL_MIN_Y) / (MODEL_MAX_Y - MODEL_MIN_Y))
    ];
}

function renderPoint(point){
	var projectedPoint = project(point);
    var x = projectedPoint[0];
    var y = projectedPoint[1];

    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(x+1, y+1);
    ctx.linewidth = 4;
    ctx.strokeStyle = "red";
    ctx.stroke();
}

function rotateX(point, theta){
	var x = point[0],
    	y = point[1],
    	z = point[2];

	return [
      x,										// new x
      Math.cos(theta) * y -Math.sin(theta)*z,	// new y
      Math.sin(theta) * y + Math.cos(theta)*z	// new z
    ];
}

function rotateY(point, theta){
	var x = point[0],
    	y = point[1],
    	z = point[2];

	return [
      Math.cos(theta) * x -Math.sin(theta)*z,	// new x
      y,										// new y
      Math.sin(theta) * x + Math.cos(theta)*z	// new z
    ];
}



var theta = 0;
var dtheta = 0.02;

function render(){
	ctx.clearRect(0,0,W,H);

    theta += dtheta;

    points.forEach((point)=>{
    	point = rotateX(point, theta);
        point = rotateY(point, theta*0.43);
    	renderPoint(point);
    });
    requestAnimationFrame(render);
}


initGeometry();
render();
console.log("Rendered?")
