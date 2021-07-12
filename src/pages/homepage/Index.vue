<template>
  <div
    :style="
      `background: ${bg};
    height: 100vh;
    width: 100%;
    background-size: cover;
    background-repeat: no-repeat;`
    "
  >
    <div
      class="column justify-between"
      :style="`height: 100vh; background: ${!isAdzan ? '#333' : '#333'}`"
    >
      <div class="header-bar" style="height: 150px; background: #333">
        <div class="row full-height justify-center content-center q-pa-md">
          <div class="col-2 flex items-center">
            <q-img
              style="max-width: 120px"
              class=""
              src="~assets/images/logo.png"
            ></q-img>
          </div>
          <div class="col-7" style="height: 150px">
            <div
              class="column justify-center items-center content-center q-pb-md"
            >
              <div
                class="text-weight-bold"
                style="color: white; font-size: 40px"
              >
                Masjid Jami
                <span class="text-yellow" style="font-size: 70px"
                  >Al-Fatah</span
                >
              </div>
              <div class="text-white font-18">
                Kp. Sukawening, RT.02/03, Desa Warjabakti, Kecamatan Cimaung
              </div>
              <div class="text-white font-18">Kabupaten Bandung</div>
            </div>
          </div>
          <div class="col-3 text-left">
            <!-- <q-btn flat dense color="white" size="lg" icon="settings"></q-btn> -->
            <div class="q-mt-md">
              <div class="text-white font-20 text-weight-bold">
                {{ $moment().format("dddd, LL") }}
              </div>
              <div
                class="text-yellow text-weight-bold font-70"
                style="font-size: 50px"
              >
                {{ realtimeDate }}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="flex justify-center q-mb-xl" v-show="isAdzan">
        <div class="text-white text-center font-48">
          <span
            v-if="adzanNext == 0 || adzanNext == 2 || adzanNext == 3"
            style="font-size: 30px !important"
            >Sekarang menunjukan telah memasuki waktu
          </span>
          <span v-else>Saatnya Adzan </span>

          <span
            class="text-yellow text-weight-bold"
            style="font-size: 70px"
            v-if="adzanNext == 0"
            >Imsak</span
          >
          <span
            class="text-yellow text-weight-bold"
            style="font-size: 70px"
            v-if="adzanNext == 1"
            >Shubuh</span
          >
          <span
            class="text-yellow text-weight-bold"
            style="font-size: 70px"
            v-if="adzanNext == 2"
            >Terbit</span
          >
          <span
            class="text-yellow text-weight-bold"
            style="font-size: 70px"
            v-if="adzanNext == 3"
            >Dhuha</span
          >
          <span
            class="text-yellow text-weight-bold"
            style="font-size: 70px"
            v-if="adzanNext == 4"
            >Dzuhur</span
          >
          <span
            class="text-yellow text-weight-bold"
            style="font-size: 70px"
            v-if="adzanNext == 5"
            >Ashar</span
          >
          <span
            class="text-yellow text-weight-bold"
            style="font-size: 70px"
            v-if="adzanNext == 6"
            >Maghrib</span
          >
          <span
            class="text-yellow text-weight-bold"
            style="font-size: 70px"
            v-if="adzanNext == 7"
            >Isya</span
          >
          <br />
          <span style="font-size: 35px !important"
            >Untuk Wilayah <span class="text-yellow">Kab Bandung</span> dan
            Sekitarnya</span
          >
        </div>
      </div>
      <div v-show="!isAdzan" class="">
        <div
          class="row justify-center items-center content-center"
          style="height: 300px"
        >
          <div class="col-6">
            <left-slider />
          </div>
          <div class="col-1"></div>
          <div class="col-3">
            <right-slider />
          </div>
        </div>
      </div>
      <div
        class="footer-bar column justify-between"
        style="height: 215px; background: rgb(0 0 0 / 24%)"
      >
        <div class="">
          <div class="row q-col-gutter-md q-pa-md " style="height: 200px">
            <div class="col-6">
              <div class="row full-height q-col-gutter-md">
                <div
                  class="col-3 "
                  v-for="(adzan, index) in adzanTimeDateNow.slice(0, 4)"
                  :key="`none-${index}`"
                >
                  <div class="my-content full-height">
                    <q-card
                      :style="
                        `
                        ${
                          index == adzanNext
                            ? 'background: linear-gradient(180deg,#f44881,#ec454f)'
                            : ''
                        }${
                          index == adzanCurrent
                            ? 'background: linear-gradient(180deg,#21c8f6,#637bff)'
                            : ''
                        }; height: 150px`
                      "
                      class="my-card flex justify-center items-center text-center"
                    >
                      <q-card-section>
                        <div
                          :class="
                            `text-capitalize ${
                              index == adzanNext || index == adzanCurrent
                                ? 'text-white'
                                : 'text-dark-primary'
                            } font-27`
                          "
                        >
                          {{ adzan.name }}
                        </div>
                        <div
                          :class="
                            `${
                              index == adzanNext || index == adzanCurrent
                                ? 'text-white'
                                : 'text-dark-primary'
                            } text-weight-bold`
                          "
                          style="font-size: 50px"
                        >
                          {{ adzan.time !== undefined ? adzan.time : "00:00" }}
                        </div>
                      </q-card-section>
                    </q-card>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-6">
              <div class="row full-height q-col-gutter-md">
                <div
                  class="col-3 "
                  v-for="(adzan, index) in adzanTimeDateNow.slice(4, 8)"
                  :key="`none-${index}`"
                >
                  <div class="my-content full-height">
                    <q-card
                      :style="
                        `
                        ${
                          index + 4 == adzanNext
                            ? 'background: linear-gradient(180deg,#f44881,#ec454f)'
                            : ''
                        }${
                          index + 4 == adzanCurrent
                            ? 'background: linear-gradient(180deg,#21c8f6,#637bff)'
                            : ''
                        }; height: 150px`
                      "
                      class="my-card flex justify-center items-center text-center"
                    >
                      <q-card-section>
                        <div
                          :class="
                            `text-capitalize ${
                              index + 4 == adzanNext ||
                              index + 4 == adzanCurrent
                                ? 'text-white'
                                : 'text-dark-primary'
                            } font-27`
                          "
                        >
                          {{ adzan.name }}
                        </div>
                        <div
                          :class="
                            `${
                              index + 4 == adzanNext ||
                              index + 4 == adzanCurrent
                                ? 'text-white'
                                : 'text-dark-primary'
                            } text-weight-bold`
                          "
                          style="font-size: 50px"
                        >
                          {{ adzan.time !== undefined ? adzan.time : "00:00" }}
                        </div>
                      </q-card-section>
                    </q-card>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          style="height: 30px; width: 100%;"
          class="q-px-md flex justify-between items-center"
          v-if="prayTimes !== null"
        >
          <div class="text-grey-4 font-12">
            Lat/Long : {{ prayTimes.koordinat.lat }} /
            {{ prayTimes.koordinat.lon }}
          </div>
          <div class="text-white">
            &copy;Copyright Pemuda Kp. Sukawening 2021
          </div>
          <div class="text-grey-4 font-12">
            Lintang/Bujur : {{ prayTimes.koordinat.bujur }} /
            {{ prayTimes.koordinat.lintang }}
          </div>
        </div>
      </div>
    </div>

    <div style="display: none" :class="changeData(realtimeDate)"></div>
    <button ref="reloadData" style="display: none" @click="reloadData"></button>

    <audio class="audio1" :src="sound" controls style="display:none"></audio>
    <audio class="audio2" :src="alarm" controls style="display:none"></audio>
  </div>
