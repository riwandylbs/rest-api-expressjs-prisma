## Case migration without losing data
Jika ingin menggunakan expressJS + Prisma ORM untuk project existing, atau dengan database existing, dan mengharuskan tanpa kehilangan data, maka dapat menggunakan Reference berikut :

```
url: https://www.prisma.io/docs/orm/more/migrating-to-prisma/migrate-from-typeorm
```
Baca part: 2.3. Introspect your database using Prisma

## Tips untuk db pull berkali - kali tanpa kehilangan data pada table
Jika ingin pull table dari database existing yang belum terdefenisi pada model prisma,
maka langkah yang harus dilakukan adalah :
1. npx prisma db pull
2. mkdir -p prisma/migrations/0_init #angka 0 dapat diganti sesuai berapa kali kamu sudah melakukan db pull
3. hapus semua folder yang berada didalam folder `migrations`
4. npx prisma migrate diff --from-empty --to-schema-datamodel prisma/schema.prisma --script > prisma/migrations/0_init/migration.sql
5. truncate data yang berada pada table `_prisma_migrations`
6. npx prisma migrate resolve --applied 0_init
7. npx prisma migrate dev
8. npx prisma generate