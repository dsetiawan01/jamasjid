import Vue from "vue";
import { moment } from "./moment";

const LAPORAN = {
  diterima: 1,
  ditinjau: 2,
  ditindak: 3,
  dibatalkan: 4
};

const PEKERJAAN = [
  "Wiraswasta",
  "Petani",
  "Pedagang",
  "Guru",
  "Karyawan Swasta",
  "Karyawan PNS",
  "Nelayan",
  "Pelajar"
];

const PENDIDIKAN = [
  "Belum Sekolah",
  "SD/MI/Sederajat",
  "SMP/MTS/Sederajat",
  "SMA/SMK/Sederajat",
  "S1",
  "S2",
  "S3"
];

//substr
const cutText = (value, textLength) => {
  return value
    ? value.length > textLength
      ? `${value.substr(0, textLength)}...`
      : value
    : "";
};

//convert blob file to base64
const getBase64 = (file, onLoadCallback) => {
  return new Promise(function(resolve, reject) {
    var reader = new FileReader();
    reader.onload = function() {
      resolve(reader.result);
    };
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
};

//===Date utility
const date = date => {
  return moment(date, "YYYY-MM-DD").format("dddd, LL");
};

const time = time => {
  return moment(time, "H:m:s").format("HH:mm") + " WIB";
};

// duration time

const timeDuration = (start, end) => {
  let startTime = moment(start, "YYYY-MM-DD hh:mm:ss");
  let endTime = moment(end, "YYYY-MM-DD hh:mm:ss");
  let hoursDiff = endTime.diff(startTime, "hours");
  return hoursDiff + " Jam";
};

//get Initial name
const initialName = nameString => {
  return nameString
    .match(/(\b\S)?/g)
    .join("")
    .match(/(^\S|\S$)?/g)
    .join("")
    .toUpperCase();
};

Vue.prototype.$LAPORAN = LAPORAN;
Vue.prototype.$cutText = cutText;
Vue.prototype.$getBase64 = getBase64;
Vue.prototype.$date = date;
Vue.prototype.$time = time;
Vue.prototype.$timeDuration = timeDuration;
Vue.prototype.$initialName = initialName;

export { LAPORAN, PEKERJAAN, PENDIDIKAN };
