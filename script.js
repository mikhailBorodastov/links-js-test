// let head = document.querySelector('.head')
// head.insertAdjacentHTML("afterbegin", '<nav><ul class="link-list"></ul></nav>')
//
//
// let linkList = document.querySelector('.link-list')
// let links = ["/index.html", "/Contacts.html", "/About.html", "/Support.html", "/Video.html", "/Price.html" ]
//
// links.forEach((item)=>{
//     // let li = linkList.insertAdjacentHTML("afterbegin", '<li>()</li>');
//
// })

let links = ["index.html", "contacts.html", "about-us.html"]
let text = ["Главная", "Контакты", "О нас"]

let head = document.querySelector('.head')
head.insertAdjacentHTML("beforeend", "<nav><ul class='link-listing'></ul></nav>")

links.forEach((item, index)=>{
        if (document.URL.includes(item)){
                document.title = text[index]
        }


        let linkList = document.querySelector(".link-listing")
        linkList.insertAdjacentHTML("beforeend", breadcrumbs(text, index))

        function breadcrumbs(text, index) {
                if (text[index] !== document.title) {
                        return `<li><a href=${item}>${text[index]}</a></li>`
                } else {
                        return ''
                }
        }

})

