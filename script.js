
const body = document.querySelector("body")
const containerEle = document.createElement("div")
containerEle.classList.add("container")
body.append(containerEle)

async function fetchData() {
    try {
        const response = await fetch('https://restcountries.com/v3.1/all')
        const data = await response.json()

        await data.forEach(element => {
            const sectionEle = document.createElement("div")
            sectionEle.classList.add("section")
            const countryEle = document.createElement("h3")
            countryEle.classList.add("country")
            countryEle.innerHTML = element.name.official
            const flagEle = document.createElement("div")
            flagEle.classList.add("flag")
            const imgEle = document.createElement("img")
            imgEle.classList.add("imgEle")
            imgEle.setAttribute("src", element.flags.png)
            flagEle.append(imgEle)
            const detailsEle = document.createElement("div")
            detailsEle.classList.add('details')
            const p1 = document.createElement("p")
            p1.textContent = "Capital: "
            const p2 = document.createElement("p")
            p2.innerText = "Country Codes: "
            const p3 = document.createElement("p")
            p3.innerHTML = "Region: "
            const p4 = document.createElement("p")
            p4.innerText = "Lat, Long: "
            const span1 = document.createElement("span")
            span1.classList.add("capitalSpan")
            span1.textContent = element.capital
            const span2 = document.createElement("span")
            span2.textContent = `${element.cca2}, ${element.ccn3}, ${element.cca3}, ${element.cioc}`
            const span3 = document.createElement("span")
            span3.textContent = element.region
            const span4 = document.createElement("span")
            span4.textContent = element.latlng
            p1.append(span1)
            p2.append(span2)
            p3.append(span3)
            p4.append(span4)
            detailsEle.append(p1, p2, p3, p4)
            sectionEle.append(countryEle, flagEle, detailsEle)
            containerEle.append(sectionEle)
        });
    }
    catch (err) {
        console.log(err)
    }
}

fetchData()