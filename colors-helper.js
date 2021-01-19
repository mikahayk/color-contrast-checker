
function cmykToHex(c, m, y, k) {
    var hex,
        rgb;
    rgb = cmykToRgb(c, m, y, k);
    //then convert rgb to hex
    hex = rgbToHex(rgb.r, rgb.g, rgb.b);
    return hex;
}

function cmykToRgb(c, m, y, k) {
    c = (c / 100);
    m = (m / 100);
    y = (y / 100);
    k = (k / 100);
    
    c = c * (1 - k) + k;
    m = m * (1 - k) + k;
    y = y * (1 - k) + k;
    
    var r = 1 - c;
    var g = 1 - m;
    var b = 1 - y;
    

    r = Math.round(255 * r);
    g = Math.round(255 * g);
    b = Math.round(255 * b);

    
    return {
        r: r,
        g: g,
        b: b
    }
}

function rgbToHex(r, g, b) {

    return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);

    function componentToHex(c) {
        var hex = c.toString(16);
        return hex.length === 1 ? "0" + hex : hex;
    }
}