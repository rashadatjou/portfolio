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
    name: "Flowplayer OVP",
    href: "https://app.flowplayer.com",
    tags: ["Web", "React", "VOD", "Livestream"],
  },
  {
    name: "Wowza Flowplayer Apple SDK",
    href: "https://github.com/flowplayer/apple-sdk-releases",
    tags: ["Swift", "Livestream", "AVPlayer", "VOD"],
  },
];

export default projectList;
