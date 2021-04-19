<template>
    <header class="header">
        <router-link to="/">
            <div class="header-logo">
                <i class="fas fa-balance-scale"></i>
                <p>황금발란스</p>
            </div>
        </router-link>

        <ul class="header-menu" v-bind:class="{headerMenuActive: headerMenuActive}">
            
            <router-link to="/gallery"><li>갤러리</li></router-link>
            <router-link to="/honors"><li>명예의 전당</li></router-link>
            <router-link to="/mypage"><li>마이 페이지</li></router-link>
            
        </ul>
        <div class="header-icons" v-bind:class="{headerMenuActive: headerMenuActive}">
            <li><i class="fab fa-twitter"></i></li>
            <li><i class="fab fa-facebook-f"></i></li>
            <li><i class="fab fa-instagram"></i></li>
        </div>
        <div @click="toggleMenu()" class="header-menubar">
            <i class="fas fa-bars"></i>
        </div>
    </header>
</template>

<script>


export default {
    computed:{
        headerMenuActive(){
            return this.$store.state.headerMenuActive;
        }
    },
    methods:{
        toggleMenu(){
            return this.$store.commit("TOGGLE_HEADER_MENU")
        }
    }
}

</script>

<style scoped>

.header{
    background-color: rgb(47, 47, 78);
    color: rgb(226, 226, 226);
    display: flex;
    justify-content: space-between;
    align-items: center;

}
.header p{
    margin:12px;
}
.header-logo{
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 2rem;   
    width: 200px;    
    padding-left: 20px;
}

.header-menu{
    font-size: 1.3rem;   
    list-style: none;
    display: flex;
    margin:12px;
}
.header-menu li {
    padding: 8px 12px;
}
.header-menu li:hover{
    background-color: rgb(240, 182, 76);
    border-radius: 5px;

}
.header-menu li:hover > a {
    color: rgb(24, 24, 24);
   
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

.fab{
    font-size: 1.5rem;
}
.header-menubar{
    display: none;
}
@media screen and (max-width: 715px){
    
    .header{
        flex-direction: column;
        align-items: flex-start;
    }
    
    .header-menu{
        display: none;
        flex-direction: column;
        align-items: center;
        padding: 0px;
        width: 100%;
        font-size: 2rem;

    }
    .header-menu li {
        border-bottom: 2px solid gray;
    }   
    .header-menu a {
        padding: 0px;
        padding: 0px;
        width:100%;
        text-align: center;
        margin: 5px;
    }

    
    .header-icons{
        display:none;
        flex-direction: row;
        width:100%;
        justify-content: center;

    }
    .header-menubar{
        display: block;
        position: absolute;
        padding: 8px 8px;
        font-size: 1.5rem;
        right: 20px;
        top:10px;
    }
    .headerMenuActive{
        display: flex;

    }
    
}
</style>