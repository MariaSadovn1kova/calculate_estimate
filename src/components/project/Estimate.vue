<template>
  <div class="estimate__container">
    <div class="tab__container">
        <div v-for="tab in tabs" :key="tab.name" class="tab" :class = "{'active' :tab.name == activeTab}" @click="setActiveTab(tab.name)">
            {{ tab.name }}
        </div>
    </div>
    <div class="estimate__content">
        <local-navbar :navbar_items = 'navbar_store.estimate_items' :default_active = 'navbar_store.estimate_items[0].name'>
            <div class="navbar__container">
                <div class="total__count">Итого: 3 000 000</div>
                <button class="xlsx__btn">
                    <div>XLSX</div>
                    <img src="@/assets/logo/dawnload.svg">
                </button>
            </div>
        </local-navbar>
        <div class="estimate__table">
        <div class="header">
            <div class="header__item" v-for="item in header_items" :key="item.id" :class="{'first__item' : item.id == 1}">{{item.name}}</div>
        </div>
        <div class="table__content">
            <div class="row__header">
                <span>Материалы</span>
                <button>
                    <img src="@/assets/logo/plus_dark.svg">
                </button>
            </div>
            <div class="table__row">
                <div class="row__item first__item">1</div>
                <div class="row__item">Доска 40*180*6м</div>
                <div class="row__item">м3</div>
                <div class="row__item">6,5</div>
                <div class="row__item">7 000,00</div>
                <div class="row__item">45 500,00</div>
                <div class="row__item last__item">
                    <button>
                        <img src="@/assets/logo/delete.svg">
                    </button>
                </div>
            </div>
            <div class="table__row">
                <div class="row__item first__item">1</div>
                <div class="row__item">Доска 40*180*6м</div>
                <div class="row__item">м3</div>
                <div class="row__item">6,5</div>
                <div class="row__item">7 000,00</div>
                <div class="row__item">45 500,00</div>
                <div class="row__item last__item">
                    <button>
                        <img src="@/assets/logo/delete.svg">
                    </button>
                </div>
            </div>
            <div class="row__header">
                <span>Работы</span>
                <button>
                    <img src="@/assets/logo/plus_dark.svg">
                </button>
            </div>
            <div class="table__row">
                <div class="row__item first__item">1</div>
                <div class="row__item">Доска 40*180*6м</div>
                <div class="row__item">м3</div>
                <div class="row__item">6,5</div>
                <div class="row__item">7 000,00</div>
                <div class="row__item">45 500,00</div>
                <div class="row__item last__item">
                    <button>
                        <img src="@/assets/logo/delete.svg">
                    </button>
                </div>
            </div>
            <div class="row__header">
                <span>Работы техники и доставки</span>
                <button>
                    <img src="@/assets/logo/plus_dark.svg">
                </button>
            </div>
            <div class="table__row">
                <div class="row__item first__item">1</div>
                <div class="row__item">Доска 40*180*6м</div>
                <div class="row__item">м3</div>
                <div class="row__item">6,5</div>
                <div class="row__item">7 000,00</div>
                <div class="row__item">45 500,00</div>
                <div class="row__item last__item">
                    <button>
                        <img src="@/assets/logo/delete.svg">
                    </button>
                </div>
            </div>
        </div>
        <div class="final__price">
            <div class="row__item first__item"></div>
            <div class="row__item">Итого фундамент:</div>
            <div class="row__item">45 500,00</div>
            <div class="row__item last__item"></div>
         </div>
    </div>
    </div>
  </div>
</template>

<script lang="ts">
  export default {name: "project-estimate" };
</script>

