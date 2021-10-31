var cnt=document.getElementById("count"); 
var water=document.getElementById("water");
var percent=cnt.innerText;
var interval;
var DatabaseData =cnt.innerText;
var mock;

(function(){

    const config = {
        apiKey: "AIzaSyAM1W-I2djaggNC8-9W5p0CR2b5KJ8J3es",
        authDomain: "waterlevel-b3c60.firebaseapp.com",
        databaseURL: "https://waterlevel-b3c60-default-rtdb.firebaseio.com",
        projectId: "waterlevel-b3c60",
        storageBucket: "waterlevel-b3c60.appspot.com",
        messagingSenderId: "303485112022",
        appId: "1:303485112022:web:76b2fabce454c046464377"
      };
      firebase.initializeApp(config);
      
      //Get elements
      const preObject = document.getElementById('TimeHTML');

      // Create reference
    //   const dbRefObject = firebase.database().ref().child('Time');

            var ref = firebase.database().ref("WaterLevelData/Precentage/");

                ref.on("value", function(snapshot) {
                    snapshot.forEach(function(childSnapshot) {
                        var childData1 = childSnapshot.val();
                        // var id=childData.id;
                        console.log(childData1);

                        percent = childData1;
                        // cnt.innerHTML = percent;

                        water.style.transform='translate(0'+','+(100-percent)+'%)';

                        interval=setInterval(function(){ 
                            //   percent++; 
                            //   cnt.innerHTML = percent; 

                        
                            //   water.style.transform='translate(0'+','+(100-percent)+'%)';
                            if(percent==100){
                                clearInterval(interval);
                            }
                        },
                        100);
                        
                
                    });
                
                });

                var ref = firebase.database().ref("WaterLevelData/Water_Level/");

                ref.on("value", function(snapshot) {
                    snapshot.forEach(function(childSnapshot) {
                        var childData2 = childSnapshot.val();
                        // var id=childData.id;
                        console.log(childData2);

                        // percent = childData2;
                        cnt.innerHTML = childData2;

                        water.style.transform='translate(0'+','+(100-percent)+'%)';           
                
                    });
                
                });

                

        
        
    
}());

