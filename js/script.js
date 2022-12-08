// Copyright (c) 202X Claire Bedrossian All rights reserved
//
// Created by: Claire Bedrossian
// Created on: XXX 202X
// This file contains the JS functions for index.html

"use strict"

/**
 * Check service worker.
 */
if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/ICS2O-PWA-Test/sw.js", {
    scope: "/ICS2O-PWA-Test/",
  })
}

/**
 * This function does division using a loop.
 */
numA = document.getElementById("number-a").value
numB = document.getElementById("number-b").value
counter = 0

while (remainder > numB){
  remainder = remainder - numB
  counter++
  document.getElementById("quotient").innerHTML = "The quotient" + counter + "R" + remainder + "."
}

