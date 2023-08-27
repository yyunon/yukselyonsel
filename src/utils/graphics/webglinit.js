import { drawScene } from "./webgldrawscene.js";
import { createProgramFromScripts} from "./webglshaders.js";
import { initBuffers} from "./webglshapes.js";

function createTextCanvas(text, width, height) {
  var canvasctx = document.createElement("canvas").getContext("2d");
  canvasctx.canvas.width = width;
  canvasctx.canvas.height = height;
  canvasctx.font = "20px monospace";  
  canvasctx.textAlign = "center";
  canvasctx.textBaseline = "middle";
  canvasctx.fillStyle = "black";
  canvasctx.clearRect(0, 0, canvasctx.canvas.width, canvasctx.canvas.height);
  canvasctx.fillText(text, width / 2, height / 2);
  return canvasctx.canvas;

}
function initgl(canvasName) {
      const canvas = document.querySelector(canvasName);
      // Initialize the GL context
      const gl = canvas.getContext("webgl2");

      var textCanvas = createTextCanvas("about", 100, 26);

      // Only continue if WebGL is available and working
      if (gl === null) {
        alert(
          "Unable to initialize WebGL2. Your browser or machine may not support it.",
        );
        return;
      }

      // Collect all the info needed to use the shader program.
      // Look up which attribute our shader program is using
      // for aVertexPosition and look up uniform locations.
      const shaderProgram = createProgramFromScripts(gl, ["vertexshader", "fragmentshader"]);

      const programInfo = {
        program: shaderProgram,
        attribLocations: {
          vertexPosition: gl.getAttribLocation(shaderProgram, "a_vertex_position"),
        },
        uniformLocations: {
          uColor: gl.getUniformLocation(shaderProgram, "u_color"),
          projectionMatrix: gl.getUniformLocation(shaderProgram, "uProjectionMatrix"),
          modelViewMatrix: gl.getUniformLocation(shaderProgram, "uModelViewMatrix"),
          uResolution: gl.getUniformLocation(shaderProgram, "u_resolution"),
        },
			}
      const buffers = initBuffers(gl);
      drawScene(gl, programInfo, buffers);
}

export {initgl};