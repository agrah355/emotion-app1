Webcam.set({
    width: 350,
    height: 300,
    image_format:"png",
    png_quality: 90
    }
    );
    camera=document.getElementById("camera");
    
    Webcam.attach("#camera");

  function takeSnapshot(){
      Webcam.snap(function(data_uri){
          document.getElementById("result").innerhtml="<img id='result1' src='"+data_uri+"'>";
      });
  }
  console.log("ml5 version : ",ml5.version);
  classifier=Image.classifier("https://teachablemachine.withgoogle.com/models/Qct9MqG8S/model.json",modleLodded);
  function modleLodded(){
      console.log("modle lodded true");
  }
  function check(){
      image=document.getElementById("result1");
      classifier.classify(image, gotresult);
  }
  function gotresult(error,results){
      if(error){
          console.erorr(error);
      }else{
          console.log(results);
          document.getElementById("name_label").innerHTML=results[0].label;
          document.getElementById("accuracy_label").innerHTML=results[0].confidence.toFixed(3);
      }
  }
