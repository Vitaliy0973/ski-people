import { layout } from "./layout";

export const cart = () => {
  
  const el = document.createElement('section');
  el.classList.add('cart');

  const child = `
    <h2 class="cart__title">Корзина</h2>
    <ul class="cart__list">
      <li class="cart__item">
        <img src="/img/snowboard-mini.jpg" alt="Сноуборд" class="cart__item-image">
        <h3 class="cart__item-title">Горные лыжи</h3>
        <p class="cart__item-price">5&nbsp;000&nbsp;₽</p>
        <p class="cart__item-id">арт.&nbsp;84348945757</p>
        <div class="cart__item-counter counter">
          <button class="counter__minus" type="button">-</button>
          <p class="counter__number">1</p>
          <button class="counter__plus" type="button">+</button>
        </div>
      </li>
    </ul>
    <div class="cart__order">
      <h3 class="cart__order-title">Оформление</h3>
      <div class="cart__order-info">
        <p class="cart__order-count">
          <span class="cart__order-count">4</span>
          товара на сумму:
        </p>
        <p class="cart__order-price">20&nbsp;000&nbsp;₽</p>
      </div>
      <p class="cart__order-delivery">
        Доставка 0 ₽
      </p>
      <button class="cart__order-button" type="submit" form="cartForm">Оформить заказ</button>
    </div>
    <form action="#" id="cartForm" class="cart__form" method="POST">
      <h3 class="cart__form-title">Данные для доставки</h3>
      <fieldset class="cart__form-inputs">
        <input type="text" name="name" class="cart__form-input">
        <input type="tel" name="tel" class="cart__form-input">
        <input type="email" name="email" class="cart__form-input">
        <input type="text" name="address" class="cart__form-input">
        <textarea name="comment" id="comment" class="cart__form-textarea"></textarea>
      </fieldset>
      <fieldset class="cart__form-fieldset">
        <legend class="cart__form-legend">Доставка</legend>
        <label class="cart__form-label">
          <input class="cart__form-radio" type="radio" name="delivery" value="delivery">
          Доставка
        </label>
        <label class="cart__form-label">
          <input class="cart__form-radio" type="radio" name="delivery" value="pickup">
          Самовывоз
        </label>
      </fieldset>
      <fieldset class="cart__form-fieldset">
        <legend class="cart__form-legend">Оплата</legend>
        <label class="cart__form-label">
          <input class="cart__form-radio" type="radio" name="payment" value="card">
          Картой при получении
        </label>
        <label class="cart__form-label">
          <input class="cart__form-radio" type="radio" name="payment" value="cash">
          Наличными при получении
        </label>
      </fieldset>
    </form>
  `;

  el.append(layout(child, 'cart__container'));
  return el;
}
