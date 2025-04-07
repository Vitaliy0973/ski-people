import { layout } from "./layout";

export const order = () => {
  
  const el = document.createElement('section');
  el.classList.add('order');

  const child = `
    <div class="order__wrap">
      <div class="order__top">
        <h2 class="order__title">Заказ успешно размещен</h2>
        <span class="order__id">№43435</span>
        <span class="order__total">20&nbsp;000&nbsp;₽</span>
      </div>
      <div class="order__data order-data">
        <h3 class="order-data__title">Данные доставки</h3>
        <table class="order-data__table">
          <tr class="order-data__row">
            <td class="order-data__label">Получатель</td>
            <td class="order-data__value">Иванов Петр Александрович</td>
          </tr>
          <tr class="order-data__row">
            <td class="order-data__label">Телефон</td>
            <td class="order-data__value">+7 (737) 346 23 00</td>
          </tr>
          <tr class="order-data__row">
            <td class="order-data__label">E-mail</td>
            <td class="order-data__value">Ivanov84@gmail.com</td>
          </tr>
          <tr class="order-data__row">
            <td class="order-data__label">Адрес доставки</td>
            <td class="order-data__value">Москва, ул. Ленина, 21, кв. 33</td>
          </tr>
          <tr class="order-data__row">
            <td class="order-data__label">Способ оплаты</td>
            <td class="order-data__value">Картой при получении</td>
          </tr>
          <tr class="order-data__row">
            <td class="order-data__label">Способ получения</td>
            <td class="order-data__value">Доставка</td>
          </tr>
        </table>
      </div>
      <a href="/" class="order__btn">На главную</a>
    </div>
  `;

  el.append(layout(child, 'order__container'));
  return el;
}
