let home_score = 0
let guest_score = 0
document.getElementById("home_score").textContent = home_score
document.getElementById("guest_score").textContent = guest_score

function increase_score(value, destination){
    let res = Number(document.getElementById(destination +"_score").textContent)
    document.getElementById(destination + "_score").textContent  = res + value
}
