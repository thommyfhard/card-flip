document.addEventListener("DOMContentLoaded", () => {
  const card = document.querySelector(".card");
  card.addEventListener("click", () => {
    card.classList.toggle("flipped");
  });

  const cardData = {
    leaderName: "John Doe",
    advice1: "Always stay curious.",
    advice2: "Build strong relationships.",
    advice3: "Adapt to change.",
    quote: "Leadership is not about titles, it's about impact.",
    lesson: "Consistency builds trust."
  };

  const frontContent = `
    <h2>${cardData.leaderName}</h2>
    <ul>
      <li>${cardData.advice1}</li>
      <li>${cardData.advice2}</li>
      <li>${cardData.advice3}</li>
    </ul>`;
  const backContent = `
    <blockquote>"${cardData.quote}"</blockquote>
    <p>${cardData.lesson}</p>`;

  document.querySelector(".front").innerHTML = frontContent;
  document.querySelector(".back").innerHTML = backContent;
});
