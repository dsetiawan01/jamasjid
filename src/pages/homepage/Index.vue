<template>
  <!-- <div
    :style="
      `background: url(${bg});
    height: 100vh;
    width: 100%;
    background-size: cover;
    background-repeat: no-repeat;`
    "
    class="column justify-between"
  > -->

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
      :style="`height: 100vh; background: ${!isAdzan ? 'transparent' : '#333'}`"
    >
      <div class="header-bar" style="height: 150px; background: #333">
        <div class="row full-height justify-center content-center q-pa-md">
          <div class="col-2 flex items-center">
            <q-img
              style="max-width: 120px"
              class=""
              src="~assets/images/logo.png"
            ></q-img>

            <!-- <q-btn
              class="q-ml-sm"
              dense
              icon="volume_up"
              color="white"
              @click="activeSound"
              flat
              v-if="!isMuted"
            ></q-btn>
            <q-btn
              class="q-ml-sm"
              dense
              icon="volume_off"
              color="white"
              @click="activeSound"
              flat
              v-if="isMuted"
            ></q-btn> -->
          </div>
          <div class="col-8" style="height: 150px">
            <div
              class="column justify-center items-center q-pb-md"
              style="margin-top: -15px"
            >
              <div
                class="text-weight-bold"
                style="color: white; font-size: 40px"
              >
                Masjid Jami
                <span class="text-yellow" style="font-size: 52px"
                  >Al-Fatah</span
                >
              </div>
              <div class="text-white font-18">
                Kp. Sukawening, RT.02/03, Desa Warjabakti, Kecamatan Cimaung
              </div>
              <div class="text-white font-18">Kabupaten Bandung</div>
            </div>
          </div>
          <div class="col-2 text-left">
            <!-- <q-btn flat dense color="white" size="lg" icon="settings"></q-btn> -->
            <div>
              <div class="text-white font-20 text-weight-bold q-mt-sm">
                {{ $moment().format("dddd, LL") }}
              </div>
              <div class="text-yellow text-weight-bold" style="font-size: 47px">
                {{ realtimeDate }}
              </div>
              <span class="text-white" style="margin-top: -10px"
                >Adzan Berikutnya
                <span class="text-yellow"
                  >{{ checkAdzanName(adzanNext) }}
                  {{ adzanTimeDateNow[adzanNext] }}</span
                >
              </span>
            </div>
          </div>
        </div>
      </div>
      <div class="flex justify-center q-mb-xl" v-if="isAdzan">
        <div class="text-white text-center font-48">
          Saatnya {{ adzanNext == 0 ? "Imsyak" : "Adzan" }}
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
            >Dzuhur</span
          >
          <span
            class="text-yellow text-weight-bold"
            style="font-size: 70px"
            v-if="adzanNext == 3"
            >Ashar</span
          >
          <span
            class="text-yellow text-weight-bold"
            style="font-size: 70px"
            v-if="adzanNext == 4"
            >Maghrib</span
          >
          <span
            class="text-yellow text-weight-bold"
            style="font-size: 70px"
            v-if="adzanNext == 5"
            >Isya</span
          >
          <br />
          <span style="font-size: 35px !important"
            >Untuk Wilayah <span class="text-yellow">Bandung</span> dan
            Sekitarnya</span
          >
        </div>
      </div>
      <div v-if="!isAdzan" class="">
        <div
          class="row justify-center items-center content-center"
          style="height: 200px"
        >
          <div
            style="width: 85%;
    background: rgba(255, 255, 255, 0.7);
    padding: 28px;
    border-radius: 20px;
    font-size: 23px;
    font-style: italic;"
          >
            "Ingatlah, kamu adalah orang-orang yang diajak untuk menginfakkan
            (hartamu) di jalan Allah. Lalu di antara kamu ada orang yang kikir,
            dan barangsiapa kikir maka sesungguhnya dia kikir terhadap dirinya
            sendiri. Dan Allah-lah Yang
            <span class="text-weight-bold">Mahakaya</span> dan kamulah yang
            membutuhkan (karunia-Nya). Dan jika kamu berpaling (dari jalan yang
            benar) Dia akan menggantikan (kamu) dengan kaum yang lain, dan
            mereka tidak akan (durhaka) seperti kamu (ini)". <br />
            (Qs. Muhammad: 38)
          </div>
        </div>
      </div>
      <div
        class="footer-bar column justify-between"
        style="height: 250px; background: rgb(0 0 0 / 24%)"
      >
        <div class="row q-col-gutter-x-lg" style="height: 200px">
          <!-- <div class="col bg-purple" style="background: #9c27b0ad">
            <div class="full-height column justify-center items-center">
              <div class="font-32 text-yellow text-weight-medium">Imsyak</div>
              <div class="text-white font-70 text-weight-bold">
                {{ prayTimeNow ? prayTimeNow.Imsak : "00:00" }}
              </div>
            </div>
          </div> -->
          <div class="col bg-teal" style="background: #00bcd4a6">
            <div class="full-height column justify-center items-center">
              <div class="font-32 text-yellow text-weight-medium">Shubuh</div>
              <div class="text-white font-70 text-weight-bold">
                {{ prayTimeNow ? prayTimeNow.Imsak : "00:00" }}
              </div>
            </div>
          </div>
          <div class="col bg-red" style="background: #ff9800ad">
            <div class="full-height column justify-center items-center">
              <div class="font-32 text-yellow text-weight-medium">Dzuhur</div>
              <div class="text-white font-70 text-weight-bold">
                {{ prayTimeNow ? prayTimeNow.Dhuhr : "00:00" }}
              </div>
            </div>
          </div>
          <div class="col bg-indigo" style="background: #4caf50d6">
            <div class="full-height column justify-center items-center">
              <div class="font-32 text-yellow text-weight-medium">Ashar</div>
              <div class="text-white font-70 text-weight-bold">
                {{ prayTimeNow ? prayTimeNow.Asr : "00:00" }}
              </div>
            </div>
          </div>
          <div class="col bg-green">
            <div class="full-height column justify-center items-center">
              <div class="font-32 text-yellow text-weight-medium">Maghrib</div>
              <div class="text-white font-70 text-weight-bold">
                {{ prayTimeNow ? prayTimeNow.Maghrib : "00:00" }}
              </div>
            </div>
          </div>
          <div class="col bg-blue" style="background: #2196f3cc">
            <div class="full-height column justify-center items-center">
              <div class="font-32 text-yellow text-weight-medium">Isya</div>
              <div class="text-white font-70 text-weight-bold">
                {{ prayTimeNow ? prayTimeNow.Isha : "00:00" }}
              </div>
            </div>
          </div>
        </div>

        <div
          style="height: 50px; width: 100%; background: black"
          class="flex justify-center items-center"
        >
          <!-- <marquee-text :duration="15">
          <a
            target="_blank"
            style="font-size: 12px; color: #444444"
            >asdsadsa</a
          >
        </marquee-text> -->
          <marquee behavior="" direction="">
            <div class="text-white font-32">
              <div>
                <span>
                  Jadwal Pengajian Rutin Setiap Malam Jum'at Bada Maghrib
                  Mubaligh Bapak Oman
                </span>
                <span class="q-ml-xl">
                  Jadwal Pengajian Rutin Setiap Malam Sabtu Bada Isya Mubaligh
                  Bapak Ustadz Anang
                </span>
                <span class="q-ml-xl">
                  Jadwal Pengajian Rutin Setiap Malam Minggu Bada Ashar Mubaligh
                  Bapak Ustadz Tatang/Bapak Ustadz Udin
                </span>
              </div>
            </div>
          </marquee>
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
const sound = require("../../data/beep.mp3"); // require the sound
const alarm = require("../../data/alarm.mp3"); // require the alarm
export default {
  data() {
    return {
      bg: `url(${require("assets/images/bg2.jpg")})`,
      realtimeDate: null,
      prayTimes: null,
      prayTimeNow: null,
      sound,
      alarm,
      isAdzan: false,

      currentDate: null,
      adzanArray: [],
      adzanTimeDateNow: [],

      adzanCurrent: 1,
      adzanNext: 2,
      nextShow: false,
      isMuted: true
    };
  },
  methods: {
    activeSound(){
      this.isMuted = false;

      var video = document.querySelector(".audio1");
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
      let nextAdzan = this.adzanTimeDateNow[this.adzanNext];

      if (nowTime === nextAdzan) {
        let detik = this.$moment(time, "H:m:s").format("s");




        if (parseInt(detik) == 0) {
          this.isAdzan = true;
          this.playSound();
        }

        if (parseInt(detik) == 50) {
          this.adzanCurrent = this.adzanNext;
          this.adzanNext = this.adzanNext == 5 ? 1 : this.adzanCurrent + 1;
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

      let jsonDataTime = require(`../../data/2021-${monthNow}.json`);
      this.prayTimes = jsonDataTime;
      console.log("init data");

      this.currentDate = dateNow;
      this.changeAdzanCurrentTime(dateNow);
      this.checkForInitTime();
    },

    changeAdzanCurrentTime(dateNow) {
      this.prayTimes.datetime.find(date => {
        if (date.date.gregorian == dateNow) {
          this.prayTimeNow = date.times;
        }
      });

      let time = this.prayTimeNow;
      const payloadData = [
        time.Imsak,
        time.Imsak,
        time.Dhuhr,
        time.Asr,
        time.Maghrib,
        time.Isha
      ];

      this.adzanTimeDateNow = payloadData;
    },

    reloadData() {
      this.initAdzan();
      console.log("data reloaded");
    },

    checkAdzanName(val) {
      let name = "";
      if (val == 0) {
        name = "Imsyak";
      } else if (val == 1) {
        name = "Shubuh";
      } else if (val == 2) {
        name = "Dzuhur";
      } else if (val == 3) {
        name = "Ashar";
      } else if (val == 4) {
        name = "Maghrib";
      } else {
        name = "Isya";
      }
      return name;
    },

    checkForInitTime() {
      let nowTime = this.$moment().format("HH:mm");
      console.log(nowTime);
      let initAdzanTime = {
        adzanCurrent: 0,
        adzanNext: 1
      };

      //jika jam sekrnmg lebih besar dari jam 12 dan lebih kecil dari jam 5
      if (
        nowTime > this.adzanTimeDateNow[1] &&
        nowTime < this.adzanTimeDateNow[2]
      ) {
        initAdzanTime.adzanCurrent = 1;
        initAdzanTime.adzanNext = 2;
      }

      if (
        nowTime > this.adzanTimeDateNow[2] &&
        nowTime < this.adzanTimeDateNow[3]
      ) {
        initAdzanTime.adzanCurrent = 2;
        initAdzanTime.adzanNext = 3;
      }

      if (
        nowTime > this.adzanTimeDateNow[3] &&
        nowTime < this.adzanTimeDateNow[4]
      ) {
        initAdzanTime.adzanCurrent = 3;
        initAdzanTime.adzanNext = 4;
      }

      if (
        nowTime > this.adzanTimeDateNow[4] &&
        nowTime < this.adzanTimeDateNow[5]
      ) {
        initAdzanTime.adzanCurrent = 4;
        initAdzanTime.adzanNext = 5;
      }

      if (
        nowTime > this.adzanTimeDateNow[5] &&
        nowTime < this.adzanTimeDateNow[1]
      ) {
        initAdzanTime.adzanCurrent = 5;
        initAdzanTime.adzanNext = 1;
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
    }, 15 * 60 * 1000); //run this every 15 minute

    // that.playSound();
  }
};
</script>
