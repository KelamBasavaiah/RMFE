function greeting(){
    var thehours = new Date().getHours();
      var themessage;
      var morning = ('Good morning');
      var afternoon = ('Good afternoon');
      var evening = ('Good evening');
  
      if (thehours >= 0 && thehours < 12) {
          themessage = morning; 
  
      } else if (thehours >= 12 && thehours < 17) {
          themessage = afternoon;
  
      } else if (thehours >= 17 && thehours < 24) {
          themessage = evening;
      }
  
      $('.greeting').append(themessage);
  }

  function text(){


    class TextScramble {
      constructor(el) {
        this.el = el;
        this.chars = '!<>-_\\/[]{}—=+*^?#________';
        this.update = this.update.bind(this);
      }
      setText(newText) {
        const oldText = this.el.innerText;
        const length = Math.max(oldText.length, newText.length);
        const promise = new Promise(resolve => this.resolve = resolve);
        this.queue = [];
        for (let i = 0; i < length; i++) {
          const from = oldText[i] || '';
          const to = newText[i] || '';
          const start = Math.floor(Math.random() * 40);
          const end = start + Math.floor(Math.random() * 40);
          this.queue.push({ from, to, start, end });
        }
        cancelAnimationFrame(this.frameRequest);
        this.frame = 0;
        this.update();
        return promise;
      }
      update() {
        let output = '';
        let complete = 0;
        for (let i = 0, n = this.queue.length; i < n; i++) {
          let { from, to, start, end, char } = this.queue[i];
          if (this.frame >= end) {
            complete++;
            output += to;
          } else if (this.frame >= start) {
            if (!char || Math.random() < 0.28) {
              char = this.randomChar();
              this.queue[i].char = char;
            }
            output += `<span class="dud">${char}</span>`;
          } else {
            output += from;
          }
        }
        this.el.innerHTML = output;
        if (complete === this.queue.length) {
          this.resolve();
        } else {
          this.frameRequest = requestAnimationFrame(this.update);
          this.frame++;
        }
      }
      randomChar() {
        return this.chars[Math.floor(Math.random() * this.chars.length)];
      }}
    
    
    // ——————————————————————————————————————————————————
    // Example
    // ——————————————————————————————————————————————————
    
    const phrases = [
    'Welcome to marga',
    'Release Management System',
    ];
    
    
    const el = document.querySelector('.text');
    const fx = new TextScramble(el);
    
    let counter = 0;
    const next = () => {
      fx.setText(phrases[counter]).then(() => {
        setTimeout(next, 800);
      });
      counter = (counter + 1) % phrases.length;
    };
    
    next();
    }
    
    
  
  // function timer(){
  //   function startTimer(duration, display) {
  //     var themessage;
      
  //     var morning = ('project in progress');
  //       var timer = duration, minutes, seconds;
  //       setInterval(function () {
          
  //           minutes = parseInt(timer / 60, 10);
  //           seconds = parseInt(timer % 60, 10);
    
  //           minutes = minutes < 10 ? "0" + minutes : minutes;
  //           seconds = seconds < 10 ? "0" + seconds : seconds;
    
  //           display.text(minutes + ":" + seconds);
    
  //           if (--timer < 0) {
  //               //this.time=  
  //              //timer = duration;
               
  //              //debugger;
  //               window.location.assign("/developer"); 
  //               if(window.location == "http://localhost:4200/developer"){
  //                 setInterval=null;
  //                 themessage=morning;
                  
  //               }
                             
               
  //              //timer = this.myRoutes.navigate(['/firstpage']);
  //           }
  //           $('.timer').append(themessage);
  //       }, 1000);
  //   }
  //   jQuery(function ($) {
  //       var fiveMinutes = 3 * 1,
  //           display = $('#time');
  //       startTimer(fiveMinutes, display);
  //   });
  //   }
    
  function chatbot(){
    !function(e,t,a)
    {
      var c=e.head||e.getElementsByTagName("head")[0],n=e.createElement("script");n.async=!0,n.defer=!0, n.type="text/javascript",n.src=t+"/static/js/chat_widget.js?config="+JSON.stringify(a),c.appendChild(n)}(document,"https://app.engati.com",{bot_key:"71ac453cdee54192",welcome_msg:true,branding_key:"default",server:"https://app.engati.com",e:"p" });
  }
  
  function mytimer(){
  
  var timer;
  
  var compareDate = new Date();
  
  compareDate.setDate(compareDate.getDate()+1 ); //just for this demo today + 7 days
  
  timer = setInterval(function() {
    timeBetweenDates(compareDate);
  }, 1000);
  
  function timeBetweenDates(toDate) {
    var dateEntered = toDate;
    var now = new Date();
    var difference = dateEntered.getTime() - now.getTime();
  
    if (difference <= 0) {
  
      // Timer done
      clearInterval(timer);
    
    } else {
      
      var seconds = Math.floor(difference / 1000);
      var minutes = Math.floor(seconds / 60);
      var hours = Math.floor(minutes / 60);
      var days = Math.floor(hours / 24);
  
      hours %= 24;
      minutes %= 60;
      seconds %= 60;
  
      $("#days").text(days);
      $("#hours").text(hours);
      $("#minutes").text(minutes);
      $("#seconds").text(seconds);
    }
  }
  }
  function set(){
  
  
  $(function() {
    $('input[name="daterange"]').daterangepicker({
      opens: 'left'
    }, function(start, end, label) {
      console.log("A new date selection was made: " + start.format('YYYY-MM-DD') + ' to ' + end.format('YYYY-MM-DD'));
    });
  });
  }
  
  
  
  
  
  
  
      function longway(){
          var canvas = document.getElementById("canvas");
  
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  
  // Initialize the GL context
  var gl = canvas.getContext('webgl');
  if(!gl){
    console.error("Unable to initialize WebGL.");
  }
  
  //Time
  var time = 0.0;
  
  //************** Shader sources **************
  
  var vertexSource = `
  attribute vec2 position;
  void main() {
      gl_Position = vec4(position, 0.0, 1.0);
  }
  `;
  
  
  var fragmentSource = `
  precision highp float;
  
  uniform float width;
  uniform float height;
  vec2 resolution = vec2(width, height);
  
  uniform float time;
  
  //Base values modified with depth later
  float intensity = 1.0;
  float radius = 0.05;
  
  //Distance functions from 
  //https://www.iquilezles.org/www/articles/distfunctions2d/distfunctions2d.htm
  float triangleDist(vec2 p){ 
      const float k = sqrt(3.0);
    p.x = abs(p.x) - 1.0;
    p.y = p.y + 1.0/k;
    if( p.x+k*p.y>0.0 ) p=vec2(p.x-k*p.y,-k*p.x-p.y)/2.0;
    p.x -= clamp( p.x, -2.0, 0.0 );
    return -length(p)*sign(p.y);
  }
  
  float boxDist(vec2 p){
    vec2 d = abs(p)-1.0;
    return length(max(d,vec2(0))) + min(max(d.x,d.y),0.0);
  }
  
  float circleDist( vec2 p){
    return length(p) - 1.0;
  }
  
  
  
  //https://www.shadertoy.com/view/3s3GDn
  float getGlow(float dist, float radius, float intensity){
    return pow(radius/dist, intensity);
  }
  
  void main(){
      
      vec2 uv = gl_FragCoord.xy/resolution.xy;
    float widthHeightRatio = resolution.x/resolution.y;
    vec2 centre;
    vec2 pos;
      
    float t = time * 0.05;
      
    float dist;
    float glow;
    vec3 col = vec3(0);
      
    //The spacing between shapes
    float scale = 500.0;
    //Number of shapes
    const int layers = 15;
      
    float depth;
    vec2 bend;
      
    vec3 purple = vec3(0.611, 0.129, 0.909);
    vec3 green = vec3(0.133, 0.62, 0.698);
      
    float angle;
    float rotationAngle;
    mat2 rotation;
      
    //For movement of the anchor point in time
    float d = 2.5*(sin(t) + sin(3.0*t));
  
    //Create an out of frame anchor point where all shapes converge to    
    vec2 anchor = vec2(0.5 + cos(d), 0.5 + sin(d));
      
    //Create light purple glow at the anchor loaction
    pos = anchor - uv;
    pos.y /= widthHeightRatio;
    dist = length(pos);
    glow = getGlow(dist, 0.2, 1.9);
    col += glow * vec3(0.7,0.6,1.0);
      
      for(int i = 0; i < layers; i++){
          
        //Time varying depth information depending on layer
      depth = fract(float(i)/float(layers) + t);
  
      //Move the focus of the camera in a circle
      centre = vec2(0.5 + 0.2 * sin(t), 0.5 + 0.2 * cos(t));
          
         //Position shapes between the anchor and the camera focus based on depth
         bend = mix(anchor, centre, depth);
           
      pos = bend - uv;
         pos.y /= widthHeightRatio;
  
      //Rotate shapes
      rotationAngle = 3.14 * sin(depth + fract(t) * 6.28) + float(i);
      rotation = mat2(cos(rotationAngle), -sin(rotationAngle), 
                      sin(rotationAngle),  cos(rotationAngle));
          
      pos *= rotation;
          
      //Position shapes according to depth
      pos *= mix(scale, 0.0, depth);
          
      float m = mod(float(i), 3.0);
      if(m == 0.0){
          dist = abs(boxDist(pos));
      }else if(m == 1.0){
        dist = abs(triangleDist(pos));
      }else{
          dist = abs(circleDist(pos));
      }
         
      //Get glow from base radius and intensity modified by depth
      glow = getGlow(dist, radius+(1.0-depth)*2.0, intensity + depth);
          
      //Find angle along shape and map from [-PI; PI] to [0; 1]
      angle = (atan(pos.y, pos.x)+3.14)/6.28;
      //Shift angle depending on layer and map to [1...0...1]
          angle = abs((2.0*fract(angle + float(i)/float(layers))) - 1.0);
          
      //White core
         //col += 10.0*vec3(smoothstep(0.03, 0.02, dist));
          
      //Glow according to angle value
      col += glow * mix(green, purple, angle);
      }
      
    //Tone mapping
    col = 1.0 - exp(-col);
      
    //Output to screen
    gl_FragColor = vec4(col,1.0);
  }
  `;
  
  //************** Utility functions **************
  
  window.addEventListener('resize', onWindowResize, false);
  
  function onWindowResize(){
    canvas.width  = window.innerWidth;
    canvas.height = window.innerHeight;
      gl.viewport(0, 0, canvas.width, canvas.height);
    gl.uniform1f(widthHandle, window.innerWidth);
    gl.uniform1f(heightHandle, window.innerHeight);
  }
  
  
  //Compile shader and combine with source
  function compileShader(shaderSource, shaderType){
    var shader = gl.createShader(shaderType);
    gl.shaderSource(shader, shaderSource);
    gl.compileShader(shader);
    if(!gl.getShaderParameter(shader, gl.COMPILE_STATUS)){
        throw "Shader compile failed with: " + gl.getShaderInfoLog(shader);
    }
    return shader;
  }
  
  //From https://codepen.io/jlfwong/pen/GqmroZ
  //Utility to complain loudly if we fail to find the attribute/uniform
  function getAttribLocation(program, name) {
    var attributeLocation = gl.getAttribLocation(program, name);
    if (attributeLocation === -1) {
        throw 'Cannot find attribute ' + name + '.';
    }
    return attributeLocation;
  }
  
  function getUniformLocation(program, name) {
    var attributeLocation = gl.getUniformLocation(program, name);
    if (attributeLocation === -1) {
        throw 'Cannot find uniform ' + name + '.';
    }
    return attributeLocation;
  }
  
  //************** Create shaders **************
  
  //Create vertex and fragment shaders
  var vertexShader = compileShader(vertexSource, gl.VERTEX_SHADER);
  var fragmentShader = compileShader(fragmentSource, gl.FRAGMENT_SHADER);
  
  //Create shader programs
  var program = gl.createProgram();
  gl.attachShader(program, vertexShader);
  gl.attachShader(program, fragmentShader);
  gl.linkProgram(program);
  
  gl.useProgram(program);
  
  //Set up rectangle covering entire canvas 
  var vertexData = new Float32Array([
    -1.0,  1.0, 	// top left
    -1.0, -1.0, 	// bottom left
     1.0,  1.0, 	// top right
     1.0, -1.0, 	// bottom right
  ]);
  
  //Create vertex buffer
  var vertexDataBuffer = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, vertexDataBuffer);
  gl.bufferData(gl.ARRAY_BUFFER, vertexData, gl.STATIC_DRAW);
  
  // Layout of our data in the vertex buffer
  var positionHandle = getAttribLocation(program, 'position');
  
  gl.enableVertexAttribArray(positionHandle);
  gl.vertexAttribPointer(positionHandle,
    2, 				// position is a vec2 (2 values per component)
    gl.FLOAT, // each component is a float
    false, 		// don't normalize values
    2 * 4, 		// two 4 byte float components per vertex (32 bit float is 4 bytes)
    0 				// how many bytes inside the buffer to start from
    );
  
  //Set uniform handle
  var timeHandle = getUniformLocation(program, 'time');
  var widthHandle = getUniformLocation(program, 'width');
  var heightHandle = getUniformLocation(program, 'height');
  
  gl.uniform1f(widthHandle, window.innerWidth);
  gl.uniform1f(heightHandle, window.innerHeight);
  
  var lastFrame = Date.now();
  var thisFrame;
  
  function draw(){
      
    //Update time
      thisFrame = Date.now();
      time += (thisFrame - lastFrame)/1000;	
      lastFrame = thisFrame;
  
      //Send uniforms to program
    gl.uniform1f(timeHandle, time);
    //Draw a triangle strip connecting vertices 0-4
    gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
  
    requestAnimationFrame(draw);
  }
  
  draw();
      }