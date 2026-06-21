function splitTopLevel(input) {
  const parts = [];
  let start = 0;
  let depth = 0;
  let quote = "";

  for (let i = 0; i < input.length; i++) {
    const char = input[i];
    const prev = input[i - 1];
    if (quote) {
      if (char === quote && prev !== "\\") quote = "";
      continue;
    }
    if (char === "\"" || char === "'") quote = char;
    else if (char === "[" || char === "(" || char === "{") depth++;
    else if (char === "]" || char === ")" || char === "}") depth--;
    else if (char === "," && depth === 0) {
      parts.push(input.slice(start, i).trim());
      start = i + 1;
    }
  }
  parts.push(input.slice(start).trim());
  return parts.filter(Boolean);
}

function parseValue(source) {
  const value = source.trim();
  if (value === "true") return true;
  if (value === "false") return false;
  if (value === "null") return null;
  return Function(`"use strict"; return (${value});`)();
}

export function parseAssignments(input) {
  const vars = {};
  for (const part of splitTopLevel(input)) {
    const eq = part.indexOf("=");
    if (eq === -1) continue;
    const key = part.slice(0, eq).trim();
    const value = part.slice(eq + 1).trim();
    vars[key] = parseValue(value);
  }
  return vars;
}

function normalizeOutput(value) {
  if (typeof value === "number" && Number.isFinite(value)) {
    return Number.isInteger(value) ? String(value) : String(value);
  }
  return JSON.stringify(value);
}

export function outputsMatch(expected, actual) {
  if (typeof actual === "string" && expected === actual) return true;
  const actualText = normalizeOutput(actual);
  if (expected === actualText) return true;
  if (expected.replace(/\s/g, "").includes(actualText.replace(/\s/g, ""))) return true;
  const expectedNumber = Number(expected);
  if (!Number.isNaN(expectedNumber) && typeof actual === "number") {
    return Math.abs(expectedNumber - actual) <= 0.00001;
  }
  return false;
}
