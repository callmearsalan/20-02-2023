mobile = 
[{id:01,image:"infinix -hot 8.jpg",name:"infinix-hot-8",colour:"blue",brand:"Infinix",modle:"hot-8",price:"25000.pkr",specification:"ram:4gb,rom:64gb,battery:6000mah"},
{id:02,image:"infinix-5A.jpg",name:"infinix-5A",colour:"blue",brand:"Infinix",modle:"smart-5A",price:"17000.pkr",specification:"ram:2gb,rom:32gb,battery:5000mah"},
{id:03,image:"infinix-hot-9 play.jpg",name:"infinix-hot-9-play",colour:"black",brand:"Infinix",modle:"hot-9",price:"18000.pkr",specification:"ram:4gb,rom:64gb,battery:6000mah"},
{id:04,image:"infinix-hot-10-play.png",name:"infinix-hot-10-play",colour:"voilate",brand:"Infinix",modle:"hot-10-play",price:"28000.pkr",specification:"ram:4gb,rom:128gb,battery:6000mah"},
{id:05,image:"infinix-hot-10.jpg.jpg",name:"infinix-hot-10",colour:"silver",brand:"Infinix",modle:"hot-10",price:"25000.pkr",specification:"ram:3gb,rom:32gb,battery:5000mah"},
{id:06,image:"infinix-hot-12.jpg.jpg",name:"infinix-hot-12",colour:"white",brand:"Infinix",modle:"hot-12",price:"29500.pkr",specification:"ram:6gb,rom:64gb,battery:6000mah"},
{id:07,image:"infinix-hot10.png",name:"infinix-hot-10-plus",colour:"light green",brand:"Infinix",modle:"hot-10-plus",price:"25500.pkr",specification:"ram:4gb,rom:128gb,battery:6000mah"},
{id:08,image:"infinix-Smart-6.jpg.jpg",name:"infinix-smart-6",colour:"sky blue",brand:"Infinix",modle:"Smart-6",price:"18000.pkr",specification:"ram:2gb,rom:64gb,battery:4000mah"},
{id:09,image:"infinix-Zero-8-1.jpg",name:"infinix-zero-8",colour:"dimand purple",brand:"Infinix",modle:"Zero-8",price:"45000.pkr",specification:"ram:8gb,rom:128gb,battery:7000mah,camera:96pxl"},
{id:10,image:"infinix-zero.jpg.jpg",name:"infinix-zero",colour:"all colour",brand:"Infinix",modle:"Zero",price:"42000.pkr",specification:"ram:6gb,rom:128gb,battery:6000mah,camera:64pxl"}
];

var tab = document.getElementById("tbody");

for (const i of mobile){
    tab.innerHTML +=
    `<tr>
        <td>${i.id}</td>
        <td><img src="${i.image}" style="widht:10%; height:10%; border-radius:10%;"/></td>
        <td>${i.name}</td>
        <td>${i.colour}</td>
        <td>${i.brand}</td>
        <td>${i.modle}</td>
        <td>${i.price}</td>
        <td>${i.specification}</td>
    </tr>`
}