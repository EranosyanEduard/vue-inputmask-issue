import Inputmask from "inputmask";

new Inputmask({
  alias: "numeric",
  digits: 3,
  min: -100,
  max: 30,
}).mask("input");
