// Name: ASS $S_2$
// Description: Adams Spectral Sequence for $S_2$. The $E_2$ page was generated by Amelia Perry's resolution program, the differentials and extensions were copied from Dan Isaksen.
import { Sseq, tools, BasicDisplay, setLatexMacros } from "sseq";

const path = import.meta.url.split("/");
path.pop();
path.pop();
path.push("json");
path.push("ASS-S_2.json");
const toLoad = path.join("/");

setLatexMacros({
  "\\kappabar": "\\overline{\\kappa}",
  "\\sigmabar": "\\overline{\\sigma}",
  "\\toda": "\\langle #1 \\rangle",
});

Sseq.loadFromServer(toLoad)
  .catch((error) => console.log(error))
  .then((sseq) => {
    sseq._getXOffset = tools.fixed_tower_xOffset.bind(sseq);
    sseq._getYOffset = (n) => n.c.y_offset || 0;
    window.sseq = sseq;
    sseq.getClassesInDegree(30, 2)[0].edges[2].delete();
    sseq.getClassesInDegree(58, 8)[0].edges[2].delete();
    sseq
      .addExtension(
        sseq.getClassesInDegree(30, 2)[0],
        sseq.getClassesInDegree(33, 4)[0],
      )
      .setColor("brown");
    new BasicDisplay("#main", sseq);
    return;
  })
  .catch((e) => console.log(e));
