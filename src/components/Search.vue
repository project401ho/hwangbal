<template>
  <div class="search-item">
      <h1>SERACH</h1>
      <div class="search-container">
        <input type="text" class="">
        <button class="shadow">
            <i class="fas fa-search"></i>
        </button>
      </div>
      
  </div>
</template>

<script>
export default {

}
</script>

<style>
.search-item{
    margin: 15px;
    margin-bottom: 50px;
}
.search-container{
    display: flex;
    align-items: center;    
    justify-content: center;
    width:100%;
}
input{
    width:65%;
    border: none;
    height: 3.5rem;
    padding: 10px;
    border-radius: 5px;
    font-size: 1.5rem;
    font-family: 'Black Han Sans', sans-serif;
    box-sizing:border-box;
}
button{
    width:10%;
    border: none;
    padding:10px;
    height: 3.5rem;
    border-radius: 5px;
    background-color: rgb(47, 47, 78);
}
.fa-search{        
    color: rgb(226, 226, 226);
    font-size: 1.5rem;
}
</style>