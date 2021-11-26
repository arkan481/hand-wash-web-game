import Draggable from "draggable";

const element = document.getElementById("drag-box");
new Draggable(element, {
  onDrag: () => {
    let i = 1;
    function removeVirus() {
      setTimeout(() => {
        const virus = document.getElementById(`virus-${i}`);
        virus.classList.add("hide-virus");
        i++;
        if (i <= 4) {
          removeVirus();
        }
      }, 2000);
    }
    if (i < 4) {
      removeVirus();
    }
  },
});
