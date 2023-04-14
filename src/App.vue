<template>
  <main-navbar/>
  <router-view/>
</template>

<style lang="scss">
 @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;600&display=swap');
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Montserrat', sans-serif;
    font-size: 0.9rem;
    .app{
      min-height: 100vh;
      background-color: #F6FAF8;
      .main__navbar{
        position: absolute;
        width: 100%;
      }
      .app__container{
        display: flex;
        .main__sidebar {
          padding-top: 6rem;
        }
        .router-view{
          width: 100%;
          padding: 8rem 6rem 0rem 6rem;
          margin-bottom: 10rem;
        }
      }
    }
  }
</style>
