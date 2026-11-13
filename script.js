function volume_sphere() {
    //Write your code here
	const radius = parseFloat(document.getElementById(“radius”).value);

    let volume;

    if ( radius < 0) {
        volume = NaN;
    } else {
        volume = (4 / 3) * Math.PI * radius * radius * radius;
    }

    document.getElementById(“volume”).value = volume.toFixed(4);

    return false;

}

window.onload = document.getElementById(‘MyForm’).onsubmit = volume_sphere;