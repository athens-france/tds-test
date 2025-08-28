class Tower {
    constructor(x, y) {
        this.el = document.createElement("div");
        this.el.classList.add("circle");
        this.el.style.left = x + "px";
        this.el.style.top = y + "px";

        document.body.appendChild(this.el);

        this.dragging = true; // allow initial drag
        this.initDrag();    
      }

    initDrag() {
        const onMouseMove = (e) => {
          if (this.dragging) {
            this.el.style.left = e.pageX - 25 + "px";
            this.el.style.top = e.pageY - 25 + "px";
          }
        };

        const onMouseUp = () => {
          if (this.dragging) {
            this.dragging = false; // lock in place
            window.removeEventListener("mousemove", onMouseMove);
            window.removeEventListener("mouseup", onMouseUp);
            this.el.style.cursor = "default"; // no more grab
          }
        };

        window.addEventListener("mousemove", onMouseMove);
        window.addEventListener("mouseup", onMouseUp);
      }
    }

    document.getElementById("testy").addEventListener("click", (e) => {
      new Tower(e.pageX, e.pageY); // spawn at click pos
    });
