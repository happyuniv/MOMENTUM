import api from "./api.js";

const background = () => {
  const $body = document.querySelector("body");

  const now = new Date();
  let baseURL =
    "https://images.unsplash.com/photo-1518098268026-4e89f1a2cd8e?crop=entropy&cs=srgb&fm=jpg&ixid=Mnw0MDI0M3wwfDF8cmFuZG9tfHx8fHx8fHx8MTY0NDY0Nzg4Mg&ixlib=rb-1.2.1&q=85";

  const loadBackground = async () => {
    try {
      const data = await api.fetchBackground();

      const url = data.urls.full;
      const expire = now.setDate(now.getDate() + 1);
      localStorage.setItem(
        "background-img",
        JSON.stringify({
          url,
          expire,
        })
      );
      baseURL = url;
      setBackground();
    } catch (e) {
      console.error(e);
    }
  };

  const setBackground = () => {
    $body.style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.7),rgba(0, 0, 0, 0.7)),url(${baseURL})`;
    $body.animate(
      [
        {
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5),rgba(255, 255, 255, 0.1)),url(${baseURL})`,
        },
      ],
      { delay: 3000, fill: "forwards" }
    );
  };

  if (localStorage.getItem("background-img")) {
    if (now > JSON.parse(localStorage.getItem("background-img")).expire) {
      loadBackground();
    } else {
      baseURL = JSON.parse(localStorage.getItem("background-img")).url;
      setBackground();
    }
  } else loadBackground();
};

background();
