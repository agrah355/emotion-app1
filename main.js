Webcam.set({
    width: 320,
    height: 240,
    image_format: 'jpeg',
    jpeg_quality: 90
  });
  Webcam.attach("#camera");

  function takeSnapshot(){
      Webcam.snap(function(data_uri){
          document.getElementById("result").innerhtml="<img id='result1' src='"+data_uri+"'>";
      });
  }
  classifier=Image.classifier("i have no link",modleLodded);
  function modleLodded(){
      console.log("ml5 version",ml5.version);
      console.log("modle lodded true");
  }
  