</template>
<script>
import { now } from "vue-moment";
import LeftSlider from "../sliders/SliderLeft";
import RightSlider from "../sliders/SliderRight";

const sound = require("../../data/beep.mp3"); // require the sound
const alarm = require("../../data/alarm.mp3"); // require the alarm
export default {
  components: {
    LeftSlider,
    RightSlider
  },
  data() {
    return {
      autoplay: 2500,
      bg: `url(${require("assets/images/bg2.jpg")})`,
      realtimeDate: null,
      prayTimes: null,
      prayTimeNow: null,
      sound,
      alarm,
      isAdzan: false,

      currentDate: null,
      adzanArray: [],
      adzanTimeDateNow: [
        { name: "imsak", time: "04:33" },
        { name: "subuh", time: "04:43" },
        { name: "terbit", time: "05:56" },
        { name: "dhuha", time: "06:29" },
        { name: "dzuhur", time: "11:59" },
        { name: "ashar", time: "15:20" },
        { name: "maghrib", time: "17:55" },
        { name: "isya", time: "19:04" }
      ],
      adzanCurrent: 0,
      adzanNext: 1
    };
  },
  methods: {
    activeSound() {
      var video = document.querySelector(".audio1");
      var promise = video.play();

      if (promise !== undefined) {
        promise
          .then(_ => {})
          .catch(error => {
            video.muted = true;
            video.play();
          });
      }
    },
    playSound() {
      var video = document.querySelector(".audio2");
      var promise = video.play();
      if (promise !== undefined) {
        promise
          .then(_ => {
            // Autoplay started!
          })
          .catch(error => {
            // Autoplay not allowed!
            // Mute video and try to play again
            video.muted = true;
            video.play();

            // Show something in the UI that the video is muted
          });
      }
      // }
    },
    time() {
      var self = this;
      this.realtimeDate = this.$moment().format("H:mm:ss");

      setInterval(self.time, 1000);
    },
    changeData(time) {
      let nowTime = this.$moment().format("HH:mm");
      let nextAdzan =
        this.adzanTimeDateNow.length > 0
          ? this.adzanTimeDateNow[this.adzanNext].time
          : nowTime;

      if (nowTime === nextAdzan) {
        let detik = this.$moment(time, "H:m:s").format("s");

        if (parseInt(detik) == 0) {
          this.isAdzan = true;
          if (
            this.adzanNext != 0 &&
            this.adzanNext != 2 &&
            this.adzanNext != 3
          ) {
            this.playSound();
          } else {
            this.activeSound();
          }
        }

        if (parseInt(detik) == 50) {
          this.adzanCurrent = this.adzanNext;
          this.adzanNext = this.adzanNext == 7 ? 0 : this.adzanCurrent + 1;
        }

        if (parseInt(detik) == 30) {
          console.log("ini sama detik kurang 15");
          this.isAdzan = false;
        }
      }
      if (nowTime == "00:00") {
        let detik = this.$moment(time, "H:m:s").format("s");
        if (parseInt(detik) == 10) {
          this.initAdzan();
        }
      }
    },

    initAdzan() {
      let dateNow = this.$moment().format("YYYY-MM-DD");
      let monthNow = this.$moment().format("MM");

      let jsonDataTime = require(`../../data/v2/2021-${monthNow}.json`);
      this.prayTimes = jsonDataTime.data;
      console.log(jsonDataTime);

      this.currentDate = dateNow;
      this.changeAdzanCurrentTime(dateNow);
      this.checkForInitTime();
    },

    changeAdzanCurrentTime(dateNow) {
      console.log(dateNow);
      this.prayTimes.jadwal.find(date => {
        if (date.date == dateNow) {
          this.prayTimeNow = date;
        }
      });

      let time = this.prayTimeNow;
      const payloadData = [
        {
          name: "imsak",
          time: time.imsak
        },
        {
          name: "subuh",
          time: time.subuh
        },
        {
          name: "terbit",
          time: time.terbit
        },

        {
          name: "dhuha",
          time: time.dhuha
        },

        {
          name: "dzuhur",
          time: time.dzuhur
        },
        {
          name: "ashar",
          time: time.ashar
        },
        {
          name: "maghrib",
          time: time.maghrib
        },
        {
          name: "isya",
          time: time.isya
        }
      ];

      this.adzanTimeDateNow = payloadData;
    },

    reloadData() {
      this.initAdzan();
      console.log("data reloaded");
    },

    checkForInitTime() {
      let nowTime = this.$moment().format("HH:mm");
      let initAdzanTime = {
        adzanCurrent: 7,
        adzanNext: 0
      };

      if (
        nowTime > this.adzanTimeDateNow[0].time &&
        nowTime < this.adzanTimeDateNow[1].time
      ) {
        initAdzanTime.adzanCurrent = 0;
        initAdzanTime.adzanNext = 1;
      }

      if (
        nowTime > this.adzanTimeDateNow[1].time &&
        nowTime < this.adzanTimeDateNow[2].time
      ) {
        initAdzanTime.adzanCurrent = 1;
        initAdzanTime.adzanNext = 2;
      }

      if (
        nowTime > this.adzanTimeDateNow[2].time &&
        nowTime < this.adzanTimeDateNow[3].time
      ) {
        initAdzanTime.adzanCurrent = 2;
        initAdzanTime.adzanNext = 3;
      }

      if (
        nowTime > this.adzanTimeDateNow[3].time &&
        nowTime < this.adzanTimeDateNow[4].time
      ) {
        initAdzanTime.adzanCurrent = 3;
        initAdzanTime.adzanNext = 4;
      }

      if (
        nowTime > this.adzanTimeDateNow[4].time &&
        nowTime < this.adzanTimeDateNow[5].time
      ) {
        initAdzanTime.adzanCurrent = 4;
        initAdzanTime.adzanNext = 5;
      }

      if (
        nowTime > this.adzanTimeDateNow[5].time &&
        nowTime < this.adzanTimeDateNow[6].time
      ) {
        initAdzanTime.adzanCurrent = 5;
        initAdzanTime.adzanNext = 6;
      }

      if (
        nowTime > this.adzanTimeDateNow[6].time &&
        nowTime < this.adzanTimeDateNow[7].time
      ) {
        initAdzanTime.adzanCurrent = 6;
        initAdzanTime.adzanNext = 7;
      }

      if (
        nowTime > this.adzanTimeDateNow[7].time &&
        nowTime < this.adzanTimeDateNow[0].time
      ) {
        initAdzanTime.adzanCurrent = 7;
        initAdzanTime.adzanNext = 0;
      }

      this.adzanCurrent = initAdzanTime.adzanCurrent;
      this.adzanNext = initAdzanTime.adzanNext;
    }
  },
  mounted: function() {
    this.time();
    this.initAdzan();

    this.checkForInitTime();

    let that = this;
    setInterval(function() {
      that.$refs.reloadData.click();
    }, 15 * 60 * 1000); //run this every 60 minute

    // that.playSound();
  }
};
</script>
