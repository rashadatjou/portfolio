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
    name: "Zush-ups",
    href: "https://apps.apple.com/us/app/zushups-pushups-program/id1246695736",
    tags: ["iOS", "App", "Fitness"],
  },
  {
    name: "4Lonix Workout Trainer",
    href: "https://www.producthunt.com/products/4lonix-workout-trainer",
    tags: ["iOS", "App", "Fitness"],
  },
  {
    name: "Flowplayer SDK",
    href: "https://docs.flowplayer.com/sdks/ios/getting-started",
    tags: ["iOS", "tvOS", "SDK", "AVPlayer"],
  },
  {
    name: "Kloeckner Metals Calculator",
    href: "https://apkcombo.com/kloeckner-metals/com.kloeckner.metals.application",
    tags: ["Android", "App"],
  },
  {
    name: "Bluemoon Client",
    href: "https://bluemoon.ad-pro.info/login",
    tags: ["Web", "React"],
  },
  {
    name: "Flowplayer OVP",
    href: "https://app.flowplayer.com",
    tags: ["Web", "React"],
  },
];

export default projectList;
