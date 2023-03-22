// Все эти функции - фасад, то есть они абстрагируют код, который делает запросы, переводит js-обьекты в строки, в удобную функцию (типо getSomeUser())
// Они вовращают функцию, которая и будет делать запрос к API,
// которые в свою очередь делают запрос на сервак и возвращают Promise на результат.
// Promise - это еще не сами данные, чтобы получить данные надо сделать await


// ==== Пример использования функций ====

const func = async () => {
    const functionWhichGetsAllUsersFromAPI = getAllUsers()
    const functionWhichGetsSpecialUserByUsernameFromAPI = getUser()
    const functionWhichSendsUserToAPI = postUser()
    
    //           тот самый await
    //                 🠗
    const allUsers = await functionWhichGetsAllUsersFromAPI()
    const user = await functionWhichGetsSpecialUserByUsernameFromAPI('ayarayarovich')
    
    const response = functionWhichSendsUserToAPI(
      {
        username: 'oleg28',
        name: 'Олег Гайворонский',
        email: 'super@mail.ru',
        birthday: '2003-12-28',
        gender: 'male',
        superpower: 'RSM',
        biography: '...'
      }
    )
  }
  
  
  export const getAllUsers = () => {
      return () => {
          return fetch(`http://u52838.kubsu-dev.ru/BWeb3/aweb3/api/user.php`)
              .then(res => res.json())
      }
  }
  
  export const getUser = (username) => {
      return () => {
          return fetch(`http://u52838.kubsu-dev.ru/BWeb3/aweb3/api/user.php?username=${username}`)
              .then(res => res.json())
      }
  }
  
  export const postUser = () => {
      return (user) => {
          return fetch(`http://u52838.kubsu-dev.ru/BWeb3/aweb3/api/user.php`, {
              method: 'POST',
              mode: 'no-cors',
              headers: {
                  "Content-Type": "application/json",
              },
              body: JSON.stringify(user),
          })
      }
  }
  