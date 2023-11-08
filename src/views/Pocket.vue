<template>
  <div>
    <a href="#" @click="pocket">點我測試餐廳API1</a>
    <div class="container">
      <ul class="nav main-nav mb-5">
        ...
      </ul>
      <section class="row mb-4">
        <div class="col"></div>
        <div class="col-4">
          <img src="https://images.unsplash.com/photo-1603481502506-275d81ffcdef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1935&q=80" alt="關於喜愛的圖" class="img-fluid">
        </div>
        <div class="col-4">
          <form>
            <h1 class="mb-4 text-center">新增口袋餐廳</h1>
            <div class="row g-2 mb-3">
              <label for="type" class="col-sm-3 col-form-label">品牌受眾</label>
              <select name="品牌受眾" id="type" class="form-select col-sm" @change="selectTypeChange" v-model="tempRes.selectType">
                <option value="全部受眾" selected>請選擇品牌受眾</option>
                <option value="學生族群">學生族群</option>
                <option :value="item.type" v-for="item in restaurants" v-bind:key="item.id">{{ type }}</option>
              </select>
            </div>
            <div class="row g-2 mb-3">
              <label for="res-name" class="col-sm-3 col-form-label">品牌名稱</label>
              <select name="品牌名稱" id="res-name" class="form-select col-sm" :disabled="brandListDisabled" @change="selectNameChange" v-model="tempRes.selectBrandName">
                <option value="" disabled selected>請選擇品牌名稱</option>
                <!-- <option value="有點義式麵">有點義式麵</option> -->
                <option
                  :value="item"
                  v-for="item in filterRes.filterBrandName"
                  v-bind:key="item">
                  {{ item }}
                </option>
              </select>
            </div>
            <div class="row g-2 mb-3">
              <label for="address" class="col-sm-3 col-form-label">地址</label>
              <input
                class="form-control col-sm"
                type="text"
                placeholder="台北市大安區師大路39巷"
                :disabled="brandListDisabled"
                id="address"
              >
            </div>
            <div class="d-flex justify-content-end">
              <button class="btn btn-lg btn-primary mb-4" type="submit"  @click="submitPucket()">加入口袋</button>
            </div>
          </form>
        </div>
        <div class="col"></div>
      </section>
      <section class="mb-4">
        <table class="table table-bordered">
          <thead>
            <tr>
              <th scope="col">品牌受眾</th>
              <th scope="col">品牌名稱</th>
              <th scope="col">地址</th>
              <th scope="col" class="table-warning">動作</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>學生族群</td>
              <td>有點義式麵</td>
              <td>台北市大安區師大路39巷</td>
              <td class="table-warning">
                <button>移除</button>
              </td>
            </tr>
          </tbody>
        </table>
      </section>
    </div>
  </div>
</template>
<script>
  import axios from 'axios';
  import { mapState } from "pinia";
  // 定義好的 store 賦值給變數 useLoginStore
  // 在元件中引入並呼叫 useLoginStore() 來訪問 store
  // import { useLoginStore } from "../../components/LoginStore.js";
  export default {
    data() {
      return {
        brandListDisabled: true, // 控制品牌名稱選單是否可以操作
        restaurants: [],
        userResList: [],
        filterRes: {
          filterBrandNamee: [],
          filterType: [],
          filterAddress: [],
        },
        tempRes: {
          selectBrandName: "",
          selectType: "",
        },
        saveRes: {
          saveBrandName: "",
          saveType: "",
          saveAddress: "",
        },
        brandListDisabled: true,
        apiUserResUrl: "",
        apiUserResIdUrl: "",
      };
    },
    components: {
    },
    methods: {
      // selectNameChange() {
      //   // 會員選擇品牌名稱時，依照所選名稱去restaurants找相應的地址
      //   this.filterRes.filterAddress = this.restaurants
      //     .filter((item) => item.brandName === this.tempRes.selectBrandName)
      //     .map((item) => item.address);

      //   if (this.filterRes.filterType === "全部受眾") {
      //     // 當品牌受眾=全部受眾時，依照所選品牌名稱去restaurants找正確的受眾值。將全部受眾進行導正
      //     this.filterRes.filterType = this.restaurants
      //       .filter((item) => item.brandName === this.tempRes.selectBrandName)
      //       .map((item) => item.type);
            
      //     // 將取得的真正品牌受眾值賦值給寫回api的saveRes.saveType屬性
      //     this.saveRes.saveType = this.filterRes.filterType[0];
      //   }
      // },
      selectTypeChange() {
        // 當會員下拉品牌受眾時，變更這個屬性值，讓品牌名稱選單可以操作
        this.brandListDisabled = false;
      },
      pocket(){
        axios.get('http://localhost:3000/restaurants')
        .then((res) => {
          // 請求成功會觸發/執行這個 function 函式
          console.log(res);
        })
        .catch((error) => {
          // 請求失敗則觸發/執行這個 function 函式
          console.log(error);
        });
      },
      selectTypeChange() {
        this.filterRes.filterType = this.tempRes.selectType;
        if (this.tempRes.selectType !== "全部受眾") {
          // 會員選擇受眾時，依照所選受眾去restaurants找相應的品牌名稱
          this.filterRes.filterBrandName = this.restaurants
            .filter((item) => item.type === this.tempRes.selectType)
            .map((item) => item.brandName);
        } else {
          // 會員選擇全部受眾時，列出restaurants全部品牌名稱
          this.filterRes.filterBrandName = this.restaurants.map(
            (item) => item.brandName);
        }
        // 當會員回頭更改選品牌受眾。請讓其他兩個欄位重置成預設值
        this.tempRes.selectBrandName = "";
        this.filterRes.filterAddress = [];
      },
      submitPucket() {
        event.preventDefault();
        if (
          (this.saveRes.saveBrandName !== "") &
          (this.saveRes.saveAddress !== "") &
          (this.saveRes.saveType !== "")
        ) {
          axios.get(this.apiUserResUrl)
            .then((res) => {
              // res.data是陣列要變成物件後面才能用push，所以取第一個內容(這裡是物件)
              const userData = res.data[0];
              const newRestaurant = {
                brandName: this.saveRes.saveBrandName,
                address: this.saveRes.saveAddress,
                type: this.saveRes.saveType,
              };

              // 使用陣列方法 some 檢查會員餐廳API是否有已存在的brandName
              const exists = userData.userRestaurants.some(
                (item) => item.brandName === newRestaurant.brandName
              );

              if (!exists) {
                userData.userRestaurants.push(newRestaurant);
                alert("口袋添加成功");
                return axios.put(apiUserResIdUrl, userData);
              } else {
                alert("該餐廳已存在!");
              }
            })
            .catch((error) => {
              console.log(error);
              alert("口袋添加失敗");
            });
        } else {
          alert("欄位不可空值!");
        }
        this.tempRes.selectType = "";
        this.tempRes.selectBrandName = "";
        this.filterRes.filterAddress = "";
      }
    },
    created() {
      // this.apiUserResUrl = `http://localhost:3002/userRes?email=${this.userEmail}`;
      // this.apiUserResIdUrl = `http://localhost:3002/userRes/${this.userId}`;
    },
    computed: {
      // ...mapState(useLoginStore, {
      //   // 'name' 是 store 中的狀態名，'userName' 是在組件中的名稱
      //   userName: (state) => state.name,
      //   userEmail: (state) => state.email,
      //   userId: (state) => state.id,
      // }),
    },
    mounted() {
      this.pocket();
    },
  };
</script>
<style scoped></style>
