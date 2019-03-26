const outputElement = document.querySelector("#display-container");








// outputElement.innerHTML += "Weekly Sales Report"

const agentsFirstName = salesByWeek[0].sales_agent.first_name;
const agentsLastName = salesByWeek[0].sales_agent.last_name;
//console.log(agentsFirstName)


salesByWeek.forEach(sale => {
    outputElement.innerHTML += `<hr/>`
    outputElement.innerHTML += `<h1>${sale.sales_agent.first_name} ${sale.sales_agent.last_name}</h1>`
    for (const keyValue of Object.entries(sale.vehicle)) 
       outputElement.innerHTML += `<div>${keyValue[0]}: ${keyValue[1]} </div>`
    outputElement.innerHTML += `<h3>Profit: $${sale.gross_profit}</h3>`
    }
    
)
