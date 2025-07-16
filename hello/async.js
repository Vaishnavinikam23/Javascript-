

//settimeout ne given time nantr elements yeta


function loadingData(callback){
    setTimeout(()=>{
    console.log("1) Loading Data..")
    callback();
    },4000)
}
function collectingData(callback){
    setTimeout(()=>{
    console.log("2) Collecting Data..")
    callback();
    },5000)

}
function approvingData(){
      
    console.log("3) Approving Data..")
    
}
function approved(){
    console.log("4) Approved..")
}

loadingData(function(){


collectingData(function(){
approvingData();
approved();
});

});
//ata hey functions madhe functions hota this is called callback hell 
