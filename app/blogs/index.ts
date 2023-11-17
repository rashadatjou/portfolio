/*
 * File: /app/blogs/index.ts
 * Project: portfolio
 * Created: Thursday, 16th November 2023
 * Author: rashadatjou
 * -----
 * Copyright 2023, ©Mehdi Rashadatjou
 * -----
 */

import { MDXModule } from "~/typings/blog";
import * as postOne from "./hello-world.mdx";
import * as postTwo from "./react-native-modules.mdx";

export default [postTwo, postOne] as MDXModule[];
