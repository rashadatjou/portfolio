/*
 * File: /app/constants/closed-source.ts
 * Project: portfolio
 * Created: Saturday, 10th December 2022
 * Author: Denpex
 * -----
 * Copyright 2022, ©Mehdi Rashadatjou
 * -----
 */

import { Project } from "~/typings/projects";

const projectList: Project[] = [
  {
    name: "Rep Rise",
    href: "https://apps.apple.com/ba/app/rep-rise-100-push-ups-counter/id1246695736",
    tags: ["iOS", "App", "ARKit", "Fitness"],
  },
  {
    name: "Bodyweight Workout Trainer",
    href: "https://apps.apple.com/us/app/bodyweight-workout-trainer/id1296603779",
    tags: ["iOS", "App", "Fitness", "Nutrition"],
  },
  {
    name: "Flowplayer iOS Framework",
    href: "https://github.com/flowplayer/flowplayer-ios",
    tags: ["iOS", "Livestream", "AVPlayer", "VOD"],
  },
  {
    name: "Flowplayer tvOS Framework",
    href: "https://github.com/flowplayer/flowplayer-tvos",
    tags: ["tvOS", "Livestream", "AVPlayer", "VOD"],
  },
  {
    name: "Kloeckner Metals Calculator",
    href: "https://apkcombo.com/kloeckner-metals/com.kloeckner.metals.application",
    tags: ["Android", "App", "Calculator", "Construction"],
  },
  {
    name: "Bluemoon Client",
    href: "https://bluemoon.ad-pro.info/login",
    tags: ["Web", "React", "E-Commerce"],
  },
  {
    name: "Flowplayer OVP",
    href: "https://app.flowplayer.com",
    tags: ["Web", "React", "VOD", "Livestream"],
  },
];

export default projectList;
