#version 300 es

in vec2 a_vertex_position;

uniform vec2 u_resolution;

void main() {
	vec2 clip_space = (a_vertex_position / u_resolution) * 2.0 - 1.0;
	gl_Position = vec4(fract(clip_space), 0, 1);

}