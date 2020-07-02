// 更新 token
var token = '6RFySiob1A2MDnTJRaCTXpax1e0IQCjBzGHrOmdmLna8lWwIcZaoKY1CaiLS';
axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;

var obj = {
  data: {
    uuid: '8cc5a81d-e152-435e-9536-f56254d0ab7a',
    paiPath: 'https://course-ec-api.hexschool.io/',
    products: []
  },
  // 串接 api 取得產品內容
  getData() {
    const vm = this;
    var api = `${vm.data.paiPath}api/${vm.data.uuid}/admin/ec/products`;
    // axios 套件接 api
    axios.get(api)
      .then(function(res) { // 回傳成功跑這裡
        vm.data.products = res.data.data;
        vm.render()
        console.log(vm.data.products);
      })
      .catch(function(res) { // 回傳失敗跑這裡
        console.log('錯誤',res);
      }) 
  },
  // render 到畫面上
  render() {
    var cardGroup = document.querySelector('.card-group')
    var products = this.data.products;
    var str = '';

    products.forEach(function(item) {
      str += `
        <div class="card">
          <img src="${item.imageUrl[0]}" class="card-img-top" alt=""/>
          <div class="card-body">
            <h5 class="card-title">${item.title}</h5>
            <p class="card-text">${item.content}</p>
            <a href="#" class="btn btn-primary">購買</a>
          </div>      
        </div>`;
    });

    cardGroup.innerHTML = str;
  }
}
obj.getData();