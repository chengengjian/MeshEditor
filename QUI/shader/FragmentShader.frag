#version 450 core
out vec4 FragColor;
out float gl_FragDepth;
in vec3 Normal;
in vec3 ourColor;
in vec3 FragPos;
in vec4 gl_FragCoord;


uniform vec3 objectColor;
uniform vec3 lightColor;
uniform vec3 lightPos;
uniform vec3 viewPos;
uniform float drawMode;
uniform int drawType;


void main()
{
	vec3 baseColor = drawMode * ourColor;
	//if(drawMode == 1){ ourColor = vec3(0,0,0);}
    float specularStrength = 0.2f;

    vec3 viewDir = normalize(viewPos - FragPos);

    float ambientStrength = 0.25;
    vec3 ambient = ambientStrength * lightColor;

    vec3 norm = normalize(Normal);
    vec3 lightDir = normalize(lightPos - FragPos);
    float diff = max(dot(norm, lightDir), 0.0);
    vec3 diffuse = diff * lightColor;

    vec3 reflectDir = reflect(-lightDir, norm);
    float spec = pow(max(dot(viewDir, reflectDir), 0.0), 32);
    vec3 specular = specularStrength * spec * lightColor;

    vec3 result = (3.0*ambient + 0.3 * diffuse + 0.5*specular) * baseColor;
    //vec3 result = ourColor;
    FragColor = vec4(result, 1.0);
	
	if(drawType == 0){
		gl_FragDepth = gl_FragCoord.z; 
	}else if(drawType == 1){
		gl_FragDepth = gl_FragCoord.z - 0.000005; 
	}else if(drawType == 2){
		gl_FragDepth = gl_FragCoord.z - 0.000005; 
	}else if(drawType == 3){
		gl_FragDepth = gl_FragCoord.z - 0.000005; 
	}else if(drawType == 4){  //命名绘制
		gl_FragDepth = gl_FragCoord.z; 
		FragColor = vec4(ourColor, 1.0);
	}
	//float dep = 0.5;
	//FragColor = vec4(dep,dep,dep,1.0);
};
