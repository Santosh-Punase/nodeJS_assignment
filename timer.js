//Q1 synchronous timeout
function setTimeoutSync(callback, n){
    var str = "loading...";
    console.log(str);
    callback(n);

}
function callback(n){
    var current = Date.now();
    var md = Date.now();
    while(md-current != n){
        md = Date.now();
        //console.log(md);
    }
   console.log("After "+n/1000+" sec")
}

setTimeoutSync(callback,3000);