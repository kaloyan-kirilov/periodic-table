import { element } from "./elements.js";

const color_info = document.getElementById("color-info");
const protons_electrons = document.getElementById("protons-electrons");
const element_info = document.getElementById("element-info");

const i_element = document.getElementById("i-element");
const i_number = document.getElementById("i-number");
const i_symbol = document.getElementById("i-symbol");
const i_name = document.getElementById("i-name");
const i_mass = document.getElementById("i-mass");

const i_group = document.getElementById("i-group");
const i_period = document.getElementById("i-period");
const i_protons = document.getElementById("i-protons");
const i_weight = document.getElementById("i-weight");
const i_radius = document.getElementById("i-radius");
const i_series = document.getElementById("i-series");

const shell_diagram = document.getElementById("shell-diagram");
const electron_shells = document.getElementById("electron-shells");

function elementInfo() {
    let id = this.id;

    color_info.style.opacity = "0";
    protons_electrons.style.opacity = "1";
    element_info.style.opacity = "1";
    element_info.style.pointerEvents = "auto";
    element_info.style.borderColor = element[id].color;
    
    i_element.style.backgroundColor = element[id].color; 
    i_number.textContent = element[id].number; 
    i_symbol.textContent = element[id].symbol;
    i_name.textContent = element[id].name;
    i_mass.textContent = element[id].mass;

    i_group.textContent = element[id].group
    i_period.textContent = element[id].period
    i_protons.textContent = element[id].number;
    i_weight.textContent = element[id].mass + " u";
    i_radius.textContent = element[id].radius + " pm";
    i_series.textContent = element[id].series;
    i_series.style.color = element[id].color;

    shell_diagram.style.backgroundImage = `url("./img/diagrams/shell_diagram_${id}.svg")`;
    shell_diagram.style.backgroundSize = "contain";
    shell_diagram.style.outline = "grey solid 1px";

    electron_shells.textContent = element[id].shells;
}

const pt_element = document.querySelectorAll(".pt-element");

pt_element.forEach( e => {
    e.addEventListener("click", elementInfo);
});

const i_close = document.getElementById("i-close");

i_close.onclick = function() {
    color_info.style.opacity = "1";
    protons_electrons.style.opacity = "0";
    element_info.style.opacity = "0";
    element_info.style.pointerEvents = "none";
}

const mode_switch = document.getElementById("mode-switch");

const pt_container = document.getElementById("pt-container");
const state_up = document.getElementById("state-up");
const state_down = document.getElementById("state-down");
const lightbulb = document.getElementById("lightbulb");

mode_switch.onclick = function() {
    document.body.classList.toggle("lights-on");
    document.body.classList.toggle("lights-off");

    pt_container.classList.toggle("bg-light");
    pt_container.classList.toggle("bg-dark");

    state_up.classList.toggle("switch-on");
    state_up.classList.toggle("switch-off");

    state_down.classList.toggle("switch-off");
    state_down.classList.toggle("switch-on");

    lightbulb.classList.toggle("lightbulb-on");
    lightbulb.classList.toggle("lightbulb-off");
}

const pt_lanthanides = document.getElementById("pt-lanthanides");
const lanthanides = document.querySelectorAll(".lanthanides");

pt_lanthanides.onmouseover = function() {
    for (let i = 0; i < lanthanides.length; i++) {
        lanthanides[i].style.filter = "brightness(120%)";
    }
}

pt_lanthanides.onmouseout = function() {
    for (let i = 0; i < lanthanides.length; i++) {
        lanthanides[i].style.filter = "";
    }
}

const pt_actinides = document.getElementById("pt-actinides");
const actinides = document.querySelectorAll(".actinides");

pt_actinides.onmouseover = function() {
    for (let i = 0; i < actinides.length; i++) {
        actinides[i].style.filter = "brightness(120%)";
    }
}

pt_actinides.onmouseout = function() {
    for (let i = 0; i < actinides.length; i++) {
        actinides[i].style.filter = "";
    }
}