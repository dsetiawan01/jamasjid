<template>
  <div>
    <!-- bisa pake ini kalo slider tidak berfungsi di layar tv nya nanti -->
    <!-- <q-card
      class="my-card shadow__ full-height q-mb-xs"
      style="width: 400px;"
      v-for="(jadwal, index) in jadwalPengajian"
      :key="index"
    >
      <q-card-section class="q-pa-sm">
        <div
          class="text-subtitle2 text-weight-bold text-dark-primary font-20"
          style="line-height: 1.2"
        >
          {{ jadwal.text }}
        </div>
        <div class="text-dark text-caption q-mt-sm font-16">
          Mubaligh: {{ jadwal.ustadz }}
        </div>
      </q-card-section>
    </q-card> -->
    <q-carousel
      animated
      v-model="slide"
      infinite
      :autoplay="2000"
      transition-prev="slide-right"
      transition-next="slide-left"
      style="height: 145px; width: 400px; background-color: transparent"
    >
      <q-carousel-slide
        style="height: 135px"
        class="q-pa-none"
        v-for="(jadwal, index) in jadwalPengajian"
        :key="index + 1"
        :name="index + 1"
      >
        <q-card class="my-card shadow__ full-height">
          <q-card-section class="q-pa-md">
            <div
              class="text-subtitle2 text-weight-bold text-dark-primary font-24"
              style="line-height: 1.2"
            >
              {{ jadwal.text }}
            </div>
            <div class="text-dark text-caption q-mt-sm font-18">
              Mubaligh: {{ jadwal.ustadz }}
            </div>
          </q-card-section>
        </q-card></q-carousel-slide
      >
    </q-carousel>
  </div>
</template>
<script>
export default {
  data() {
    return {
      slide: 1,
      jadwalPengajian: [
        {
          text: "Jadwal Pengajian Rutin Setiap Malam Jum'at Bada Maghrib",
          ustadz: "Bapak Oman",
          bg: ""
        },
        {
          text: "Jadwal Pengajian Rutin Setiap Malam Sabtu Bada Isya",
          ustadz: "Bapak Ustadz Anang",
          bg: ""
        },
        {
          text: "Jadwal Pengajian Rutin Setiap Malam Minggu Bada Ashar",
          ustadz: "Bapak Ustadz Udin / Bapak Ustadz Tatang / Bapak Oman",
          bg: ""
        }
      ]
    };
  }
};
</script>
