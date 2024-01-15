let a = document.querySelector("#mybutton")
a.addEventListener('click', function() {
    let comment = prompt("entre ton commentaire")
    alert(`'ton commentaire est' ${comment}`)
})
