import CollapseWidget from "./collapse.widget";

const app = document.querySelector(".app");

const collapseWidget = new CollapseWidget(
  "Collapse",
  "Анимация (animātiō с лат. — «одушевление, оживление») или мультипликация (multiplicatio с лат. — «умножение, увеличение, возрастание, размножение»).",
  app,
);

collapseWidget.render();
