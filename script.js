let s;
let price1 = 20000;
let price2 = 19000;
let price3 = 21000;
let price4 = 15000;
let price5 = 25000;
let price6 = 23000;
let price7 = 30000;
let a = prompt("Введите название страны");
let hot = confirm("Тур горячий?");
switch (a) {
  case "Турция":
    s = "Общая стоимость: " + price1;
    s = hot ? price1 - price1 * 0.2 : price1;
    break;
  case "Египет":
    s = "Общая стоимость: " + price2;
    s = hot ? price2 - price2 * 0.2 : price2;
    break;
  case "Греция":
    s = "Общая стоимость: " + price3;
    s = hot ? price3 - price3 * 0.2 : price3;
    break;
  case "Италия":
    s = "Общая стоимость: " + price4;
    s = hot ? price4 - price4 * 0.2 : price4;
    break;
  case "Испания":
    s = "Общая стоимость: " + price5;
    s = hot ? price5 - price5 * 0.2 : price5;
    break;
  case "Кипр":
    s = "Общая стоимость: " + price6;
    s = hot ? price6 - price6 * 0.2 : price6;
    break;
  case "Мальта":
    s = "Общая стоимость: " + price7;
    s = hot ? price7 - price7 * 0.2 : price7;
    break;
  default:
    s = "Укажите правильно название страны";
}
alert(s);
