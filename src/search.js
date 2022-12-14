const search = () => {
  const $search = document.querySelector(".search");
  const input = document.querySelector(".search-input");
  $search.addEventListener("submit", (e) => {
    e.preventDefault();
    const keyword = input.value;
    window.open(`https://www.google.com/search?q=${keyword}`);
    // location.href = `https://www.google.com/search?q=${keyword}`;
  });
};

search();
