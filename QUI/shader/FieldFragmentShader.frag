#version 450 core
out vec4 FragColor;
in vec3 ourColor;
in vec3 FragPos;


void main()
{
	float dis =  distance(FragPos, vec3(0,0,0));
	
	float mask = 1.0;
	
	if(dis >3 ){
		mask = (3.0-dis)/3.0 + 1.0;
	}
	if(mask <= 0.0) mask = 0.0;
    FragColor = vec4(ourColor, mask);
};
