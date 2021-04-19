<template>
  <div>      
        <div class="rec-item">          
            <div class="title">
                <h1>추천</h1>
            </div>
            <div class="rec-item-container">
                <div class="item left">              
                    <img class="rec-item-img" alt="hwangbal logo" src="../assets/logo2.png">
                    <p>똥맛 카레 먹기</p>

                </div>
                <h2>vs</h2>
                <div class="item right">              
                    <img class="rec-item-img" alt="hwangbal logo" src="../assets/logo2.png">
                    <p>카레맛 똥 먹기</p>
                </div>
            </div>
            <div class="rec-item-desc-container">
                
            </div>
            
        </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
@media screen and (min-width: 414px){
    h2{
        font-size: 2em;
    }
    .rec-item{
        
        margin: 10px 10px;
        border-radius: 10px;
        border: 3px solid ;
        
    }
    .rec-item > .title{
        border-bottom: 3px solid;
    }
    .rec-item-container{
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .rec-item-img{
        max-width: 500px;
        max-height: 500px;
    }
    .item{
        width: 50%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: stretch;
        font-size: 2rem;
        margin: 15px;
        
    }
    .item:hover{
        background-color: rgb(240, 182, 76);
        border-radius: 10px;
    }
}
</style>