const background = () => {
    const UNSPLASH_API_KEY =
        "b491e86a6957b396f44f1e15e41d3d242e17aa982607f161b95defd195c7f4dd";
    const UNSPLASH_URL = `https://api.unsplash.com/photos/random/?client_id=${UNSPLASH_API_KEY}&query=landscape&orientation=landscape`;
    
    const body = document.querySelector('body');
    body.style.backgroundImage = 'linear-gradient(rgba(0, 0, 0, 0.4),rgba(255, 255, 255, 0.1)), url("https://images.unsplash.com/photo-1518098268026-4e89f1a2cd8e?crop=entropy&cs=srgb&fm=jpg&ixid=Mnw0MDI0M3wwfDF8cmFuZG9tfHx8fHx8fHx8MTY0NDY0Nzg4Mg&ixlib=rb-1.2.1&q=85")'

    // const fetchBackground = async () => {
    //     try{
    //         const data = await fetch(UNSPLASH_URL);
    //         const res = await data.json();
    //         body.style.backgroundImage = `url(${res.urls.full})`;
    //     } catch (e) {
    //         console.error(e);
    //     }
    // }

    // fetchBackground();
}

background();
