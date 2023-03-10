
## 1. Суммирование аргументов
Реализуйте функцию [sum](src/sum.ts), которая принимает произвольное количество аргументов и возвращает их сумму.

**Ошибки, которые должны быть обработаны:**
1) Не переданы хотя бы два аргумента. Код ошибки `INVALID_ARGUMENTS_COUNT`.
2) Хотя бы один из аргументов не типа `number`. Код ошибки `INVALID_ARGUMENT`.

**Примеры использования:**
1) `sum(1, 2, 3);        // 6`
2) `sum();               // ошибка с кодом INVALID_ARGUMENTS_COUNT`
3) `sum(0, 1, '1', 2); // ошибка с кодом INVALID_ARGUMENT`

## 2. Возведение в степень
Реализуйте функцию [pow](src/pow.ts), которая возвращает возведенное в степень число и имеет два формата вызова - `pow(base, exponent)` и `pow(base)(exponent)`.

**Ошибки, которые должны быть обработаны:**
1) Хотя бы один из аргументов не типа `number`. Код ошибки `INVALID_ARGUMENT`.

**Примеры использования:**
1) `pow(2, 2);        // 4`
2) `pow(2)(2);        // 4`
3) `pow(2)('2'); // ошибка с кодом INVALID_ARGUMENT`

## 3. Пересечение двух массивов
Реализуйте функцию [intersection](src/intersection.ts), которая принимает два массива чисел и возвращает массив чисел, присутствующих в первом и во втором массивах.

**Ошибки, которые должны быть обработаны:**
1) Не переданы два аргумента. Код ошибки `INVALID_ARGUMENTS_COUNT`.
2) Хотя бы один из аргументов функции не массив. Код ошибки `INVALID_ARGUMENT`.
3) Хотя бы один из элементов массива не типа `number`. Код ошибки `INVALID_ELEMENT_IN_ARRAY`.

**Примеры использования:**
1) `intersection([1], [2]);            // []`
2) `intersection([1, 2], [3, 2, 1]);   // [1, 2]`
3) `intersection([1, 1], [1, 1]);      // [1]`
4) `intersection([1, 2, 1], [1]);      // [1]`
5) `intersection([], []);              // []`
6) `intersection()                     // ошибка с кодом INVALID_ARGUMENTS_COUNT`
7) `intersection([], '[]')             // ошибка с кодом INVALID_ARGUMENT`
8) `intersection([], [1, '2'])         // ошибка с кодом INVALID_ELEMENT_IN_ARRAY`

## 4. Сортировка строк
Реализуйте функцию [sort](src/sort.ts), которая принимает строку, состоящую из слов, разделенных пробелами.
В каждом слове предложения она сортирует буквы в порядке кодовых точек Unicode, а слова по количеству букв в них,
и возвращает результат в виде строки.
Если в слове попадается буква в верхнем регистре, она должна быть приведена к нижнему.

**Ошибки, которые должны быть обработаны:**
1) Переданный аргумент не типа `string`. Код ошибки `INVALID_ARGUMENT`.

**Примеры использования:**
1) `sort('hello world');            // 'ehllo dlorw'`
2) `sort('привет школа Metaclass'); // 'аклош веипрт aacelmsst'`
3) `sort('1234 111');               // '111 1234'`
4) `sort(11);                       // ошибка с кодом INVALID_ARGUMENT`

## 5. Фильтрация не анаграмм
Реализуйте функцию [removeAnagrams](src/removeAnagrams.ts), которая принимает массив строк и удаляет из данного массива строки, являющиеся анаграммами.

**Ошибки, которые должны быть обработаны:**
1) Переданный аргумент не массив. Код ошибки `INVALID_ARGUMENT`.
2) В переданном массиве хотя бы один элемент не типа `string`. Код ошибки `INVALID_ELEMENT_IN_ARRAY`.

**Примеры использования:**
1) `removeAnagrams(['cat', 'act', 'arc']);  // ['arc']`
2) `removeAnagrams(['car', 'arc']);         // []`
3) `removeAnagrams('str');                  // ошибка с кодом INVALID_ARGUMENT`
4) `removeAnagrams(['str', 5]);             // ошибка с кодом INVALID_ELEMENT_IN_ARRAY`

## 6. Дополнительные методы массива
Реализуйте функцию [patchArrays](src/patchArrays.ts), которая для всех массивов добавляет следующие методы:
1) Метод `count` возвращает длину массива.
2) Метод `insert` осуществляет вставку элемента в массив по индексу и возвращает измененный данный массив. В случае отрицательного индекса, элемент становится первым. Если индекс > длинны массива, элемент становится последним.
3) Метод `remove` удаляет из массива первый встречающийся элемент с таким значением и возвращает измененный данный массив. Если такого элемента в массиве нет, он возвращает неизмененный данный массив.

[Подсказка](https://learn.javascript.ru/native-prototypes)

**Ошибки, которые должны быть обработаны:**
1) Первый аргумент метода `insert` не типа `number`. Код ошибки `INVALID_ARGUMENT`.

