const request=new XMLHttpRequest();
request.open("GET","https://booksappdetail.herokuapp.com/players");
request.send();
request.onload=()=>{
    // console.log(request);
    // if(request.status===200)
    // {
    //     console.log(JSON.parse(request.response));
    //     myarray=JSON.parse(request.response);
    //     console.log(myarray.clients[0].name);
    //     //document.queryselector("#clientid").innerHTML=myarray.clients[0].name;
    //     document.queryselector("#clientid").innerHTML="HELLO 1";
    // }
    // else
    // {
    //     console.log(`error ${request.status}`);
    // }   
}


fetch("https://booksappdetail.herokuapp.com/players")
.then(response=>{
    //console.log(response)
    return response.json();
})
.then(data=>{
    console.log(data);
    console.log(data.clients[0].name);
    document.querySelector("#clientid").innerHTML=data.clients[0].id;
    document.querySelector("#closing-agent").innerHTML=data.clients[0].name;
    document.querySelector("#company").innerHTML=data.clients[0].company;
    document.querySelector("#orderid").innerHTML=data.clients[0].orderId;
    document.querySelector("#invoice").innerHTML=data.clients[0].invoicepaid;
    document.querySelector("#invoicepending").innerHTML=data.clients[0].invoicePending;

    document.querySelector("#clientid1").innerHTML=data.clients[1].id;
    document.querySelector("#closing-agent1").innerHTML=data.clients[1].name;
    document.querySelector("#company1").innerHTML=data.clients[1].company;
    document.querySelector("#orderid1").innerHTML=data.clients[1].orderId;
    document.querySelector("#invoice1").innerHTML=data.clients[1].invoicepaid;
    document.querySelector("#invoicepending1").innerHTML=data.clients[1].invoicePending;

    document.querySelector("#clientid2").innerHTML=data.clients[2].id;
    document.querySelector("#closing-agent2").innerHTML=data.clients[2].name;
    document.querySelector("#company2").innerHTML=data.clients[2].company;
    document.querySelector("#orderid2").innerHTML=data.clients[2].orderId;
    document.querySelector("#invoice2").innerHTML=data.clients[2].invoicepaid;
    document.querySelector("#invoicepending2").innerHTML=data.clients[2].invoicePending;
})
