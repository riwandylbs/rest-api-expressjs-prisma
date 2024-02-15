-- AlterTable
CREATE SEQUENCE userdevice_id_seq;
ALTER TABLE "userdevice" ALTER COLUMN "id" SET DEFAULT nextval('userdevice_id_seq'),
ADD CONSTRAINT "userdevice_pkey" PRIMARY KEY ("id");
ALTER SEQUENCE userdevice_id_seq OWNED BY "userdevice"."id";
