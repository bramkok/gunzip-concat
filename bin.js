#!/usr/bin/env node

var fs = require('fs')
var filename = process.argv[2]
var gunzip = require('./')

if (filename === '--help') {
  console.log('Usage: gunzip-concat filename?')
  console.log('')
  console.log('  cat somefile | gunzip-concat')
  console.log('  gunzip-concat somefile')
  console.log('')
  process.exit(0)
}

var input = (!filename || filename === '-') ? process.stdin : fs.createReadStream(filename)

input.pipe(gunzip()).pipe(process.stdout)
