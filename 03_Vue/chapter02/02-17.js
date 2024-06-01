let p1 = {
  name: '아이패드',
  price: 200000,
  quantity: 2,
  order: function () {
    // 기존방법
    // this.amount가 0이 아닐 경우
    if (!this.amount) {
      this.amount = this.quantity * this.price;
    }
    // console.log('주문금액 : ' + this.amount);
    console.log(`주문 금액 : ${this.amount}`);
  },
  // ES6의 메서드 선언
  discount(rate) {
    if (rate > 0 && rate < 0.8) {
      this.amount = (1 - rate) * this.price * this.quantity;
    }
    console.log(`${100 * rate} % 할인된 금액으로 구매합니다.`);
  },
};

p1.discount(0.2);
p1.order();
