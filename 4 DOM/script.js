// task 1

function creatTagElement(name, color, content) {
    const tagElement = document.createElement(name);
    tagElement.style.color = color;
    tagElement.textContent = content;

    return tagElement;
}

// task 2

let contentTask2 = `Let’s see what’s so special about
 JavaScript, what we can achieve with it, and
 what other technologies play well with it.`

const paragraphElement = creatTagElement('p', 'orange', contentTask2);
paragraphElement.style.fontSize = '36px';
paragraphElement.style.fontWeight = 'bold';

const bodyElement = document.querySelector('body');
bodyElement.append(paragraphElement);

// task 3

const selectElement = creatTagElement('select', 'red');
bodyElement.append(selectElement);

for (let i = 1960; i < 2021; i++) {
    const optionElement = creatTagElement('option', 'black', String(i));
    selectElement.append(optionElement);
}

// task 4

const ulElement = document.createElement('ul');
bodyElement.append(ulElement);

const array = [
    { name: "Женя", order: true },
    { name: "Кристина", order: true },
    { name: "Павел", order: false },
    { name: "Виолетта", order: false },
    { name: "Костя", order: true }
];


for (let item of array) {
    const liElement = document.createElement('li');

    let content = 0;

    if (item.order) {
        content = 'Оплатил';
    } else {
        content = 'Отменил';
    }

    liElement.textContent = 'Клиент ' + item.name + ' ' + content + ' заказ';
   
    ulElement.append(liElement);
}

// task 5

const arr = [
    { name: "Женя", age: 74 },
    { name: "Кристина", age: 88 },
    { name: "Павел", age: 15 },
    { name: "Виолетта", age: 14 },
    { name: "Костя", age: 8 },
    { name: "Мария", age: 12 }
];

const tableElement = document.createElement('table');
tableElement.style.borderCollapse = 'collapse';

for (let item of arr){
    const trElement = document.createElement('tr');  
    const tdNameElement = document.createElement('td');    
    const tdAgeElement = document.createElement('td');

    tdNameElement.textContent = String(item.name);
    tdNameElement.style.color = 'red';
    tdNameElement.style.width = '90px';
    tdNameElement.style.border = '1px solid brown';

    tdAgeElement.textContent = String(item.age);
    tdAgeElement.style.color = 'green';    
    tdAgeElement.style.width = '50px';    
    tdAgeElement.style.border = '1px solid brown';      
    tdAgeElement.style.textAlign = 'center';   
    
    trElement.append(tdNameElement);
    trElement.append(tdAgeElement);

    tableElement.append(trElement);
}

bodyElement.append(tableElement);
