import { elements } from "./data.js";

const contentEl = document.querySelector(".content");

for(let el of elements){
    const container = document.createElement("div");
    container.className = "card";
    contentEl.appendChild(container);
    container.addEventListener("click", () => window.location.href = el.location)

    const h2 = document.createElement("h2");
    h2.innerHTML = el.name;
    container.appendChild(h2);

    const img = document.createElement("img");
    img.src = el.image;
    img.alt = "My Project Image"
    container.appendChild(img);

    if(el.info){
        const h5 = document.createElement("h4")
        h5.innerText = "Experience:"
        container.appendChild(h5)

        const ul = document.createElement("ul");
        for(let i in el.info){
            const li = document.createElement("li");
            li.innerHTML = el.info[i];
            ul.appendChild(li);
        }
        container.appendChild(ul);
    }
}




