(function initBrutalistProjectEngine() {
  const triggers = document.querySelectorAll(".project-trigger");
  const panels = {
    1: document.getElementById("panel-proj-1"),
    2: document.getElementById("panel-proj-2"),
  };

  function activateProject(id) {
    triggers.forEach((trigger) => {
      const triggerId = trigger.getAttribute("data-project");
      if (triggerId === id) {
        trigger.classList.add(
          "bg-surface-container-high",
          "border-l-[#0038FF]",
        );
        trigger.classList.remove("bg-surface", "border-l-transparent");
        const stateIndicator = trigger.querySelector(
          ".font-label-tag span:last-child",
        );
        if (stateIndicator) {
          stateIndicator.textContent = "[CLIC / HOVER ACTIVO]";
          stateIndicator.className = "text-primary font-bold";
        }
      } else {
        trigger.classList.remove(
          "bg-surface-container-high",
          "border-l-[#0038FF]",
        );
        trigger.classList.add("bg-surface", "border-l-transparent");
        const stateIndicator = trigger.querySelector(
          ".font-label-tag span:last-child",
        );
        if (stateIndicator) {
          stateIndicator.textContent = "[INSPECCIONAR]";
          stateIndicator.className = "text-on-surface-variant font-mono";
        }
      }
    });

    Object.keys(panels).forEach((panelId) => {
      const panel = panels[panelId];
      if (panel) {
        if (panelId === id) {
          panel.classList.remove("hidden");
          panel.classList.add("flex");
        } else {
          panel.classList.add("hidden");
          panel.classList.remove("flex");
        }
      }
    });
  }

  triggers.forEach((trigger) => {
    trigger.addEventListener("mouseenter", function () {
      const projId = this.getAttribute("data-project");
      activateProject(projId);
    });

    trigger.addEventListener("click", function () {
      const projId = this.getAttribute("data-project");
      activateProject(projId);
    });
  });
})();
