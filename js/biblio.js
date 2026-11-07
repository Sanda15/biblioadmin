/* Comportamente furnizate pentru BiblioAdmin.
   Butonul ☰ și submeniurile sunt acum gestionate de JavaScript-ul Bootstrap
   (atributele data-bs-toggle din index.html), deci nu mai avem nevoie de script propriu pentru ele. */

// Butonul "sus" primește clasa "activ" după ce pagina a fost derulată peste 100px
const sus = document.querySelector(".sus");
if (sus) {
  const actualizeaza = () => sus.classList.toggle("activ", window.scrollY > 100);
  window.addEventListener("scroll", actualizeaza);
  actualizeaza();
}
