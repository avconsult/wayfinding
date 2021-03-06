const searchBar = document.getElementById("search-bar");

const Keyboard = {

    elements:{
        main: null,
        keysContainer: null,
        closeButton: null,
        keys: []
    },

    eventHandlers: {
        oninput: null,
        onclose: null
    },

    properties: {
        value: "",
        capsLock: false
    },

    init(){
    //  CREATE MAIN ELEMENTS
        this.elements.main = document.createElement("div");
        this.elements.keysContainer = document.createElement("div");
        this.elements.closeButton = document.createElement("div");

    //  SETUP MAIN ELEMENTS
        this.elements.main.classList.add("keyboard", "keyboard--hidden");
        this.elements.keysContainer.classList.add("keyboard__keys");
        this.elements.closeButton.classList.add("closebutton");
        this.elements.closeButton.innerText = 'x';

        this.elements.closeButton.addEventListener("click", () => this.close());

        this.elements.keysContainer.appendChild(this._createKeys(
            !window.location.pathname.includes('arab')
        ));

        this.elements.keys = this.elements.keysContainer.querySelectorAll(".keyboard__key");

    //   ADD TO DOM
        this.elements.main.appendChild(this.elements.keysContainer);
        this.elements.main.appendChild(this.elements.closeButton);
        const footerSection = document.getElementById("bottom-menu");
        footerSection.appendChild(this.elements.main);

    //   AUTOMATICALLY USE WITH ELTS WITH use-keyboard CLASS
        document.querySelectorAll(".use-keyboard-input").forEach( elt =>
        elt.addEventListener("focus", () => {
            this.open(elt.value, currentValue => {
                    elt.value = currentValue;
            })
        }));
        document.querySelectorAll(".use-keyboard-input-onclick").forEach( elt =>
        elt.addEventListener("click", () => {
            if(searchList.style.display == 'none')
                showTextList(); // defined in app.js
            searchBar.focus();
            this.open(searchBar.value, currentValue => {
                    searchBar.value = currentValue;
            })
        }));
    },

    _createKeys(isEnglish){
    //    CREATE DOM FRAGMENTS
        const fragment = document.createDocumentFragment();
        const keyLayout = [
            "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "backspace",

            "q", "w", "e", "r", "t", "y", "u", "i", "o", "p",

            "a", "s", "d", "f", "g", "h", "j", "k", "l",

            "z", "x", "c", "v", "b", "n", "m", "done",

            "space"
        ]; // Removed for now: "caps", ",", ".", "?",
        const keyLayoutArab = [
            "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "backspace",

            "??", "??", "??", "??", "??", "??", "??", "??", "??", "??", "??", "??",

            "??", "??", "??", "??", "??", "??", "??", "??", "??", "??", "??",

            "??", "??", "??", "??", "????", "??", "??", "??", "??", "??", "done",

            "space"
        ]; // Removed for now: ",", ".", "?",
    //    CREATE HTML FOR ICON
        const createIconHTML = (icon_name) => {
            return `<i class="material-icons"> ${icon_name} </i>`;
        }

        let activeKeyLayout = isEnglish ? keyLayout : keyLayoutArab;

        activeKeyLayout.forEach(key => {
            const keyElement = document.createElement("button");
            const insertLineBreak = ["backspace", "l", "p", "??", "done", "??"].indexOf(key) !== -1;

            // ADD ATTRIBUTES
            keyElement.setAttribute("type", "button");
            keyElement.classList.add("keyboard__key");

            switch (key){
                case "backspace":
                    keyElement.classList.add("keyboard__key--wide");
                    keyElement.innerHTML = createIconHTML("backspace");
                    keyElement.addEventListener("click", () => {
                       this.properties.value = this.properties.value.substring(0, this.properties.value.length-1);
                        this._triggerEvent("oninput");
                    });
                    break;
            // Removed enter for now since no sentences case insensitive search
                // case "caps":
                //     keyElement.classList.add("keyboard__key--wide", "keyboard__key--activatable");
                //     keyElement.innerHTML = createIconHTML("keyboard_capslock");
                //     keyElement.addEventListener("click", () => {
                //         this._toggleCapsLock();
                //         keyElement.classList.toggle("keyboard__key--active", this.properties.capsLock);
                //     });
                //     break;
            // Removed enter for now since no sentences
                // case "enter":
                //     keyElement.classList.add("keyboard__key--wide");
                //     keyElement.innerHTML = createIconHTML("keyboard_return");
                //     keyElement.addEventListener("click", () => {
                //         this.properties.value += "/n";
                //         this._triggerEvent("oninput");
                //     });
                //     break;
                case "space":
                    keyElement.classList.add("keyboard__key--extra-wide");
                    keyElement.innerHTML = createIconHTML("space_bar");
                    keyElement.addEventListener("click", () => {
                        this.properties.value += " ";
                        this._triggerEvent("oninput");
                    });
                    break;
                case "done":
                    keyElement.classList.add("keyboard__key--wide");
                    keyElement.innerHTML = createIconHTML("check_circle");
                    keyElement.addEventListener("click", () => {
                        this.close();
                        this._triggerEvent("onclose");
                    });
                    break;

                default:
                    keyElement.textContent = key.toLowerCase();
                    keyElement.addEventListener("click", () => {
                        this.properties.value += this.properties.capsLock ? key.toUpperCase() : key.toLowerCase();
                        this._triggerEvent("oninput");
                    })
                    break;
            }

            fragment.appendChild(keyElement);
            if(insertLineBreak)
                fragment.appendChild(document.createElement("br"));

        });

        return fragment;
    },

    _triggerEvent(handlerName){
        if (typeof this.eventHandlers[handlerName] == "function"){
            this.eventHandlers[handlerName](this.properties.value);
        }
    },

    _toggleCapsLock(){
        this.properties.capsLock = !this.properties.capsLock;
        console.log(this.properties.capsLock);
        for(const key of this.elements.keys){
            if(key.childElementCount === 0)
               key.textContent = this.properties.capsLock ? key.textContent.toUpperCase() : key.textContent.toLowerCase();
        }
    },

    open(initialValue, oninput, onclose){
        this.properties.value = initialValue || "";
        this.eventHandlers.oninput = oninput;
        this.eventHandlers.onclose = onclose;
        this.elements.main.classList.remove("keyboard--hidden")
        toolBar.style.display = 'none';
    },

    close(){
        this.properties.value = ""; // reset the value
        this.eventHandlers.onclose = onclose;
        this.eventHandlers.oninput = oninput;
        this.elements.main.classList.add("keyboard--hidden");
        toolBar.style.display = 'flex';
    },

};

window.addEventListener("DOMContentLoaded", function(){
    Keyboard.init();
});
