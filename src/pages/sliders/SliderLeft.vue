<template>
  <div>
    <q-carousel
      animated
      v-model="slide"
      infinite
      :autoplay="7000"
      transition-prev="slide-right"
      transition-next="slide-left"
      class=""
      style="height: 300px; width: 700px; background-color: transparent"
    >
      <q-carousel-slide
        style="height: 135px"
        class="q-pa-none flex justify-center items-center align-center"
        v-for="(surah, index) in listSurah"
        :key="index + 1"
        :name="index + 1"
      >
        <div
          class="text-yellow"
          style="
              font-size: 30px;
              font-style: italic;"
          v-html="surah"
        ></div
      ></q-carousel-slide>
    </q-carousel>
  </div>
</template>
<script>
export default {
  data() {
    return {
      slide: 1,
      listSurah: [
        '"Wahai manusia! Kamulah yang memerlukan Allah; dan Allah Dialah yang Maha kaya (tidak memerlukan sesuatu), Maha terpuji". <br /> (Qs.Fâthir/35:15)',
        '"Tidaklah ada salat yang lebih berat bagi orang-orang munafik melebihi salat Shubuh dan Isya. Dan seandainya mereka mengetahui pahala pada keduanya, niscaya mereka akan datang (berjamaah) meskipun dengan merangkak." <br /> (Muttafaqun Alaih)',
        '“Hanya yang memakmurkan masjid-masjid Allah ialah orang-orang yang beriman kepada Allah dan Hari kemudian, serta tetap mendirikan shalat” <br /> (QS. At Taubah: 18).',
        '"Ada tujuh golongan manusia yang akan mendapat naungan Allah SWT pada hari yang tidak ada naungan  kecuali naungan Nya, (salah satunya adalah)  “ Seorang laki-laki yang hatinya terpaut di masjid". <br /> (HR. Bukhari)',
        '“Sesungguhnya orang-orang yang mengatakan: “Tuhan kami ialah Allah”, kemudian mereka tetap istiqamah maka tidak ada kekhawatiran terhadap mereka dan mereka tiada (pula) berduka cita.”<br /> (QS. Al-Ahqaf: 13)'
      ]
    };
  }
};
</script>
