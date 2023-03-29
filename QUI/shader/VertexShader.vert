
#version 450 core
layout (location = 0) in vec3 aPos;
layout (location = 1) in vec3 aNormal;
layout (location = 2) in vec3 aColor;
layout (location = 3) in vec3 name;
//out vec4 VertexColor ;
out vec3 ourColor;
out vec2 TexCoord;
out vec3 Normal;
out vec3 FragPos;

uniform mat4 model;
uniform mat4 view;
uniform mat4 projection;
uniform mat4 trans;
uniform int selectType;
uniform int isSelected;
void main()
{
        gl_Position = projection * view *  model * vec4(aPos, 1.0f);
        FragPos = vec3(model * vec4(aPos, 1.0));
        Normal = aNormal;
		if(selectType == 1){
			ourColor = vec3(name.x, name.y, name.z);
		}else{
			ourColor = aColor;
		}
		
		if(isSelected == 1 && selectType==0){
			ourColor = vec3(1.0,0.5,0.0);
		}else{
			ourColor = ourColor;
		}
        
};
