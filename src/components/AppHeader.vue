<template>
    <header class="header" >
        
        <ul >
            <img src="assets/img/header/image 4.svg" alt="">
        <li>
            <div class="btn">
            <a>Beranda</a>
            </div>
        </li>

       <li>
            <div class="btn">
            <a>Acara</a>
            </div>
        </li>
        
        <li>
            <div class="btn">
            <a>Kontak</a>
            </div>
        </li>

        <li>
            <div class="btn">
            <a>Login<img src="assets/img/header/Vector.svg" alt="" class="icon"></a>
            </div>
        </li>
    </ul>
    
    <div class="content">
            <h1>Halo sobat, selamat datang </h1>
            <h1>di Jateng Pintar</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod </p>
            <p>tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim </p>
            <p>veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea </p>
            <p>commodo consequat. Deuis aute irure dolor in reprehenderit in voluplate velit</p>
            <p>esse cillum dolore au fugiat nulia pariatur. Excepteur sint occaecat cupidatat</p>
            <p>non peoident, sunt n culpa quid officia deserunt moillit anim id est laborum</p>
        </div>
        <div class="logo">
        <img src="assets/img/content/Bintang5.svg" alt="">
        <img src="assets/img/content/Group.svg" alt="">
        </div>

        <div class="planet1">
            <img src="assets/img/content/Planet 1.svg" alt="">
        </div>

        <div class="planet2">
            <img src="assets/img/content/Planet 2.svg" alt="">
        </div>

        <div class="planet">
            <img src="assets/img/content/Planet.svg" alt="">
        </div>


    
        <div class="bintang1">
            <img src="assets/img/header/Bintang1.svg" alt="">
        </div>

        <div class="bintang2">
            <img src="assets/img/header/Bintang2.svg" alt="">
        </div>

        <div class="bintang3">
            <img src="assets/img/header/Bintang3.svg" alt="">
        </div>
   </header>
</template>
<style scoped>
header{
padding: 20px;
background: linear-gradient(to right, #6a42a2 , #663e9e);
}
header ul{
display: flex;
justify-content: right;
}
header ul img{
margin-right: 150px;
}
header ul li{
list-style: none;
margin-right: 10px;
}
.btn{
margin-top: 30px;
margin-right: 70px;
}
.btn a{
text-decoration: none;
font-size: 16px;
background: rgba(238, 38, 157, 1);
padding: 16px 35px;
color: white;
border-radius: 30px;
width: 70px;
}
.btn a:hover {
background: white;
color: rgba(238, 38, 157, 1);
}
.btn .icon {
width: 20px; 
height: 20px; 
margin-right: 0px; 
vertical-align: middle; 
}


.content {
color: white;
margin-top: 200px;
margin-left: 150px;
}
.content h1{
font-size: 40px;
font-weight: bold;
}
.content p{
 font-size: 16px;
}

.logo img{
  float: right;
  margin-top: -520px;
  margin-right: 320px;
}
.planet2 img{
  float: right;
  margin-top: -820px;
  margin-right: 60px;
}
.planet img{
    float: right;
  margin-top: -420px;
  margin-right: 80px;
}


.bintang1{
float: left;
margin-top: -1000px;
margin-left: 10px;
}
.bintang2{
float: left;
margin-top: -1000px;
margin-left: 200px;
}
.bintang3{
float: right;
margin-top: -1000px;
margin-right: 300px;
}



</style>