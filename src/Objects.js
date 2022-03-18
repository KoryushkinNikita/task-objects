/*
  В функцию personUpdate() приходят данные в виде объекта, содержащую некую информацию о человеке.
  Если этот человек является женщиной (свойство gender содержит значение 'female'), то из этого объекта
  необходимо удалить свойство age, если оно есть.
  Если этот человек является мужчиной (свойство gender содержит значение 'male'), следует убедиться,
  что в этом объекте есть свойство income. Если его нет, необходимо его добавить
  и присвоить начальное значение 100000.
  Объект после манипуляций следует вернуть в качестве результата работы функции.
*/
export function personUpdate(data) {
    if (data.gender === 'female') if (data.hasOwnProperty('age')) delete data.age
    if (data.gender === 'male') if (!data.hasOwnProperty('income')) data['income'] = 100000
    return data
}

/*
  В функцию objectFieldsList приходят три объекта с различными полями, список которых заранее неизвестен.
  Верните список названий этих полей в алфавитном порядке в виде массива строк.
*/
export function objectFieldsList(obj1, obj2, obj3) {
  let props = []
  let key
  for (key in obj1) props.push(key)
  for (key in obj2) props.push(key)
  for (key in obj3) props.push(key)
  props.sort(function (a, b) {
  if (a > b) {
    return 1;
  }
  if (a < b) {
    return -1;
  }
  return 0;
});
return props
}

/*
  Верните в результате работы функции массив с клонами объекта obj.
  При этом каждый клон должен дополнительно содержать поле id со своим порядковым номером в массиве.
  Количество клонов - count.
*/
export function objectClone(obj, count) {
  let clowns = []
  for (let i = 0; i < count; i++){
    let el = new String(i)
    el = JSON.parse(JSON.stringify(obj))
    el['id'] = i
    clowns.push(el)
  }
  if (count === 0) return NULL;
  else return clowns
}
