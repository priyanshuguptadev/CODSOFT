const log = console.log;

const mainOperations = [
  {
    name: "Account Services",
    services: [
      {
        name: "Check Account Balance",
        do() {
          const balance = Math.floor(Math.random() * 10000);
          log(`💰 Your account balance is ₹${balance}`);
        }
      },
      {
        name: "Mini Statement",
        do() {
          log(`📜 Your last 5 transactions:`);
          for (let i = 0; i < 5; i++) {
            const transaction = Math.floor(Math.random() * 10000);
            log(`💸 ₹${transaction}`);
          }
        }
      }
    ]
  },
  {
    name: "Debit Card Services",
    services: [
      {
        name: "Card Block",
        do() {
          log(`🚫 Your debit card has been blocked successfully.`);
        }
      },
      {
        name: "Card Un Block",
        do() {
          log(`✅ Your debit card has been unblocked. Enjoy shopping!`);
        }
      },
      {
        name: "Set Pin",
        do() {
          log(`🔑 Your new debit card PIN is 2367.`);
        }
      }
    ]
  },
  {
    name: "Credit Card Services",
    services: [
      {
        name: "Credit Card Block",
        do() {
          log(`🚫 Your credit card has been blocked.`);
        }
      },
      {
        name: "Credit Card Unblock",
        do() {
          log(`✅ Your credit card has been unblocked! Happy shopping!`);
        }
      },
      {
        name: "Bill Due",
        do() {
          log(`📅 Your bill is due on 14 Feb.`);
        }
      }
    ]
  },
  {
    name: "Cheque Book Services",
    services: [
      {
        name: "Cheque Book Request",
        do() {
          log(`📓 Your cheque book request has been raised. It will take 24 business hours.`);
        }
      },
      {
        name: "Cheque Book Status",
        do() {
          log(`✅ Your cheque book is active.`);
        }
      }
    ]
  },
  {
    name: "Account Settings",
    services: [
      {
        name: "Reset MPin",
        do() {
          log(`🔑 Your MPin has been reset to 2416.`);
        }
      },
      {
        name: "De-register",
        do() {
          log(`🚫 Your account has been de-registered.`);
        }
      }
    ]
  }
];

module.exports = mainOperations;
