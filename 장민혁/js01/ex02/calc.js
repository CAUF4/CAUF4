let [time] = document.getElementsByTagName("time")
let info_list = document.getElementById("product_info")

let product_name = document.getElementById("product_name_input").value;
let cost_price = document.getElementById("price_input").value
let mem_check = document.getElementById("is_membership")
let mem_lv = document.getElementById("membership_lv")



let pn = document.createElement("li")
let cp = document.createElement("li")
let dp = document.createElement("li")

let set_time = () => {
    let today = new Date()
    date = today.getFullYear() + '-' + today.getMonth() + '-' + today.getDate() + ' ' + today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds() + today.getTimezoneOffset()/60
    time.setAttribute("datetime", date)
    time.innerHTML = today.toLocaleDateString() + ' ' + today.toLocaleTimeString()
}

let draw_rec = () =>{    
    product_name = document.getElementById("product_name_input").value;
    cost_price = document.getElementById("price_input").value;
    console.log(typeof(cost_price))

    pn.innerHTML = "상품명: " + product_name
    cp.innerHTML = "원가: " + cost_price.toLocaleString("ko_KR", {style : 'currency', currency: 'KRW'})
    dp.innerHTML = "할인가: "
}

let is_checked = () =>{
    if (mem_check.checked){
        mem_lv.removeAttribute("disabled");
    }else{
        mem_lv.disabled = true;
    }

    
}
window.onload = () => {
    set_time()
    draw_rec()   
    
    pn.innerHTML = "상품명: "
    cp.innerHTML = "원가: "
    dp.innerHTML = "할인가: "
    info_list.appendChild(pn)
    info_list.appendChild(cp)
    info_list.appendChild(dp)
}   
