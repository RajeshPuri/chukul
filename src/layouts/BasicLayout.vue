<template>
  <q-layout view="hHh Lpr fFf">
    <Particles
      id="tsparticles"
      :options="options"
      :class="$q.dark.isActive ? 'dark-gradient' : 'normal-gradient'"
    />
    <q-btn
      color="white"
      class="absolute-top-right"
      flat
      round
      @click="$q.dark.toggle()"
      :icon="$q.dark.isActive ? 'nights_stay' : 'wb_sunny'"
      :style="{ 'z-index': '1' }"
    />
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  name: "BasicLayout",

  setup() {
    const options = {
      fpsLimit: 30,
      interactivity: {
        events: {
          onClick: {
            enable: true,
            mode: "push",
          },
          onHover: {
            enable: true,
            mode: "repulse",
          },
          resize: true,
        },
        modes: {
          bubble: {
            distance: 400,
            duration: 2,
            opacity: 0.8,
            size: 40,
          },
          push: {
            quantity: 4,
          },
          repulse: {
            distance: 200,
            duration: 0.4,
          },
        },
      },
      particles: {
        color: {
          value: "#ffffff",
        },
        links: {
          color: "#ffffff",
          distance: 150,
          enable: true,
          opacity: 0.5,
          width: 1,
        },
        collisions: {
          enable: true,
        },
        move: {
          direction: "none",
          enable: true,
          outMode: "out",
          random: false,
          speed: 2,
          straight: false,
          bounce: false,
        },
        number: {
          density: {
            enable: true,
            valueArea: 800,
          },
          value: 80,
        },
        opacity: {
          value: 0.5,
        },
        shape: {
          type: "circle",
        },
        size: {
          random: true,
          value: 5,
          anim: {
            enable: false,
            speed: 40,
            sizeMin: 0.1,
            sync: false,
          },
        },
      },
      detectRetina: true,
    };
    return { options };
  },
};
</script>

<style scoped>
#tsparticles {
  position: absolute;
  width: 100%;
  height: 100%;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 50% 50%;
  z-index: -1000;
}
.normal-gradient {
  background: linear-gradient(145deg, #01baef 15%, #20bf55 70%);
}
.dark-gradient {
  background: linear-gradient(145deg, rgb(11, 26, 61) 15%, #00563b 70%);
}
</style>
