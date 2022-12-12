const clock = () => {
    const $clock = document.querySelector('.clock');
    const clockText = document.createElement('span');
    clockText.className = 'clock-text';
    $clock.appendChild(clockText);

    let flag = 0;
    const firstTick = () => {
        flag++;
        const date = new Date();
        const hour = date.getHours();
        const minute = date.getMinutes();
        const second = date.getSeconds();

        const now = `${hour < 10 ? `0${hour}` : hour}:${
            minute < 10 ? `0${minute}` : minute}:${
            second <10 ? `0${second}` : second}`;
        clockText.textContent = now;

        if(flag == 4) {
            clearInterval(timeInterval); 
            setInterval(tick,1000);
        }
    }

    const tick = () => {
        const date = new Date();
        const hour = date.getHours();
        const minute = date.getMinutes();

        const now = `${hour < 10 ? `0${hour}` : hour}:${
            minute < 10 ? `0${minute}` : minute}`;
        clockText.textContent = now;
    }

    const timeInterval = setInterval(firstTick, 1000);
}

clock();