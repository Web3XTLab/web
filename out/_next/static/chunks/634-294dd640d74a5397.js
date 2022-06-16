(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[634],{99843:function(e,t,n){"use strict";var r=n(67294),a=n(30299),u=r.createContext(a.Z);t.Z=u},65573:function(e,t,n){"use strict";n.d(t,{Z:function(){return u}});var r=n(67294),a=n(99843);function u(){return(0,r.useContext)(a.Z)}},30299:function(e,t,n){"use strict";n.d(t,{Z:function(){return l}});var r=n(34051),a=n.n(r),u=n(3283),o=n.n(u),s=JSON.parse('{"Mt":[{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"buyer","type":"address"},{"indexed":false,"internalType":"address","name":"seller","type":"address"},{"indexed":false,"internalType":"uint256","name":"tokenId","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"price","type":"uint256"}],"name":"OnBuy","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"seller","type":"address"},{"indexed":false,"internalType":"uint256","name":"tokenId","type":"uint256"},{"indexed":false,"internalType":"string","name":"name","type":"string"},{"indexed":false,"internalType":"uint256","name":"price","type":"uint256"}],"name":"OnSell","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"verified","type":"bool"},{"indexed":false,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"OnVerify","type":"event"},{"stateMutability":"nonpayable","type":"fallback"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"appMap","outputs":[{"internalType":"uint256","name":"price","type":"uint256"},{"internalType":"address payable","name":"seller","type":"address"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[],"name":"appNTF","outputs":[{"internalType":"contract AppNFT","name":"","type":"address"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[],"name":"totalCount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getTokenURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getAppName","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getAppSeller","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getAppPrice","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getAppBuyers","outputs":[{"internalType":"address[]","name":"buyers","type":"address[]"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[{"internalType":"string","name":"name","type":"string"},{"internalType":"string","name":"tokenURI","type":"string"},{"internalType":"uint256","name":"price","type":"uint256"}],"name":"sell","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"buy","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function","payable":true},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"address","name":"buyer","type":"address"}],"name":"verify","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"}],"QW":{"3":{"events":{},"links":{},"address":"0x3d894f9A39072913deAa8B3Fa33471d6AdF453C8","transactionHash":"0xc450ce029b7b78ad7f653d0e10a489df50ab11cf9b5e2e3ea53718fec5578706"},"5777":{"events":{},"links":{},"address":"0x22D81C7dbbf07A8FA538023f0270C941f5732a6c","transactionHash":"0x81a1558d7843ce9084eef3faf5c0e6957133e2e350dc931190c0e0b0c859742a"}}}');function c(e,t,n,r,a,u,o){try{var s=e[u](o),c=s.value}catch(i){return void n(i)}s.done?t(c):Promise.resolve(c).then(r,a)}function i(e){return function(){var t=this,n=arguments;return new Promise((function(r,a){var u=e.apply(t,n);function o(e){c(u,r,a,o,s,"next",e)}function s(e){c(u,r,a,o,s,"throw",e)}o(void 0)}))}}o().utils.toBN(Math.pow(10,18));var p={web3Provider:null,contracts:{},web3:null,account:0,toBN:o().utils.toBN,init:i(a().mark((function e(){return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!p.web3){e.next=2;break}return e.abrupt("return",p);case 2:return e.next=4,p.initWeb3();case 4:return e.abrupt("return",e.sent);case 5:case"end":return e.stop()}}),e)}))),initWeb3:i(a().mark((function e(){return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,!window.ethereum){e.next=13;break}return p.web3Provider=window.ethereum,e.prev=3,e.next=6,window.ethereum.request({method:"eth_requestAccounts"});case 6:e.next=11;break;case 8:e.prev=8,e.t0=e.catch(3),console.error("User denied account access");case 11:e.next=14;break;case 13:window.web3?p.web3Provider=p.web3.currentProvider:p.web3Provider=new(o().providers.HttpProvider)("http://localhost:7545");case 14:return p.web3=new(o())(p.web3Provider),e.next=17,p.initContract();case 17:return e.abrupt("return",e.sent);case 20:return e.prev=20,e.t1=e.catch(0),console.error(e.t1),e.abrupt("return",null);case 24:case"end":return e.stop()}}),e,null,[[0,20],[3,8]])}))),initContract:i(a().mark((function e(){var t,n;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.web3.eth.net.getId();case 2:return t=e.sent,console.log("networkId",t),n=s.QW[t],console.log("nftDeployedNetwork",n),p.contracts.AppStore=new p.web3.eth.Contract(s.Mt,n.address),e.prev=7,e.next=10,p.getAccount();case 10:window.ethereum.once("accountsChanged",(function(e){location.reload()})),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(7),console.error(e.t0);case 16:return e.abrupt("return",p);case 17:case"end":return e.stop()}}),e,null,[[7,13]])}))),getAccount:i(a().mark((function e(){var t;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!p.account){e.next=2;break}return e.abrupt("return",p.account);case 2:return e.next=4,p.web3.eth.getAccounts();case 4:return t=e.sent,p.account=t[0],e.abrupt("return",p.account);case 7:case"end":return e.stop()}}),e)}))),useMetaMask:function(){return!!window.ethereum},sell:function(){var e=i(a().mark((function e(t,n,r){var u;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,p.getAccount();case 3:return u=e.sent,console.log("account",u),p.contracts.AppStore.events.OnSell().on("data",(function(e){console.log("sell",e)})).on("error",(function(e){console.log(e)})),e.next=8,p.contracts.AppStore.methods.sell(t,n,r).send({from:u});case 8:return e.abrupt("return",e.sent);case 11:e.prev=11,e.t0=e.catch(0),console.error(e.t0);case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(t,n,r){return e.apply(this,arguments)}}(),buy:function(){var e=i(a().mark((function e(t,n){var r;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,p.getAccount();case 3:return r=e.sent,console.log("account",r),p.contracts.AppStore.events.OnBuy().on("data",(function(e){console.log("buy",e)})).on("error",(function(e){console.log(e)})),e.next=8,p.contracts.AppStore.methods.buy(t).send({from:r,value:n});case 8:return e.abrupt("return",e.sent);case 11:e.prev=11,e.t0=e.catch(0),console.error(e.t0);case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(t,n){return e.apply(this,arguments)}}(),verify:function(){var e=i(a().mark((function e(t){var n;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,p.getAccount();case 3:return n=e.sent,console.log("account",n),p.contracts.AppStore.events.OnVerify().on("data",(function(e){console.log("verify",e.returnValues.verified)})).on("error",(function(e){console.log(e)})),e.next=8,p.contracts.AppStore.methods.verify(t,n).call();case 8:return e.abrupt("return",e.sent);case 11:e.prev=11,e.t0=e.catch(0),console.error(e.t0);case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(t){return e.apply(this,arguments)}}(),totalCount:i(a().mark((function e(){return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,p.contracts.AppStore.methods.totalCount().call();case 3:return e.abrupt("return",e.sent);case 6:e.prev=6,e.t0=e.catch(0),console.error(e.t0);case 9:case"end":return e.stop()}}),e,null,[[0,6]])}))),tokenURI:function(){var e=i(a().mark((function e(t){return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,p.contracts.AppStore.methods.getTokenURI(t).call();case 3:return e.abrupt("return",e.sent);case 6:e.prev=6,e.t0=e.catch(0),console.error(e.t0);case 9:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(t){return e.apply(this,arguments)}}(),tokenURIs:i(a().mark((function e(){var t,n,r,u;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t=[],e.next=4,p.contracts.AppStore.methods.totalCount().call();case 4:n=e.sent,r=0;case 6:if(!(r<n)){e.next=14;break}return e.next=9,p.contracts.AppStore.methods.getTokenURI(r).call();case 9:u=e.sent,t.push(u);case 11:r++,e.next=6;break;case 14:return e.abrupt("return",t);case 17:e.prev=17,e.t0=e.catch(0),console.error(e.t0);case 20:case"end":return e.stop()}}),e,null,[[0,17]])}))),getAppInfo:function(){var e=i(a().mark((function e(t){var n,r,u,o;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.contracts.AppStore.methods.getAppName(t).call();case 2:return n=e.sent,e.next=5,p.contracts.AppStore.methods.getAppPrice(t).call();case 5:return r=e.sent,e.next=8,p.contracts.AppStore.methods.getAppSeller(t).call();case 8:return u=e.sent,e.next=11,p.contracts.AppStore.methods.getAppBuyers(t).call();case 11:return o=e.sent,e.abrupt("return",{name:n,price:r,seller:u,buyers:o});case 13:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},l=p},62859:function(){},75304:function(){},88677:function(){},62808:function(){},46601:function(){},89214:function(){},71922:function(){},2363:function(){},52361:function(){},94616:function(){},6567:function(){},56773:function(){},33557:function(){}}]);