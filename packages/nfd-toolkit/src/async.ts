import { Mutex } from "async-mutex";
export const mutex = new Mutex();

export async function sleep(ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

