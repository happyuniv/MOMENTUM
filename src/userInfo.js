const userInfo = () => {
  const userForm = document.querySelector(".user-form");
  const userInput = document.querySelector(".user-input");
  const user = document.querySelector(".user");
  const edit = document.querySelector(".user-edit");

  const reception = () => {
    const userName = localStorage.getItem("user-name");
    userInput.classList.add("hidden");
    edit.classList.remove("hidden");
    edit.addEventListener("click", handleEdit);
    user.textContent = `Welcome ${userName}`;
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const userName = userInput.value;
    localStorage.setItem("user-name", userName);
    user.classList.remove("hidden");
    reception();
  };

  const handleEdit = (e) => {
    user.classList.add("hidden");
    edit.classList.add("hidden");
    userInput.classList.remove("hidden");
  };

  userForm.addEventListener("submit", onSubmit);

  if (localStorage.getItem("user-name")) reception();
  else {
    user.classList.add("hidden");
    edit.classList.add("hidden");
  }
};

userInfo();