**Примеры использования:**
1) `[1, 2, 3].count();    // 3`
2) `[].count();           // 0`
3) `const arr = [];`<br/>
    `arr.insert(10, 1);     // [1]`<br/>
    `arr.insert(1, 'name'); // [1, 'name']`<br/>
    `arr.insert(1, null);   // [1, null, 'name']`<br/>
    `arr.insert(0, null);   // [null, 1, null, 'name']`<br/>
    `arr.remove(2);         // [null, 1, null, 'name']`<br/>
    `arr.remove(1);         // [null, null, 'name']`<br/>
    `arr.remove('name');    // [null, null]`<br/>
    `arr.remove(null);      // [null]`<br/>
    `arr.remove(null).insert('2');      // ['2']`
4) `[].insert('0', null) // ошибка с кодом INVALID_ARGUMENT`

## 7. Умножение с частичным применением
Реализуйте функцию [multiply](src/multiply.ts).

**Ошибки, которые должны быть обработаны:**
1) Один из аргументов не типа `number`. Код ошибки `INVALID_ARGUMENT`.

**Примеры использования:**
1) `const multiplyByTen = multiply(10);`<br/>
   `multiplyByTen(2);   // 20`
2) `const multiplyByTwo = multiply(2);`<br/>
   `multiplyByTwo(3);   // 6`
3) `const multiplyByTwo = multiply(["two"]); ошибка с кодом INVALID_ARGUMENT`
4) `const multiplyByTwo = multiply(2);`<br/>
   `multiplyByTwo('3');   // ошибка с кодом INVALID_ARGUMENT`

## 8. Получение численных свойств
Реализуйте функцию [getNumberProps](src/getNumberProps.ts), которая принимает в качестве аргумента объект, свойствами которого могут быть
другие объекты с неограниченным уровнем вложенности, и возвращает отсортированный массив названий всех численных свойств
исходного и вложенных объектов.

**Ошибки, которые должны быть обработаны:**
1) Переданный аргумент не объект. Код ошибки `INVALID_ARGUMENT`.

**Примеры использования:**
1) `getNumberProps({ a: 1, c: 1, b: { c: 2, d: 1, e: '1' }, m: 3 }); // ['a', 'c', 'c', 'd', 'm']`
2) `getNumberProps('{ a: 1, b: { e: 4}}') ошибка с кодом INVALID_ARGUMENT`

## 9. Обход дерева в глубину ([dfs](https://en.wikipedia.org/wiki/Depth-first_search))
Реализуйте функцию [dfs](src/dfs.ts), которая принимает в качестве аргумента объект, отражающий небинарное дерево(узел может иметь больше двух потомков) и возвращает массив узлов, соответствующий обходу в глубину.
Обход осуществляется слева направо (по возрастанию индекса в массиве).
<pre>
Пример графа:
            A 
          /   \ 
         B     C 
        /  \   / \ 
       D    E F   G

Этот же граф в виде объекта:
const graph = {
    A: ['B', 'C'],
    B: ['D', 'E'],
    C: ['F', 'G'],
    D: [],
    E: [],
    F: [],
    G: [],
};
</pre>

**Ошибки, которые должны быть обработаны:**
1) Переданный аргумент не объект. Код ошибки `INVALID_ARGUMENT`.

**Примеры использования:**
1) `dfs(graph) // ['A', 'B', 'D', 'E', 'C', 'F', 'G']`
2) `dfs('{}') // ошибка с кодом INVALID_ARGUMENT`

## 10. Обход дерева в ширину ([bfs](https://en.wikipedia.org/wiki/Breadth-first_search))
Реализуйте функцию [bfs](src/bfs.ts), которая принимает в качестве аргумента объект, отражающий небинарное дерево(узел может иметь больше двух потомков) и возвращает массив узлов, соответствующий обходу в ширину.
Обход осуществляется слева направо(по возрастанию индекса в массиве).
<pre>
Пример графа:
            A 
          /   \ 
         B     C 
        /  \   / \ 
       D    E F   G

Этот же граф в виде объекта:
const graph = {
    A: ['B', 'C'],
    B: ['D', 'E'],
    C: ['F', 'G'],
    D: [],
    E: [],
    F: [],
    G: [],
};
</pre>

**Ошибки, которые должны быть обработаны:**
1) Переданный аргумент не объект. Код ошибки `INVALID_ARGUMENT`.

**Примеры использования:**
1) `bfs(graph) // ['A', 'B', 'С', 'D', 'E', 'F', 'G']`
2) `bfs('{}') // ошибка с кодом INVALID_ARGUMENT`

## 11. Асинхронное выполнение функции
Реализуйте функцию [planEvent](src/planEvent.ts), которая планирует вызов функции `cb` через некоторое время(`timeout`) и возвращает `Promise` с результатом выполнения функции `cb`.
В случае `timeout` <= 0 вызов должен произойти сразу же.
Подробнее о `Promise` и `async/await` можно прочесть [здесь](https://learn.javascript.ru/async). 

**Ошибки, которые должны быть обработаны:**
1) Первый аргумент не типа `function`. Код ошибки `INVALID_ARGUMENT`.
1) Второй аргумент не типа `number`. Код ошибки `INVALID_ARGUMENT`.

**Примеры использования:**
1) `const f = () => 'Done';`<br/>
`const result = await planEvent(f, 3000);`<br/>
`//Через 3 секунды`<br/>
`console.log(result); // 'Done'`
2) `const result = await planEvent('str', 3000); // ошибка с кодом INVALID_ARGUMENT`
2) `const result = await planEvent(() => 'Done', '3000'); // ошибка с кодом INVALID_ARGUMENT`
