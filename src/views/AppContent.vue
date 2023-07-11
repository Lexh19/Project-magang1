<template>
    <div class="content">
        <div class="content1">
         <div class="btn"><img src="assets/img/content/Icon Button.svg" alt=""></div>
            <div class="content-inside" >
                 <img src="assets/img/content/Image.svg" alt="">
            </div>

            <div class="content-inside" >
                <img src="assets/img/content/Image (1).svg" alt="">
            </div>
            <div class="btn"><img src="assets/img/content/Icon Button (1).svg" alt=""></div>
        </div>
        
        <div class="bintang">
            <img src="assets/img/content/Bintang.svg" alt="">
        </div>

            <div class="content2">
                        <div class="content2-inside">
                            <h1 style="color:rgba(162, 64, 165, 1) ;font-size: 32px;">Jelajahi</h1>
                            <h1 style="color:rgba(162, 64, 165, 1) ; font-size: 32px;">Jateng Pintar</h1>
                            <p>Temukan beragam sumber</p>
                            <p>belajar yang bermanfaat</p>
                            <p>untuk meningkatkan</p>
                            <p>pemahaman siswa di</p>
                            <p>website kami.</p>
                        </div>
                        <div class="content2-inside">
                            <img src="assets/img/content/Icon1.svg" alt="">
                            <h1><img src="assets/img/content/Frame58.svg" alt="">Sumber Belajar</h1>
                            <a>Lihat Selengkapnya <img src="assets/img/content/Vector1.svg" alt=""></a>
                        </div>
                        <div class="content2-inside">
                            <img src="assets/img/content/Icon2.svg" alt="">
                            <h1><img src="assets/img/content/Frame59.svg" alt="">Karya Siswa</h1>
                            <a>Lihat Selengkapnya <img src="assets/img/content/Vector1.svg" alt=""></a>
                        </div>
                        <div class="content2-inside">
                            <img src="assets/img/content/Icon3.svg" alt="">
                            <h1><img src="assets/img/content/Frame60.svg" alt="">Siswa Jateng Pintar</h1>
                            <a>Lihat Selengkapnya <img src="assets/img/content/Vector1.svg" alt=""></a>
                        </div>
                        <div class="content2-inside">
                            <img src="assets/img/content/Icon4.svg" alt="" >
                            <h1><img src="assets/img/content/Frame61.svg" alt="">Kontributor</h1>
                            <a>Lihat Selengkapnya <img src="assets/img/content/Vector1.svg" alt=""></a>
                        </div>
            </div>

            <div class="bintang1">
                <img src="assets/img/content/Bintang.svg" alt="">
            </div>

            
        <fieldset class="content3">
            <legend>Jelajahi Website Lainnya</legend>
            <div class="content3-box">
            <ul >
                <li>
                    <div class="btn1">
                        <a><img src="assets/img/content/image1.svg" alt="" class="icon1">Website BPTIK <img src="assets/img/content/Vector.svg" alt=""></a>
                    </div>
                </li>

                <li>
                    <div class="btn1">
                        <a><img src="assets/img/content/image2.svg" alt="" class="icon1">Kelas Jateng <img src="assets/img/content/Vector.svg" alt=""></a>
                    </div>
                </li>
        
                <li>
                    <div class="btn1">
                        <a><img src="assets/img/content/image3.svg" alt="" class="icon1">Radio Audisi <img src="assets/img/content/Vector.svg" alt=""></a>
                    </div>
                </li>

                <li>
                    <div class="btn1">
                        <a><img src="assets/img/content/image4.svg" alt="" class="icon1">Simpel <img src="assets/img/content/Vector.svg" alt=""></a>
                    </div>
                </li>

                <li>
                     <div class="btn1">
                        <a><img src="assets/img/content/image5.svg"  alt="" class="icon1">Wahana Edukasi <img src="assets/img/content/Vector.svg" alt=""></a>
                     </div>
                </li>
            </ul>
        </div>
        </fieldset>
    </div>
</template>
<style scoped>
.content {
background: linear-gradient(to right, #6a42a2 , #663e9e);
}
.content1 {
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 10px 0px;
margin-bottom: 200px;
}
.content-inside img{
  padding: 10px;
  border-radius: 30px;
}
.bintang{
float: right;
margin-top: -600px;
margin-left: 10px;
}

.content2{
display: flex;
width: 90%;
height: 330px;
background-color: white;
margin-left: 60px ;
margin-bottom: 200px;
padding-inline: 10px;
border-width: 5px;
border-radius: 16px;
}
.content2-inside {
width: 18%;
height: 295px;
background-color: white;
margin: 10px auto;
padding-inline: 10px;
border-width: 20px;
border-right: rgba(238, 38, 157, 1) solid;
}
.content2-inside h1{
font-size: 20px;
font: bold;
}
.bintang1{
float: left;
margin-top: -600px;
margin-left: 20px;
}

.content3 {
width: 90%;
height: 100px;
padding-inline: 10px;
margin-left: 60px;
border-width: 5px;
border:rgba(238, 38, 157, 1) solid;
border-radius: 16px;
}
legend{
border-radius: 16px;
background-color: rgba(238, 38, 157, 1);
font-size: 16px;
color: white;
}
.content3 ul{
display: flex;
justify-content: center;
align-items: center;
}
.content3 ul li{
  list-style: none;
  margin-right: 10px;
}
.content3 ul li a{
text-decoration: none;
padding: 20px 30px;

}
.btn{
margin-top: 50px;
}
.btn1 a{
text-decoration: none;
font-size: 16px;
background: #2e1552;
padding: 10px 40px;
color: white;
border-radius: 30px;
}
.btn1 a:hover {
background: rgba(238, 38, 157, 1);
color: white;
}
.btn1 .icon1 {
width: 40px; 
height: 35px; 
margin-right: 10px; 
vertical-align: middle;
background-color: white;
border-radius: 16px;
}

</style>