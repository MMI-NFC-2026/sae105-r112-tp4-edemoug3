// *** ACCORDEON ***

const accordion = document.querySelector(".accordeon");

if (accordion) {
  accordion.querySelectorAll("details > summary").forEach((summary) => {
    summary.addEventListener("click", () => {
      const currentDetails = summary.parentElement;

      accordion.querySelectorAll("details").forEach((details) => {
        if (details !== currentDetails) {
          details.open = false;
        }
      });
    });
  });
}
