'use strict';

const mongoose_connection = require('@springworks/mongoose-connection');
const checkdigit = require('checkdigit');

const ObjectId = mongoose_connection.mongoose.Types.ObjectId;
const mod10 = checkdigit.mod10;

const lower_case_chars = 'abcdefghijklmnopqrstuvwxyz';
const digits_alphabet = '0123456789';
const short_id_alphabet = digits_alphabet + lower_case_chars + lower_case_chars.toUpperCase();



function randomStringFromAlphabet(length, alphabet) {
  let str = '';
  for (let i = 0; i < length; i++) {
    str += alphabet.charAt(Math.floor(Math.random() * alphabet.length));
  }
  return str;
}

function uniqueObjectId() {
  return new ObjectId();
}

function toObjectId(object_id_string) {
  return new ObjectId(object_id_string);
}

function uniqueObjectIdString() {
  return uniqueObjectId().toString();
}

function uniquePrefixedString(prefix) {
  return prefix + uniqueObjectIdString();
}

function uniqueEmail() {
  const id = new ObjectId();
  const s = id.toString();
  return `test.user+${s}@machinetohuman.com`;
}

function randomIMEI() {
  const str = randomStringFromAlphabet(14, digits_alphabet);
  return str + mod10.create(str);
}

function randomIMSI() {
  return randomStringFromAlphabet(15, digits_alphabet);
}

function randomShortId() {
  return randomStringFromAlphabet(6, short_id_alphabet);
}

function uniqueFleetId() {
  return uniqueObjectIdString();
}

function uniqueUserId() {
  return uniqueObjectIdString();
}

function uniqueDeviceId() {
  return randomIMEI();
}

function randomVin() {
  return uniquePrefixedString('vin-');
}

function randomRegNumber() {
  const letters = randomStringFromAlphabet(3, lower_case_chars);
  const digits = randomStringFromAlphabet(3, digits_alphabet);
  return `${letters}${digits}`;
}

function randomNumbers(length) {
  return randomStringFromAlphabet(length, digits_alphabet);
}

function randomLetters(length) {
  return randomStringFromAlphabet(length, lower_case_chars);
}

module.exports = {
  ObjectId: ObjectId,
  toObjectId: toObjectId,
  uniqueObjectId: uniqueObjectId,
  uniqueObjectIdString: uniqueObjectIdString,
  uniquePrefixedString: uniquePrefixedString,
  uniqueEmail: uniqueEmail,
  randomIMEI: randomIMEI,
  randomIMSI: randomIMSI,
  randomShortId: randomShortId,
  uniqueFleetId: uniqueFleetId,
  uniqueUserId: uniqueUserId,
  uniqueDeviceId: uniqueDeviceId,
  randomVin: randomVin,
  randomRegNumber: randomRegNumber,
  randomNumbers: randomNumbers,
  randomLetters: randomLetters,
};
