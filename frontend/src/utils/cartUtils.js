export const addDecimal = (num) => {
  return Math.round(num * 100) / 100;
};

export const updateCart = (state) => {
  // Ukupna cena stavki
  state.itemsPrice = addDecimal(
    state.cartItems.reduce((acc, item) => acc + item.price * item.qty, 0)
  );

  // Dostava: besplatna preko 2000 RSD, inace 300 RSD
  state.shippingPrice = state.itemsPrice > 2000 ? 0 : 300;

  // Bez PDV-a (prikazujemo RSD cenu direktno)
  state.taxPrice = 0;

  // Ukupno
  state.totalPrice = state.itemsPrice + state.shippingPrice;

  localStorage.setItem('cart', JSON.stringify(state));
  return state;
};