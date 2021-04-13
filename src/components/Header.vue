<template>
    <header class="header">
        <div class="header-logo">
            <img class="header-logo-img" alt="hwangbal logo" src="../assets/logo2.png">
            <p>황금발란스</p>
        </div>
        <ul class="header-menu">
            <li><a href="">검색</a></li>
            <li><a href="">갤러리</a></li>
            <li><a href="">명예의 전당</a></li>
            <li><a href="">마이 페이지</a></li>
            
        </ul>
        <div class="header-icons">
            <li><i class="fab fa-twitter"></i></li>
            <li><i class="fab fa-facebook-f"></i></li>
            <li><i class="fab fa-instagram"></i></li>
            
            
            

        </div>
    </header>
</template>

<script>
export default {
    
}
</script>

<style>
.header{
    background-color: rgb(47, 47, 78);
    color: rgb(226, 226, 226);
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.header-logo{
    display: flex;    
    align-items: center;
}
.header-logo-img{
    width: 100px;
    height:100px;
}
.header-menu{
    list-style: none;
    display: flex;
}
.header-menu li {
    padding: 8px 12px;
}
.header-icons{
    list-style: none;
    display: flex;
    color: rgb(226, 226, 226);
}
.header-icons i{
    padding: 8px 12px;
}
a {
    text-decoration: none;
    color: rgb(226, 226, 226);
}

</style>