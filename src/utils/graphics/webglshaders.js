function createShaderFromScript(gl, scriptId, opt_shaderType) {
  var shaderScript = document.getElementById(scriptId);
  console.log(shaderScript.text)
  if(!shaderScript) {
    alert(`Unable to find shader script with id ${scriptId}`,);
  }

  // If we didn't pass in a type, use the 'type' from
  // the script tag.
  if (!opt_shaderType) {
    if (shaderScript.type == "x-shader/x-vertex") {
      opt_shaderType = gl.VERTEX_SHADER;
    } else if (shaderScript.type == "x-shader/x-fragment") {
      opt_shaderType = gl.FRAGMENT_SHADER;
    } else if (!opt_shaderType) {
      throw("*** Error: shader type not set");
    }
  }
 
  return compileShader(gl, shaderScript.text, opt_shaderType);
}

function createProgramFromScripts(gl, shaderScriptIds) {
  var vertexShader = createShaderFromScript(gl, shaderScriptIds[0], gl.VERTEX_SHADER);
  var fragmentShader = createShaderFromScript(gl, shaderScriptIds[1], gl.FRAGMENT_SHADER);
  return createProgram(gl, vertexShader, fragmentShader);
}

//
// Initialize a shader program, so WebGL knows how to draw our data
//
function createProgram(gl, vertexShader, fragmentShader) {
  //
  const shaderProgram = gl.createProgram();
  // Create the shader program
  gl.attachShader(shaderProgram, vertexShader);
  gl.attachShader(shaderProgram, fragmentShader);
  gl.linkProgram(shaderProgram);

  // If creating the shader program failed, alert

  if (!gl.getProgramParameter(shaderProgram, gl.LINK_STATUS)) {
    alert(
      `Unable to initialize the shader program: ${gl.getProgramInfoLog(
        shaderProgram,
      )}`,
    );
    return null;
  }

  return shaderProgram;
}

//
// creates a shader of the given type, uploads the source and
// compiles it.
//
function compileShader(gl, source, type) {
  const shader = gl.createShader(type);

  // Send the source to the shader object
  gl.shaderSource(shader, source);

  // Compile the shader program
  gl.compileShader(shader);

  // See if it compiled successfully
  if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
    alert(
      `An error occurred compiling the shaders: ${gl.getShaderInfoLog(shader)}`,
    );
    gl.deleteShader(shader);
    return null;
  }
  return shader;
}

export {createProgramFromScripts};