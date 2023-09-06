function initBuffers(gl) {
  const positionBuffer = initPositionBuffer(gl);

  return {
    position: positionBuffer,
  };
}
function initHexagon(s_x, s_y, width) {
  // Now create an array of positions for the shape.
  const width_diag_x = width * 0.5;
  const width_diag_y = width * (1.73/2);
  const positions = []
  positions[0] = s_x;
  positions[1] = s_y;

  positions[2] = positions[0] + width_diag_x;
  positions[3] = positions[1] + width_diag_y;

  positions[4] = positions[2] + width;
  positions[5] = positions[3];

  positions[6] = positions[4] + width_diag_x;
  positions[7] = positions[5] - width_diag_y;

  positions[8] = positions[6] - width_diag_x;
  positions[9] = positions[7] - width_diag_y;

  positions[10] = positions[8] - width;
  positions[11] = positions[9];

  return positions

}
function initPositionBuffer(gl) {
  const positionBuffer = gl.createBuffer();

  // Select the positionBuffer as the one to apply buffer
  // operations to from here out.
  gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);

  // Now create an array of positions for the shape.
  const s_x = 50;
  const s_y = 50;
  const width = 20;
  const positions = initHexagon(s_x, s_y, width);

  // Now pass the list of positions into WebGL to build the
  // shape. We do this by creating a Float32Array from the
  // JavaScript array, then use it to fill the current buffer.
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(positions), gl.STATIC_DRAW);

  return positionBuffer;
}

export { initBuffers };
