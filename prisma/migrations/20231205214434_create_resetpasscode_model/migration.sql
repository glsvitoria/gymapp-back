-- CreateTable
CREATE TABLE "ResetPassCode" (
    "code" TEXT NOT NULL DEFAULT '',
    "expires_ind" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "user_id" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "ResetPassCode_user_id_key" ON "ResetPassCode"("user_id");

-- AddForeignKey
ALTER TABLE "ResetPassCode" ADD CONSTRAINT "ResetPassCode_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
