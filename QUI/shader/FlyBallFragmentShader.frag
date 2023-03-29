#version 450 core
out vec4 FragColor;
uniform vec3 ourColor;
in vec3 FragPos;
in vec3 center;
in vec2 Texcoord;
uniform int renderType;
uniform sampler2D textureImg;
void main()
{
	float dis =  distance(FragPos, center);
	float mask = 0.0;
	if(dis <0.5 ){
		mask = 1.0;
	}else{
		discard;
	}
	if(renderType == 1){
		if(dis <0.42 ){
			mask = 0.3;
		}
		FragColor = texture(textureImg, Texcoord) * vec4(ourColor,mask);
		gl_FragDepth = gl_FragCoord.z-0.01; 

	}else if(renderType == 2){
		mask = 0.3;
		FragColor = vec4(ourColor,mask);
		gl_FragDepth = gl_FragCoord.z; 
	}else if(renderType == 0){
	
		//vec4 texColor = texture(textureImg, Texcoord);
		
		//FragColor =  vec4(vec3(texColor),mask);

		FragColor = texture(textureImg, Texcoord) * vec4(ourColor,mask);
		gl_FragDepth = gl_FragCoord.z-0.01; 
	
	}
      
	

	


	
};
