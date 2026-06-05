const users=[{
    fname:"Sohan",
    gender:"male"
},{
    fname:"steven",
    gender:"male"
},{
    fname:"Sharon",
    gender:"female"
},
];
for( let i=0;i<users.length;i++){
    if(users[i]["gender"]==="male"){
        console.log(users[i]["fname"]);
    }
}