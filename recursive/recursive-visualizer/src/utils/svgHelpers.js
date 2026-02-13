const svgNamespace = "http://www.w3.org/2000/svg";

export function createSvgElement(tag, attributes = {}) {
    const element = document.createElementNS(svgNamespace, tag);
    Object.keys(attributes).forEach(attr => {
        element.setAttribute(attr, attributes[attr]);
    });
    return element;
}

export function drawLine(svg, x1, y1, x2, y2, strokeColor = "#000", strokeWidth = 2) {
    const line = createSvgElement("line", {
        x1: x1,
        y1: y1,
        x2: x2,
        y2: y2,
        stroke: strokeColor,
        "stroke-width": strokeWidth,
    });
    svg.appendChild(line);
}

export function drawCircle(svg, cx, cy, radius, fillColor = "#fff", strokeColor = "#000", strokeWidth = 2) {
    const circle = createSvgElement("circle", {
        cx: cx,
        cy: cy,
        r: radius,
        fill: fillColor,
        stroke: strokeColor,
        "stroke-width": strokeWidth,
    });
    svg.appendChild(circle);
}

export function drawText(svg, x, y, textContent, fontSize = 12, fillColor = "#000") {
    const text = createSvgElement("text", {
        x: x,
        y: y,
        "font-size": fontSize,
        fill: fillColor,
    });
    text.textContent = textContent;
    svg.appendChild(text);
}

export function clearSvg(svg) {
    while (svg.firstChild) {
        svg.removeChild(svg.firstChild);
    }
}