// Copyright (c) 202X Claire Bedrossian All rights reserved
//
// Created by: Claire Bedrossian
// Created on: Dec 2022
// This file contains the JS functions for index.html

"use strict"

/**
 * Check service worker.
 */
if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/ICS2O-Unit5-08-JS/sw.js", {
    scope: "/ICS2O-Unit5-08-JS/",
  })
}

/**
 * This function does division using a loop.
 */

function myButtonClicked() {
  var numB = parseFloat(document.getElementById("number-b").value)
  var numA = parseFloat(document.getElementById("number-a").value)
  var counter = 0
  var remainder = numA

  while (remainder >= numB) {
    remainder = remainder - numB
    counter++
  }
  document.getElementById("quotient").innerHTML =
    "The quotient " + counter + " R " + remainder + "."
}
