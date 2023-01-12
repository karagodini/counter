function createView({
    onIncrementButtonCLick,
    onDecrementButtonCLick,
    onResetButtonCLick,
}) {
    const counterNode = document.querySelector('.js-counter');
    const incrementBtnNode = document.querySelector('.js-increment-btn');
    const decrementBtnNode = document.querySelector('.js-decrement-btn');
    const resetBtnNode = document.querySelector('.js-reset-btn');

    incrementBtnNode.addEventListener('click', () => {
        onIncrementButtonCLick();
    })
    decrementBtnNode.addEventListener('click', () => {
        onDecrementButtonCLick();
    })
    resetBtnNode.addEventListener('click', () => {
        onResetButtonCLick();
    })

    return {
        render({ counter }) {
            counterNode.innerHTML = counter;
        }
    }
}