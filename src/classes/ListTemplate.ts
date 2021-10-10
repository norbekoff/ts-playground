import { HasFormatter } from "../interfaces/HasFormatter";

export class ListTemplate {
    constructor(private conatiner: HTMLUListElement) { }

    render(item: HasFormatter, heading: string, pos: "start" | "end") {
      const li = document.createElement("li");
      const h4 = document.createElement("h4");
      const p = document.createElement("p");
      p.innerText = item.format();
      h4.innerText = heading;
      li.append(h4);
      li.append(p)
      if(pos === "start") {
        this.conatiner.prepend(li);
      } else {
        this.conatiner.append(li);
      }
    }
}
