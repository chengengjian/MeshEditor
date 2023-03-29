#version 330 core
out vec4 fragColor;
in vec3 outColor;//从顶点着色器中传过来的颜色
in vec2 textureCoord;
uniform sampler2D textureImg;
uniform sampler2D textureCpp;
void main(){
        //fragColor = texture(textureImg, textureCoord);
         fragColor = mix(texture(textureImg,textureCoord), texture(textureCpp,textureCoord), 0.5);
}
