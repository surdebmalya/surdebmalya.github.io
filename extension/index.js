let myleads = []
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const clearBtn = document.getElementById("clear-btn")
const tabBtn = document.getElementById("tab-btn");
const ulEl = document.getElementById("ul-el")

clearBtn.addEventListener("dblclick", function () {
    localStorage.clear()
    ulEl.textContent = ""
})

function showItems() {
    // alternative to the innerHTML method
    // const li = document.createElement("li")
    // li.textContent = leadId
    // ulEl.append(li)

    let renderLeads = ""
    for (let i = 0; i < myleads.length; i++) {
        renderLeads += `
                <li>
                    <a href='${myleads[i]}' target='_blank'>${myleads[i]}</a>
                </li>`
        const li = document.createElement("li")
        li.textContent = myleads[i]
        ulEl.append(li)
    }
    localStorage.setItem("myleads", JSON.stringify(myleads))
    ulEl.innerHTML = renderLeads
}

window.onload = function () {
    if (localStorage.getItem("myleads") != null) {
        let localStorageLeads = JSON.parse(localStorage.getItem("myleads"))
        myleads = localStorageLeads
        showItems()
    }
}

tabBtn.addEventListener("click", function() {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        myleads.push(tabs[0].url)
        showItems()
    })    
})

inputBtn.addEventListener("click", function () {
    leadId = inputEl.value.trim()
    inputEl.value = ""
    if (leadId.length != 0) {
        myleads.push(leadId)
        showItems()
    }
})