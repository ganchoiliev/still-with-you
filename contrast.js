function hexToRgb(hex) {
  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16)
  } : null;
}

function luminance(r, g, b) {
  var a = [r, g, b].map(function (v) {
    v /= 255;
    return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4);
  });
  return a[0] * 0.2126 + a[1] * 0.7152 + a[2] * 0.0722;
}

function contrast(rgb1, rgb2) {
  var lum1 = luminance(rgb1.r, rgb1.g, rgb1.b);
  var lum2 = luminance(rgb2.r, rgb2.g, rgb2.b);
  var brightest = Math.max(lum1, lum2);
  var darkest = Math.min(lum1, lum2);
  return (brightest + 0.05) / (darkest + 0.05);
}

function check(name, hex1, hex2) {
  const ratio = contrast(hexToRgb(hex1), hexToRgb(hex2));
  console.log(`${name}: ${ratio.toFixed(2)}:1 (${ratio >= 7 ? 'AAA PASS' : (ratio >= 4.5 ? 'AA PASS' : 'FAIL')})`);
}

console.log("--- DARK MODE ---");
check("Brightwhite (text) on Navy (bg)", "#F5F4F0", "#0A0E1A");
check("Offwhite (text) on Navy (bg)", "#E8E6E1", "#0A0E1A");
check("Teal (link) on Navy (bg)", "#5BA4A4", "#0A0E1A");
check("Brightwhite (text) on Charcoal (card)", "#F5F4F0", "#1A1F2E");
check("Offwhite (text) on Charcoal (card)", "#E8E6E1", "#1A1F2E");
check("Teal (link) on Charcoal (card)", "#5BA4A4", "#1A1F2E");

console.log("\n--- LIGHT MODE ---");
check("Brightwhite (Navy text) on Navy (Cream bg)", "#0A0E1A", "#F7F5F0");
check("Offwhite (Slate text) on Navy (Cream bg)", "#3A4454", "#F7F5F0");
check("Teal (link) on Navy (Cream bg)", "#5BA4A4", "#F7F5F0");
check("Brightwhite (Navy text) on Charcoal (White card)", "#0A0E1A", "#FFFFFF");
check("Offwhite (Slate text) on Charcoal (White card)", "#3A4454", "#FFFFFF");
check("Teal (link) on Charcoal (White card)", "#5BA4A4", "#FFFFFF");
