const mainOperations = require("./operations");
const readline = require("readline");
const log = console.log;

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


function listMainOps() {
  mainOperations.forEach((el, idx) => {
    log(`${idx + 1}. ${el.name}`);
  });
}


function showServices(index) {
  const services = mainOperations[index].services;
  services.forEach((service, idx) => {
    log(`${idx + 1}. ${service.name}`);
  });
}


function processServiceChoice(serviceChoice, categoryIndex) {
  if (serviceChoice.toLowerCase() === "exit") {
    rl.close();
    return;
  }

  const services = mainOperations[categoryIndex].services;
  const serviceIndex = parseInt(serviceChoice) - 1;

  if (serviceIndex >= 0 && serviceIndex < services.length) {
    services[serviceIndex].do();
    askQuestion(); 
  } else {
    log("Invalid service choice. Please try again.");
    showServices(categoryIndex);
    askForService(categoryIndex);  
  }
}


function askForService(categoryIndex) {
  rl.question("Select a service number (or type 'exit' to quit): ", (serviceChoice) => {
    if (serviceChoice.toLowerCase() === "exit") {
      rl.close();
      return;
    }
    processServiceChoice(serviceChoice, categoryIndex);
  });
}


function askQuestion() {
  rl.question("You: ", (userAns) => {
    const lowerAns = userAns.toLowerCase();

    if (lowerAns === "exit") {
      rl.close();
      return;
    }

   
    const matchedCategory = mainOperations.findIndex(op => 
      lowerAns.includes(op.name.toLowerCase().split(" ")[0])
    );

    if (matchedCategory !== -1) {
      showServices(matchedCategory);
      askForService(matchedCategory);
    } else if (lowerAns === "hey") {
      listMainOps();
      askQuestion();
    } else {
      log("Unrecognized command, please try again.");
      askQuestion();
    }
  });
}

askQuestion();
