#version 330 core
layout (location = 0) in vec3 aPos;
layout (location = 1) in vec2 aTextureCoord;
out vec3 outColor;
out vec2 textureCoord;

//矩阵必须初始化，初始化单位矩阵，否则GLSL语言中默认矩阵是0矩阵
uniform mat4 trans = mat4(1.0);

uniform mat4 model = mat4(1.0);
uniform mat4 view = mat4(1.0);
uniform mat4 projection = mat4(1.0);

void main(){
        //gl_Position = trans * vec4(aPos.x, aPos.y, aPos.z, 1.0);//在矩阵乘法中是右乘左，与显实的乘法不同
        gl_Position = projection * view * model * vec4(aPos, 1.0);
        textureCoord = aTextureCoord;
}
