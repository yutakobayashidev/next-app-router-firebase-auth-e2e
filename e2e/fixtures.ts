import { test as base } from "@playwright/test";

export type TestFixtures = object;

export type WorkerFixtures = object;

export const test = base.extend<TestFixtures, WorkerFixtures>({});