function makeArmy(){
    let shooters=[];
    let i=0;
    while (i<2){
        let j=i;
        let shooter=function(){
            console.log(j);


        };
        shooters.push(shooter);
        i++;       
    }
    return shooters;
    let army =makeArmy();
    alert (army[0]);

}