<script setup lang="ts">
    import { useLocalNavbarStore } from "@/store/local-navbar_store";
    import { ref } from "vue";
    const tabs = [
        { name: "Здание 1" },
        { name: "Здание 2" },
    ]
    const header_items = [
        { id: 1, name: "П/П" },
        { id: 2, name: "Наименование" },
        { id: 3, name: "Ед. Изм." },
        { id: 4, name: "Количество" },
        { id: 5, name: "Стоимость за ед." },
        { id: 6, name: "Итого стоимость" },
    ]
    const navbar_store = useLocalNavbarStore();
    const activeTab = ref(tabs[0].name)
  
    function setActiveTab( newActive: any){
        activeTab.value = newActive
    }
</script>

<style lang="scss" scoped>
.tab__container{
  display: flex;  
  .tab{
    background-color: #e6eee6;
    width: 10%;
    padding: 1rem;
    text-align: center;
    border-radius: 0.5rem 0.5rem 0 0;
    font-weight: 600;
    color: #4A4F48;
  }
  .tab.active{
    background-color: #fff;
    color: #77AF68;
    box-shadow: 0px -5px 10px #e1e6e6;  
  }
}
.tab:hover{
  cursor: pointer;
}
.estimate__content{
    width: 100%;
    background-color: #fff;
    box-shadow: 0px 0px 10px #e1e6e6;
    border-radius: 0 0.5rem 0.5rem 0.5rem;
    padding: 1rem 4rem 3rem 4rem;
    .navbar__container{
        display: flex;
        .total__count{
            padding-top: 1rem;
            margin-right: 1.5rem;
            color: #4A4F48;
        }
    }
    .xlsx__btn{
      height: 3rem;
      border-radius: 0.5rem;
      border: none;
      background-color: #F3F8F1;
      display: flex;
      color: #7FAF68;
      font-weight: 600;
      padding: 0 0.8rem 0 1rem;
      transition: 0.2s;
      div{
        margin-top: 1rem;
      }
      img{
        margin-top: 0.6rem;
        margin-left: 0.4rem;
      }
    }
    .xlsx__btn:hover{
      cursor: pointer;
      background-color: #d5f0cb;
    }
    .estimate__table{
        .header{
            background-color: #d5f0cb;
            display: flex;
            padding: 1rem;
            border-radius: 0.5rem 0.5rem 0 0;
            font-weight: 500;
            color: #4A4F48;
            .header__item{
                width: 18%;
                text-align: center;
                &.first__item{
                    width: 5%;
                }
            }
        }
        .table__content{
            .row__header{
                padding: 1rem 0;
                display: flex;
                justify-content: space-between;
                span{
                    color: #4A4F48;
                }
                button{
                    border-radius: 0.5rem;
                    border: none;
                    background-color: #F3F8F1;
                    display: flex;
                    color: #7FAF68;   
                    padding: 0.8rem;
                    transition: 0.2s;
                    &:hover{
                        cursor: pointer;
                        background-color: #d5f0cb;
                    }
                }   
                span{
                    padding-top: 0.4rem;
                }
            }
            .table__row{
                width: 100%;
                height: 4rem;
                border: 2px solid #d5f0cb;
                background-color: #fff;
                margin-bottom: 0.5rem;
                display: flex;
                padding: 0.7rem 1rem;
                .row__item{
                    width: 18%;
                    text-align: center;
                    padding-top: 0.5rem;
                    &.first__item{
                        width: 5%;
                    }
                    &.last__item{
                        width: 5%;
                        padding-top: 0;
                    }
                    &:hover{
                        cursor:default;
                    }

                }
                button{
                    padding: 0.3rem;
                    border: 1px solid #FFADAD;
                    background-color: #f8fcf8;
                    border-radius: 0.4rem;
                    transition: 0.5s;
                    &:hover{
                        cursor: pointer;
                        background-color: #fce7e7;
                    }
                }
                &:hover{
                    background-color: #f8fcf8;
                }
            }
        }
        .final__price{
            display: flex;
            padding:  2rem 1rem 0 1rem;
            text-align: center;
            font-weight: 500;
            .row__item{
                width: 18%;
                &.first__item{
                    width: 59%;
                }
                &.last__item{
                    width: 5%;
                }
            }
        }
    }
}
</style>