// Name: ASS $S_3$
// Description: Adams Spectral Sequence for $S_3$. The $E_2$ page was generated by Amelia Perry's resolution program, the differentials and extensions were extracted from Nakamura "Some differentials in the mod 3 ASS" and Ravenel's book.
import { Sseq, BasicDisplay, tools, infinity, setLatexMacros } from "sseq";

setLatexMacros({
  "\\toda": "\\langle #1 \\rangle",
});

const path = import.meta.url.split("/");
path.pop();
path.pop();
path.push("json");
path.push("ASS-S_3.json");
const toLoad = path.join("/");

const sseq = await Sseq.loadFromServer(toLoad);
sseq._getXOffset = tools.fixed_tower_xOffset.bind(sseq);
sseq._getYOffset = (n) => n.c.y_offset || 0;

for (let sl of sseq.getStructlines()) {
  switch (sl.mult) {
    case "a_0":
    case "h_0":
      continue;
    case "b":
    case "v_1":
      sl._drawOnPageQ = (pageRange) =>
        pageRange[0] > 2 &&
        Structline.prototype._drawOnPageQ.call(sl, pageRange);
      break;
    default:
      sl._drawOnPageQ = (pageRange) =>
        pageRange[0] === infinity &&
        Structline.prototype._drawOnPageQ.call(sl, pageRange);
  }
}

new BasicDisplay("#main", sseq);
