import React, { Component } from "react";
import { useState, useEffect } from "react";

import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";

const cboxes = ["check1", "check2"];

let checked = false;

const complete = `
    background: "red",
    textDecorationLine: "line-through",`;

const incomplete = `
    background: "",
    textDecorationLine: "none",
`;


