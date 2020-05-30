function initialize() {
    var accountListInfo = {};

    var accountModule = (function () {
        let accountName;
        let deposit = 0;
        let account = {};

        function updateAccount(x, y) {
            //alert(x+y+"inside updateaccount")
            account.accountName = x;
            account.deposit = y;
            accountListInfo.account = account;
            return account;
        }

        return {
            updateAccount: function (x, y) {
                updateAccount(x, y);
            }
        };
    })();

    var module = (function () {
        function createAccount() {
          alert(acctNameElem.value + depositElem.value);
            if( acctNameElem.value.length !== 0 && depositElem.value.length !== 0) {
            accountModule.updateAccount(acctNameElem.value, depositElem.value);
            outputElem.value += "Account name: " + accountListInfo.account.accountName + " Balance: " + accountListInfo.account.deposit + "\n";
            }
        }

        return {
            createAccount: function () {
                createAccount();
            }
        };
    })();

    var acctNameElem = document.getElementById("account-name");
    var depositElem = document.getElementById("deposit");
    var outputElem = document.getElementById("output");

    var btnCreateElem = document.getElementById("create-account");

    btnCreateElem.onclick = module.createAccount;
}

window.onload = initialize;
