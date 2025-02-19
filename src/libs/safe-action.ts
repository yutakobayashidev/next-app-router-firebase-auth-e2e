import "server-only";

import { createSafeActionClient } from "next-safe-action";
import { valibotAdapter } from "next-safe-action/adapters/valibot";
import { DEFAULT_SERVER_ERROR_MESSAGE } from "next-safe-action";
import { getCurrentUser } from "./firebase/firebase-admin";

export const actionClient = createSafeActionClient({
    validationAdapter: valibotAdapter(),
    handleServerError() {

        return DEFAULT_SERVER_ERROR_MESSAGE;
    },
});

// 認証制御用のミドルウェア
export const authActionClient = actionClient.use(async ({ next }) => {
    const user = await getCurrentUser();

    if (user === null) {
        throw new Error("User not found");
    }

    return next({ ctx: { user } });
});