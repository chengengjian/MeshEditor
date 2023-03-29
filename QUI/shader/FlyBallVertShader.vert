
#version 450 core
layout (location = 0) in vec3 aPos;
layout (location = 1) in vec2 vTexcoord;
//out vec3 ourColor;
out vec3 FragPos;
out vec3 center;
out vec2 Texcoord;
uniform mat4 model;
uniform mat4 view;
uniform mat4 projection;
uniform vec3 ballCenter;


void main()
{
        gl_Position = projection * view *  model * vec4(aPos + ballCenter, 1.0f);
		center = ballCenter;
		FragPos = aPos + ballCenter;
        //ourColor = vec3(1.0,0.5,0.5);
		Texcoord = vTexcoord;
};
