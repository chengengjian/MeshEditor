#version 330 core
layout (location = 0) in vec3 aPos;
layout (location = 1) in vec3 name;

out vec3 ourColor;

uniform mat4 model;
uniform mat4 view;
uniform mat4 projection;
uniform mat4 trans;

void main()
{
		gl_Position = projection * view * model * vec4(aPos, 1.0);
		
		//int mask0 = 0x000000FF;
		//int mask1 = 0x0000FF00;
		//int mask2 = 0x00FF0000;
		//int name0 = (mask0 & name) >> 0;
		//int name1 = (mask1 & name) >> 8;
		//int name2 = (mask2 & name) >> 16;
		//int myname = name;
		//int name0 = myname % 256;
		//myname = myname / 256;
		//int name1 = myname % 256;
		//myname = myname / 256;
		//int name2 = myname % 256;
		ourColor = vec3(name.z, name.y, name.x);
        //ourColor = vec3((float(name2)) / 255.0, (float(name1)) / 255.0, (float(name0)) / 255.0);
};
