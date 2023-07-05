// генератор - це функція
// функції-генератори здатні призупиняти свою роботу і
// повертати проміжний результат обчислення,
// зупинившись нак конкретному місці і
// потім повертатися до роботи саме з цього місця

function* generate () {
    console.log(1);
    //ключове слово yield
    const value = yield 'form yeild';
    console.log(value)
    console.log(2);
    yield 'second yield';

    console.log('last stop');
    return 3;
}

const generator = generate();
console.log(generator);

const res = generator.next() // продовжує виконання функції від попередньої точки зупину до натсупної
console.log(res); // якщо done = true - ми дійшли до кінця функції

const res2 = generator.next('next value') //те що передано буде повераттися
console.log(res2);

const res3 = generator.next()
console.log(res3);

function* generateNumberSequence(){
    let store = 0;
    while(true){
        yield ++store;
    }
}

const a = generateNumberSequence();
const r1 = a.next()
