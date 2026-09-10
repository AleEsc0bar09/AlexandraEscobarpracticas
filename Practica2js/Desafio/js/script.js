function neontext() {
document.getElementById("tarjeta").classList.toggle("oculto");
}
function outlinetext() {
document.getElementById("tarjeta").classList.remove("oscuro");
document.getElementById("tarjeta").classList.add("claro");
}
function retroshadow() {
document.getElementById("tarjeta").classList.remove("claro");
document.getElementById("tarjeta").classList.add("oscuro");
}