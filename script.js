
function volume_sphere() {
    // Write your code here
    const radius = parseFloat(document.getElementById("radius").value);

    let volume;

    if (isNaN(radius) || radius < 0) {
        document.getElementById("volume").value = "";
    } else {
        volume = (4 / 3) * Math.PI * radius * radius * radius;
        document.getElementById("volume").value = volume.toFixed(4);
    }

    return false;
}

window.onload = function () {
    document.getElementById("MyForm").onsubmit = volume_sphere;
};

