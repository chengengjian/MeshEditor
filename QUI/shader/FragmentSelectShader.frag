#version 450 core
in vec3 ourColor;
in vec4 gl_FragCoord;

out vec4 FragColor;
out float gl_FragDepth;

uniform int drawType;

void main()
{

    //FragColor = vec4(1.0, 1.0, 0.0, 1.0);
	FragColor = vec4(ourColor.z, ourColor.y, ourColor.x, 1.0);
	
	if(drawType == 0){
		gl_FragDepth = gl_FragCoord.z; 
		FragColor = vec4(1.0, 1.0, 1.0, 1.0);
	}else if(drawType == 1){
		gl_FragDepth = gl_FragCoord.z - 0.000005; 
	}else if(drawType == 2){
		gl_FragDepth = gl_FragCoord.z - 0.000005; 
	}else if(drawType == 3){
		gl_FragDepth = gl_FragCoord.z - 0.000005; 
	}
};
