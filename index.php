<?php include "quechao_auth.php" ?> <!doctype html><html lang=""><head><meta charset="utf-8"><meta http-equiv="X-UA-Compatible" content="IE=edge"><meta name="viewport" content="maximum-scale=1,minimum-scale=1,user-scalable=0,width=device-width,initial-scale=1"/><link rel="icon" href="favicon.ico"><title>schoolactivities</title><script src="rem.js"></script><script>window.onload = function () {
      console.log(userInfo);
      let user = userInfo
      sessionStorage.setItem('userInfo', JSON.stringify(user))
      console.log(window.sessionStorage.getItem("userInfo"));
    }</script><script defer="defer" src="js/chunk-vendors.17c8c711.js"></script><script defer="defer" src="js/app.215351d9.js"></script><link href="css/chunk-vendors.c1cc1c89.css" rel="stylesheet"><link href="css/app.0d73a1df.css" rel="stylesheet"></head><body><noscript><strong>We're sorry but schoolactivities doesn't work properly without JavaScript enabled. Please enable it to continue.</strong></noscript><div id="app"></div></body></html>