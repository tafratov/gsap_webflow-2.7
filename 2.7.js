const gameBotFunction = function () {

    function randomGenerate(min, max) {
        let random = min - 0.5 + Math.random() * (max - min + 1)
        return Math.round(random)
    }

    let mysteryNumber = randomGenerate(1, 100)
    let answerNum = ''
    let tries = 5


    const isNumber = function (num) {
        return !isNaN(parseFloat(num)) && isFinite(num)
    }


    return function getResult() {

        answerNum = prompt('Угадайте число от 1 до 100')

        if (answerNum === null) {
            alert('Вы завершили игру')
            return
        }

        while (!isNumber(answerNum) || answerNum.trim() === '') {
            alert('Вы ввели строку')
            answerNum = prompt('Угадайте число от 1 до 100')
        }

        answerNum = Number(answerNum)


        if (mysteryNumber > answerNum) {
            alert('Загаданное число больше: ' + 'Осталось попыток: ' + tries)
        } else if (mysteryNumber < answerNum) {
            alert('Загаданное число меньше: ' + 'Осталось попыток: ' + tries)
        } else if (mysteryNumber === answerNum) {
            const isUserWantNewGame = confirm('Поздравляем, вы угадали! Хотите сыграть еще?')

            if (isUserWantNewGame) {
                tries = 3
                mysteryNumber = randomGenerate(1, 100)
            } else {
                tries = 0
            }
        }

        if (tries > 0) {
            tries--
            getResult();
        } else {
            const maybeAgain = confirm('Попыток больше нет, игра окончена. Хотите начать заново?')

            if (maybeAgain) {
                tries = 3
                getResult()
            } else {
                alert('Вы завершили игру')
                return
            }
        }

    }

}


let launchGameBot = gameBotFunction();
launchGameBot()


