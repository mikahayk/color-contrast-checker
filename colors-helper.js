
function cmykToHex(c, m, y, k) {
    var hex,
        rgb;
    rgb = cmykToRgb(c, m, y, k);
    //then convert rgb to hex
    hex = rgbToHex(rgb.r, rgb.g, rgb.b);
    return hex;
}

function cmykToRgb(c, m, y, k) {

    var rgb_r,
        rgb_g,
        rgb_b,
        cyan = 100 * Number(c),
        magenta = 100 * Number(m),
        yellow = 100 * Number(y),
        black = 100 * Number(m);
    0 < cyan ? cyan /= 100 : 0 < magenta ? magenta /= 100 : 0 < yellow ? yellow /= 100 : 0 < black && (black /= 100);
    rgb_r = 1 - Math.min(1, cyan * (1 - black) + black);
    rgb_g = 1 - Math.min(1, magenta * (1 - black) + black);
    rgb_b = 1 - Math.min(1, yellow * (1 - black) + black);
    rgb_r = Math.round(255 * rgb_r);
    rgb_g = Math.round(255 * rgb_g);
    rgb_b = Math.round(255 * rgb_b);
    return { r: rgb_r, g: rgb_g, b: rgb_b };
}

function rgbToHex(r, g, b) {

    return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);

    function componentToHex(c) {
        var hex = c.toString(16);
        return hex.length === 1 ? "0" + hex : hex;
    }
}